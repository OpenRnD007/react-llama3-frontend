import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL
export const uploadKnowledgeBank = async (title: string, file: any) => {
    const formData = new FormData()
    formData.append("file", file.files[0])
    formData.append("collection_name", title)
    formData.append("filetype", "pdf")
    return await axios.post(VITE_API_URL + '/api/fileupload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).finally(() => {
        file.value = ""
    })
}

export const askQuestion = async (collection_name: string, question: string) => {
    return await axios.post(
        VITE_API_URL + '/api/askquestion',
        {
            question,
            collection_name
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

}