'use client'

import { Participant } from '@/components/Participants'
import { create } from 'zustand'

interface TeamState {
  name: string
  lastseen: string
  participants: Participant[]
}

export const useTeam = create<TeamState>(() => ({
  name: '🦄 Team Unicorns',
  lastseen: '2024-08-17 19:18:17.040+03:00',
  participants: [
    { avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1', name: 'Leopolt', id: '0001' },
    { avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2', name: 'Stepan', id: '0002' },
    { avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=5', name: 'Tiger', id: '0003' },
    { name: 'Vasiliy', id: '0004' },
  ],
}))
