import React from "react"
import { useGetCabinsQuery, useAddCabinMutation } from "../api/apiSlice"
import Cabin from "./Cabin"

const CabinList = () => {

    const [newCabin, setNewCabin] = React.useState("")
    const [addCabin] = useAddCabinMutation()

    const { data: cabins,
            isLoading,
            isSuccess,
            isError,
            error
    } = useGetCabinsQuery()
    
    let content

    if (isLoading) {
        content = <p>Loading ...</p>
    } else if (isError) {
        content = <p>{error}</p>
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(newCabin, "added")
        addCabin({ name: newCabin })
        setNewCabin("")
    }

    return (
        <>
            <h1>Cabin List</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="new cabin"
                    value={newCabin}
                    onChange={e => setNewCabin(e.target.value)}
                />
                <button type="submit">Add Cabin</button>
            </form>
            {isSuccess ? cabins.map(cabin => (
                <Cabin 
                    key={cabin.id}
                    cabin={cabin}
                />
            )) 
            : 
            content}
        </>
    )
}

export default CabinList