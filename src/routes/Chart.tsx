import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";

interface ChartProps {
	coinId: string;
}

function Chart({ coinId }: ChartProps) {
	const { data, isLoading } = useQuery(["ohlcv", coinId], () =>
		fetchCoinHistory(coinId)
	);
	console.log(data);
	return <h1>Chart</h1>;
}

export default Chart;
