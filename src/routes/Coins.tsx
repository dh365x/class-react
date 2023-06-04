import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Container = styled.div`
	margin: 0 auto;
	max-width: 480px;
	padding: 0px 20px;
`;

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 15vh;
`;

const Title = styled.h1`
	color: ${(props) => props.theme.accentColor};
	font-size: 48px;
`;

const CoinsList = styled.ul``;

const Loader = styled.span`
	display: block;
	text-align: center;
`;

const Coin = styled.li`
	margin-bottom: 10px;
	border-radius: 15px;
	background-color: white;
	color: ${(props) => props.theme.bgColor};
	a {
		display: block;
		padding: 20px;
		transition: color 0.2s ease-in;
	}
	&:hover {
		a {
			color: ${(props) => props.theme.accentColor};
		}
	}
`;

interface ICoin {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	is_new: boolean;
	is_active: boolean;
	type: string;
}

function Coins() {
	const [coins, setCoins] = useState<ICoin[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const response = await fetch("https://api.coinpaprika.com/v1/coins");
			const json = await response.json();
			setCoins(json.slice(0, 20));
			setLoading(false);
		})();
	}, []);

	return (
		<Container>
			<Header>
				<Title>코인</Title>
			</Header>
			<CoinsList>
				{loading ? (
					<Loader>Loading...</Loader>
				) : (
					<CoinsList>
						{coins.map((coin) => (
							<Coin key={coin.id}>
								<Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
							</Coin>
						))}
					</CoinsList>
				)}
			</CoinsList>
		</Container>
	);
}

export default Coins;
