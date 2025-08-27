import { createUser } from "./actions"
import { CreateUserForm } from "./create-user-form"


export default function Users() {


    return (
        <div>
            <CreateUserForm createUser={createUser} />
        </div>
    )
}