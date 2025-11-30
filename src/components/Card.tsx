import React from 'react'
import type { CardItem } from '../data/cards'

type Props = {
  item: CardItem
}

export default function Card({ item }: Props) {
  return (
    <div className={`card ${item.date ? 'with-date' : 'no-date'}`} tabIndex={0}>
      <div className="card-media" aria-hidden>
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // replace broken images with local placeholder
              // remove the handler to avoid infinite loop if placeholder missing
              // @ts-ignore - DOM event typing in TSX
              e.currentTarget.onerror = null
              // use public icon placeholder
              e.currentTarget.src = '/icons/placeholder.svg'
            }}
          />
        ) : null}
      </div>

      <div className="card-content">
        {/* Moved badge inside card-content to stack vertically */}
        <button className="card-badge" aria-hidden>
          {item.category ?? 'Lounge'}
        </button>

        <h3 className="card-title">{item.title}</h3>

        {/* Render day + time when both are present, otherwise render single date/time */}
        {item.date && item.time ? (
          <>
            <div className="card-meta">
              <span className="meta-day">{item.date}</span>
            </div>
            <div className="card-meta">
              <span className="meta-time">{item.time}</span>
            </div>
          </>
        ) : (
          <div className="card-meta">
            <span className="meta-time">{item.date}</span>
          </div>
        )}

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