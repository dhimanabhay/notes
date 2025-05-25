"use client";
import { Note } from "@/lib/types";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { formatTime } from "@/lib/storage";
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
  // const [updatedAt, setUpdateAt] = useState(note.updatedAt);

  const handleSave = () => {
    onSave({
      ...note,
      title: title.trim() || "Untitled Note",
      content,
      updatedAt: Date.now(),
    });
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
          className=" font-bold border-none px-0 ring-0 focus-visible:ring-0"
        />
        <p className="text-sm text-muted-foreground">
          Created at {formatTime(note.createdAt)}
        </p>
      </CardHeader>
      <CardContent>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note..."
          className="h-[calc(90vh-200px)] resize-none border-none p-0 focus-visible:ring-0"
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
