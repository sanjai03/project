import React from 'react'
import axios from 'axios'

//

import {
  useQuery,
  useQueryClient,
  useMutation,
 
} from 'react-query'

import LatestPost from '../components/LatestPost'



export default function Loader() {

   
    const queryClient = useQueryClient()
    //const [intervalMs, setIntervalMs] = React.useState(1000)
    //const [value, setValue] = React.useState('')
  
    const { status, data, error, isFetching } = useQuery(
      'get post',
      async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return res.data
      },
      {
        // Refetch the data every second
        refetchInterval: 1000,
      }
    )
  
   /*  const addMutation = useMutation(value => fetch(`/api/data?add=${value}`), {
      onSuccess: () => queryClient.invalidateQueries('get post'),
    })
  
    const clearMutation = useMutation(() => fetch(`/api/data?clear=1`), {
      onSuccess: () => queryClient.invalidateQueries('get post'),
    }) */
    
    if (status === 'loading') return (
        <div className="text-center mt-5"><div className="spinner-grow text-primary mr-1"></div>
        <div className="spinner-grow text-primary mr-1"></div>
        <div className="spinner-grow text-primary mr-1"></div>
        <div className="spinner-grow text-primary mr-1"></div>
        <div className="spinner-grow text-primary mr-1"></div></div>
    )
    if (status === 'error') return <div className="text-center mt-5">Error: {error.message} </div>
  console.log(data)
    return (
      <div>
        
        {data && data.length && <LatestPost posts={data} />}
        
        
      </div>
    )
  
  
}

