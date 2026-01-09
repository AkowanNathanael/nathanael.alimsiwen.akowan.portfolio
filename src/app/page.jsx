"use client"
import Card from "@/components/Card"
import Connect from "@/components/Connect"
import Footer from "@/components/Footer"
import MesssageForm from "@/components/Form"
import LatestWorkCard from "@/components/LatestWorkCard"
import ServiceCard from "@/components/ServiceCard"
import { connectReactDebugChannel } from "next/dist/server/dev/debug-channel"
import Image from "next/image"
import Link from "next/link"
import { useId } from "react"

export default function Home() {
    const latestwork = [
        {
            "id": useId(),
            "icon": "/project/wunitira_1.png",
            "title": "Wuntira Agribusiness",
            "description": "A modern agribusiness platform focused on sustainable farming, crop management, and agricultural innovation.",
            "url": "https://wuntiraagri.com/",
            "images": ["/nat.jpg", "/nat2.jpg"]
        },
        {
            "id": useId(),
            "icon": "/project/ticket_1.png",
            "title": "Ticket Management System",
            "description": "A digital solution for managing event tickets, user registrations, and secure access control.",
            "url": "https://ems.zenescorp.com/login",
            "images": ["/nat.jpg", "/nat2.jpg"]
        },
        {
            "id": useId(),
            "icon": "/project/cyber_2.png",
            "title": "Cyber Security Awareness Platform",
            "description": "An educational platform designed to train users on cybersecurity best practices, threats, and safe online behavior.",
            "url": "https://cms.zenescorp.com",
            "images": ["/nat.jpg", "/nat2.jpg"]
        },
        {
            "id": useId(),
            "icon": "/project/compost_2.jpeg",
            "title": "Smart Compost Monitoring System (IoT)",
            "description": "An IoT-based system for monitoring compost conditions such as temperature, moisture, and decomposition progress.",
            "url": "https://cms.zenescorp.com",
            "images": ["/nat.jpg", "/nat2.jpg"],
            "video": "./project/compost.mp4"
        },
        {
            "id": useId(),
            "icon": "/project/smart_bin.jpeg",
            "title": "Cloud Smart Dustbin with IoT Monitoring",
            "description": "An intelligent waste management solution that uses IoT sensors to track bin usage, track bin location, fill levels, and optimize collection.",
            "url": "https://cms.zenescorp.com",
            "images": ["/nat.jpg", "/nat2.jpg"],
            "video": ""
        },
        {
            "id": useId(),
            "icon": "/icons/Rectangle_41969.png",
            "title": "Point of Sale",
            "description": "A POS system for managing sales, inventory, and customer transactions with real-time reporting.",
            "url": "https://cms.zenescorp.com",
            "images": ["/nat.jpg", "/nat2.jpg"]
        }
    ]

    const services = [
        { id: useId(), icon: "/icons/Group 4252.png", title: "Web Development", description: "Building dynamic and responsive websites with Reactjs, NextJs, PyThon and LarAVel,API dev and testing" },
        { id: useId(), icon: "/icons/Group 4251.png", title: "Mobile App Development", description: "Developing native and cross responsive mobile for ios and android using Flutter, Firebase, Laravelapi,FastAPi" },
        { id: useId(), icon: "/tools/cloud.png", title: "IOT Engineering", description: "Integrating hardware and software with Arduino, Arduino cloud,Blynk,esp32,Raspberry pi to create  smart connected devices" }
    ]

    const contactme = [
        { id: useId(), icon: "", text: "My Email", val: "danyonathaniel7@gmail.com" },
        { id: useId(), icon: "", text: "My Contact", val: "+233548485278" },
        { id: useId(), icon: "", text: "My Address", val: "Tamale, Ghana" }

    ];
    return (
        <div>
            <section id="avatar" className="flex justify-center self-center align-middle ">
                <Image className="rounded-full" width={300} height={300} src="/nat.jpg" alt="Nathanael's image" />
            </section>
            <section id="intro" className="mt-10 dark:text-white">
                <h2 className="text-2xl text-center text-[#1E1E1E] p-4 m-2 dark:text-white">
                    Hi I &apos;m Nathanael Alimsiwen Akowan <Image className="inline-block" src="/icons/👋🏻.png" alt="hello icon" width={30} height={30} />
                </h2>
                <p className="text-5xl text-center tracking-wide   md:w-200 mx-auto" > Web developer , mobile app developer Internet of Things developer based in Tamale, Ghana</p>
                <p className="md:text-2xl text-center md:w-250 md:mx-auto text-[#878787] dark:text-zinc-400 text-shadow p-3 m-2">
                    I am a web developer, mobile app developer and an IOT engiineer with over 3 years of experience, crafting innovative solutions using web , mobile application and IoT. Let&apos;s build something amazing together.
                </p>
                <div className="wrap flex justify-center gap-4 md:gap-8 mt-8">
                    <a download={"Nathanael_ALimsiwen_AKowan.pdf"} className=" px-2 md:px-10 rounded-2xl md:rounded-4xl p-1 py-2 md:py-4 text-white bg-black  md:text-2xl text-center" href={"./project/Nathanael_Alimsiwen_Akowan_Academic_CV_2025_updated_UESTC.pdf"}>Resume</a>
                    <button onClick={() => window.open("https://www.linkedin.com/in/nathanael-akowan-725588196/", "_blank")} className="border rounded-2xl md:rounded-4xl px-10 py-4 md:text-2xl text-center">connect ➡️ </button>
                </div>
            </section>
            {/*  */}
            <section id="aboutme" className="md:mt-40 mt-40 dark:text-white">
                <p className="text-center p-4">Introduction </p>
                <h2 className="text-center font-bolder text-5xl">About Me</h2>
                <div className="flex justify-center flex-col md:flex-row  align-middle self-center mt-10 md:w-2/3 w-full md:mx-auto gap-10">
                    <Image alt="md:w-auto hidden md:block w-fit md:w-auto mx-auto" width={200} height={300} src={"/nat2.jpg"} />
                    <div className="flex flex-col flex-wrap gap-4 ">
                        <p className="p-2 text-[#878787] dark:text-zinc-400 text-center md:text-left font-bold ">I am  experience web developer with very a decade of professional expertise in the field. Throught out my career, I have had the priveledge of collaborting with prestigious organisation and contributing to ther succes and growth.</p>
                        <div className="self flex flex-col md:flex-row p-3 gap-4 justify-center  ">
                            <div className="border border-slate-400 dark:border-zinc-600 rounded p-5 shadow ">
                                <p className="icon p-1">
                                    <Image alt="portrait image" width={30} height={30} src={"/icons/Group 4224.png"} />
                                </p>
                                <h3 className="font-bold text-2xl p-1"> Languages</h3>
                                <p className="text-[#878787] dark:text-zinc-400 p-1">HTML, CSS, JavaScript, NextJs, Python, Flask, Djaongo,PhP, Laravel, Dart, C, C++, Bash</p>
                            </div>
                            <div className="border border-slate-400 dark:border-zinc-600 rounded p-5  shadow-lg">
                                <p className="icon p-1">
                                    <Image alt="portrait image" width={30} height={30} src={"/icons/Group 4225.png"} />
                                </p>
                                <h3 className="font-bold text-2xl p-1"> Education</h3>
                                <p className="text-[#878787] dark:text-zinc-400 p-1">Bsc. Imformation Technology @ University For development Studies</p>
                            </div>
                            <div className="border border-slate-400 dark:border-zinc-600 rounded p-5  shadow-lg">
                                <p className="icon p-1">
                                    <Image alt="portrait image" width={30} height={30} src={"/icons/briefcase office.png"} />
                                </p>
                                <h3 className="font-bold text-2xl p-1"> Projects</h3>
                                <p className="text-[#878787] dark:text-zinc-400 p-1">Built more than 5 projects</p>
                            </div>

                        </div>
                        <div className="flex flex-col mt-1">
                            <p className="text-cent font-bold mb-2">Tools and Frameworks I use</p>
                            <div className="flex flex-wrap p-2 justify-center  gap-4">
                                <div className="rounded p-2 border border-zinc-400 dark:border-zinc-600">
                                    <Image alt="portrait image" width={50} height={50} src={"/icons/Group 4226.png"} />
                                </div>
                                <div className="rounded p-2 border border-zinc-400 dark:border-zinc-600">
                                    <Image alt="portrait image" width={50} height={50} src={"/icons/image 392.png"} />
                                </div>
                                <div className="rounded p-2 border border-zinc-400 dark:border-zinc-600">
                                    <Image alt="portrait image" width={50} height={50} src={"/icons/image 393.png"} />
                                </div>
                                <div className="rounded p-2 border border-zinc-400 dark:border-zinc-600">
                                    <Image alt="portrait image" width={50} height={50} src={"/icons/image 396.png"} />
                                </div>
                                <div className="rounded p-2 border border-zinc-400 dark:border-zinc-600">
                                    <Image alt="portrait image" width={50} height={50} src={"/icons/image 397.png"} />
                                </div>
                                <div className="rounded p-2 border border-zinc-400 dark:border-zinc-600">
                                    <Image alt="portrait image" width={50} height={50} src={"/tools/adobe.png"} />
                                </div>
                                <div className="rounded p-2 border border-zinc-400 dark:border-zinc-600">
                                    <Image alt="portrait image" width={50} height={50} src={"/tools/arduino.png"} />
                                </div>
                                <div className="rounded p-2 border border-zinc-400 dark:border-zinc-600">
                                    <Image alt="portrait image" width={50} height={50} src={"/tools/flutter.png"} />
                                </div>
                                <div className="rounded p-2 border border-zinc-400 dark:border-zinc-600">
                                    <Image alt="portrait image" width={50} height={50} src={"/tools/cloud.png"} />
                                </div>
                                <div className="rounded p-2 border border-zinc-400 dark:border-zinc-600">
                                    <Image alt="portrait image" width={50} height={50} src={"/tools/laravel.png"} />
                                </div>
                                <div className="rounded p-2 border border-zinc-400 dark:border-zinc-600">
                                    <Image alt="portrait image" width={50} height={50} src={"/tools/mysql.png"} />
                                </div>
                                <div className="rounded p-2 border border-zinc-400 dark:border-zinc-600">
                                    <Image alt="portrait image" width={50} height={50} src={"/tools/nextjs.png"} />
                                </div>
                                <div className="rounded p-2 border border-zinc-400 dark:border-zinc-600">
                                    <Image alt="portrait image" width={50} height={50} src={"/tools/raspberrypi.png"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  */}
            <section id="services" className="md:mt-40 mt-40 dark:text-white">
                <p className="text-center my-5">What I Offer </p>
                <h2 className="text-center font-bolder text-5xl my-5">My Services</h2>
                <div className=" flex flex-col md:flex-row m-2 md:justify-center align-middle self-center mt-10 md:w-2/3 md:mx-auto gap-10">
                    {services.map((data) => (<ServiceCard key={data.id} icon={data.icon} title={data.title} description={data.description} />))}
                    {/* <div className="border border-slate-400 dark:border-zinc-600 hover:bg-[rgb(252,244,255)] dark:hover:bg-zinc-800 rounded p-5 shadow ">
                        <p className="icon p-1">
                            <Image alt="portrait image" width={30} height={30} src={"/icons/Group 4252.png"} />
                        </p>
                        <h3 className="font-bold text-2xl p-1"> Web Application</h3>
                        <p className="text-[#878787] dark:text-zinc-400 p-1">HTML, CSS, JavaScript, NextJs, Python, Flask, Djaongo,PhP, Laravel, Dart, C++</p>
                        <span className="text-[#878787] dark:text-zinc-400 p-2">Read more</span>
                    </div>
                    <div className="border border-slate-400 dark:border-zinc-600 hover:bg-[rgb(252,244,255)] dark:hover:bg-zinc-800 rounded p-5 shadow ">
                        <p className="icon p-1">
                            <Image alt="portrait image" width={30} height={30} src={"/icons/Group 4251.png"} />
                        </p>
                        <h3 className="font-bold text-2xl p-1"> Mobile App</h3>
                        <p className="text-[#878787] dark:text-zinc-400 p-1">HTML, CSS, JavaScript, NextJs, Python, Flask, Djaongo,PhP, Laravel, Dart, C++</p>
                        <span className="text-[#878787] dark:text-zinc-400 p-2">Read more</span>
                    </div>
                    <div className="border border-slate-400 dark:border-zinc-600 hover:bg-[rgb(252,244,255)] dark:hover:bg-zinc-800 rounded p-5 shadow ">
                        <p className="icon p-1">
                            <Image alt="portrait image" width={30} height={30} src={"/icons/Group 4251.png"} />
                        </p>
                        <h3 className="font-bold text-2xl p-1"> IOT systems</h3>
                        <p className="text-[#878787] dark:text-zinc-400 p-1">HTML, CSS, JavaScript, NextJs, Python, Flask, Djaongo,PhP, Laravel, Dart, C++</p>
                        <span className="text-[#878787] dark:text-zinc-400 p-2">Read more</span>
                    </div> */}
                </div>
            </section>
            {/* contact me */}
            <section id="contactme" className="my-10 p-3 dark:text-white">
                <h2 className="text-6xl text-center p-3 mb-3">
                    CONTACT ME
                    <p className="p-2 bg-amber-600 w-95 m-auto my-6"> </p>
                    <p className="p-2 bg-amber-600 w-60 m-auto my-6"> </p>
                </h2>
                <div className="wrap md:grid md:grid-cols-3  justify-center gap-4">
                    {contactme.map((ex) => <Card key={ex.id} icon={ex.icon} title={ex.text} description={ex.val} />)}
                </div>

            </section>
            {/*lastest work  */}
            <section id="latest_work" className="md:mt-40 mt-40 dark:text-white">
                <p className="text-center my-5">My Portfolio </p>
                <h2 className="text-center font-bolder text-5xl my-5">My Latest Work</h2>
                <div className=" flex flex-col md:flex-row m-2 md:justify-around align-middle self-center mt-10  flex-wrap md:mx-auto gap-10">
                    {latestwork.map((exp) => (<LatestWorkCard key={exp.id} id={exp.id} icon={exp.icon} title={exp.title} url={exp.url} description={exp.description} />))}
                </div>
            </section>
            {/* connect with me */}
            <Connect />
            {/* footer start */}
            <Footer />
            {/* end of footer */}
        </div>
    )
}
