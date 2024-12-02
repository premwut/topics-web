"use client"
import { useState } from "react"
import { ActionButton, StyledTextField } from "../styled"
import { Container, FormSectionContainer, FormWrapper, GraphicSectionContainer, Header } from "./styled"
import { useTheme } from "@mui/material"
import './page.css'

export default function Login() {
  const [username, setUsername] = useState('')

  const theme = useTheme()

  const onClickLogin = () => {
    sessionStorage.setItem('username', username)
    window.location.assign('/topics')
  }

  return (
    <Container theme={theme}>
      <FormSectionContainer theme={theme}>
      <Header>Sign in</Header>
      <FormWrapper>
        <StyledTextField type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder="please enter username" />
        <ActionButton variant="primary" type='button' onClick={onClickLogin}>Login</ActionButton>
      </FormWrapper>
      </FormSectionContainer>
      <GraphicSectionContainer><img src="/login-page-graphic.svg" /></GraphicSectionContainer>
    </Container>
  )
}