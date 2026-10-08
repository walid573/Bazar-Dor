'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkItemProps {
  slug: string;
  icon: string;
  nameBn: string;
}

export default function LinkItem({ slug, icon, nameBn }: LinkItemProps) {
  const pathname = usePathname();
  
  // Checks if the current URL matches this specific category link
  const isActive = pathname === `/category/${slug}`;

  return (
    <Link href={`/category/${slug}`}>
      <div
        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
          isActive
            ? 'bg-[#047F39] text-white' // Active Styles
            : 'text-gray-700 hover:text-[#047F39] hover:bg-gray-100' // Inactive Styles
        }`}
      >
        <p>{icon}</p>
        <h2>{nameBn}</h2>
      </div>
    </Link>
  );
}