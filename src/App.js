import React from "react";
import { ToggleButton } from "dnb-ui-lib";
import "dnb-ui-lib/style";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ToggleButton.Group
        label="Multi-select:"
        multiselect="true"
        values={["first", "third"]}
        on_change={({ values }) => {
          console.log("on_change", values);
        }}
      >
        <ToggleButton text="First" value="first" />
        <ToggleButton text="Second" value="second" />
        <ToggleButton text="Third" value="third" />
      </ToggleButton.Group>
    </div>
  );
}
