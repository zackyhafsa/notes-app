import React from "react";
import { Header } from "./header";
import { Body } from "./body";
import { getInitialData } from "../utils/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      unfilteredNotes: getInitialData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNotesHandler(newNoteData) {
    this.setState((prevState) => {
      return {
        notes: [newNoteData, ...prevState.notes],
        unfilteredNotes: [newNoteData, ...prevState.unfilteredNotes],
      };
    });
  }

  onDeleteHandler(id) {
    const result = confirm("Apa anda yakin ingin menghapus catatan ini?");
    if (result === true) {
      this.setState((prevState) => {
        return {
          notes: prevState.unfilteredNotes.filter((note) => note.id !== id),
          unfilteredNotes: prevState.unfilteredNotes.filter((note) => note.id !== id),
        };
      });
      toast.success("Catatan berhasil dihapus");
    } else {
      toast.error("Catatan Batal Dihapus");
    }
  }

  onArchiveHandler(id) {
    const noteToModify = this.state.unfilteredNotes.filter((note) => note.id === id)[0];
    const modifiedNote = {
      ...noteToModify,
      archived: !noteToModify.archived,
    };
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes.filter((note) => note.id !== id), modifiedNote],
        unfilteredNotes: [...prevState.notes.filter((note) => note.id !== id), modifiedNote],
      };
    });

    if (noteToModify.archived) {
      toast.success("Berhasil ditambahkan ke Catatan Aktif");
    } else {
      toast.success("Berhasil ditambahkan ke Arsip");
    }
  }

  onSearchHandler(text) {
    if (text.length !== 0 && text.trim() !== 0) {
      this.setState({
        notes: this.state.unfilteredNotes.filter((note) =>
          note.title.toLowerCase().includes(text.toLowerCase())
        ),
      });
    } else {
      this.setState({
        notes: this.state.unfilteredNotes,
      });
    }
  }

  render() {
    return (
      <>
        <Header />
        <Body
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          addNewNote={this.onAddNotesHandler}
          onSearch={this.onSearchHandler}
        />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </>
    );
  }
}

export default NotesApp;
