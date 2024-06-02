import { useRef } from "react"
import { useTopicStore } from "../../../store/topic"
import { askQuestion } from "../utils"

const ChatSend = () => {
    const selectedTopic = useTopicStore((state) => state.selectedTopic)
    const setMessage = useTopicStore((state) => state.setMessage)
    const messageRef = useRef<HTMLInputElement>(null)
    const showLoader = useTopicStore((state) => state.showLoader)

    const sendMessage = async () => {
        const question = messageRef.current!.value ? messageRef.current!.value.trim() : ""
        if (question && selectedTopic.id) {
            showLoader(true)
            const tname = selectedTopic.name.replace(" ", "_")
            const info = await askQuestion(tname, question).finally(() => showLoader(false))
            if (info && info.data) {
                setMessage({
                    "messageid": new Date().getTime(),
                    question,
                    "reply": info.data.answer,
                    "time": new Date().toISOString(),
                    "topicid": selectedTopic.id
                })
            }
            messageRef.current!.value = ""
        }
    }

    return (
        <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
            <div className="flex items-center">
                <input ref={messageRef} type="text" placeholder="Type a message..." className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500" />
                <button onClick={sendMessage} className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button>
            </div>
        </footer>
    )
}

export default ChatSend