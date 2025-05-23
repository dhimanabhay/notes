import { Note } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatTime } from "@/lib/storage";
import { Button } from "./ui/button";

interface NoteViewProps {
  note: Note;
  onEdit: () => void;
}

const NoteView = ({ note, onEdit }: NoteViewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          Last Updated: {formatTime(note.updatedAt)}
          {/* <br /> */}
          {/* Created At: {formatDate(note.createdAt)} */}
        </p>
      </CardHeader>
      <CardContent className="min-h-[calc(100vh-350px)] ">
        {note.content}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={onEdit}>Edit Note</Button>
      </CardFooter>
    </Card>
  );
};
export default NoteView;
