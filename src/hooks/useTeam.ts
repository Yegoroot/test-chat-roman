'use client'

import { create } from 'zustand'

export type Message = {
  id: string,
  text: string,
  me?: boolean,
  date: string
  user: string
}
interface TeamState {
  name: string
  lastseen: string
  participants: string[]
  messages: Message[]
  sendMessage: (m: Message)=> void
}

export const useTeam = create<TeamState>((set) => ({
  name: '🦄 Team Unicorns',
  lastseen: '2024-08-17 19:18:17.040+03:00',
  participants: ['001', '002', '003', '004', '005'],
  sendMessage: (m: Message) => {
    set((s) => ({ messages: [...s.messages, m] }))
  },
  messages: [
    { id: '101',
      text: 'Hi team ✋',
      me: true,
      user: '001',
      date: '2024-08-17 11:31:00.040+03:00',
    },
    { id: '102',
      text: 'Anyone on for lunch today',
      me: true,
      user: '001',
      date: '2024-08-17 11:31:40.040+03:00'
    },
    { id: '103',
      text: "I'm down! Any ideas??",
      date: '2024-08-17 11:35:17.040+03:00',
      user: '002'
    },
    { id: '104',
      text: 'I am down for whatever!',
      me: true,
      user: '001',
      date: '2024-08-17 11:36:40.040+03:00'
    },
    { id: '105',
      text: 'I was thinking the cafe downtown',
      user: '003',
      date: '2024-08-17 11:45:40.040+03:00'
    },
    { id: '106',
      text: 'But limited vegan options @Janet!',
      user: '003',
      date: '2024-08-17 11:46:40.040+03:00'
    },
    { id: '107',
      text: 'Agreed',
      me: true,
      user: '001',
      date: '2024-08-17 11:52:40.040+03:00'
    },
    { id: '108',
      text: 'That works- I was actuallu planning to get a smoothie anyways',
      user: '004',
      date: '2024-08-17 12:03:40.040+03:00'
    },
    { id: '109',
      text: 'On for 12:30 PM then?',
      user: '005',
      date: '2024-08-17 12:04:40.040+03:00'
    },
  ]
}))
