import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

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

interface IBoardProps {
	toDos: string[];
	boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
	return (
		<Wrapper>
			<Title>{boardId}</Title>
			<Droppable droppableId={boardId}>
				{(magic, info) => (
					<Area
						ref={magic.innerRef}
						{...magic.droppableProps}
						isDragginOver={info.isDraggingOver}
						isDraggingFromThis={Boolean(info.draggingFromThisWith)}
					>
						{toDos.map((toDo, index) => (
							<DragabbleCard key={toDo} index={index} toDo={toDo} />
						))}
						{magic.placeholder}
					</Area>
				)}
			</Droppable>
		</Wrapper>
	);
}

export default Board;
