import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [newNote, setNote] = useState({
        title: "",
        content: ""
    });

    const [defaultState, setDefaultState] = useState(true);

    function handleChange(event) {
        const { name, value } = event.target;

        setNote({ ...newNote, [name]: value });
    }

    function onAdd(event) {
        props.addNotes(newNote);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {!defaultState && <input
                    onChange={handleChange}
                    name="title"
                    placeholder="Title"
                    value={newNote.title}
                />}
                <textarea
                    onClick={() => {
                        setDefaultState(false)
                    }}
                    onChange={handleChange}
                    name="content"
                    placeholder="Take a note..."
                    rows={defaultState ? "1" : "3"}
                    value={newNote.content}
                />
                <Zoom in={!defaultState}>
                    <Fab onClick={onAdd}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;