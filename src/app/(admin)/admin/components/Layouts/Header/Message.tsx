import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Message = () => {
  return (
    <div className="relative flex justify-center">
      <Button
        variant="outline"
        size="icon"
        className="focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <MessageSquare />
      </Button>
      <p className="absolute -right-1 -top-1 bg-blue-500 text-white rounded-full px-[5.5px] font-semibold text-xs">
        1
      </p>
    </div>
  );
};

export default Message;
