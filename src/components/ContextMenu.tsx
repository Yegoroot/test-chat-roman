import React, { ReactElement } from 'react'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'

interface Props {
  items: MenuProps['items']
  children: ReactElement
}

export const ContextMenu = ({ items, children }: Props) => (
  <Dropdown menu={{ items }} trigger={['contextMenu']}>
    {children}
  </Dropdown>
)
