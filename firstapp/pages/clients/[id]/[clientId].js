import { useRouter } from "next/router";
function ClientIdPage() {
	const router = useRouter();
	return (
		<div>
			<h1>
				{" "}
				I am ClientIdPage {router.query.id} and {router.query.clientId}
			</h1>
		</div>
	);
}
export default ClientIdPage;
