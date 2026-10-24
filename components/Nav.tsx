import { NAV_LINKS } from '@/lib/constants';

interface NavProps {
  dark?: boolean;
}

export default function Nav({ dark = false }: NavProps) {
  return (
    <nav className="flex flex-wrap justify-between items-center gap-x-6 gap-y-3 py-6">
      <span className={`text-[15px] font-medium tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
        spyderboy
      </span>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-sm transition-colors ${
              dark
                ? 'text-zinc-400 hover:text-zinc-100'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
