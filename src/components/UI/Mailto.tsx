"use client";

import React, { useEffect, useRef, useState } from "react";

type MailtoProps = {
  email?: string;
  subject?: string;
  body?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Mailto({
  email: explicitEmail,
  subject,
  body,
  children,
  className,
}: MailtoProps) {
  const [dynamicEmail, setDynamicEmail] = useState<string | undefined>(explicitEmail);
  const wrapperRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Dynamically find the email inside the rendered children text
    if (!explicitEmail && wrapperRef.current) {
      const textContent = wrapperRef.current.textContent || "";
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
      const match = textContent.match(emailRegex);
      
      if (match) {
        setDynamicEmail(match[0]);
      }
    }
  }, [explicitEmail, children]);

  // Handle URL parameters for subject and body
  const params = new URLSearchParams();
  if (subject) params.append("subject", subject);
  if (body) params.append("body", body);

  const queryString = params.toString().length > 0 ? `?${params.toString()}` : "";
  const href = dynamicEmail ? `mailto:${dynamicEmail}${queryString}` : "#";

  // Fallback click handler in case it's clicked before useEffect runs
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!dynamicEmail) {
      e.preventDefault();
      const textContent = e.currentTarget.textContent || "";
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
      const match = textContent.match(emailRegex);
      
      if (match) {
        window.location.href = `mailto:${match[0]}${queryString}`;
      }
    }
  };

  return (
    <a
      ref={wrapperRef}
      href={href}
      onClick={handleClick}
      className={className}
      style={{ 
        display: "contents", // 👈 This prevents it from breaking parent layouts
        textDecoration: "none", 
        color: "inherit", 
        cursor: "pointer" 
      }}
    >
      {children}
    </a>
  );
}