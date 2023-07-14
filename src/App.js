import Navbar from './component/Navbar';
import './App.css';
import AddItem from './component/Add-Item';
import ShowList from './component/Show-List';
import { useState } from 'react';

function App() {
	const [content, setContent] = useState([]);
	const [editConfigApp, setEditConfigApp] = useState({});

	const getNewToDoList = function (data) {
		console.log(data);
		setContent([...content, data]);
	}

	const updateAppCallBack = function (updatedData) {
		console.log(updatedData);
		let _content = content.map((item) => {
			if(item.taskId === updatedData.taskId) {
				item.msg = updatedData.msg;
			}
			return item;
		})
		setContent([..._content]);
	}
	//delete
	const deleteToDoList = function (id) {
		let _tempArr = content.filter((item) => {
			return id !== item.taskId;
		});
		setContent([..._tempArr]);
	}
	//edit
	const editToDoList = function (id) {
		let editData = content.filter((item) => {
			return id === item.taskId;
		});
		setEditConfigApp(editData[0]);
	}
	return (
		<div className="container-fluid is-flex justify-content-center">
			<Navbar />
		<div className='conatainer'>
			
			<div className="container-fluid content-main">
				<AddItem listen={getNewToDoList} updateCallBack={updateAppCallBack} editConfig={editConfigApp} />
				<ShowList list={content} deleteFunc={deleteToDoList} editFunc={editToDoList} />
			</div>
		</div>
		</div>
	);
}

export default App;
