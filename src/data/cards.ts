export type CardItem = {
  id: number
  title: string
  subtitle: string
  /**
   * `date` is used for the day label (e.g. "Wed, 5th Dec") or for time-only usages
   */
  date?: string | null
  /**
   * `time` is optional and holds a time range when `date` is used for the day.
   * Existing items that used `date` for time will continue to work.
   */
  time?: string | null
  /**
   * optional long description shown below the subtitle in some card variants
   */
  description?: string | null
  /**
   * when true the card will not render the category badge (used by buzzing section)
   */
  hideCategory?: boolean | null
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
      { id: 1, title: 'DJ Live North Live', subtitle: 'NewYork City', date: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' },
      { id: 2, title: 'DJ Live North Live', subtitle: 'NewYork City', date: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1506152983158-1b4ef0b7f2a9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' },
      { id: 3, title: 'DJ Live North Live', subtitle: 'NewYork City', date: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' },
      { id: 4, title: 'DJ Live North Live', subtitle: 'NewYork City', date: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1508973371-768a5e8a63b0?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' }
    ]
  },
  {
    id: 'hot',
    title: 'Hot this week',
    items: [
      { id: 11, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' },
      { id: 12, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1506152983158-1b4ef0b7f2a9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' },
      { id: 13, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' },
      { id: 14, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1508973371-768a5e8a63b0?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' }
    ]
  },
  {
    id: 'unmissable',
    title: 'Unmissable',
    items: [
      { id: 21, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' },
      { id: 22, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1506152983158-1b4ef0b7f2a9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' },
      { id: 23, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' },
      { id: 24, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1508973371-768a5e8a63b0?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' }
    ]
  },
  {
    id: 'foryou',
    title: 'For you',
    items: [
      { id: 31, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' },
      { id: 32, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1506152983158-1b4ef0b7f2a9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' },
      { id: 33, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' },
      { id: 34, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1508973371-768a5e8a63b0?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Lounge', price: 'USD 89' }
    ]
  },
  {
    id: 'buzzing',
    title: 'Buzzing Destinations',
    items: [
      { id: 51, title: 'Kina Mountain', subtitle: '1.2k check-ins this week', description: 'Your guide to the most happening events this weekend — from concerts to pop-ups.', image: 'https://images.unsplash.com/photo-1561484939-79a65f89a3b3?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Destinations', hideCategory: true },
      { id: 52, title: 'Kina Mountain', subtitle: '1.2k check-ins this week', description: 'Your guide to the most happening events this weekend — from concerts to pop-ups.', image: 'https://images.unsplash.com/photo-1505765059304-7a8d0f1b53d4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Destinations', hideCategory: true },
      { id: 53, title: 'Kina Mountain', subtitle: '1.2k check-ins this week', description: 'Your guide to the most happening events this weekend — from concerts to pop-ups.', image: 'https://images.unsplash.com/photo-1505765059304-7a8d0f1b53d4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Destinations', hideCategory: true },
      { id: 54, title: 'Kina Mountain', subtitle: '1.2k check-ins this week', description: 'Your guide to the most happening events this weekend — from concerts to pop-ups.', image: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Destinations', hideCategory: true }
    ]
  },
  {
    id: 'tops',
    title: "Ghana's Top 10s",
    items: [
      { id: 41, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Event', price: 'USD 89' },
      { id: 42, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1506152983158-1b4ef0b7f2a9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Tour', price: 'USD 89' },
      { id: 43, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Activity', price: 'USD 89' },
      { id: 44, title: 'DJ Live North Live', subtitle: 'NewYork City', date: 'Wed, 5th Dec', time: '10:30 PM - 12:30 PM', image: 'https://images.unsplash.com/photo-1508973371-768a5e8a63b0?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3', category: 'Indulge', price: 'USD 89' }
    ]
  }
]