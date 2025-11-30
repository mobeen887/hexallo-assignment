export type CardItem = {
  id: number
  title: string
  subtitle: string
  date?: string | null
  image?: string | null
  category?: string | null
  price?: string | null
}

export type Section = {
  id: string
  title: string
  items: CardItem[]
}

export const sections: Section[] = [
  {
    id: 'tonight',
    title: "Tonight's spotlight",
    items: [
      { id: 1, title: 'DJ Live North Live', subtitle: 'NewYork City', date: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2', category: 'Lounge', price: 'USD 89' },
      { id: 2, title: 'DJ Live North Live', subtitle: 'NewYork City', date: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1506152983158-1b4ef0b7f2a9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1', category: 'Lounge', price: 'USD 89' },
      { id: 3, title: 'DJ Live North Live', subtitle: 'NewYork City', date: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3', category: 'Lounge', price: 'USD 89' },
      { id: 4, title: 'DJ Live North Live', subtitle: 'NewYork City', date: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=4', category: 'Lounge', price: 'USD 89' }
    ]
  },
  {
    id: 'hot',
    title: 'Hot this week',
    items: [
      { id: 11, title: 'Rising Stars', subtitle: 'Top picks', date: null },
      { id: 12, title: 'New Release', subtitle: 'Artist Spotlight', date: 'Dec 3' }
    ]
  },
  {
    id: 'unmissable',
    title: 'Unmissable',
    items: [
      { id: 21, title: 'Festival Finale', subtitle: 'Outdoor stage', date: 'Dec 5' },
      { id: 22, title: 'VIP Gala', subtitle: 'Invite only', date: null }
    ]
  },
  {
    id: 'foryou',
    title: 'For you',
    items: [
      { id: 31, title: 'Recommended: Afrobeats', subtitle: 'Because you listened', date: null },
      { id: 32, title: 'Hot Picks', subtitle: 'Based on your likes', date: null }
    ]
  },
  {
    id: 'tops',
    title: "Ghana's Top 10s",
    items: [
      { id: 41, title: 'Top 10 Songs', subtitle: 'Chart', date: null },
      { id: 42, title: 'Top 10 Singles', subtitle: 'Weekly charts', date: 'Dec 7' }
    ]
  }
]