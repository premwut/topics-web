'use client'
import styled from '@emotion/styled'
import { ActionButton, COLOR } from '../styled'
import { useEffect, useState } from 'react'
import { css, useTheme } from '@mui/material'

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: ${COLOR.GREEN_500};
  padding: 18px 32px;
  height: 24px;
`

const MainWrapper = styled.main`
  display: flex;
`

const Sidebar = styled.aside`
  width: 280px;
  height: 100%;
  background-color: ${COLOR.GRAY_100};
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`${theme.breakpoints.down('md')} {
    display: none;
  }`}
`

const SidebarItem = styled.div`
  padding: 8px 12px;
`

const ContentWrapper = styled.div`
  padding: 24px 16px;
  width: 100%
`

export default function TopicLayout({ children }) {
  const theme = useTheme()
  const handleClickSignIn = () => {
    window.location.assign('/login')
  }
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    setCurrentUser(sessionStorage.getItem('username'))
  }, [])

  return (
    <main>
      <Navbar>
        <div>a Board</div>
        <div>{currentUser ? currentUser : <ActionButton onClick={handleClickSignIn}>Sign In</ActionButton>}</div>
      </Navbar>
      <MainWrapper>
        <Sidebar theme={theme}>
          <SidebarItem>Home</SidebarItem>
          <SidebarItem>Our Blog</SidebarItem>
        </Sidebar>
        <ContentWrapper>{children}</ContentWrapper>
      </MainWrapper>
    </main>
  )
}