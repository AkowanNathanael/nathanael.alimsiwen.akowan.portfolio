

import Image from "next/image"

function Footer() {
    return (

        < section id="footer" className="flex justify-center items-center mt-30 flex-col dark:text-white" >
            <div className="flex text-center gap-4">
                <span className="text-center text-6xl md:text-8xl"> Nathanael</span> <span className="  rounded-4xl p-1 bg-pink-500 ">.</span>
            </div>
            <div className="text-center text-2xl"> <Image className="inline-block" width={20} height={20} src={"/icons/mail_icon.png"} alt="email-icon" /> danyonathaniel7@gmail.com</div>
        </section >
    )
}

export default Footer