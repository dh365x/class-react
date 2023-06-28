import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import DragabbleCard from "./componenets/DragabbleCard";

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

function App() {
	const [toDos, setToDos] = useRecoilState(toDoState);
	const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
		if (destination?.index === source.index) return;
		setToDos((currentToDos) => {
			const toDosCopy = [...currentToDos];
			toDosCopy.splice(source.index, 1);
			toDosCopy.splice(Number(destination?.index), 0, draggableId);
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
								{toDos.map((toDo: string, index: number) => (
									<DragabbleCard key={toDo} index={index} toDo={toDo} />
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
