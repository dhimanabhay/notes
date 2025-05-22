import { Note } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { formatDate, formatTime } from "@/lib/storage";

interface NoteViewProps {
  note: Note;
}

const NoteView = ({ note }: NoteViewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          Last Updated: {formatTime(note.updatedAt)} <br />
          Created At: {formatDate(note.createdAt)}
        </p>
      </CardHeader>
      <CardContent>{note.content}</CardContent>
    </Card>
  );
};
export default NoteView;
