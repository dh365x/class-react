import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./componenets/Board";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: 100vw;
	height: 100vh;
	max-width: 680px;
`;

const Boards = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 10px;
	width: 100%;
`;

function App() {
	const [toDos, setToDos] = useRecoilState(toDoState);
	const onDragEnd = (info: DropResult) => {
		const { draggableId, source, destination } = info;

		if (!destination) return;
		// same board movement
		if (destination?.droppableId === source.droppableId) {
			setToDos((allBoards) => {
				const boardCopy = [...allBoards[source.droppableId]];
				boardCopy.splice(source.index, 1);
				boardCopy.splice(destination.index, 0, draggableId);
				return {
					...allBoards,
					[source.droppableId]: boardCopy,
				};
			});
		}
		// cress board movement
		if (destination?.droppableId !== source.droppableId) {
			setToDos((allboards) => {
				const sourceBoard = [...allboards[source.droppableId]];
				const destinatioinBoard = [...allboards[destination?.droppableId]];
				sourceBoard.splice(source.index, 1);
				destinatioinBoard.splice(destination?.index, 0, draggableId);
				return {
					...allboards,
					[source.droppableId]: sourceBoard,
					[destination?.droppableId]: destinatioinBoard,
				};
			});
		}
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<Boards>
					{Object.keys(toDos).map((boardId) => (
						<Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
					))}
				</Boards>
			</Wrapper>
		</DragDropContext>
	);
}

export default App;
