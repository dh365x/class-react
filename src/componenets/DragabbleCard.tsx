import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
	padding: 10px;
	margin-bottom: 5px;
	border-radius: 5px;
	background-color: ${(props) => props.theme.cardColor};
`;

interface IDraggableCardProps {
	toDo: string;
	index: number;
}

function DragabbleCard({ toDo, index }: IDraggableCardProps) {
	console.log(toDo, "has been rendered");
	return (
		<Draggable key={toDo} index={index} draggableId={toDo}>
			{(magic) => (
				<Card
					ref={magic.innerRef}
					{...magic.draggableProps}
					{...magic.dragHandleProps}
				>
					{toDo}
				</Card>
			)}
		</Draggable>
	);
}

export default React.memo(DragabbleCard);
