import { NAV_LINKS } from '@/lib/constants';

interface NavProps {
  dark?: boolean;
}

export default function Nav({ dark = false }: NavProps) {
  return (
    <nav className="flex justify-between items-center py-6">
      <span className={`text-[15px] font-medium tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
        spyderboy
      </span>
      <div className="flex gap-6">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-sm transition-colors ${
              dark
                ? 'text-zinc-500 hover:text-zinc-200'
                : 'text-gray-400 hover:text-gray-900'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
