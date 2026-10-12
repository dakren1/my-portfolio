import { initParticlesEngine, Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useEffect, useMemo, useState } from 'react'

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    void initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const options = useMemo(() => {
    const mobile = window.matchMedia('(max-width: 768px)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return {
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: !mobile, mode: 'grab' },
        },
        modes: { grab: { distance: 160, links: { opacity: 0.6 } } },
      },
      particles: {
        number: { value: mobile ? 40 : 90, density: { enable: true } },
        color: { value: ['#00e5ff', '#1e6bff', '#7a5cff'] },
        opacity: { value: { min: 0.3, max: 0.8 } },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          color: '#1e6bff',
          distance: 140,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: !reduceMotion,
          speed: 0.6,
          outModes: { default: 'out' as const },
        },
      },
    }
  }, [])

  if (!ready) return null

  return (
    <Particles
      id="particles"
      options={options}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  )
}
