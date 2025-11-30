import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { sections } from './data/cards'

export default function App() {
  return (
    <div className="page">
      <Navbar />

      <Hero />

      <main className="container-fluid">
        {sections.map(section => (
          <section id={section.id} key={section.id} className="section">
            <div className="section-head">
              <h2>
                {section.title}
                {section.id === 'tonight' && (
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
                )}
              </h2>
            </div>

            <div className="cards-grid">
              {section.items.map(item => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="site-footer">Made for the interview — good luck!</footer>
    </div>
  )
}