"use client"
import { useEffect, useState } from "react"
import './page.css'
import { API_URL } from "../constants"
import TopicCard from "./topic-card"

export default function Topics() {
  const [currentUser, setCurrentUser] = useState('')
  const [topicData, setTopicData] = useState(null)
  const [isReady, setIsReady] = useState(false)
  console.log(topicData)


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

  console.log('currentUser:', currentUser)

  return (
    !isReady ?
      <h1>Loading...</h1> :
      <div>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', width: '800px' }}>
          {topicData.map(topic => <TopicCard username={topic.username} title={topic.title} content={topic.content} commentNumber={topic.comments?.length} />)}
        </div>
      </div>
  )
}