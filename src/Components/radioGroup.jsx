import React, { useState } from "react";
import CheckBox from "./checkBox";
import TextBox from "./textBox";

function RadioGroup({ cities, selectCity, selectAll, checkAll, addCity }) {
  return (
    <form>
      <TextBox label="Add City" placeholder="City Name" onSubmit={addCity} />

      <CheckBox
        label={checkAll.name}
        onChange={(e) => selectAll(e.target.checked)}
        key={checkAll.name}
        checked={checkAll.selected}
      />
      {cities.map((city) => (
        <CheckBox
          label={city.name}
          onChange={(e) => selectCity(e.target.checked, city)}
          key={city.name}
          checked={city.selected}
        />
      ))}
    </form>
  );
}

export default RadioGroup;
