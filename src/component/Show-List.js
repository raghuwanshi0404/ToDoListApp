// import { FaBeer } from 'react-icons/fa';
// import { AiFillEdit } from "react-icons/ai";

export default function ShowList(props) {
    console.log(props.list);
    //delete function
    const handleDelete = (id) => {
        console.log(id, 'handle delete is called');
        props.deleteFunc(id);
    }
    // Edit Function
    const handleEdit = (id) => {
        console.log(id, 'handle edit is called');
        props.editFunc(id)
    }
    return (
        <div className="accordion" id="accordionExample">
            {
                props.list.map((item) => {
                    return (
                        
                            <div className="accordion-item my-4 mx-2" key={item.taskId}>
                               <div className='wrapper'>
                                <p className="accordion-header">

                                    <div className='mx-5'> {item.msg} </div>
                                </p>
                            
                            <div className='btnWrapper'>
                                <button className="b1" onClick={() => handleDelete(item.taskId)}> Delete</button>
                                <button className=' b2 mx-2' onClick={() => handleEdit(item.taskId)}>Edit</button>

                            </div>
                            </div>
                        </div>
                    );
                })
            }

        </div>
    );
}