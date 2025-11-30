import React from 'react'
import type { CardItem } from '../data/cards'

type Props = {
  item: CardItem
}

export default function Card({ item }: Props) {
  return (
    <div className={`card ${item.date ? 'with-date' : 'no-date'}`} tabIndex={0}>
      <div
        className="card-media"
        aria-hidden
        style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}
      >
        {/* background image applied via inline style when available */}
      </div>

      <div className="card-content">
        {/* Moved badge inside card-content to stack vertically */}
        <button className="card-badge" aria-hidden>
          {item.category ?? 'Lounge'}
        </button>

        <h3 className="card-title">{item.title}</h3>

        <div className="card-meta">
          <span className="meta-time">{item.date}</span>
        </div>

        <div className="card-meta">
          <span className="meta-location">{item.subtitle}</span>
        </div>

        <div className="card-price" aria-label={`Price ${item.price ?? ''}`}>
          <span className="from">From</span>
          <span className="amount">{item.price ?? 'USD 89'}</span>
        </div>
      </div>
    </div>
  )
}