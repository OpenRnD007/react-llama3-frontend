import { useRef } from "react"
import { useTopicStore } from "../../../store/topic"
import { uploadKnowledgeBank } from "../utils"

const ChatHeader = () => {
    const selectedTopic = useTopicStore((state) => state.selectedTopic)
    const fileref = useRef<HTMLInputElement>(null)
    const showLoader = useTopicStore((state) => state.showLoader)
    return (
        <header className="bg-white p-4 text-gray-700 flex items-center">
            <h1 className="text-2xl font-semibold">{selectedTopic.name}</h1>
            <input
                ref={fileref}
                className="ml-2 block p-2 w-[300px] text-sm text-gray-900 border rounded-md cursor-pointer bg-[#3b82f6] focus:outline-none"
                id="file_input"
                name="file"
                type="file"
                accept=".pdf, .csv, .json"
            />

            <button onClick={() => {
                if (fileref.current && fileref.current.files && fileref.current.files[0]) {
                    showLoader(true)
                    const tname = selectedTopic.name.replace(" ", "_")
                    uploadKnowledgeBank(tname, fileref.current)
                        .finally(() => showLoader(false))
                }
            }} className="right-2 bg-[#3b82f6] text-white p-2 rounded-md ml-2 flex">
                Upload
            </button>
        </header>
    )
}

export default ChatHeader