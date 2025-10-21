"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function TodoPage() {
  const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState<number | null>(null);

  const addTask = () => {
    if (!input.trim()) return;
    const copy = [...tasks];
    edit !== null
      ? (copy[edit].text = input)
      : copy.push({ text: input, done: false });
    setTasks(copy);
    setInput("");
    setEdit(null);
  };

  const toggle = (i: number) => {
    const copy = [...tasks];
    copy[i].done = !copy[i].done;
    setTasks(copy);
  };

  const remove = (i: number) => setTasks(tasks.filter((_, x) => x !== i));
  const editTask = (i: number) => {
    setInput(tasks[i].text);
    setEdit(i);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <Navbar />
      <h1 className="text-3xl font-bold text-purple-400 mb-6">To-Do List</h1>

      <div className="w-full max-w-md bg-white/10 p-6 rounded-xl">
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tulis tugas..."
            className="flex-1 px-3 py-2 rounded text-white"
          />
          <button
            onClick={addTask}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition"
          >
            {edit !== null ? "Simpan" : "Tambah"}
          </button>
        </div>

        {tasks.length === 0 ? (
          <p className="text-gray-400 text-center">Belum ada tugas.</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((t, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-800 px-3 py-2 rounded"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={t.done}
                    onChange={() => toggle(i)}
                    className="accent-blue-500"
                  />
                  <span
                    className={t.done ? "line-through text-gray-400" : ""}
                  >
                    {t.text}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => editTask(i)}
                    className="text-yellow-400"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => remove(i)}
                    className="text-red-400"
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}