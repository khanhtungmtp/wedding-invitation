import { motion } from 'framer-motion'

const PETALS = ['🌸', '✿', '❀', '🕊️']

export function FloatingFlowers({
  className = '',
  density = 14,
  soft = true,
}) {
  const items = Array.from({ length: density }, (_, i) => ({
    id: i,
    x: `${(i * 73) % 100}%`,
    delay: (i % 7) * 0.35,
    dur: 10 + (i % 5),
    rotate: i % 2 === 0 ? 18 : -14,
    petal: PETALS[i % PETALS.length],
    scale: 0.65 + ((i * 13) % 40) / 100,
    blur: soft ? (i % 4 === 0 ? 1 : 0) : 0,
  }))

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {items.map((p) => (
        <motion.span
          key={p.id}
          className="absolute -translate-x-1/2 text-blush-400/55 drop-shadow-[0_10px_22px_rgba(217,184,196,0.35)]"
          style={{
            left: p.x,
            top: `${-8 + ((p.id * 17) % 24)}%`,
            filter: p.blur ? 'blur(1px)' : undefined,
          }}
          initial={{ opacity: 0, y: -18 }}
          animate={{
            opacity: [0.25, 0.85, 0.35],
            y: ['0%', '92vh'],
            rotate: [p.rotate, p.rotate + 26],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: 'linear',
            delay: p.delay,
          }}
        >
          <span style={{ fontSize: `${p.scale * 22}px` }}>{p.petal}</span>
        </motion.span>
      ))}
    </div>
  )
}
