import { MouseEventHandler } from "react"

const CButton = ({ type, label, onClick }: { type: 'submit' | 'button', label: string, onClick?: MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
        >{label}</button>
    )
}

export default CButton