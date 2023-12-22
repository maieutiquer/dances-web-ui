import { useQuery } from '@tanstack/react-query'

export const DancesList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['dancesData'],
    queryFn: () => fetch(`${import.meta.env.VITE_API_URL}/dances`).then((res) => res.json()),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <ul>
      {data.map(({ id, name }: { id: string; name: string }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  )
}
