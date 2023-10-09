import React from "react";
import { NoteItem } from "./noteItem";

export const NoteList = ({ notesList, onDelete, onArchive }) => {
  return (
    <>
      <div className="grid grid-cols-3 auto-cols-max gap-2 max-md:w-auto max-md:grid-cols-2 max-md:gap-3 max-sm:grid-cols-1">
        {notesList.map((item) => {
          return <NoteItem key={item.id} note={item} onDelete={onDelete} onArchive={onArchive} />;
        })}
      </div>
    </>
  );
};
