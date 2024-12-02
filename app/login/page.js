"use client"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useState } from "react"
import styled from '@emotion/styled'

const PrimaryButton = styled(Button)`
    background-color: green;
`

export default function Login() {
    const [username, setUsername] = useState('')

    const onClickLogin = () => {
        sessionStorage.setItem('username', username)
        window.location.assign('/topics')
    }

    return (
        <div>
            <h1>Hello Login</h1>
            <TextField type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder="please enter username" />
            <PrimaryButton type='button' onClick={onClickLogin}>Login</PrimaryButton>
        </div>
    )
}