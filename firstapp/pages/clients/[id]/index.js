import { useRouter } from "next/router";

function ClientIdHomePage() {
	const router = useRouter();
	return (
		<div>
			<h1> I am ClientIdHomePage {router.query.id} </h1>
		</div>
	);
}
export default ClientIdHomePage;
