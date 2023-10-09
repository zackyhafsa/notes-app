import React from "react";
import { showFormattedDate } from "../utils/data";

export const NoteItem = ({ note, onDelete, onArchive }) => {
  const onDeleteClick = () => onDelete(note.id);
  const onArchiveClick = () => onArchive(note.id);
  return (
    <>
      <div className="mx-auto w-full border h-max rounded-lg overflow-hidden max-sm:w-full max-md:w-full">
        <h1 className="text-xl font-semibold p-2">{note.title}</h1>
        <p className="text-slate-500 p-2">{showFormattedDate(note.createdAt)}</p>
        <p className="p-2">{note.body}</p>
        <div className="mt-2">
          {note.archived === false ? (
            <button
              className="bg-orange-500 w-1/2 text-white py-2 px-3  mt-2 hover:bg-orange-600"
              onClick={onArchiveClick}
            >
              Arsipkan
            </button>
          ) : (
            <button
              className="bg-orange-500 w-1/2 text-white py-2 px-3  mt-2 hover:bg-orange-600"
              onClick={onArchiveClick}
            >
              Buka Arsip
            </button>
          )}

          <button
            className="bg-red-500 w-1/2 text-white py-2 px-3  mt-2 hover:bg-red-600"
            onClick={onDeleteClick}
          >
            Hapus
          </button>
        </div>
      </div>
    </>
  );
};
