"use client"
import TextField from "@mui/material/TextField"
import { useState } from "react"
import { ActionButton } from "../styled"

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
      <ActionButton variant="primary" type='button' onClick={onClickLogin}>Login</ActionButton>
    </div>
  )
}