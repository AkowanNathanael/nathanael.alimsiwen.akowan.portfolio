import Image from "next/image"
import Link from "next/link"

const LatestWorkCard = ({ id, icon, title, description, url }) => {
    return (
        <div key={id} className="relative overflow-hidden rounded-lg p-4 shadow-lg w-full md:w-1/3 h-80 ">
            <Image layout="fill" objectFit="cover" alt="portrait image" src={icon} />
            <div className="flex absolute right-5 left-3 rounded bottom-10 bg-white dark:bg-zinc-900 p-1 bg-opacity-90 dark:bg-opacity-80">
                <div className="w">
                    <h3 className="font-bold text-2xl p-1">{title}</h3>
                    <p className="text-[#878787] dark:text-zinc-400">{description}</p>
                </div>
                <Link target="blank" href={url} className="rounded-full p-3 border m-1  absolute bottom-1 right-0 dark:border-zinc-600 dark:text-white">view</Link>
            </div>

        </div>
    )
}

export default LatestWorkCard