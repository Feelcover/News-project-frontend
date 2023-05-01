import { TextField } from '@material-ui/core'
import React from 'react'
import { MainLayout } from '../layouts/MainLayout'

const write = () => {
  return (
    <MainLayout hideComments>
        <div style={{backgroundColor:"F2F2F2"}}>]
        <TextField placeholder='заголовок'></TextField>
        </div>
        </MainLayout>
  )
}

export default write