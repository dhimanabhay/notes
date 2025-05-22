"use client";
import { Note } from "@/lib/types";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { formatDate, formatTime } from "@/lib/storage";
import { Button } from "./ui/button";
import { Save, X } from "lucide-react";

interface NoteEditorProps {
  note: Note;
  onCancel: () => void;
  onSave: (note: Note) => void;
}

const NoteEditor = ({ note, onCancel, onSave }: NoteEditorProps) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [updatedAt, setUpdateAt] = useState(note.updatedAt);

  const handleSave = () => {
    onSave({
      ...note,
      title: title.trim() || "Untitled Note",
      content,
      updatedAt,
    });
  };

  return (
    <Card>
      <CardHeader>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
          className="text-xl font-bold border-none px-0 focus-visible:ring-0"
        />
        <p>
          Updated at {formatTime(updatedAt)} on {formatDate(updatedAt)}
        </p>
      </CardHeader>
      <CardContent>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note..."
          className="min-h-[calc(100vh-350px)] resize-none border-none p-0 focus-visible:ring-0"
        />
      </CardContent>

      <CardFooter className="flex justify-end space-x-2">
        <Button onClick={onCancel} variant="outline">
          <X className="h-4 w-4" />
          Cancel
        </Button>
        <Button onClick={handleSave}>
          <Save className="h-4 w-4" />
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};
export default NoteEditor;
