import { useTopicStore } from "../store/topic"

const Loader = () => {
    const loader = useTopicStore((state) => state.loader)
    return (
        <>
            <div className={`${!loader ? "hidden" : ""} overflow-y-auto bg-blue-600	opacity-25 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-0.1rem)] max-h-full`}>
            </div>
            <div className={`${!loader ? "hidden" : ""} absolute flex justify-center items-center bottom-[100px] right-[50px]`}>
                <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
                <img src="https://www.svgrepo.com/show/509009/avatar-thinking-3.svg" className="rounded-full h-28 w-28" />
            </div>
        </>
    )
}

export default Loader