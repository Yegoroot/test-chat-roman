import React from 'react'
import './index.css'
import { Jost } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'

const jost = Jost({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en" className={jost.className}>
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
)

export default RootLayout
