"use client";

import { useEffect } from "react";

export default function GlobalContactDetector() {
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;

      // 1. Safety check: Don't interfere with real links or buttons
      if (target.closest("a") || target.closest("button")) return;

      // ==========================================
      // NEW FIXES: PREVENT WHOLE COMPONENT CLICKS
      // ==========================================
      
      // 2. Structural Check: If the element has more than 3 children, 
      // it's a layout card/section, NOT a specific contact row. Ignore it.
      if (target.children.length > 3) return;

      const text = target.innerText || target.textContent || "";
      const cleanText = text.trim();

      // 3. Strict Length Check: A standard email/phone block is very short.
      // Dropping this to 60 ensures we don't accidentally scan an entire paragraph.
      if (cleanText.length > 60) return;

      // ==========================================

      // CHECK 1: IS IT AN EMAIL?
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
      const emailMatch = cleanText.match(emailRegex);

      if (emailMatch) {
        window.location.href = `mailto:${emailMatch[0]}`;
        return; 
      }

      // CHECK 2: IS IT A PHONE NUMBER?
      const phoneRegex = /(?:\+?\d{1,3}[\s.-]?)?\(?\d{2,4}\)?[\s.-]?\d{3,5}[\s.-]?\d{3,5}/;
      const phoneMatch = cleanText.match(phoneRegex);

      if (phoneMatch) {
        // Strip spaces, dashes, and brackets for the 'tel:' link
        const cleanPhone = phoneMatch[0].replace(/[^\d+]/g, ""); 
        
        // Ensure it's long enough to be a real phone number
        if (cleanPhone.replace("+", "").length >= 7) {
          window.location.href = `tel:${cleanPhone}`;
        }
      }
    };

    // Attach listener for both clicks and mobile taps
    document.addEventListener("click", handleGlobalClick);

    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  return null;
}