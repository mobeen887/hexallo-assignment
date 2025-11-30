import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Exclusives from './components/Exclusives'
import DiscoverGems from './components/DiscoverGems'
import ExploreGhana from './components/ExploreGhana'
import BlazingDeals from './components/BlazingDeals'
import Footer from './components/Footer'
import { sections } from './data/cards'
import GlobalHighlights from './components/GlobalHighlights'

export default function App() {
  return (
    <div className="page">
      <Navbar />

      <Hero />

      <main className="container-fluid">
        {sections.map(section => (
          <React.Fragment key={section.id}>
            <section id={section.id} className="section">
              <div className="section-head">
                <h2>
                  {section.title}
                  {(section.id === 'tonight' || section.id === 'hot' || section.id === 'unmissable' || section.id === 'buzzing') && (
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

            {section.id === 'unmissable' && <Exclusives />}
            {section.id === 'buzzing' && <BlazingDeals />}
            {section.id === 'buzzing' && <DiscoverGems />}
            {section.id === 'buzzing' && <ExploreGhana />}
          </React.Fragment>
        ))}
      </main>

      <GlobalHighlights />

      <Footer />
    </div>
  )
}