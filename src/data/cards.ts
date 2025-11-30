export type CardItem = {
  id: number
  title: string
  subtitle: string
  date?: string | null
  image?: string | null
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
      { id: 1, title: 'Moonlight Concert', subtitle: 'Live at Accra', date: 'Nov 30' , image: null},
      { id: 2, title: 'Indie Night', subtitle: 'Downtown Club', date: null, image: null },
      { id: 3, title: 'Jazz Hour', subtitle: 'The Venue', date: 'Dec 1', image: null }
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