import { useQuery } from '@tanstack/react-query'
import { Grid } from '../components/Grid'
import { useState } from 'react'
import { ColDef } from 'ag-grid-community'

export const DancesList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['dancesData'],
    queryFn: () => fetch(`${import.meta.env.VITE_API_URL}/dances`).then((res) => res.json()),
  })

  const [colDefs] = useState<ColDef[]>([{ field: 'id' }, { field: 'name' }])

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return <Grid rowData={data} colDefs={colDefs} />
}
