import { DocumentData } from "firebase/firestore";
import React, { useEffect } from "react";
import PinItem from "./PinItem";

interface Props {
  listOfPins: DocumentData;
}

function PinList({ listOfPins }: Props) {
  return (
    <div className="columns-2 mt-7 px-2 md:px-5 md:columns-3 lg:columns-4 xl:columns-5 space-y-6 mx-auto">
      {listOfPins.map((item: any, index: number) => (
        <div key={index}>
          <PinItem pin={item} />
        </div>
      ))}
    </div>
  );
}

export default PinList;
