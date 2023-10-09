import React from "react";
import { NoteList } from "./noteList";
import NotesInput from "./notesInput";
import SearchNote from "./searchNote";

export const Body = ({ notes, onDelete, onArchive, addNewNote, onSearch }) => {
  return (
    <>
      <div className="max-w-xl m-auto mt-10 border p-3 mx-auto max-sm:mx-[5%]">
        <NotesInput addNewNote={addNewNote} />
      </div>
      <div className="max-w-4xl mx-auto my-5 max-md:mx-[5%]">
        <SearchNote onSearch={onSearch} />
        <h1 className="text-3xl font-bold text-sky-600 my-5">Catatan Aktif</h1>
        {notes.length === 0 ? (
          <p className="text-center font-semibold text-xl text-slate-500">Catatan Kosong</p>
        ) : (
          <NoteList
            notesList={notes.filter((note) => note.archived === false)}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        )}
        <h1 className="text-3xl font-bold text-sky-600 my-5">Arsip</h1>
        <NoteList
          notesList={notes.filter((note) => note.archived === true)}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      </div>
    </>
  );
};
