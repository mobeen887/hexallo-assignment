import React, { useEffect, useState } from 'react'

const IMAGES = [
  'https://images.unsplash.com/photo-1505765050251-1b6a9b9b7d98?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80'
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % IMAGES.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero">
      <div
        className="hero-card"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(7,17,38,0.2), rgba(2,6,23,0.35)), url(${IMAGES[index]})` }}
      >
        <div className="hero-inner container">
          <div className="hero-text">
            <h1>
              Discover, Book & Enjoy What's
              <br /> Happening Around You
            </h1>
            <p className="hero-sub">From local events to world-famous experiences — all in one place.</p>

            <form className="hero-search" onSubmit={e => e.preventDefault()}>
              <input className="search-input" placeholder="Search any event" />
              <input className="search-input small" placeholder="Where" />
              <input className="search-input small" placeholder="When" />
              <button className="search-btn" aria-label="Search">🔍</button>
            </form>
          </div>
        </div>
      </div>

      <div className="hero-dots container">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
