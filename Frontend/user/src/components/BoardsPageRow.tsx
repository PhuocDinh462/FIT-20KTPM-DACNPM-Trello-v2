import { Grid, Pagination } from '@mui/material'

import { BoardSubset } from '~/pages'
import BoardsPageCard from './BoardsPageCard'
import BoardsPageCardAdd from './BoardsPageCardAdd'
import React, { useState } from 'react'

interface BoardsPageRowProps {
  boards: BoardSubset[]
  enableAddBoard: boolean
}

export default function BoardsPageRow({ boards, enableAddBoard }: BoardsPageRowProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 4

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
  }

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentBoards = boards.slice(startIndex, endIndex)

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {currentBoards.map((board: BoardSubset, index: number) => (
          <Grid item xs={3} key={index}>
            <BoardsPageCard board={board} />
          </Grid>
        ))}
        {enableAddBoard ? (
          <Grid item xs={3}>
            <BoardsPageCardAdd />
          </Grid>
        ) : null}
      </Grid>
      <Grid container justifyContent='center' mt={3}>
        <Pagination count={Math.ceil(boards.length / pageSize)} page={currentPage} onChange={handleChange} />
      </Grid>
    </React.Fragment>
  )
}
