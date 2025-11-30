import React, { useEffect, useRef, useState } from 'react'

const offers = [
  {
    id: 'deal-1',
    title: 'New User Offer',
    subtitle: 'UP TO',
    amount: '20% OFF',
    // colorful abstract texture
    image: 'https://images.unsplash.com/photo-1508264165352-c47f3b5a1f7f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 'deal-2',
    title: 'Black Friday Offers',
    subtitle: 'UP TO',
    amount: '20% OFF',
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 'deal-3',
    title: 'Festive Flash Sale',
    subtitle: 'UP TO',
    amount: '30% OFF',
    image: 'https://images.unsplash.com/photo-1526318472351-c75fcf0707d4?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 'deal-4',
    title: 'Weekend Special',
    subtitle: 'UP TO',
    amount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3'
  }
  
]

function formatTime(diff: number) {
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const mins = Math.floor((diff / (1000 * 60)) % 60)
  const secs = Math.floor((diff / 1000) % 60)
  return { days, hours, mins, secs }
}

export default function BlazingDeals() {
  // default deadline ~2 days 6 hours 5 minutes 30 seconds from now (mirrors screenshot feel)
  const defaultTarget = Date.now() + (2 * 24 * 3600 + 6 * 3600 + 5 * 60 + 30) * 1000
  const [now, setNow] = useState(Date.now())
  const targetRef = useRef<number>(defaultTarget)

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  const diff = Math.max(0, targetRef.current - now)
  const time = formatTime(diff)

  const trackRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(() => (offers.length >= 3 ? 1 : 0))

  // Center the active card inside the track
  function scrollToIndex(index: number) {
    const t = trackRef.current
    if (!t) return
    const children = Array.from(t.children) as HTMLElement[]
    if (!children[index]) return
    const child = children[index]
    const offsetLeft = child.offsetLeft
    const childWidth = child.offsetWidth
    const scrollLeft = Math.max(0, offsetLeft - (t.clientWidth - childWidth) / 2)
    t.scrollTo({ left: scrollLeft, behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToIndex(activeIndex)
    // re-center on resize
    const onResize = () => scrollToIndex(activeIndex)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [activeIndex])

  // prevent manual scrolling via wheel or touchmove on the track so navigation is button/keyboard-only
  useEffect(() => {
    const t = trackRef.current
    if (!t) return

    const onWheel = (e: WheelEvent) => {
      // stop wheel from scrolling the track
      e.preventDefault()
    }
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault()
    }

    t.addEventListener('wheel', onWheel, { passive: false })
    t.addEventListener('touchmove', onTouchMove, { passive: false })

    return () => {
      t.removeEventListener('wheel', onWheel)
      t.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  // manual scrolling disabled — navigation occurs only via buttons or keyboard.

  function handlePrev() {
    setActiveIndex(i => {
      const next = Math.max(0, i - 1)
      // immediately center the next card
      scrollToIndex(next)
      return next
    })
  }
  function handleNext() {
    setActiveIndex(i => {
      const next = Math.min(offers.length - 1, i + 1)
      // immediately center the next card
      scrollToIndex(next)
      return next
    })
  }

  // keyboard navigation: left/right arrows
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="blazing-deals" className="section deals">
      {/* <div className="section-head">
        <h2>Blazing Deals</h2>
      </div> */}

      <div className="deals-wrap">
        <aside className="deals-info">
          <h3>Blazing Deals</h3>
          <p className="deals-desc">Don't miss our most exciting limited-time offers and new-user specials.</p>

          <button className="btn small explore-offers">Explore Offers Now</button>

          <div className="deal-timer" aria-hidden>
            <div className="time-grid">
              <div className="time-box">
                <div className="time-num">{String(time.days).padStart(2, '0')}</div>
                <div className="time-label">Days</div>
              </div>
              <div className="time-box">
                <div className="time-num">{String(time.hours).padStart(2, '0')}</div>
                <div className="time-label">Hr</div>
              </div>
              <div className="time-box">
                <div className="time-num">{String(time.mins).padStart(2, '0')}</div>
                <div className="time-label">Mins</div>
              </div>
              <div className="time-box">
                <div className="time-num">{String(time.secs).padStart(2, '0')}</div>
                <div className="time-label">Sec</div>
              </div>
            </div>
          </div>
        </aside>

        <div className="deals-slider">
          <button className="slider-btn prev" onClick={handlePrev} aria-label="Previous">
            ‹
          </button>

          <div className="deals-track" ref={trackRef}>
            {offers.map((offer, idx) => (
              <div key={offer.id} className={`deal-card ${activeIndex === idx ? 'active' : ''}`}>
                <div className="deal-media">
                  <div className="deal-overlay" aria-hidden />
                  <div className="deal-body">
                    <div className="deal-inner">
                      <h4 className="deal-title">{offer.title}</h4>
                      <div className="deal-sub">{offer.subtitle}</div>
                      <div className="deal-amount">{offer.amount}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* pagination dots removed per design request */}

          <button className="slider-btn next" onClick={handleNext} aria-label="Next">
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
