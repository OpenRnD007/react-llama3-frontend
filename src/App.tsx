import './App.css'
import { Loader } from './components'
import { Topic, Chat } from './features/'

function App() {

  return (
    <>
      <Loader />
      <div className="flex h-screen overflow-hidden">
        <div className="w-1/4 bg-white border-r border-gray-300">
          <Topic />
        </div>
        <Chat />
      </div>
    </>
  )
}

export default App
