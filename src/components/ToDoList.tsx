import { useForm } from "react-hook-form";
import {
	atom,
	useRecoilState,
	useRecoilValue,
	useSetRecoilState,
} from "recoil";

interface IForm {
	toDo: string;
}

interface IToDo {
	id: number;
	text: string;
	category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
	key: "toDo",
	default: [],
});

function ToDoList() {
	// const value = useRecoilValue(toDoState);
	// const modFn = useSetRecoilState(toDoState);
	// const [value, modFn] = useRecoilState(toDoState);
	const [toDos, setToDos] = useRecoilState(toDoState);
	const { register, handleSubmit, setValue } = useForm<IForm>();

	const handleValid = ({ toDo }: IForm) => {
		setToDos((oldToDos) => [
			{ id: Date.now(), text: toDo, category: "TO_DO" },
			...oldToDos,
		]);
		setValue("toDo", "");
	};

	return (
		<div>
			<form onSubmit={handleSubmit(handleValid)}>
				<input
					{...register("toDo", { required: "Please write a To Do" })}
					placeholder="Write a To Do"
				/>
				<button>Add</button>
			</form>
			<ul>
				{toDos.map((toDo) => (
					<li key={toDo.id}>{toDo.text}</li>
				))}
			</ul>
		</div>
	);
}

export default ToDoList;
