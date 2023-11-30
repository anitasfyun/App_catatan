import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getNotes, deleteAccessToken, deleteNote } from "../utils/network";
import NoteList from "../components/NoteList";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  const { username } = useParams();

  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onDeleteHandler = async (id) => {
    const deleteResult = await deleteNote(id);

    if (!deleteResult.error) {
      // Jika penghapusan berhasil, jalankan getNotes kembali
      const getNotesResult = await getNotes();

      if (!getNotesResult.error) {
        setNotes(getNotesResult.data);
      } else {
        console.error(
          "Error fetching notes after deletion:",
          getNotesResult.code
        );
      }
    } else {
      console.error("Error deleting note:", deleteResult.code);
    }
  };

  function onLogoutHandler(event) {
    event.preventDefault();
    const isConfirmed = window.confirm("Apakah Anda yakin?");
    if (isConfirmed) {
      deleteAccessToken();
      navigate("/");
    }
  }

  useEffect(() => {
    getNotes()
      .then((result) => {
        const data = result.data;
        setNotes(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="p-3">
      <strong className="fs-1 text-light">Notes {username}</strong>
      <br />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          className="mb-3 btn-outline-info text-center "
          variant="light"
          type="submit"
          style={{
            marginTop: "25px",
          }}
          onClick={() => {
            navigate(`/${username}/add`);
          }}
        >
          Add Notes
        </Button>
      </div>
      <input
        className="form-control me-2 aria-label= Search mb-4 col-12 px-2 "
        type="text"
        onChange={(event) => {
          handleChangeSearch(event);
        }}
        value={search}
        placeholder="Search..."
      />
      <div>
        <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
      </div>
      <div className="d-flex flex-row-reverse">
        <Button
          className="mb-3 btn-outline-info text-center"
          variant="light"
          type="submit"
          style={{
            marginTop: "25px",
          }}
          onClick={(event) => {
            onLogoutHandler(event);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
            />
            <path
              fill-rule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Home;
