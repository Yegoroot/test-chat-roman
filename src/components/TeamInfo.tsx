import { Flex, Typography } from 'antd'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

interface Props {
  name: string
  lastseen: string
}

const { Text, Title } = Typography

export const TeamInfo = ({ lastseen, name }: Props) => (
  <Flex vertical>
    <Title level={4} style={{ marginTop: 0, marginBottom: 4 }}>{name}</Title>
    <Text type="secondary">
      {`Last seen ${dayjs(lastseen).fromNow()}`}
    </Text>
  </Flex>
)
