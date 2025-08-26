import { createUser } from "./actions"

export default function Users() {

    return (
        <div>
            <h1>Users</h1>

            <form action={createUser}>

                <label htmlFor="name">
                </label>

                <input name="name" type="text" />
            </form>
        </div>
    )
}