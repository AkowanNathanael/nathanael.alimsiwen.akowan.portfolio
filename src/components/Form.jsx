"use client"
import { processForm } from "@/actions/pocessform"
import { useActionState } from "react"


export default function MesssageForm() {
    const [state, action, isPending] = useActionState(processForm, undefined)
    return (
        <form action={action} className="w-full flex flex-col items-center m-1 justify-center border p-4 dark:text-white"  >
            <div className="grid grid-rows-2 md:grid-cols-2 gap-4 w-full mx-2">
                <input required className="w-full rounded border focus:border-amber-200 outline-none bg-white dark:bg-zinc-700 text-black dark:text-white p-4 border-[#878787] dark:border-zinc-600" type="text" placeholder="Enter your name" name="name" id="name" />
                <input required className="w-full focus:border-amber-200 rounded border outline-none bg-white dark:bg-zinc-700 text-black dark:text-white p-4 border-[#878787] dark:border-zinc-600" type="text" placeholder="Enter your email" name="email" id="email" />
            </div>
            <textarea required cols={80} rows={10} className="w-full focus:border-amber-200 border mx-2 mt-4 rounded outline-none bg-white dark:bg-zinc-700 text-black dark:text-white p-4 border-[#878787] dark:border-zinc-600" placeholder="Enter your message" name="message" id="message"></textarea>

            <input className="block rounded-4xl bg-black text-white mt-10 px-10 py-4" type="submit" value={isPending ? "loading" : "submit now"} />
        </form>
    )
}
