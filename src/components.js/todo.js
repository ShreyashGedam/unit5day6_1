import { useEffect, useState } from "react"

export const Todo = () =>
{
    const [todo , setTodo] = useState([])
    const [text , setText] = useState("")
    const [page , setPage] = useState(1)

    useEffect( () =>
    {
        console.log("Todo is mounted")
        getData()

        return function()
        {
            console.log("Todo is unmounted")
        } 
    },[page])

    async function getData()
    {
        var data1 = await fetch(`http://localhost:8000/users?_page=${page}&_limit=3`)
        var data2 = await data1.json()
        setTodo(data2)
    }
    return (
        <div>
            <input 
            onChange={ (e) => setText(e.target.value)}
            type="text" placeholder="Enter Todos"/>
            <button
            onClick={ () =>{
                const payload = {
                    name : text
                }
                fetch("http://localhost:8000/users" , {
                    method : "POST",
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify(payload)
                }).then(() => {
                    getData()
                })
            }}
            >Add Todos</button>
            {todo.map( (e) => (
                <div>{e.name}</div>
            ))}
            <button onClick={ () => setPage(page -1 )}>Prev</button>
            <button onClick={ () => setPage(page + 1)}>Next</button>
        </div>
    )
}