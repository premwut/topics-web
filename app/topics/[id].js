import { useRouter } from "next/router"

export default function TopicDetail() {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            <h1>Topic id: {id}</h1>
        </div>
    ) 
}