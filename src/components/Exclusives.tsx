import React from 'react'

const items = [
  {
    id: 'ex-1',
    title: 'Private Tours',
    description: 'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 'ex-2',
    title: 'Private Tours',
    description: 'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3'
  }
]

export default function Exclusives() {
  return (
    <section id="exclusives" className="section exclusives">
      <div className="section-head">
        <h2>
          Exclusives
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
              <button className="exclusive-btn">Explore Now →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
