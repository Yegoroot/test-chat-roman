import { useBears } from '@/hooks/useBears'

export const Body = () => {
  const bears = useBears((state) => state.bears)
  return (
    <h1>
      {bears}
      {' '}
      around here...
    </h1>
  )
}
