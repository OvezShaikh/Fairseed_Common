import { Button } from '@mui/material'
import React from 'react'

function Index({ text }) {
    return (
        <Button
            sx={{
                background: '#219D80',
                color: "#FFFFFF",
                fontSize: "14px",
                fontFamily: 'satoshi',
                fontWeight: 500,
                textTransform: 'capitalize'

            }}

        >{text}</Button>
    )
}

export default Index

