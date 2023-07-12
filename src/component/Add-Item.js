import { useEffect, useState } from 'react'
import './Navbar.css'

export default function AddItem(props) {
    const [input, setInput] = useState("");
    const [btnName, setBtnName] = useState("Add");

    useEffect(() => {
        console.log('it getting update', props.editConfig);
        setInput(props.editConfig.msg);
        setBtnName(Object.keys(props.editConfig).length !==0 ? 'Update' : 'Add');
    }, [props.editConfig]);


    const handleAddition = function (e) {
        e && e.preventDefault();
        if(btnName === 'Add') {
            props.listen({
                taskId: new Date().getTime(),
                msg: input
            });
            setInput("");
        } else {
            props.updateCallBack({
                taskId: props.editConfig.taskId,
                msg: input
            });
            setInput("");
            setBtnName("Add");
        }
        
    }

    return (
        <div className="input-group my-4">
            <div className="containerWrapper">
                <form onSubmit={handleAddition}>
                    <input type="text" className="form-control" value={input} placeholder="Add ToDo List" onChange={(e) => setInput(e.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary mx-2" type="submit" id="button-addon2" >{btnName}</button>
                </form>
            </div>
        </div>
    )
}
