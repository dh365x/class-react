import { useQuery } from "@tanstack/react-query";
import ApexCharts from "react-apexcharts";
import { fetchCoinHistory } from "../api";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface IProps {
	coinId: string;
}

interface IHistorical {
	time_open: number;
	time_close: number;
	open: string;
	high: string;
	low: string;
	close: string;
	volume: string;
	market_cap: number;
}

function Price({ coinId }: IProps) {
	const isDark = useRecoilValue(isDarkAtom);
	const { data, isLoading } = useQuery<IHistorical[]>(
		["price", coinId],
		() => fetchCoinHistory(coinId),
		{
			refetchInterval: 10000,
		}
	);

	const emptyArray = data ?? [];
	const chartData = emptyArray.map((v) => {
		return {
			x: new Date(v.time_close * 1000).toLocaleDateString(),
			y: [v.open, v.high, v.low, v.close],
		};
	});

	return (
		<>
			{isLoading ? (
				"Loading chart..."
			) : (
				<ApexCharts
					type="candlestick"
					series={[
						{
							name: "Price",
							data: chartData,
						},
					]}
					options={{
						chart: {
							height: 300,
							width: 500,
							toolbar: { show: false },
							background: "transparent",
						},
						theme: {
							mode: isDark ? "dark" : "light",
						},
						grid: { show: true },
					}}
				/>
			)}
		</>
	);
}

export default Price;
