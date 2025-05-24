"use client";
import Header from "@/components/header";
import Sidebar from "@/components/Sidebar";
import { Note } from "@/lib/types";
import { useState } from "react";
import NoteView from "@/components/NoteView";
import NoteEditor from "@/components/NoteEditor";
import EmptyNotesList from "@/components/EmptyNotesList";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const createNewNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "New Note",
      content: "",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote);
    setIsEditing(true);
  };

  const selectNote = (note: Note) => {
    setActiveNote(note);
    setIsEditing(false);
  };

  const cancelEdit = () => {};

  const saveEdit = (updatedNote: Note) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    setActiveNote(updatedNote);
    setIsEditing(false);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (activeNote && activeNote.id === id) {
      setActiveNote(null);
      setIsEditing(false);
    }
  };

  const renderNoteContent = () => {
    if (!activeNote && notes.length === 0) {
      return (
        <EmptyNotesList
          message="Create your first note."
          buttonText="New Note"
          onButtonClick={createNewNote}
        />
      );
    }

    if (activeNote && isEditing) {
      console.log(isEditing);
      return (
        <NoteEditor onSave={saveEdit} onCancel={cancelEdit} note={activeNote} />
      );
    }

    if (activeNote) {
      return <NoteView onEdit={() => setIsEditing(true)} note={activeNote} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNewNote={createNewNote} />
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        <div className="md:col-span-1">
          <Sidebar
            notes={notes}
            onSelectNote={selectNote}
            onDeleteNote={deleteNote}
          />
        </div>
        <div className="md:col-span-2">{renderNoteContent()}</div>
      </main>
    </div>
  );
}
