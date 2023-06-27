import React from "react";
import { Categories, IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ id, text, category }: IToDo) {
	const setToDos = useSetRecoilState(toDoState);
	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { name },
		} = event;
		setToDos((oldToDos) => {
			const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
			const newToDo = { id, text, category: name as any };
			return [
				...oldToDos.slice(0, targetIndex),
				newToDo,
				...oldToDos.slice(targetIndex + 1),
			];
		});
	};

	return (
		<li>
			<span>{text}</span>
			{category !== Categories.DOING && (
				<button name="DOING" onClick={onClick}>
					Doing
				</button>
			)}
			{category !== Categories.TO_DO && (
				<button name="TO_DO" onClick={onClick}>
					To Do
				</button>
			)}
			{category !== Categories.DONE && (
				<button name="DONE" onClick={onClick}>
					Done
				</button>
			)}
		</li>
	);
}

export default ToDo;
