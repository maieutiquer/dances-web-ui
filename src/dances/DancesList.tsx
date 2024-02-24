import { useQuery, useMutation } from '@tanstack/react-query'
import { Grid } from '../components/Grid'
import { useState } from 'react'
import { ColDef } from 'ag-grid-community'

export const DancesList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['dancesData'],
    queryFn: () => fetch(`${import.meta.env.VITE_API_URL}/dances`).then((res) => res.json()),
  })

  const { mutate } = useMutation({
    mutationFn: () => fetch(`${import.meta.env.VITE_API_URL}/dances/csv`, { method: 'post' }).then((res) => res.json()),
  })

  const [colDefs] = useState<ColDef[]>([{ field: 'id' }, { field: 'name' }, { field: 'region' }])

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <button
        className="reset-data-button"
        onClick={() => {
          mutate()
        }}
      >
        Reset data from CSV
      </button>
      <Grid rowData={data} colDefs={colDefs} />
    </>
  )
}
