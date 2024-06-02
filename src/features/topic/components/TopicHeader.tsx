import { useRef } from 'react';
import { useModal } from 'react-hooks-use-modal';
import { CButton } from '../../../components';
import { useTopicStore } from '../../../store/topic';

const TopicHeader = () => {
  const [Modal, open, close] = useModal('addtopic', {
    preventScroll: true,
    focusTrapOptions: {
      clickOutsideDeactivates: true,
    },
  });
  
  return (
    <header className="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
      <h1 className="text-2xl font-semibold">AnyTopic AI</h1>
      <div className="relative">
        <button onClick={open} className="focus:outline-none">
          <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H11V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V9ZM7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782Z" fill="#ffffff" />
          </svg>
        </button>
      </div>
      <Modal>
        <AddTopic close={close} />
      </Modal>
    </header>
  )
}

const AddTopic = ({ close }: { close: React.MouseEventHandler<HTMLButtonElement> | any }) => {
  const setTopic = useTopicStore((state) => state.setTopic)
  const titleRef = useRef<HTMLInputElement>(null);
  const descptRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = titleRef.current!.value ? titleRef.current!.value.trim() : ""
    const description = descptRef.current!.value ? descptRef.current!.value.trim() : ""
    if (!name) {
      return
    }
    setTopic({
      name,
      description,
      id: new Date().getTime()
    })
    close()
  };



  return (
    <div className="w-[500px] py-12 bg-gray-700 transition duration-150 ease-in-out z-10" id="modal">
      <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <form onSubmit={handleSubmit}>
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Topic Details</h1>
            <label
              htmlFor="name"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Topic Name</label>

            <input
              ref={titleRef}
              id="name"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Analyse your finance"
            />

            <label
              htmlFor="description"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Topic Description</label>

            <input
              ref={descptRef}
              id="description"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Last year total saving and expenses" />

            <div className="flex items-center justify-start w-full">
              <CButton label='Submit' type='submit' />
            </div>
          </form>

          <button onClick={close} className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" aria-label="close modal" role="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

        </div>
      </div>
    </div>
  )
}


export default TopicHeader