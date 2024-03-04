import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Backdrop,
  CircularProgress,
  colors
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { TrelloApi } from '@trello-v2/shared'

export function HomePage() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<TrelloApi.BoardApi.GetallBoardResponse['data']>([])

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      await axios
        .get('http://localhost:3333/api/board')
        .then((res) => {
          setData(res.data.data)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
    })()
  }, [])

  const handleDelete = async (id: string | undefined) => {
    if (!id) return

    setLoading(true)
    await axios
      .delete(`http://localhost:3333/api/board/deleteBoard/${id}`)
      .then(() => {
        setData(data.filter((item) => item._id !== id))
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleAdd = async () => {
    const body = {
      workspace_id: 'string',
      name: 'string',
      visibility: 'private'
    }

    setLoading(true)
    await axios
      .post(`http://localhost:3333/api/board/createBoard`, body)
      .then((res) => {
        console.log(res.data)
        setData([...data, res.data.data])
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <IconButton aria-label='add' onClick={() => handleAdd()}>
        <AddIcon />
      </IconButton>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>{row._id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <IconButton aria-label='delete' onClick={() => handleDelete(row._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Backdrop sx={{ color: colors.grey, zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </>
  )
}
