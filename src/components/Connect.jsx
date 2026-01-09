
import MesssageForm from "./Form"

function Connect() {
    return (
        <section id="connect_with_me" className="md:mt-40 mt-40 dark:text-white">
            <p className="text-center text-2xl my-5">Connect with Me </p>
            <h2 className="text-center font-bolder text-6xl my-5">Get In Touch</h2>
            <p className="my-4 text-[#878787] dark:text-zinc-400 text-2xl text-center">I had love to her from you,if you have any questions, comments or feedback <br /> please use this form </p>
            <div className=" bg-[url(/icons/image 400.png)] w-full md:w-1/2 mx-auto">
                <MesssageForm />
            </div>
        </section>
    )
}

export default Connect