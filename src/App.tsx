import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hoursState, minutesState } from "./atoms";

function App() {
	const [minutes, setMinutes] = useRecoilState(minutesState);
	const hours = useRecoilValue(hoursState);

	const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
		setMinutes(Number(event.currentTarget.value));
	};

	return (
		<div>
			<input
				type="number"
				value={minutes}
				onChange={onMinutesChange}
				placeholder="Minutes"
			/>
			<input type="number" value={hours} placeholder="Hours" />
		</div>
	);
}

export default App;
