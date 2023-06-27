import React, { useState } from "react";
interface list {
  id: string;
  input: string;
}
export default function ArrayComp() {
  const [listarray, setListarray] = useState<[list, list, list]>([
    { id: "id", input: "text" },
    { id: "1", input: "one" },
    { id: "2", input: "two" },
  ]);
  return (
    <div>
      <hr />
      {listarray.map((data) => (
        <li>
          {data.id}:{data.input}
        </li>
      ))}
    </div>
  );
}
