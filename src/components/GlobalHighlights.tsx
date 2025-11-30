import React from 'react'

const items = [
  {
    id: 'gh-1',
    title: 'Paris',
    description: 'Culinary nights & art walks',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 'gh-2',
    title: 'Tokyo',
    description: 'Hidden rooftop bars & pop-up events',
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 'gh-3',
    title: 'New York',
    description: 'Adventure escapes & wine tours',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 'gh-4',
    title: 'Hong Kong',
    description: 'Island hikes & seaside temples',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3'
  }
]

export default function GlobalHighlights() {
  return (
    <section id="global-highlights" className="section exclusives">
      <div className="section-head">
        <h2>
          Global Highlights
          <svg
            className="more-icon"
            aria-hidden
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 6l6 6-6 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </h2>
      </div>

      <div className="exclusive-grid">
        {items.map(item => (
          <div key={item.id} className="exclusive-card">
            <div className="exclusive-media">
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
            </div>

            <div className="exclusive-footer" aria-hidden>
              <div className="exclusive-text">
                <h3 className="exclusive-title">{item.title}</h3>
                <p className="exclusive-desc">{item.description}</p>
              </div>
              <button className="exclusive-btn" aria-label={`Explore ${item.title}`}>Explore Now →</button>
            </div>
          </div>
        ))}
      </div>

      {/* per-card Explore buttons rendered above; no global button needed here */}
    </section>
  )
}
