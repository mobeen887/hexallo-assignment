import React from 'react'
import type { CardItem } from '../data/cards'

type Props = {
  item: CardItem
  sectionId?: string
}

export default function Card({ item, sectionId }: Props) {
  const rootClass = `card ${item.date ? 'with-date' : 'no-date'} ${sectionId ? `section-${sectionId}` : ''}`

  const showMeta = sectionId !== 'buzzing'

  return (
    <div className={rootClass} tabIndex={0}>
      <div className="card-top" aria-hidden>
        {item.date ? (
          <div className="card-date">
            <svg className="heart-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M20.8 4.6c-1.8-1.8-4.7-1.8-6.5 0L12 6.9l-2.3-2.3c-1.8-1.8-4.7-1.8-6.5 0-1.9 1.9-1.9 4.9 0 6.8L12 22l8.8-10.6c1.9-1.9 1.9-4.9 0-6.8z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        ) : null}
      </div>

      <div className="card-media" aria-hidden>
        {item.image ? (
          <img
            src={item.image}
            alt={item.title ?? 'card image'}
            onError={(e) => {
              // fallback to a small placeholder in public/icons if image fails
              // @ts-ignore
              e.currentTarget.onerror = null
              // set to a public placeholder if present
              // eslint-disable-next-line no-param-reassign
              e.currentTarget.src = '/icons/placeholder.svg'
            }}
          />
        ) : null}
      </div>

      <div className="card-content">
        {item.category && !item.hideCategory ? (
          <button className="card-badge" aria-hidden>
            {item.category}
          </button>
        ) : null}

        <h3 className="card-title">{item.title}</h3>
        <p className="card-sub">{item.subtitle}</p>

        {item.date && item.time ? (
          <>
            <div className="card-meta">
              {showMeta ? (
                <span className="meta-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M8 3v4M16 3v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              ) : null}
              <span className="meta-day">{item.date}</span>
            </div>

            <div className="card-meta">
              {showMeta ? (
                <span className="meta-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 8v4l3 2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              ) : null}
              <span className="meta-time">{item.time}</span>
            </div>
          </>
        ) : (
          <div className="card-meta">
            {showMeta ? (
              <span className="meta-icon" aria-hidden>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            ) : null}
            <span className="meta-time">{item.date}</span>
          </div>
        )}

        <div className="card-meta">
          {showMeta ? (
            <span className="meta-icon" aria-hidden>
              <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="8" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
          ) : null}
          <span className="meta-location">{item.subtitle}</span>
        </div>

        {item.description ? <p className="card-desc">{item.description}</p> : null}

        {item.price ? (
          <div className="card-price" aria-label={`Price ${item.price ?? ''}`}>
            <span className="from">From</span>
            <span className="amount">{item.price}</span>
          </div>
        ) : null}

        {showMeta ? (
          <p className="card-hover-desc">Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.</p>
        ) : null}
      </div>
    </div>
  )
}