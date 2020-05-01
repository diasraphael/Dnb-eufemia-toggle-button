import React, { useState, useEffect } from "react";
import { ToggleButton } from "dnb-ui-lib";
import "dnb-ui-lib/style";
import "./styles.css";

export default function App() {
  const [sections, setSections] = useState([]);
  let [currentValueForToggleGroup, setCurrentValueForToggleGroup] = useState(
    []
  );

  function fetchData() {
    fetch("SavedTemplate.json")
      .then(response =>
        response.json().then(res => setSections(res.data.sections))
      )
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ToggleButton.Group
        label="My Saved Template"
        layout_direction="column"
        multiselect={true}
        variant="checkbox"
        values={currentValueForToggleGroup}
        on_change={({ values, event }) => {
          console.log(values);
          setCurrentValueForToggleGroup(values);
          console.log(currentValueForToggleGroup);
          setCurrentValueForToggleGroup(currentValueForToggleGroup);
        }}
      >
        {sections.map(section => (
          <ToggleButton key={section.id} text={section.id} value={section.id} />
        ))}
      </ToggleButton.Group>
    </div>
  );
}
