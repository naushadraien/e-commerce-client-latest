import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <>
      <Input
        className="focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:font-normal placeholder:text-gray-400"
        placeholder="Search here..."
      />
      <Search className="absolute top-2 right-6 text-gray-700" />
    </>
  );
};

export default SearchInput;
