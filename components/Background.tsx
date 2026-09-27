import { CONTACT } from '@/lib/constants';

const ORGS = ['Libsyn', 'Autodesk', 'University of Pittsburgh', 'WYEP 91.3 FM', 'Wild Pockets', 'Asia City Media Group'];

export default function Background() {
  return (
    <section id="background" className="border-t border-gray-100 py-12">
      <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-10 font-normal">Background</h2>
      <div className="max-w-2xl">
        <p className="text-xl md:text-2xl font-medium text-gray-900 leading-snug tracking-tight mb-8">
          Product manager and engineer — I write the roadmap, and I build the thing it describes.
        </p>
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>
            Before Xanadu, I spent my career on both sides of the product line: as a product owner
            and manager setting direction, and as the web and mobile developer shipping the code.
            That work spans podcasting, public media, higher education, 3D software and games —
            including live-audio apps and Alexa skills for Pittsburgh public radio.
          </p>
          <p>
            Xanadu is what happens when those two jobs meet: agile product discipline, encoded
            into a system that does the building.
          </p>
        </div>
        <p className="text-xs text-gray-500 uppercase tracking-widest mt-10 mb-3">Worked with</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-700">
          {ORGS.map((org) => (
            <li key={org}>{org}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-600 mt-8">
          More on{' '}
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 hover:text-gray-600 transition-colors">
            LinkedIn
          </a>{' '}
          and{' '}
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 hover:text-gray-600 transition-colors">
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
