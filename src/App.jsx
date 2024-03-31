import { useState, useEffect } from 'react'
import './App.css'
import { CircularProgress, Pagination, TablePagination } from '@mui/material'
import BasicTable from './components/Table/Table'

function App() {
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }
  , [page])

  return (
    <main>
      {isLoading ? <CircularProgress
        sx={{
          width: '100px !important',
          height: '100px !important',
          marginBottom: '50px',
          marginTop: '50px',
        }}
      /> : 
      <BasicTable/>
      }
      <Pagination sx={{
        '& .MuiPaginationItem-root': {
          marginBottom: 'auto',
        }
        
      }} count={10000} color="primary" onChange={(e, value) => {
        setPage(value)
        console.log(value)
      }}/>
    </main>
  )
}

export default App
