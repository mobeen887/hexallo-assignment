import React from 'react'
import type { CardItem } from '../data/cards'

type Props = {
  item: CardItem
}

export default function Card({ item }: Props) {
  return (
    <div className={`card ${item.date ? 'with-date' : 'no-date'}`} tabIndex={0}>
      <div className="card-media" aria-hidden>
        {/* Placeholder gradient image background */}
      </div>

      <div className="card-content">
        <div className="card-top">
          {item.date && (
            <div className="card-date">
              <img src="/icons/calendar.svg" alt="calendar icon" className="calendar-icon"/>
              <span className="date-text">{item.date}</span>
            </div>
          )}
        </div>

        <h3 className="card-title">{item.title}</h3>
        <p className="card-sub">{item.subtitle}</p>
      </div>

      <button className="card-cta" aria-label={`Open ${item.title}`}>
        View
      </button>
    </div>
  )
}