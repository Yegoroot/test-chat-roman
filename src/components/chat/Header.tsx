import { Flex } from 'antd'
import type { MenuProps } from 'antd'

import { useTeam } from '@/hooks/useTeam'
import { Participants } from '@/components/Participants'
import { TeamInfo } from '../TeamInfo'
import { ContextMenu } from '../ContextMenu'

const items: MenuProps['items'] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
]

export const Header = () => {
  const participants = useTeam((s) => s.participants)
  const teamName = useTeam((s) => s.name)
  const lastseen = useTeam((s) => s.lastseen)

  return (
    <Flex style={{ padding: 16, paddingBottom: 0, justifyContent: 'space-between' }}>
      <Participants participants={participants} />
      <TeamInfo name={teamName} lastseen={lastseen} />
      <ContextMenu items={items} />
    </Flex>
  )
}
