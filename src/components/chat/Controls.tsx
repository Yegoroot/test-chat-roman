import { useBears } from '@/hooks/useBears'
import { Button } from 'antd'

export const Controls = () => {
  const increasePopulation = useBears((state) => state.increasePopulation)

  return <Button type="primary" onClick={increasePopulation}>Button</Button>
}
