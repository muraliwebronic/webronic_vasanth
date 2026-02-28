'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface ScrollLinkProps {
  href: string;              // e.g. "#case-studies"
  children: ReactNode;
  className?: string;
  offset?: number;           // for sticky headers
}

export default function ScrollLink({
  href,
  children,
  className,
  offset = 0,
}: ScrollLinkProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only intercept hash links on the same page
    if (!href.startsWith('#')) return;

    e.preventDefault();

    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });

    // Keep URL clean & updated
    history.replaceState(null, '', `${pathname}${href}`);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
