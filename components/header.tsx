import { Plus } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  onNewNote?: () => void;
}

const header = ({ onNewNote }: HeaderProps) => {
  return (
    <header className="border-b p-4 bg-card">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">The Notes</h1>
        <Button onClick={onNewNote} className="hover:cursor-pointer">
          <Plus className="h-4 w-4 mr-1" />
          New Note
        </Button>
      </div>
    </header>
  );
};
export default header;
