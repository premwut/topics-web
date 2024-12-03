'use client'
import './page.css'

export default function TopicDetail({ params = {} }) {
    const { id } = params
    return (
        <div>
            <h1>Topic id: {id}</h1>
        </div>
    ) 
}