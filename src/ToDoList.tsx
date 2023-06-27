import { useForm } from "react-hook-form";

function ToDoList() {
	const { register, watch } = useForm();
	console.log(watch());

	return (
		<div>
			<form>
				<input {...register("email")} placeholder="Email" />
				<input {...register("firstName")} placeholder="First Name" />
				<input {...register("lastName")} placeholder="Last Name" />
				<input {...register("userName")} placeholder="User Name" />
				<input {...register("password")} placeholder="Password" />
				<input {...register("password1")} placeholder="Password1" />
				<button>Add</button>
			</form>
		</div>
	);
}

export default ToDoList;

// import React, { useState } from "react";

// function ToDoList() {
// 	const [toDo, setToDo] = useState("");
// 	const [toDoError, setToDoError] = useState("");

// 	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
// 		const {
// 			currentTarget: { value },
// 		} = event;
// 		setToDoError("");
// 		setToDo(value);
// 	};
// 	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// 		event.preventDefault();
// 		if (toDo.length < 10) {
// 			return setToDoError("To do should be longer");
// 		}
// 		console.log("submit");
// 	};

// 	return (
// 		<div>
// 			<form onSubmit={onSubmit}>
// 				<input value={toDo} onChange={onChange} placeholder="Write a to do" />
// 				{toDoError !== "" ? toDoError : null}
// 				<button>Add</button>
// 			</form>
// 		</div>
// 	);
// }

// export default ToDoList;
