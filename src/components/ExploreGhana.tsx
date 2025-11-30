import React from 'react'

const items = [
  // Row 1: small(1), medium(2), large(3)
  { id: 'eg-1', title: 'Events', subtitle: 'Explore', rating: '3.5', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3', span: 1 },
  { id: 'eg-2', title: 'Activities', subtitle: 'Explore', rating: '3.5', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3', span: 2 },
  { id: 'eg-3', title: 'Restaurants', subtitle: 'Explore', rating: '3.5', image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3', span: 3 },
  // Row 2: first 2/3 (4), second 1/3 (2)
  { id: 'eg-4', title: 'Tours', subtitle: 'Explore', rating: '3.5', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3', span: 4 },
  { id: 'eg-5', title: 'Services', subtitle: 'Explore', rating: '3.5', image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3', span: 2 },
  // Row 3: middle(2), small(1), large(3)
  { id: 'eg-6', title: 'Destinations', subtitle: 'Explore', rating: '3.5', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3', span: 2 },
  { id: 'eg-7', title: 'Places', subtitle: 'Explore', rating: '3.5', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3', span: 1 },
  { id: 'eg-8', title: 'Accommodations', subtitle: 'Explore', rating: '3.5', image: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3', span: 3 }
]

export default function ExploreGhana() {
  return (
    <section id="explore-ghana" className="section explore-ghana">
      <div className="section-head">
        <h2>
          Explore Ghana
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

      <div className="eg-grid">
        {items.map(item => (
          <article
            key={item.id}
            className={`eg-card span-${item.span}`}
            style={{ backgroundImage: `url(${item.image})` }}
            role="group"
            aria-label={`${item.title} - ${item.subtitle}`}
          >
            <div className="eg-overlay">
              <div className="eg-badge">{item.rating}</div>
              <div className="eg-text">
                <h3 className="eg-title">{item.title}</h3>
                <p className="eg-sub">{item.subtitle}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
