import React from 'react'

const items = [
  {
    id: 'dg-1',
    title: 'The Secret Garden Café',
    description: 'AccraHidden courtyard serving organic brunch & live music evenings.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 'dg-2',
    title: "Napa's Underground Jazz",
    description: 'Vintage cellar turned into an intimate live stages.',
    image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 'dg-3',
    title: 'Sky Hammock Trail',
    description: 'BaliSwing over the valley — a serene thrill far from crowds',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 'dg-4',
    title: 'Sky Hammock Trail',
    description: 'BaliSwing over the valley — a serene thrill far from crowds',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3'
  }
]

export default function DiscoverGems() {
  return (
    <section id="discover-gems" className="section exclusives">
      <div className="section-head">
        <h2>
          Discover Hidden Gems
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
              {/* intentionally no button for Discover Hidden Gems */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
