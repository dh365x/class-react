import { useForm } from "react-hook-form";

function ToDoList() {
	const { register, handleSubmit, formState } = useForm();
	const onValid = (data: any) => {
		console.log("data:", data);
	};
	console.log("error:", formState.errors);

	return (
		<div>
			<form
				style={{ display: "flex", flexDirection: "column" }}
				onSubmit={handleSubmit(onValid)}
			>
				<input {...register("email", { required: true })} placeholder="Email" />
				<input
					{...register("firstName", { required: true })}
					placeholder="First Name"
				/>
				<input
					{...register("lastName", { required: true })}
					placeholder="Last Name"
				/>
				<input
					{...register("userName", { required: true, minLength: 2 })}
					placeholder="User Name"
				/>
				<input
					{...register("password", { required: true, minLength: 5 })}
					placeholder="Password"
				/>
				<input
					{...register("password1", {
						required: "Password is required",
						minLength: {
							value: 5,
							message: "Your password is too short.",
						},
					})}
					placeholder="Password1"
				/>
				<button>Add</button>
			</form>
		</div>
	);
}

export default ToDoList;
