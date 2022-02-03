import { useRouter } from "next/router";

function PortfolioProjectPage() {
	const route = useRouter();
	return (
		<div>
			<h1> I am PortfolioProjectPage {route.query.projectId} </h1>
		</div>
	);
}
export default PortfolioProjectPage;
