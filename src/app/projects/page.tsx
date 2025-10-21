"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Projects() {
    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
            <Navbar />

            <h1 className="text-3xl font-bold mb-8">Projects</h1>

            <div className="bg-white/10 p-8 rouded-2xl shadow-lg text-center">
                <h2 className="text-2xl font-semibold mb-4">To-do List App 📃</h2>
                <p className="text-gray-300 mb-6 max-w-md">
                    A simple SPA built using Next.js and Typescript to manage your daily tasks.
                </p>
                <Link
                    href="/projects/todo"
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition"
                >
                    open project
                </Link>
            </div>
        </main>
    );
}