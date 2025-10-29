"use client"
import Card from "@/components/Card"
import MesssageForm from "@/components/Form"
import Image from "next/image"
import Link from "next/link"
import { useId } from "react"

export default function Home() {
    const expertise = [
        { id:useId(),icon: "icon", title: "Web Development", description: "Building dynamic and responsive websites with Reactjs, NextJs, PyThon and LarAVel" },
        { id: useId(), icon: "icon", title: "Mobile App Development", description: "Developing native and cross responsive mobile for ios and android using Flutter, Firebase, Laravelapi,FastAPi" },
        { id: useId(), icon: "icon", title: "IOT Engineering", description: "Integrating hardware and software with Arduino, Arduino cloud,Blynk,esp32,Raspberry pi to create  smart connected devices" }
    ]
  return (
    <div>
          <section className="flex justify-center self-center align-middle ">
              <Image className="rounded-full" width={300} height={300} src="/nat.jpg" alt="" />
          </section>
          <section className="mt-10 dark:text-white">
              <h2 className="text-2xl text-center text-[#1E1E1E] p-4 m-2 dark:text-white">
                  Hi I &apos;m Nathanael Alimsiwen Akowan <Image className="inline-block" src="/icons/👋🏻.png" alt="hello icon"  width={30} height={30} />
              </h2>
              <p className="text-5xl text-center tracking-wide   md:w-200 mx-auto" > Web developer , mobile app developer Internet of Things developer based in Tamale, Ghana</p>
              <p className="md:text-2xl text-center md:w-250 md:mx-auto text-[#878787] dark:text-zinc-400 text-shadow p-3 m-2">
                  I am a web developer, mobile app developer and an IOT engiineer with over 3 years of experience, crafting innovative solutions using web , mobile application and IOT. Let&apos;s build something amazing together.
              </p>
              <div className="wrap flex justify-center gap-4 md:gap-8 mt-8">
                  <button className=" px-2 md:px-10 rounded-2xl md:rounded-4xl p-1 py-2 md:py-4 text-white bg-black  md:text-2xl text-center">Resume  </button>
                  <button className="border rounded-2xl md:rounded-4xl px-10 py-4 md:text-2xl text-center">connect ➡️ </button>
              </div>
          </section>
          {/*  */}
          <section className="md:mt-40 mt-40 dark:text-white">
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
                              <p className="text-[#878787] dark:text-zinc-400 p-1">HTML, CSS, JavaScript, NextJs, Python, Flask, Djaongo,PhP, Laravel, Dart, C++</p>
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
          <section className="md:mt-40 mt-40 dark:text-white">
              <p className="text-center my-5">What I Offer </p>
              <h2 className="text-center font-bolder text-5xl my-5">My Services</h2>
                  <div className=" flex flex-col md:flex-row m-2 md:justify-center align-middle self-center mt-10 md:w-2/3 md:mx-auto gap-10">
                  <div className="border border-slate-400 dark:border-zinc-600 hover:bg-[rgb(252,244,255)] dark:hover:bg-zinc-800 rounded p-5 shadow ">
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
                  </div>
              </div>
          </section>
          {/* expertise */}
          <section className="my-10 p-3 dark:text-white">
              <h2 className="text-6xl p-3 mb-3">My Expertise</h2>
              <div className="wrap md:grid md:grid-cols-3 justify-center gap-4">
                  {expertise.map((ex)=> <Card key={ex.id} icon={ex.icon} title={ex.title}  description={ex.description} />)}
              </div>
              
          </section>
          {/*  */}
          <section className="md:mt-40 mt-40 dark:text-white">
              <p className="text-center my-5">My Portfolio </p>
              <h2 className="text-center font-bolder text-5xl my-5">My Latest Work</h2>
              <div className=" flex flex-col md:flex-row m-2 md:justify-around align-middle self-center mt-10  md:mx-auto gap-10">
                  <div className="relative overflow-hidden rounded-lg p-4 shadow-lg w-full md:w-1/3 h-80 ">
                          <Image layout="fill" objectFit="cover" alt="portrait image"  src={"/icons/Rectangle 41969.png"} />
                      <div className="flex absolute right-5 left-3 rounded bottom-10 bg-white dark:bg-zinc-900 p-1 bg-opacity-90 dark:bg-opacity-80">
                          <div className="w">
                              <h3 className="font-bold text-2xl p-1">Ticket  management system</h3>
                              <p className="text-[#878787] dark:text-zinc-400">HTML, CSS, JavaScript, NextJs, Python</p>
                          </div>
                          <Link target="blank" href="#" className="rounded-full p-3 border m-1  absolute bottom-1 right-0 dark:border-zinc-600 dark:text-white">view</Link>
                      </div>
                     
                  </div>
                  <div className="border border-slate-400 dark:border-zinc-600 hover:bg-[rgb(252,244,255)] dark:hover:bg-zinc-800 rounded p-5 shadow ">
                      <p className="icon p-1">
                          <Image alt="portrait image" width={30} height={30} src={"/icons/Group 4251.png"} />
                      </p>
                      <h3 className="font-bold text-2xl p-1"> IOT systems</h3>
                      <p className="text-[#878787] dark:text-zinc-400 p-1">HTML, CSS, JavaScript, NextJs, Python, Flask, Djaongo,PhP, Laravel, Dart, C++</p>
                      <span className="text-[#878787] dark:text-zinc-400 p-2">Read more</span>
                  </div>
              </div>
          </section>
          {/*  */}
          <section className="md:mt-40 mt-40 dark:text-white">
              <p className="text-center text-2xl my-5">Connect with Me </p>
              <h2 className="text-center font-bolder text-6xl my-5">Get In Touch</h2>
              <p className="my-4 text-[#878787] dark:text-zinc-400 text-2xl text-center">I had love to her from you,if you have any questions, comments or feedback <br/> please use this form </p>
              <div className=" bg-[url(/icons/image 400.png)] w-full md:w-1/2 mx-auto">
                  <MesssageForm />
              </div>
          </section>
          {/*  */}
          <section className="flex justify-center items-center mt-30 flex-col dark:text-white">
              <div className="flex text-center gap-4">
                  <span className="text-center text-6xl md:text-8xl"> Nathanael</span> <span className="  rounded-4xl p-1 bg-pink-500 ">.</span>
              </div>
              <div className="text-center text-2xl"> <Image className="inline-block" width={20} height={20} src={"/icons/mail_icon.png"} alt="email-icon" /> danyonathaniel7@gmail.com</div>
          </section>
    </div>
  )
}
