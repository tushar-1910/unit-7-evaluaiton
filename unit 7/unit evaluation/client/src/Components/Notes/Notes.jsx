import React from 'react'
import { useNavigate } from 'react-router-dom';

function Notes() {
    const [Notes, setNotes] = React.useState([])
    const [input, setInput] = React.useState('')
    const [note, setnote] = React.useState('')
    const [label, setLabel] = React.useState('')
    const token = localStorage.getItem('token');
    const [update, setUpdate] = React.useState(false);
    const [newinput, setnewInput] = React.useState('')
    const [newnote, setnewnote] = React.useState('')
    const [newlabel, setnewLabel] = React.useState('')
    const navigate = useNavigate();

    const handleAdd = async () => {
        const body = {
            title: input,
            note: note,
            label: label
        }
        // console.log(body)
        try {
            await fetch('http://localhost:8080/createNote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                body: JSON.stringify(body)
            });            // console.log(response)
            setInput('');
            setnote('');
            setLabel('');
            getAllNotes();
            // setNotes(response)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllNotes = async () => {
        try {
            let data = await fetch('http://localhost:8080/getAllNotes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                }
            });
            let response = await data.json();
            console.log(response);
            // setNotes(response)
            if (typeof response === 'object') {
                setNotes(response)
            }
            else {
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            let data = await fetch('http://localhost:8080/deleteNote', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                body: JSON.stringify({
                    id: id
                })
            });
            let res = await data.json();
            alert(res.message);
            getAllNotes();
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = async (id) => {
        try {
            let data = await fetch('http://localhost:8080/updateNote', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                body: JSON.stringify({
                    id: id,
                    title: newinput,
                    note: newnote,
                    label: newlabel
                })
            });
            let res = await data.json();
            alert("note updated");
            setnewInput('');
            setnewnote('');
            setnewLabel('');
            getAllNotes();
        } catch (error) {
            console.log(error)
        }
    }


    React.useEffect(() => {
        getAllNotes();
    }
        , []);


    return (
        <div>
            <div style={{display:"flex"}}>
            <p>Title : </p>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <p>Note : </p>
                <input type="text" value={note} onChange={(e) => setnote(e.target.value)} />
                <p>Label : </p>
                <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
                <button onClick={handleAdd}>ADD</button>
            </div>
            <div>
                {Notes?.map((notes, index) => {
                    return <div key={index}>
                        <p>Title : {notes.title}</p>
                        <p>Note : {notes.note}</p>
                        <p>Label : {notes.label}</p>
                        <button onClick={() => { handleDelete(notes._id) }}>DELETE</button>
                        <button onClick={() => { setUpdate(true) }}>UPDATE</button>
                        <div>
                            {
                                update ?
                                    <div style={{display:"flex"}}>
                                        <p>Title : </p>
                                        <input type="text" value={newinput} onChange={(e) => setnewInput(e.target.value)} />
                                        <p>Note : </p>
                                        <input type="text" value={newnote} onChange={(e) => setnewnote(e.target.value)} />
                                        <p>Label : </p>
                                        <input type="text" value={newlabel} onChange={(e) => setnewLabel(e.target.value)} />
                                        <button onClick={() => { setUpdate(false); getAllNotes() }}>CANCEL</button>
                                        <button onClick={() => { handleUpdate(notes._id); setUpdate(false); getAllNotes() }}>UPDATE</button>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Notes