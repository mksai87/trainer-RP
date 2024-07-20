import { useState } from "react";

function ListGroup() {
  let item = ["a", "b", "c", "d", "e", "f"];

  const [selectedIndex, change] = useState(-1);
  return (
    <>
      <h1> hi it my list </h1>
      {item.length === 0 ? <p>no items are founded</p> : null}
      <ul className="list-group">
        {item.map((item, indux) => (
          <li
            className={
              selectedIndex === indux
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => change(indux)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
