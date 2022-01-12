import React from "react";
import NumberField from "./NumberField";

export default function Example() {
  let [value, setValue] = React.useState(6);

  return (
    <>
      <NumberField
        label="Controlled value"
        value={value}
        onChange={setValue} />
      <div>Current value prop: {value}</div>
    </>
  );
}