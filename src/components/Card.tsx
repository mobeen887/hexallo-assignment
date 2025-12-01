import React, { memo } from 'react'
import type { CardItem } from '../data/cards'
import Icon from './Icon'

type Props = {
  item: CardItem
  sectionId?: string
}

const Card = memo(function Card({ item, sectionId }: Props) {
  const rootClass = `card ${item.date ? 'with-date' : 'no-date'} ${sectionId ? `section-${sectionId}` : ''}`

  const showMeta = sectionId !== 'buzzing'

  return (
    <div className={rootClass} tabIndex={0}>
      <div className="card-top" aria-hidden>
        {item.date ? (
          <div className="card-date">
            <Icon type="heart" width={14} height={14} className="heart-icon" />
          </div>
        ) : null}
      </div>

      <div className="card-media" aria-hidden>
        {item.image ? (
          <img
            src={item.image}
            alt={item.title ?? 'card image'}
            loading="lazy"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.currentTarget
              target.onerror = null
              target.src = '/icons/placeholder.svg'
            }}
          />
        ) : null}
      </div>

      <div className="card-content">
        {item.category && !item.hideCategory ? (
          <span className="card-badge">
            {item.category}
          </span>
        ) : null}

        <h3 className="card-title">{item.title}</h3>

        {item.date && item.time ? (
          <>
            <div className="card-meta">
              {showMeta ? (
                <span className="meta-icon" aria-hidden>
                  <Icon type="calendar" width={16} height={16} />
                </span>
              ) : null}
              <span className="meta-day">{item.date}</span>
            </div>

            <div className="card-meta">
              {showMeta ? (
                <span className="meta-icon" aria-hidden>
                  <Icon type="clock" width={16} height={16} />
                </span>
              ) : null}
              <span className="meta-time">{item.time}</span>
            </div>
          </>
        ) : (
          <div className="card-meta">
            {showMeta ? (
              <span className="meta-icon" aria-hidden>
                <Icon type="calendar" width={14} height={14} />
              </span>
            ) : null}
            <span className="meta-time">{item.date}</span>
          </div>
        )}

        <div className="card-meta">
          {showMeta ? (
            <span className="meta-icon" aria-hidden>
              <Icon type="location" width={16} height={16} />
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
})

export default Card