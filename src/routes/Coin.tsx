import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	margin: 0 auto;
	max-width: 480px;
	padding: 20px;
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

const Loader = styled.span`
	display: block;
	text-align: center;
`;

interface RouteParams {
	coinId: string;
}
interface RouteState {
	name: string;
}

function Coin() {
	const [loading, setLoading] = useState(true);
	const { coinId } = useParams<RouteParams>();
	const { state } = useLocation<RouteState>();

	return (
		<Container>
			<Header>
				<Title>{state.name || "Loading..."}</Title>
			</Header>
			{loading ? <Loader>Loading...</Loader> : null}
		</Container>
	);
}

export default Coin;
