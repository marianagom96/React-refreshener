//import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook:Function that allows to tap into built-in features
  const [selectedIndex, setSelectedIndex] = useState(-1);
  /*
  arr[0] variable selected(selectedIndex)
  arr[1] updater function for setting new value selected
  */
  /*   if (items.length === 0) {
    return (
      <>
        <h1>List</h1>
        
        <p>No item found</p>
      </>
    );
  } */
  //Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {/* {items.length === 0 && <p>No item found</p> }if our condition is true then the parargraph element will be the result */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
