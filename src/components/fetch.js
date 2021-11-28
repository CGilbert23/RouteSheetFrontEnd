import React, {useEffect, useState} from "react"


const useFetch = (url) => {
    const [data,setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(()=> {
        const abortController = new AbortController()

        setTimeout(()=>{
            fetch(url, {signal : abortController.signal})
            .then(res=> {
                if(!res.ok){
                    throw Error("could not fetch data")
                }
                return res.json();
            })
            .then(data => {
                setData(data.data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                if (err.name === "AbortError"){
                    console.log("Fetch Aborted")
                } else {
                setIsPending(false)
                setError(err.message)
                }
                
            })
        },1000)

        return () => abortController.abort()
    }, [url])

    return {data, setData, isPending, error}
}

export default useFetch;