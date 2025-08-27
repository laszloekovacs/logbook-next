import { useFormState } from "react-dom";
import { onFormAction } from "./actions"
import { useState } from "react";

export function OtherForm() {
    const [first, setFirst] = useState("")

    const [state, action] = useFormState(onFormAction, {
        message: ""
    })


    return (
        <form action={action}>
            <input type="text" name="first" value={first} onChange={(e) => setFirst(e.target.value)} />
            <button type="submit">Submit</button>

            <div>{state.message}</div>
        </form>
    )
}