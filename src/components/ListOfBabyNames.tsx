import { useState } from "react";
import babyNamesData from "../data/babyNamesData.json";

interface NameDetails {
  sex: string;
  key: number;
  name: string;
}

function Name(props: NameDetails): JSX.Element {
  //const {sex, name, key} = props

  return (
    <div>
      <button key={props.key} className={props.sex}>
        {props.name}
      </button>
    </div>
  );
}

export default function ListOfBabyNames(): JSX.Element {
  const [typedSearch, setTypedSearch] = useState<string>("");
  const filteredBabyNames = [
    ...babyNamesData.filter((names) => {
      return typedSearch === ""
        ? names
        : names.name.toLowerCase().includes(typedSearch.toLowerCase());
    }),
  ];

  const orderedFilteredNames = [
    ...filteredBabyNames.sort((a, b) => a.name.localeCompare(b.name)),
  ];

  const allOrderedFilteredRenderedNames = orderedFilteredNames.map(
    (oneName) => {
      return <Name name={oneName.name} key={oneName.id} sex={oneName.sex} />;
    }
  );

  return (
    <div className="listofNames">
      <div>
        <input
          value={typedSearch}
          name="Search For Name"
          onChange={(e) => setTypedSearch(e.target.value)}
        />
      </div>

      <ul>{allOrderedFilteredRenderedNames}</ul>
    </div>
  );
}
