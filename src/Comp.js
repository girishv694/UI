import Split from "react-split";
import "./App.css";

export const Comp = () => {
  return (
    <Split direction="vertical" style={{ height: `calc(100vh - 4rem)` }}>
      <Split className="flex">
        <div className="div-third">HI there</div>
        <div className="div-fourth">
        place the cursor in white gap and double click to resize
        </div>
      </Split>
      <div className="div-first">
        place the cursor in white gap and double click to resize
      </div>
    </Split>
  );
};
