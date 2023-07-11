import { FaBeer } from 'react-icons/fa';
import { AiFillEdit } from "react-icons/ai";

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
                        <div className="accordion-item" key={item.taskId}>
                            <h2 className="accordion-header">
                                
                                <div className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <FaBeer  onClick={() => handleDelete(item.taskId)}/>
                                    <AiFillEdit className='mx-3' onClick={() => handleEdit(item.taskId)}/>
                                    <div className='mx-5'>
                                        {item.msg}
                                    </div>
                                    
                                </div>
                            </h2>
                            
                        </div>
                    );
                })
            }

        </div>
    );
}