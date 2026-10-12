import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  id: string
  title: string
  children: ReactNode
}

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="mb-10 font-display text-3xl font-bold sm:text-4xl">
          <span className="text-neon text-glow">/</span> {title}
        </h2>
        {children}
      </motion.div>
    </section>
  )
}
