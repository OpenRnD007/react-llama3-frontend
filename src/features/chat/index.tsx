import { ChatHeader, ChatReqRes, ChatSend } from "./components"

const Chat = () => {
    return (
        <div className="flex-1">
            <ChatHeader />
            <ChatReqRes />
            <ChatSend />
        </div>
    )
}

export default Chat