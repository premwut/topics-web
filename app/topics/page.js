"use client"
import { useEffect, useState } from "react"
import styled from '@emotion/styled'
import './page.css'
import { API_URL } from "../constants"
import TopicCard from "./topic-card"
import { ActionButton, StyledTextarea, StyledTextField } from "../styled"
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

const FilterBar = styled.div`
  margin-bottom: 8px;
`

const PostsWrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  width: 800px;
  margin: auto;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

export default function Topics() {
  const [currentUser, setCurrentUser] = useState('')
  const [topicData, setTopicData] = useState(null)
  const [isReady, setIsReady] = useState(false)


  const [isCreatePostDialogOpen, setIsCreatePostDialogOpen] = useState(false)
  const [createPostTitleValue, setCreatePostTitleValue] = useState('')
  const [createPostContentValue, setCreatePostContentValue] = useState('')

  /* Unfortunately, My design has a mistake. My first thought is to use sessionStorage to easily save 
  and retrieve username, but it server side has no access to it. I've done too much to turn back so I just go with client side approach
  which could may be considered an anti-pattern in NextJS and eliminate the purpose of the framework.
*/
  useEffect(() => {
    setCurrentUser(window.sessionStorage?.getItem('username'))
    fetch(`${API_URL}/topics`)
      .then((res) => res.json())
      .then((data) => {
        setTopicData(data)
        setIsReady(true)
      })
  }, [])

  const createTopicRequest = ({ username, title, content }) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    fetch(`${API_URL}/topics`, { method: 'POST', body: JSON.stringify({ username, title, content }), headers: myHeaders })
      .then((res) => res.json())
      .then((data) => {
        topicData.push(data)
        setTopicData(topicData)
        setIsCreatePostDialogOpen(false)
      })
  }

  const handleCreatePost = () => {
    createTopicRequest({ username: currentUser, title: createPostTitleValue, content: createPostContentValue})
  }

  return !isReady ?
    <h1>Loading...</h1> :
    (
      <Wrapper>
        <FilterBar>
          <ActionButton style={{ alignSelf: 'flex-end', marginLeft: 'auto' }} onClick={() => setIsCreatePostDialogOpen(true)}>Create +</ActionButton>
        </FilterBar>
        <PostsWrapper>
          {topicData.map(topic => <TopicCard key={topic.id} username={topic.username} title={topic.title} content={topic.content} commentNumber={topic.comments?.length} />)}
        </PostsWrapper>
        <Dialog open={isCreatePostDialogOpen} onClose={() => setIsCreatePostDialogOpen(false)}>
          <DialogTitle>Create Post</DialogTitle>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', width: '500px' }}>
            <StyledTextField placeholder="Title" value={createPostTitleValue} onChange={e => setCreatePostTitleValue(e.target.value)} />
            <StyledTextarea style={{ height: '260px' }} placeholder="What's on your mind..." value={createPostContentValue} onChange={e => setCreatePostContentValue(e.target.value)} />
          </DialogContent>
          <DialogActions>
            <ActionButton variant="secondary"> Cancel</ActionButton>
            <ActionButton variant="primary" onClick={handleCreatePost}>Post</ActionButton>
          </DialogActions>
        </Dialog>
      </Wrapper>
    )
}