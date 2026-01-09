import Image from "next/image"

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="border border-slate-400 dark:border-zinc-600 hover:bg-[rgb(252,244,255)] dark:hover:bg-zinc-800 rounded p-5 shadow ">
            <p className="icon p-1">
                <Image alt="portrait image" width={30} height={30} src={icon} />
            </p>
            <h3 className="font-bold text-2xl p-1"> {title}</h3>
            <p className="text-[#878787] dark:text-zinc-400 p-1">{description}</p>
            <span className="text-[#878787] dark:text-zinc-400 p-2">Read more</span>
        </div>
    )
}

export default ServiceCard