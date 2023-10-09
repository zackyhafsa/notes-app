import React, { useState } from "react";
import { toast } from "react-toastify";
import SearchNote from "./searchNote";

function NotesInput({ addNewNote }) {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    noteBodyLength: 0,
  });

  const onTitleChangeHandler = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onBodyChangeHandler = (event) => {
    event.preventDefault();
    if (event.target.value.length <= 50) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        noteBodyLength: event.target.value.length,
      });
    } else {
      toast.warn("Karakter tidak boleh lebih dari 50");
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (formData.title === "") {
      toast.error("Judul tidak boleh kosong");
    } else if (formData.body === "") {
      toast.error("Deskripsi tidak boleh kosong");
    } else {
      const newData = {
        id: +new Date(),
        title: formData.title,
        body: formData.body,
        archived: false,
        createdAt: new Date(),
      };
      const result = addNewNote(newData);
      if (!result) {
        toast.success("Catatan Berhasil Ditambahkan");
        setFormData({
          ...formData,
          title: "",
          body: "",
          noteBodyLength: 0,
        });
      } else {
        toast.error("Catatan gagal ditambahkan");
      }
    }
  };

  return (
    <>
      <h1 className="font-bold text-3xl text-sky-600">Masukkan Catatan</h1>
      <form className="flex flex-col" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Masukkan Judul Catatan"
          name="title"
          className="p-2 border my-3 rounded-lg"
          value={formData.title}
          onChange={onTitleChangeHandler}
        />
        <p className="text-sm text-slate-600">Sisa Karakter: {50 - formData.noteBodyLength}</p>
        <textarea
          name="body"
          id="catatan"
          cols="30"
          rows="10"
          maxLength="51"
          placeholder="Masukkan Deskripsi Catatan"
          className="p-2 border rounded-lg"
          value={formData.body}
          onChange={onBodyChangeHandler}
        ></textarea>
        <button type="submit" className="py-2 px-3 my-3 bg-sky-600 text-white mx-2 rounded-lg">
          Tambah
        </button>
      </form>
    </>
  );
}

export default NotesInput;
