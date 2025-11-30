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

      <main className="container">
        {sections.map(section => (
          <section key={section.id} className="section">
            <div className="section-head">
              <h2>{section.title}</h2>
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