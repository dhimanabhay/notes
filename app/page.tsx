/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Header from "@/components/header";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Note } from "@/lib/types";
import { useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const createNewNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "New Note",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolor aspernatur, ab accusantium repellat autem esse illum rem veritatis pariatur ea obcaecati sapiente dolorum, voluptatem aliquam beatae in, rerum dolorem?",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const renderNoteContent = () => {
    return null;
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header onNewNote={createNewNote} />
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Sidebar notes={notes} />
        </div>
        <div className="bg-yellow-200 md:col-span-2">{renderNoteContent()}</div>
      </main>
    </div>
  );
}
