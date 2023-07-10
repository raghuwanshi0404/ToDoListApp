import { useState } from 'react'
import './Navbar.css'

export default function AddItem(props) {
    const [input, setInput] = useState("");
    const handleAddition = function (e) {
        e && e.preventDefault();
        props.listen({
            taskId: new Date().getTime(),
            msg: input
        });
        setInput("");
    }

    return (
        <div className="input-group my-4">
            <div className="containerWrapper">
                <form onSubmit={handleAddition}>
                    <input type="text" className="form-control" value={input} placeholder="Add ToDo List" onChange={(e) => setInput(e.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2" >Add</button>
                </form>
            </div>
        </div>
    )
}
