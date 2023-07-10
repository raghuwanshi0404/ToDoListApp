import Navbar from './component/Navbar';
import './App.css';
import AddItem from './component/Add-Item';
import ShowList from './component/Show-List';
import { useState } from 'react';

function App() {
	const[content , setContent] = useState([])
	const getNewToDoList = function (data) {
		console.log(data);
		setContent([...content, data]);
	}
	//delete
	const deleteToDoList = function (id){
		let _tempArr = content.filter((item) => {
			return id != item.taskId;
		});
		setContent([..._tempArr]);
	}
	//edit
	const editToDoList = function (id){
	 let editDAta = content.filter((item) => {
		return id == item.taskId;
	 });
	 console.log(editDAta)

	}
	return (
		<div className="container-fluid is-flex justify-content-center">
			<Navbar />
			<div className="container-fluid content-main">
				<AddItem listen={getNewToDoList}/>
				<ShowList list={content} deleteFunc={deleteToDoList} editFunc={editToDoList} />
			</div>
		</div>
	);
}

export default App;
