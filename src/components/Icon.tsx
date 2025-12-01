import React from 'react'

export type IconType = 
  | 'heart'
  | 'calendar'
  | 'clock'
  | 'location'
  | 'search'
  | 'chevron-right'

interface IconProps {
  type: IconType
  width?: number
  height?: number
  className?: string
  'aria-hidden'?: boolean
}

const Icon: React.FC<IconProps> = ({ 
  type, 
  width = 16, 
  height = 16, 
  className = '', 
  'aria-hidden': ariaHidden = true 
}) => {
  const icons: Record<IconType, JSX.Element> = {
    heart: (
      <svg 
        className={className} 
        viewBox="0 0 24 24" 
        width={width} 
        height={height} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        aria-hidden={ariaHidden}
      >
        <path 
          d="M20.8 4.6c-1.8-1.8-4.7-1.8-6.5 0L12 6.9l-2.3-2.3c-1.8-1.8-4.7-1.8-6.5 0-1.9 1.9-1.9 4.9 0 6.8L12 22l8.8-10.6c1.9-1.9 1.9-4.9 0-6.8z" 
          stroke="currentColor" 
          strokeWidth="1.2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none" 
        />
      </svg>
    ),
    calendar: (
      <svg 
        className={className} 
        viewBox="0 0 24 24" 
        width={width} 
        height={height} 
        xmlns="http://www.w3.org/2000/svg" 
        aria-hidden={ariaHidden}
      >
        <rect 
          x="3" 
          y="5" 
          width="18" 
          height={type === 'calendar' && width === 14 ? 16 : 14} 
          rx="2" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.6" 
        />
        <path 
          d="M8 3v4M16 3v4" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    ),
    clock: (
      <svg 
        className={className} 
        viewBox="0 0 24 24" 
        width={width} 
        height={height} 
        xmlns="http://www.w3.org/2000/svg" 
        aria-hidden={ariaHidden}
      >
        <circle 
          cx="12" 
          cy="12" 
          r="8" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.6" 
        />
        <path 
          d="M12 8v4l3 2" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    ),
    location: (
      <svg 
        className={className} 
        viewBox="0 0 24 24" 
        width={width} 
        height={height} 
        xmlns="http://www.w3.org/2000/svg" 
        aria-hidden={ariaHidden}
      >
        <path 
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <circle 
          cx="12" 
          cy="8" 
          r="2.2" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.6" 
        />
      </svg>
    ),
    search: (
      <svg 
        className={className} 
        viewBox="0 0 24 24" 
        width={width} 
        height={height} 
        aria-hidden={ariaHidden}
      >
        <circle 
          cx="11" 
          cy="11" 
          r="7" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
        />
        <path 
          d="M16 16l5 5" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
        />
      </svg>
    ),
    'chevron-right': (
      <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={ariaHidden}
      >
        <path 
          d="M9 6l6 6-6 6" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    )
  }

  return icons[type] || null
}

export default Icon
