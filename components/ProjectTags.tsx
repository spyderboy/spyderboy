import type { Project } from '@/lib/projects';

// Languages (outlined, detected from the code) first, then the stack tags that
// aren't already covered by a language.
export default function ProjectTags({ project }: { project: Project }) {
  const langs = new Set(project.languages.map((l) => l.toLowerCase()));
  const stack = project.tags.filter((t) => !langs.has(t.toLowerCase()));
  if (project.languages.length === 0 && stack.length === 0) return null;

  return (
    <div className="flex gap-1.5 flex-wrap">
      {project.languages.map((lang) => (
        <span key={lang} className="text-[11px] font-medium text-gray-700 border border-gray-300 px-2 py-0.5 rounded-md">
          <span className="sr-only">Language: </span>
          {lang}
        </span>
      ))}
      {stack.map((tag) => (
        <span key={tag} className="text-[11px] text-gray-600 bg-gray-50 px-2 py-0.5 rounded-md">
          {tag}
        </span>
      ))}
    </div>
  );
}
