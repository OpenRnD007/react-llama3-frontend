import { useTopicStore } from "../../store/topic"
import { TopicCard, TopicHeader } from "./components"

const Topic = () => {
    const topics = useTopicStore((state) => state.topics)
    return (
        <>
            <TopicHeader />
            <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
                {topics.map(topic => <TopicCard key={topic.id} topic={topic} />)}
            </div>
            <div id="addtopic" />
        </>
    )
}

export default Topic