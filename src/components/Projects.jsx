import { motion } from 'framer-motion'
import { Code2, Sparkles, Rocket, Puzzle } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Playground',
    description: 'A micro-interaction lab with physics-driven elements and playful motion.',
    icon: <Sparkles className="text-indigo-600" size={20} />,
    tags: ['React', 'Framer Motion', 'Spline'],
  },
  {
    title: 'AI Portfolio Assistant',
    description: 'A conversational portfolio powered by LLMs and vector search.',
    icon: <Code2 className="text-blue-600" size={20} />,
    tags: ['FastAPI', 'Pinecone', 'OpenAI'],
  },
  {
    title: 'Launch Dashboard',
    description: 'Realtime mission control for product releases and telemetry.',
    icon: <Rocket className="text-sky-600" size={20} />,
    tags: ['Next.js', 'WebSockets', 'Tailwind'],
  },
  {
    title: 'Design System Kit',
    description: 'Composable components with semantic tokens and themeable primitives.',
    icon: <Puzzle className="text-violet-600" size={20} />,
    tags: ['Radix', 'CVA', 'TypeScript'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Selected Projects</h2>
          <p className="mt-3 text-gray-600">A snapshot of recent work and experiments.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 grid place-items-center">
                  {p.icon}
                </div>
                <h3 className="font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] rounded-full bg-gray-100 text-gray-700 px-2 py-1">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
