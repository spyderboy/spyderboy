import { ENGINE_STATS } from '@/lib/constants';
import StatCard from './StatCard';

export default function EngineSection() {
  return (
    <section id="engine" className="border-t border-gray-100 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">The engine</p>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Xanadu</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            An autonomous development loop: local LLMs in a tiered cascade, mechanical error
            correction, and a planning layer that turns a backlog into running code — unattended.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Claude sits at the top, handling escalations and architecture. Everything below runs
            on open models — usually on my Mac, which handles nearly everything. For big sprints
            it scales out to rented RunPod GPUs, one or many, running agents in parallel to
            handle them rapidly — or up to larger models if a job calls for it. Gemini is the
            outside voice: I consult it for
            creative work and as a sanity check on what the loop produces. A 2-week plan
            compresses to 2–3 days of wall-clock time.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {ENGINE_STATS.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
