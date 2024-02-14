import { Button } from '@mui/material'
import React from 'react'

function Index({ text, icon }) {
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
                textTransform: 'capitalize',
                display: 'flex',
                gap: 4,
                justifyItems: 'center',
                justifyContent: 'center'




            }}

        >{icon}{" "}{text}</button>
    )
}

export default Index

