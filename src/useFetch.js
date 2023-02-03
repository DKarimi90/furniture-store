import {useState, useEffect} from 'react'

function useFetch(url) {

    const [furniture, setFurniture] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null) 


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error("Resource not found!")
                }
                return res.json()
            })
            .then(data => {
                setFurniture(data)
                setIsPending(false)
                setError(null)
            })
            .catch((err) => {
                setError(err.message)
                setIsPending(false)
            })
        })
    }, [url])
  
  
    return {furniture, isPending, error}
}

export default useFetch