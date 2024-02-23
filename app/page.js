"use client"
import React from 'react'
import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { GridColumn, Divider, Grid, Segment } from 'semantic-ui-react'

const page = () => {
  const [row, setRow] = useState()
  const [col, setCol] = useState()
  const handleRow=(e)=>{
       setRow(e.target.value)
  }
  const handleCol=(e)=>{
     setCol(e.target.value)
  }
  const generatetable=(row, col)=>{
    const TotalTable=[]
    for (let index = 0; index < row; index++) {
      const column =[]
      for (let j = 0; j < col; j++) {
        column.push(<td style={{ width: "60px", height: "30px", border: "1px solid white" }}></td>)
        
      }
      TotalTable.push(<tr>{column}</tr>)
    }
    return TotalTable
    
  }
  
  return (
    <div style={{paddingTop:"10%"}}>
      <Segment inverted>
    <Grid columns={2} >
      <GridColumn>
      <label>Add row</label>
      <input type='number' onChange={handleRow}></input>
      <label>Add column</label>
      <input type='number' onChange={handleCol}></input>
      </GridColumn>
      <GridColumn style={{with:"100%"}}>
      <table>
        {generatetable(row,col)}
      </table>
      </GridColumn>
    </Grid>

    <Divider vertical>And</Divider>
  </Segment>
    </div>
  )
}

export default page