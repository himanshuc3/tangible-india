import "./index.scss";

const HEADING = "TANGIBLE";

// TODO: Really need react scaffold extension for vscode
export default function Title() {
  return (
    <div className="title-container">
      <h1 className="title">
        {HEADING.split("").map((c, index) => (
          <p>{c}</p>
        ))}
      </h1>
    </div>
  );
}
