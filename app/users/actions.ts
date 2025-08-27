"use server"
import z from "zod"



export async function createUser(formData: FormData) {

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

type FormState = {
    message: string
}

export async function onFormAction(prevState: FormState, data: FormData) {
    console.log("server action called")

    return {
        message: "form data processed"
    }
}