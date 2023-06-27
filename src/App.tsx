import React from "react";
import { useRecoilState } from "recoil";
import { hoursState, minutesState } from "./atoms";

function App() {
	const [minutes, setMinutes] = useRecoilState(minutesState);
	const [hours, setHours] = useRecoilState(hoursState);

	const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
		setMinutes(Number(event.currentTarget.value));
	};
	const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
		setHours(Number(event.currentTarget.value));
	};

	return (
		<div>
			<input
				type="number"
				value={minutes}
				onChange={onMinutesChange}
				placeholder="Minutes"
			/>
			<input
				type="number"
				value={hours}
				onChange={onHoursChange}
				placeholder="Hours"
			/>
		</div>
	);
}

export default App;
