'use client'

import { create } from 'zustand'

export interface Contact {
  name: string
  avatar?: string
  online: boolean
  // profile?: string
  // telegram?: string
  // phone?: string
}

interface BearsState {
  contacts: Record<string, Contact>
}

export const useContacts = create<BearsState>(() => ({
  contacts: {
    '001': { online: true, avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1', name: 'Yegor', dep: 'Engineering' },
    '002': { online: false, avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2', name: 'Jav', dep: 'Engineering' },
    '003': { online: false, avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=5', name: 'Aubrey', dep: 'Product' },
    '004': { online: false, avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Cookie', name: 'Janet', dep: 'Engineering' },
    '005': { online: true, avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Sasha', name: 'Janet', dep: 'Engineering' },
  }
}))
