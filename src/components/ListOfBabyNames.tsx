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
  const allRenderedNames = babyNamesData.map((oneName) => {
    return <Name name={oneName.name} key={oneName.id} sex={oneName.sex} />;
  });

  return (
    <div className="listofNanes">
      <ul>{allRenderedNames}</ul>
    </div>
  );
}
