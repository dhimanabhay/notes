import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyNotesList from "./EmptyNotesList";
import { Note } from "@/lib/types";
import { Button } from "./ui/button";
import { formatDate } from "@/lib/storage";
import { Trash2 } from "lucide-react";

interface SidebarProps {
  notes: Note[];
  onSelectNote: (note: Note) => void;
}

const Sidebar = ({ notes, onSelectNote }: SidebarProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notes</CardTitle>
      </CardHeader>
      <CardContent>
        {notes.length === 0 ? (
          <EmptyNotesList
            message="Empty Notes"
            buttonText="Create your first note"
          />
        ) : (
          <div>
            {notes.map((note) => (
              <div
                key={note.id}
                onClick={() => onSelectNote(note)}
                className="p-3 rounded-md cursor-pointer hover:bg-accent transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">
                      {note.title.substring(0, 30)}
                      {note.title.length > 30 ? "..." : ""}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {note.content.substring(0, 40)}
                      {note.content.length > 40 ? "..." : ""}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Created: {formatDate(note.createdAt)}
                    </p>
                  </div>
                  <Button
                    className="m-8 w-8 hover:bg-destructive cursor-pointer"
                    size="icon"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
export default Sidebar;
