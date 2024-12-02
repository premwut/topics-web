'use client'
import styled from '@emotion/styled'
import { COLOR } from '../styled'

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`
const ProfileSection = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 24px;
`

const Avatar = styled.div`
  border-radius: 50%;
  background-color: gray;
  width: 31px;
  height: 31px;
`
const TopicTitle = styled.h1`
  color: ${COLOR.TEXT_BLACK};
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`

const TopicContent = styled.p`
  color: ${COLOR.TEXT_BLACK};
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 14.52px;
  text-align: left;
`

const CommentText = styled.p`
  color: ${COLOR.GRAY_300};
`

export default function TopicCard({ username, title, content, commentNumber }) {
  console.log('[TopicCard] username:', username)
  return (
    <Wrapper>
      <ProfileSection>
        <Avatar />
        <div style={{ color: COLOR.GRAY_300, alignSelf: 'center' }}>{username}</div>
      </ProfileSection>
      <TopicTitle>{title}</TopicTitle>
      <TopicContent>{content}</TopicContent>
      <CommentText>{commentNumber} Comments</CommentText>
    </Wrapper>
  )
}