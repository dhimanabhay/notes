import { Plus } from "lucide-react";
import { Button } from "./ui/button";

interface EmptyStateProps {
  message: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const EmptyNotesList = ({
  message,
  buttonText,
  onButtonClick,
}: EmptyStateProps) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center p-8">
        <p className="text-muted-foreground mb-4">{message}</p>

        <Button onClick={onButtonClick} className="hover:cursor-pointer">
          <Plus className="h-4 w-4 mr-1" />
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
export default EmptyNotesList;
