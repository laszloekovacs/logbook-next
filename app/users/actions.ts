export async function createUser(formData: FormData) {
    "use server"

    const name = formData.get('name')

    console.log("recieved: " + name )

    // revalidate if users are displayed on same page
    // reavalidatePath("/users")
}