import { Topic, useTopicStore } from "../../../store/topic"

const TopicCard = ({ topic }: { topic: Topic }) => {
    const setSelectedTopic = useTopicStore((state) => state.setSelectedTopic)
    const selectedTopic = useTopicStore((state) => state.selectedTopic)
    return (
        <div
            onClick={() => setSelectedTopic(topic)}
            className={`flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md ${selectedTopic && selectedTopic.id === topic.id ? "bg-gray-100" : ""}`}
        >
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                <img src={`https://picsum.photos/200?t=${topic.id}`} alt={`Topic: ${topic.name}`} className="w-12 h-12 rounded-full" />
            </div>
            <div className="flex-1">
                <h2 className="text-lg font-semibold">{topic.name}</h2>
                <p className="text-gray-600">{topic.description}</p>
            </div>
        </div>
    )
}

export default TopicCard