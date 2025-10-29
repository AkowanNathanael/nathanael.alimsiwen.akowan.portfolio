"use client"
import toast from "react-hot-toast"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname, useParams,useSearchParams } from "next/navigation"
// import { useRouter } from "next/router"

function Navbar() {
    // const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (isMenuOpen && !event.target.closest('.nav-menu')) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isMenuOpen])

    function runDisplay() {
        // document.documentElement.classList.toggle("dark")
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light")
            toast.success(" light mode acivated")
            // alert("dark")
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
            toast("dark mode")
            // alert("light")
        }
    }
    const pathname = usePathname();
    const params=useParams()
    const serachparams = useSearchParams()
    console.log(params,serachparams)

    // const par = useParams();
    // console.log(par)
    // console.log(router.pathname)
    const path = [{ path: "Expertise", url: "#expertise" }, { path: "Projects", url :"#projects"},{path:"Services",url:"#services"},{path:"About",url:"#about"},{path:"Contact",url:"#contact"}]
    return (
        <nav className="relative p-3 container mx-auto dark:text-white">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <span className="text-4xl dark:text-white">
                    Nathan 
                </span>

                {/* Desktop Menu */}
                <ul className="hidden md:flex drop-shadow-md gap-6 text-2xl bg-[#F9F6F5] dark:bg-zinc-800 dark:shadow-none shadow-sm px-8 py-4 rounded-4xl dark:text-white">
                    {path.map((item, index) => (
                        <li key={index} className={pathname === item.url ? "font-bold bg-amber-200" : ""}>
                            <Link href={item.url}>{item.path}</Link>
                        </li>
                    ))}
                    {/* <li><Link href={"/"}> Expertise</Link></li> 
                    <li><Link href={"/"}> Projects</Link></li>
                    <li><Link href={"/"}> Services</Link></li>
                    <li><Link href={"/"}> About</Link></li>
                    <li><Link href={"/"}> Contact</Link></li> */}
                </ul>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        )}
                    </svg>
                </button>

                {/* Utility Buttons */}
                <div className="flex items-center gap-3">
                    <button onClick={runDisplay} className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full">
                        <Image alt="dark" width={20} height={20} src="/icons/Vector-2.png" />
                    </button>  
                    <button className="hidden md:flex border rounded-4xl px-6 py-1 dark:border-zinc-600 dark:text-white items-center gap-2">
                        connect
                        <Image className="inline-block" width={20} alt="arrow icon" height={20} src="/icons/Vector.png" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`nav-menu md:hidden fixed inset-y-0 right-0 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} w-64 bg-white dark:bg-zinc-900 shadow-lg transition-transform duration-200 ease-in-out z-50`}>
                <div className="p-6">
                    <ul className="space-y-4 text-lg">
                        <li><Link href={"/"} onClick={() => setIsMenuOpen(false)}> Expertise</Link></li>
                        <li><Link href={"/"} onClick={() => setIsMenuOpen(false)}> Projects</Link></li>
                        <li><Link href={"/"} onClick={() => setIsMenuOpen(false)}> Services</Link></li>
                        <li><Link href={"/"} onClick={() => setIsMenuOpen(false)}> About</Link></li>
                        <li><Link href={"/"} onClick={() => setIsMenuOpen(false)}> Contact</Link></li>
                    </ul>
                    <button className="mt-6 w-full border rounded-4xl px-6 py-1 dark:border-zinc-600 dark:text-white flex items-center justify-center gap-2">
                        connect
                        <Image className="inline-block" width={20} alt="arrow icon" height={20} src="/icons/Vector.png" />
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </nav>
    )
}

export default Navbar
