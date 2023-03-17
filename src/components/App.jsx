import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {

    const [notesArray, setArray] = useState([]);

    function addNotes(newNote) {
        setArray([...notesArray, newNote]);
    }

    function deleteNote(id) {
        setArray(notesArray.filter((note, index) => {
            return index !== id;
        }));
    }

    return <div>
        <Header />
        <CreateArea addNotes={addNotes} />
        {notesArray.map((note, index) => (
            <Note
                id={index}
                key={index}
                title={note.title}
                content={note.content}
                deleteNote={deleteNote}
            />
        ))}
        <Footer />
    </div>
};

export default App;