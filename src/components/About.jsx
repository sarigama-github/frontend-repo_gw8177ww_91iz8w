import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-extrabold tracking-tight">About</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I&apos;m a creative developer who blends design and engineering to craft memorable experiences.
              I enjoy building nuanced interfaces where motion and interaction tell the story. Currently exploring
              3D on the web, generative tools, and systems thinking.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              When I&apos;m not coding, I sketch UI ideas, prototype in motion, and learn from the community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
          >
            <h3 className="font-semibold">Highlights</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
              <li>End-to-end product engineering</li>
              <li>Motion design + micro-interactions</li>
              <li>Web performance and accessibility</li>
              <li>3D on the web with Spline</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
