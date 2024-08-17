import React from 'react'
import { Avatar } from 'antd'

import { stringToColor } from '@/utils/stringToColor'
import { useContacts } from '@/hooks/useContacts'

export const Participants = ({ participants }: {participants: string[]}) => {
  const contacts = useContacts((s) => s.contacts)
  return (
    <Avatar.Group style={{ alignItems: 'center' }}>
      { participants.map((p) => {
        const u = contacts[p]
        return <Avatar src={u.avatar} key={u.name} style={{ backgroundColor: stringToColor(u.name) }}>{u.name[0]}</Avatar>
      })}
    </Avatar.Group>
  )
}
