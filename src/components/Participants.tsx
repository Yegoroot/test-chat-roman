import React from 'react'
import { Avatar } from 'antd'

import { stringToColor } from '@/utils/stringToColor'

export interface Participant {
  id: string,
  name: string
  avatar?: string
}

export const Participants = ({ participants }: {participants: Participant[]}) => (
  <Avatar.Group style={{ alignItems: 'center' }}>
    { participants.map((p) => (
      <Avatar src={p.avatar} key={p.id} style={{ backgroundColor: stringToColor(p.name) }}>{p.name[0]}</Avatar>
    ))}
  </Avatar.Group>
)
