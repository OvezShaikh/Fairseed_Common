import { Button } from '@mui/material'
import React from 'react'

function Index({ text }) {
    return (
        <button
            // variant="text"
            style={{
                padding: '7px',
                borderRadius: '4px',
                background: '#219D80',
                color: "#FFFFFF",
                fontSize: "14px",
                fontFamily: 'satoshi',
                fontWeight: 500,
                textTransform: 'capitalize'




            }}

        >{text}</button>
    )
}

export default Index

