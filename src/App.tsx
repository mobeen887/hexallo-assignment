import React, { lazy, Suspense } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Icon from './components/Icon'
import { sections } from './data/cards'

// Lazy load heavy components
const Exclusives = lazy(() => import('./components/Exclusives'))
const DiscoverGems = lazy(() => import('./components/DiscoverGems'))
const ExploreGhana = lazy(() => import('./components/ExploreGhana'))
const BlazingDeals = lazy(() => import('./components/BlazingDeals'))
const GlobalHighlights = lazy(() => import('./components/GlobalHighlights'))

const SECTIONS_WITH_MORE_ICON = ['tonight', 'hot', 'unmissable', 'buzzing'] as const

// Loading fallback component
const SectionLoader = () => (
  <div style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ color: '#7c5cff', fontSize: '14px' }}>Loading...</div>
  </div>
)

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
                  {SECTIONS_WITH_MORE_ICON.includes(section.id as any) && (
                    <Icon type="chevron-right" width={20} height={20} className="more-icon" />
                  )}
                </h2>
              </div>

              <div className="cards-grid">
                {section.items.map(item => (
                  <Card key={item.id} item={item} sectionId={section.id} />
                ))}
              </div>
            </section>

            {section.id === 'unmissable' && (
              <Suspense fallback={<SectionLoader />}>
                <Exclusives />
              </Suspense>
            )}
            {section.id === 'buzzing' && (
              <>
                <Suspense fallback={<SectionLoader />}>
                  <BlazingDeals />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <DiscoverGems />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <ExploreGhana />
                </Suspense>
              </>
            )}
          </React.Fragment>
        ))}
      </main>

      <Suspense fallback={<SectionLoader />}>
        <GlobalHighlights />
      </Suspense>

      <Footer />
    </div>
  )
}