import {
  Cloud,
  Headphones,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  ScrollText,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-5 justify-center items-center cursor-pointer">
          <Image
            src="/cropped-Nausad Rain 33330 edited.jpg"
            alt="ProfileImg"
            width={80}
            height={80}
            className="w-10 h-10 rounded-full border-[1px]"
          />
          <div className="flex justify-center items-start flex-col w-full">
            <p className="font-bold text-sm">Naushad Raien</p>
            <p className="text-gray-500 text-sm">Admin</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32 mt-4 ml-4 md:mt-[20px]">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>Inbox</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ScrollText className="mr-2 h-4 w-4" />
            <span>Taskboard</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Headphones className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
