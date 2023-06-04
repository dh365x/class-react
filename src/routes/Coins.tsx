import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
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

// API → https://api.coinpaprika.com/v1/coins
function Coins() {
	const coins = [
		{
			id: "btc-bitcoin",
			name: "Bitcoin",
			symbol: "BTC",
			rank: 1,
			is_new: false,
			is_active: true,
			type: "coin",
		},
		{
			id: "eth-ethereum",
			name: "Ethereum",
			symbol: "ETH",
			rank: 2,
			is_new: false,
			is_active: true,
			type: "coin",
		},
	];
	return (
		<Container>
			<Header>
				<Title>코인</Title>
			</Header>
			<CoinsList>
				{coins.map((coin) => (
					<Coin key={coin.id}>
						<Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
					</Coin>
				))}
			</CoinsList>
		</Container>
	);
}

export default Coins;
