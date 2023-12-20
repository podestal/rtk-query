import React from "react"
import { useRemoveCabinMutation, useUpdateCabinMutation } from "../api/apiSlice"

const Cabin = (props) => {

    const [edit, setEdit] = React.useState(false)
    const [cabinName, setCabinName] = React.useState(props.cabin.name)
    const [removeCabin] = useRemoveCabinMutation()
    const [updateCabin] = useUpdateCabinMutation()

    const handleUpdate =() => {
        console.log(props.cabin.id, "Updated");
        updateCabin({
            id: props.cabin.id,
            name: cabinName,
        })
        setEdit(!edit)
    }

    const handleDelete = () => {
        console.log(props.cabin.id, "deleted")
        removeCabin({id: props.cabin.id})
    }


    return (
        <div>
            {edit ? 
                <input 
                    type="text"
                    value={cabinName}
                    onChange={e => setCabinName(e.target.value)}
                /> 
                : 
                <span>{props.cabin.name}</span>}
            {!edit && <button disabled={edit} onClick={() => setEdit(!edit)}>Edit</button>}
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}

export default Cabin