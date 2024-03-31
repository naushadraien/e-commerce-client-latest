import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import React from "react";

const Notification = () => {
  return (
    <div className="relative flex justify-center">
      <Button
        variant="outline"
        size="icon"
        className="focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <Bell />
      </Button>
      <p className="absolute -right-1 -top-1 bg-orange-500 text-white rounded-full px-[5.5px] font-semibold text-xs">
        1
      </p>
    </div>
  );
};

export default Notification;
