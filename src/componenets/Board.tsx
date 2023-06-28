import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";
import { useForm } from "react-hook-form";
import { ITodo } from "../atoms";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	min-height: 300px;
	padding: 20px 10px;
	padding-top: 10px;
	border-radius: 5px;
	background-color: ${(props) => props.theme.boardColor};
	overflow: hidden;
`;

const Title = styled.h2`
	margin-bottom: 10px;
	text-align: center;
	font-size: 18px;
	font-weight: 600;
`;

interface IAreaProps {
	isDragginOver: boolean;
	isDraggingFromThis: boolean;
}

const Area = styled.div<IAreaProps>`
	flex-grow: 1;
	padding: 20px;
	background-color: ${(props) =>
		props.isDragginOver
			? "#dfe6e9"
			: props.isDraggingFromThis
			? "#b2bec3"
			: "transparent"};
	transition: background-color 0.3s ease-in-out;
`;

const Form = styled.form`
	width: 100%;
	input {
		width: 100%;
	}
`;

interface IBoardProps {
	toDos: ITodo[];
	boardId: string;
}

interface IForm {
	toDo: string;
}

function Board({ toDos, boardId }: IBoardProps) {
	const { register, setValue, handleSubmit } = useForm<IForm>();
	const onValid = (data: IForm) => {
		console.log(data);
		setValue("toDo", "");
	};
	return (
		<Wrapper>
			<Title>{boardId}</Title>
			<Form onSubmit={handleSubmit(onValid)}>
				<input
					type="text"
					placeholder={`Add task on ${boardId}`}
					{...register("toDo", { required: true })}
				/>
			</Form>
			<Droppable droppableId={boardId}>
				{(magic, info) => (
					<Area
						ref={magic.innerRef}
						{...magic.droppableProps}
						isDragginOver={info.isDraggingOver}
						isDraggingFromThis={Boolean(info.draggingFromThisWith)}
					>
						{toDos.map((toDo, index) => (
							<DragabbleCard
								key={toDo.id}
								index={index}
								toDoId={toDo.id}
								toDoText={toDo.text}
							/>
						))}
						{magic.placeholder}
					</Area>
				)}
			</Droppable>
		</Wrapper>
	);
}

export default Board;
