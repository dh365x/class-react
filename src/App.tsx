import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: 100%;
	height: 100vh;
	max-width: 480px;
`;

const Boards = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	width: 100%;
`;

const Board = styled.div`
	min-height: 200px;
	padding: 20px 10px;
	padding-top: 30px;
	border-radius: 5px;
	background-color: ${(props) => props.theme.boardColor};
`;

const Card = styled.div`
	padding: 10px;
	margin-bottom: 5px;
	border-radius: 5px;
	background-color: ${(props) => props.theme.cardColor};
`;

const toDos = ["a", "b", "c", "d", "e", "f"];

function App() {
	const onDragEnd = () => {};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<Boards>
					<Droppable droppableId="one">
						{(magic) => (
							<Board ref={magic.innerRef} {...magic.droppableProps}>
								{toDos.map((toDo, index) => (
									<Draggable draggableId={toDo} index={index} key={index}>
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
								))}
								{magic.placeholder}
							</Board>
						)}
					</Droppable>
				</Boards>
			</Wrapper>
		</DragDropContext>
	);
}

export default App;
