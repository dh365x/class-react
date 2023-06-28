import {
	DragDropContext,
	Draggable,
	Droppable,
	DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";

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

function App() {
	const [toDos, setToDos] = useRecoilState(toDoState);
	const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
		if (destination?.index === source.index) return;
		setToDos((currentToDos) => {
			const toDosCopy = [...currentToDos];

			// 1) Delete item on source.index
			console.log("Delete item on", source.index);
			console.log(toDosCopy);
			toDosCopy.splice(source.index, 1);
			console.log("Deleted item");
			console.log(toDosCopy);

			// 2) Put back the item on the destination.index
			console.log("Put the item on the destination.index");
			toDosCopy.splice(Number(destination?.index), 0, draggableId);
			console.log(toDosCopy);

			return toDosCopy;
		});
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<Boards>
					<Droppable droppableId="one">
						{(magic) => (
							<Board ref={magic.innerRef} {...magic.droppableProps}>
								{toDos.map((toDo, index) => (
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
