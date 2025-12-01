import React, { useEffect, useRef, useState } from 'react'

function Logo() {
  return (
    <div className="logo-wrap" aria-hidden>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="#8E5B2F" />
        <path d="M7 12l3-5 7 5-7 5-3-5z" fill="#fff" opacity="0.95" />
      </svg>
    </div>
  )
}

export default function Navbar() {
  const utilRef = useRef<HTMLDivElement | null>(null)
  const [openLang, setOpenLang] = useState(false)
  const [openCountry, setOpenCountry] = useState(false)
  const [openRegion, setOpenRegion] = useState(false)
  const [activeNav, setActiveNav] = useState<string>('Explore')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubnavOpen, setMobileSubnavOpen] = useState(false)

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!utilRef.current) return
      if (!(e.target instanceof Node)) return
      if (!utilRef.current.contains(e.target)) {
        setOpenLang(false)
        setOpenCountry(false)
        setOpenRegion(false)
      }
    }
    document.addEventListener('click', onDocClick)
    // close menus on Escape
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpenLang(false)
        setOpenCountry(false)
        setOpenRegion(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  // focus first menu item when a dropdown opens
  useEffect(() => {
    if (openLang && utilRef.current) {
      const first = utilRef.current.querySelector('.dropdown-lang button') as HTMLButtonElement | null
      setTimeout(() => first?.focus(), 0)
    }
  }, [openLang])

  useEffect(() => {
    if (openCountry && utilRef.current) {
      const first = utilRef.current.querySelector('.dropdown-country button') as HTMLButtonElement | null
      setTimeout(() => first?.focus(), 0)
    }
  }, [openCountry])

  useEffect(() => {
    if (openRegion && utilRef.current) {
      const first = utilRef.current.querySelector('.dropdown-region button') as HTMLButtonElement | null
      setTimeout(() => first?.focus(), 0)
    }
  }, [openRegion])

  // helper to move focus inside a menu
  function handleMenuKey(e: React.KeyboardEvent<HTMLUListElement>) {
    const list = e.currentTarget
    const buttons = Array.from(list.querySelectorAll('button')) as HTMLButtonElement[]
    if (!buttons.length) return

    const active = document.activeElement as HTMLElement | null
    const idx = buttons.findIndex(b => b === active)

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = idx < buttons.length - 1 ? buttons[idx + 1] : buttons[0]
      next.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = idx > 0 ? buttons[idx - 1] : buttons[buttons.length - 1]
      prev.focus()
    } else if (e.key === 'Escape') {
      // find the closest util-item ancestor and close it
      const utilItem = list.closest('.util-item')
      if (utilItem) {
        if (utilItem.classList.contains('open')) {
          // close by determining which menu this is
          if (utilItem.querySelector('.dropdown-lang')) setOpenLang(false)
          if (utilItem.querySelector('.dropdown-country')) setOpenCountry(false)
          if (utilItem.querySelector('.dropdown-region')) setOpenRegion(false)
          const toggle = utilItem.querySelector('.util-toggle') as HTMLElement | null
          toggle?.focus()
        }
      }
    }
  }

  return (
    <header className="site-top">
      {/* thin utility row */}
      <div className="util-row">
        <div className="container-fluid util-inner" ref={utilRef}>
          <div className="util-right">
            <ul className="util-list">
              <li className="util-item">Events Calendar</li>
              <li className="util-item">Blog</li>
              <li className="util-item">Limelight</li>

              {/* Language dropdown */}
              <li className={`util-item ${openLang ? 'open' : ''}`}>
                <button
                  className="util-toggle"
                  aria-haspopup="menu"
                  aria-expanded={openLang}
                  onClick={() => { setOpenLang(s => !s); setOpenCountry(false); setOpenRegion(false) }}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') { e.preventDefault(); setOpenLang(true); setOpenCountry(false); setOpenRegion(false) }
                    if (e.key === 'ArrowUp') { e.preventDefault(); setOpenLang(true); setOpenCountry(false); setOpenRegion(false) }
                    if (e.key === 'Escape') { setOpenLang(false) }
                  }}
                >
                  🌐 
                  <span className="util-text"> EN(US)</span>
                  <svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" className="caret-svg"><path d="M0 0l5 6 5-6" fill="#666"/></svg>
                </button>

                <div className="dropdown dropdown-lang" role="menu">
                  <ul onKeyDown={handleMenuKey}>
                    <li role="menuitem"><button onClick={() => setOpenLang(false)}>EN (US)</button></li>
                    <li role="menuitem"><button onClick={() => setOpenLang(false)}>EN (GB)</button></li>
                    <li role="menuitem"><button onClick={() => setOpenLang(false)}>ES</button></li>
                  </ul>
                </div>
              </li>

              {/* Country dropdown */}
              <li className={`util-item ${openCountry ? 'open' : ''}`}>
                <button
                  className="util-toggle"
                  aria-haspopup="menu"
                  aria-expanded={openCountry}
                  onClick={() => { setOpenCountry(s => !s); setOpenLang(false); setOpenRegion(false) }}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') { e.preventDefault(); setOpenCountry(true); setOpenLang(false); setOpenRegion(false) }
                    if (e.key === 'ArrowUp') { e.preventDefault(); setOpenCountry(true); setOpenLang(false); setOpenRegion(false) }
                    if (e.key === 'Escape') { setOpenCountry(false) }
                  }}
                >
                  <img src="/icons/flag-us.svg" alt="United States flag" className="flag-svg" />
                  <span className="util-text"> United States</span>
                  <svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" className="caret-svg"><path d="M0 0l5 6 5-6" fill="#666"/></svg>
                </button>

                <div className="dropdown dropdown-country" role="menu">
                  <ul onKeyDown={handleMenuKey}>
                    <li role="menuitem"><button onClick={() => setOpenCountry(false)}>United States</button></li>
                    <li role="menuitem"><button onClick={() => setOpenCountry(false)}>Canada</button></li>
                    <li role="menuitem"><button onClick={() => setOpenCountry(false)}>Mexico</button></li>
                  </ul>
                </div>
              </li>

              {/* Region dropdown */}
              <li className={`util-item ${openRegion ? 'open' : ''}`}>
                <button
                  className="util-toggle"
                  aria-haspopup="menu"
                  aria-expanded={openRegion}
                  onClick={() => { setOpenRegion(s => !s); setOpenLang(false); setOpenCountry(false) }}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') { e.preventDefault(); setOpenRegion(true); setOpenLang(false); setOpenCountry(false) }
                    if (e.key === 'ArrowUp') { e.preventDefault(); setOpenRegion(true); setOpenLang(false); setOpenCountry(false) }
                    if (e.key === 'Escape') { setOpenRegion(false) }
                  }}
                >
                  <span className="util-text"> California</span>
                  <svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" className="caret-svg"><path d="M0 0l5 6 5-6" fill="#666"/></svg>
                </button>

                <div className="dropdown dropdown-region" role="menu">
                  <ul onKeyDown={handleMenuKey}>
                    <li role="menuitem"><button onClick={() => setOpenRegion(false)}>California</button></li>
                    <li role="menuitem"><button onClick={() => setOpenRegion(false)}>New York</button></li>
                    <li role="menuitem"><button onClick={() => setOpenRegion(false)}>Texas</button></li>
                  </ul>
                </div>
              </li>

              <li className="util-item sign">Sign In | Up</li>
              <li className="util-item"><button className="util-btn business">Business</button></li>
              <li className="util-item"><button className="util-btn create">Create Event</button></li>
            </ul>
          </div>
        </div>
      </div>

      {/* main navigation row */}
      <div className="nav-row">
        <div className="container-fluid nav-inner">
          <div className="nav-left">
            <Logo />
            <div className="brand-text">Hexallo</div>
          </div>

          <div className="nav-right">
            <nav className="nav-main" aria-label="Main Navigation">
              {/* render nav items from array and allow click to set active */}
              {
                [
                  'Explore','Services','Nightlife','Travel','Accommodation','Spaces','Subscriptions','Vouchers','Rentals','Voting','Shop','Essentials','Healthcare','Jobs','Marketplace'
                ].map(item => (
                  <a
                    key={item}
                    href="#"
                    onClick={(e) => { e.preventDefault(); setActiveNav(item); setMobileMenuOpen(false) }}
                    className={activeNav === item ? 'active' : ''}
                  >
                    {item}
                  </a>
                ))
              }
            </nav>

            {/* Hamburger menu button for mobile */}
            <button 
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className={`hamburger-icon ${mobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            {/* <div className="nav-cta">
              <button className="btn ghost small">Business</button>
              <button className="btn primary">Create Event</button>
            </div> */}
          </div>
        </div>

        {/* Mobile dropdown menu - outside nav-inner */}
        <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav" aria-label="Mobile Navigation">
            {
              [
                'Explore','Services','Nightlife','Travel','Accommodation','Spaces','Subscriptions','Vouchers','Rentals','Voting','Shop','Essentials','Healthcare','Jobs','Marketplace'
              ].map(item => (
                <a
                  key={item}
                  href="#"
                  onClick={(e) => { e.preventDefault(); setActiveNav(item); setMobileMenuOpen(false) }}
                  className={activeNav === item ? 'active' : ''}
                >
                  {item}
                </a>
              ))
            }
          </nav>
        </div>
      </div>

      {/* secondary sub-navigation */}
      <div className="subnav-row">
        <div className="container-fluid subnav-inner">
          <div className="subnav-header">
            <nav className="subnav" aria-label="Secondary Navigation">
              {
                // list kept as an array for easy maintenance and to include requested items
                [
                  'Home',
                  'Events',
                  'Tours',
                  'Activities',
                  'Indulge',
                  'Places',
                  'Movies',
                  'Sports',
                  'Restaurants',
                  'Find a table',
                  'Conferences',
                  'Workshops',
                  'Auditions',
                  'People',
                  'World Famous',
                  'Social Buddies',
                  'Virtual Experiences'
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={(e) => { e.preventDefault(); setMobileSubnavOpen(false) }}
                    className={item === 'Home' ? 'sub-active' : ''}
                  >
                    {item}
                  </a>
                ))
              }
            </nav>
            
            {/* Mobile subnav toggle */}
            <button 
              className="subnav-toggle-btn"
              onClick={() => setMobileSubnavOpen(!mobileSubnavOpen)}
              aria-label="Toggle secondary navigation"
              aria-expanded={mobileSubnavOpen}
            >
              <span>More</span>
              <svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" className={`caret ${mobileSubnavOpen ? 'open' : ''}`}>
                <path d="M0 0l5 6 5-6" fill="#666"/>
              </svg>
            </button>
          </div>

          {/* Mobile subnav dropdown */}
          <div className={`mobile-subnav-menu ${mobileSubnavOpen ? 'open' : ''}`}>
            <nav className="mobile-subnav" aria-label="Mobile Secondary Navigation">
              {
                [
                  'Home',
                  'Events',
                  'Tours',
                  'Activities',
                  'Indulge',
                  'Places',
                  'Movies',
                  'Sports',
                  'Restaurants',
                  'Find a table',
                  'Conferences',
                  'Workshops',
                  'Auditions',
                  'People',
                  'World Famous',
                  'Social Buddies',
                  'Virtual Experiences'
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={(e) => { e.preventDefault(); setMobileSubnavOpen(false) }}
                    className={item === 'Home' ? 'sub-active' : ''}
                  >
                    {item}
                  </a>
                ))
              }
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
