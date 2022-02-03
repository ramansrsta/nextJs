import { useRouter } from "next/router";

function ClientIdHomePage() {
	const router = useRouter();
	const moveHandler = () => {
		router.push("/clients/1/2");
	};
	return (
		<div>
			<h1> I am ClientIdHomePage {router.query.id} </h1>
			<button onClick={moveHandler}> Move to Client Id page</button>
		</div>
	);
}
export default ClientIdHomePage;
