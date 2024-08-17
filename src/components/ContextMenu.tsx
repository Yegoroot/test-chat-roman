import React from 'react'
import { MoreOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'

interface Props {
  items: MenuProps['items']
}

export const ContextMenu = ({ items }: Props) => (
  <Dropdown menu={{ items }} trigger={['click']}>
    <MoreOutlined style={{ fontSize: 30 }} rotate={90} />
  </Dropdown>
)
