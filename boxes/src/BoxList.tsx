import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 */
interface boxListStateInterface{
  id: string,
  width: number,
  height: number,
  backgroundColor:string,
}
function BoxList() {
  const [boxes, setBoxes] = useState<boxListStateInterface[]|[]>([])

  /** add box with given { id, width, height, backgroundColor } */
  function add(newBox:boxListStateInterface) {
    setBoxes((boxes:boxListStateInterface[]) => [...boxes, newBox]);
  }

  /** remove box matching that id. */
  function remove(id: string) {
    setBoxes((boxes:boxListStateInterface[]) => boxes.filter((box:boxListStateInterface) => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxes.map(({ id, width, height, backgroundColor }:boxListStateInterface
      ) => (
        <Box
          key={id}
          id={id}
          width={width}
          height={height}
          remove={remove}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList;
