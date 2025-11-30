import React, { useEffect, useState } from 'react'

const IMAGES = [
  // Eye-catching HD destinations from Unsplash
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80'
]

export default function Hero() {
  // start on a random slide for variety
  const [index, setIndex] = useState(() => Math.floor(Math.random() * IMAGES.length))

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
              <div className="search-field">
                {/* <span className="field-emoji" aria-hidden="true"></span> */}
                <input className="search-input" placeholder=" 🎉 Search any event" aria-label="Search any event" />
              </div>

              <div className="search-field small">
                {/* <span className="field-emoji" aria-hidden="true"></span> */}
                <input className="search-input" placeholder=" 📍 Where" aria-label="Where" />
              </div>

              <div className="search-field small">
                {/* <span className="field-emoji" aria-hidden="true"></span> */}
                <input className="search-input" placeholder=" 🗓️ When" aria-label="When" />
              </div>

              <button className="search-btn" aria-label="Search" type="submit">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M21 21l-4.35-4.35" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="11" cy="11" r="6" stroke="#fff" strokeWidth="2" fill="none" />
                </svg>
              </button>
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
