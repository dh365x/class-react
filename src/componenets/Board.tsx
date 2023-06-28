import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
	width: 300px;
	min-height: 300px;
	padding: 20px 10px;
	padding-top: 10px;
	border-radius: 5px;
	background-color: ${(props) => props.theme.boardColor};
`;

const Title = styled.h2`
	margin-bottom: 10px;
	text-align: center;
	font-size: 18px;
	font-weight: 600;
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
				{(magic) => (
					<div ref={magic.innerRef} {...magic.droppableProps}>
						{toDos.map((toDo, index) => (
							<DragabbleCard key={toDo} index={index} toDo={toDo} />
						))}
						{magic.placeholder}
					</div>
				)}
			</Droppable>
		</Wrapper>
	);
}

export default Board;
