import React from 'react'
import Link from "next/link"
import { FaFacebook } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <div>
        <footer className="bg-gradient-to-r from gray-00 to-gray-200">
    <div className="container p-6 mx-auto">
        <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                    <Link href="#">
                        <h1 className="text-3xl font-bold tracking-tight text-gradient bg-gradient-to-r from-purple-500 to-green-300 bg-clip-text text-transparent sm:text-5xl">DevXClub</h1>
                    </Link>

                    <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

                    <div className="flex mt-6 -mx-2">
                        <Link href="#"
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Reddit">
                            <FaReddit />
                        </Link>
                    
                        <Link href="#"
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Facebook">
                           <FaFacebook />
                        </Link>
                    
                        <Link href="#"
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Github">
                           <FaGithub />
                        </Link>
                        <Link href="#"
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Github">
                           <RiTwitterXLine />
                        </Link>
                        <Link href="#"
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Github">
                            <FaYoutube />
                        </Link>
                        <Link href="#"
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Github">
                            <FaSlack />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <h3 className="text-gray-500 uppercase font-medium">About</h3>
                        <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</Link>
                        <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</Link>
                        <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</Link>
                    </div>

                    <div>
                        <h3 className="text-gray-500 uppercase font-medium">Blog</h3>
                        <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</Link>
                        <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</Link>
                        <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</Link>
                    </div>

                    <div>
                        <h3 className="text-gray-500 uppercase font-medium">Products</h3>
                        <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</Link>
                        <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">API</Link>
                        <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Status</Link>
                    </div>

                    <div>
                        <h3 className="text-gray-500 uppercase font-medium">Contact</h3>
                        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>
                    </div>
                </div>
            </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
            <p className="text-center text-gray-500 dark:text-gray-400">© Brand 2020 - All rights reserved</p>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer