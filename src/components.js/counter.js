import { useEffect, useState } from "react"

export const Counter = () =>
{
    const [count , setCount] = useState(10)

    useEffect( () =>{
      var id=  setInterval( () =>{
            setCount( (pre) =>
            {
                if(pre == 0)
                {
                    clearInterval(id)
                    return 0
                }
                return pre-1
            }) 
        } , 500)

        return function()
        {
            clearInterval(id)
        }
    } , [])

    return (
        <div>
          <h1>Count : {count}</h1>
        </div>
    )
}