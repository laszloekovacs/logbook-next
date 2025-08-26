import z from "zod"



export async function createUser(formData: FormData) {
    "use server"

    const createUserSchema = z.object({
        name: z.string()
    })

    const validatedFields = createUserSchema.safeParse({
        name: formData.get("name")
    })

    console.log(validatedFields)
    
    // revalidate if users are displayed on same page
    // reavalidatePath("/users")
}