import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
	padding: 10px;
	margin-bottom: 5px;
	border-radius: 5px;
	background-color: ${(props) =>
		props.isDragging ? "#e4f2ff" : props.theme.cardColor};
	box-shadow: ${(props) =>
		props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

interface IDraggableCardProps {
	toDo: string;
	index: number;
}

function DragabbleCard({ toDo, index }: IDraggableCardProps) {
	return (
		<Draggable index={index} draggableId={toDo}>
			{(magic, snapshot) => (
				<Card
					ref={magic.innerRef}
					{...magic.draggableProps}
					{...magic.dragHandleProps}
					isDragging={snapshot.isDragging}
				>
					{toDo}
				</Card>
			)}
		</Draggable>
	);
}

export default React.memo(DragabbleCard);
