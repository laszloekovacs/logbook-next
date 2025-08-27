'use client'


export const CreateUserForm = ({
    createUser,
}: {
    createUser: (formData: FormData) => void
}) => {

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