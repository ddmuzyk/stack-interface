import { useState } from 'react'
import './App.css'
import { CircularProgress, Pagination } from '@mui/material'

function App() {
  const [page, setPage] = useState(1)

  return (
    <main>
      <CircularProgress
        sx={{
          width: '100px !important',
          height: '100px !important',
        }}
      />
      <Pagination sx={{
        '& .MuiPaginationItem-root': {
          marginTop: '60px',
        }
        
      }} count={10000} color="primary" onChange={(e, value) => {
        setPage(value)
        console.log(value)
      }}/>
    </main>
  )
}

export default App
