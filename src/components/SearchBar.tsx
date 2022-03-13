//import ListOfBabyNames from "./ListOfBabyNames";
import { useState } from "react";

export default function SearchBar(): JSX.Element {
  const [typedSearch, setTypedSearch] = useState<string>("");

  return (
    <input
      value={typedSearch}
      name="Search For Name"
      onChange={(e) => setTypedSearch(e.target.value.toLowerCase())}
    />
  );
}
