"use client"
import { useEffect, useState } from "react";

export default function Topics() {
  let currentUser
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    currentUser = window.sessionStorage?.getItem('username')
    setIsReady(true)
  }, [])

  return (
    !isReady ?
      <h1>Loading...</h1> :
      <div><h1>Topics</h1></div>
  )
}