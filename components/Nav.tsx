import { NAV_LINKS } from '@/lib/constants';

export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-6 border-b border-gray-100">
      <span className="text-[15px] font-medium tracking-tight">spyderboy</span>
      <div className="flex gap-6">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
