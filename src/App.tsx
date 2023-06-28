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
	const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
		if (destination?.index === source.index) return;
		/* setToDos((currentToDos) => {
			const toDosCopy = [...currentToDos];
			toDosCopy.splice(source.index, 1);
			toDosCopy.splice(Number(destination?.index), 0, draggableId);
			return toDosCopy;
		}); */
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
