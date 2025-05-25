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
import { ScrollArea } from "./ui/scroll-area";

interface NoteViewProps {
  note: Note;
  onEdit: () => void;
}

const NoteView = ({ note, onEdit }: NoteViewProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          Last Updated: {formatTime(note.updatedAt)}
        </p>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(90vh-200px)]">{note.content}</ScrollArea>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={onEdit}>Edit Note</Button>
      </CardFooter>
    </Card>
  );
};
export default NoteView;
