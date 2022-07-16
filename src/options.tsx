import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles/options.scss";

const Options = () => {
  const [highlightFlg, setHighlight] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    chrome.storage.local.get(
      {
        highlight: true,
      },
      (items) => {
        setHighlight(items.highlight);
      }
    );
  }, []);

  const saveOptions = () => {
    chrome.storage.local.set(
      {
        highlight: highlightFlg,
      },
      () => {
        setStatus("Saved! Please reload the screen to reflect.");
        const id = setTimeout(() => {
          setStatus("");
        }, 3000);
        return () => clearTimeout(id);
      }
    );
  };

  return (
    <>
      <div className="field">
        <div className="labelText">Highlight open items in the side panel</div>
        <div className="switch">
          <input
            id="toggle"
            className="toggleInput"
            type="checkbox"
            checked={highlightFlg}
            onChange={(event) => setHighlight(event.target.checked)}
          />
          <label htmlFor="toggle" className="toggleLabel" />
        </div>
      </div>
      <hr></hr>
      <div className="saveField">
        <div className="buttonWrap">
          <button className="saveButton" onClick={saveOptions}>
            Save
          </button>
        </div>
        <div className="statusText">{status}</div>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById("root")
);
