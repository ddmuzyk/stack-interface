import { useState, useEffect } from 'react'
import './App.css'
import { CircularProgress, Pagination, TablePagination } from '@mui/material'
import BasicTable from './components/Table/Table'
import NumberInputBasic from './components/Input/NumberInput'

function App() {
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [size, setSize] = useState(window.innerWidth >= 350 ? 'medium' : 'small');

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth >= 500 ? 'medium' : 'small');
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }
  , [page])

  useEffect(() => {

  }, )

  return (
    <main>
      <div>
        <NumberInputBasic/>
      </div>
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
        
      }} size={size} count={10000} color="primary" onChange={(e, value) => {
        setPage(value)
        console.log(value)
      }}/>
    </main>
  )
}

export default App
