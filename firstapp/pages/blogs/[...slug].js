import { useRouter } from "next/router";

function CatchAllExamplePage() {
	const router = useRouter();
	return (
		<div>
			<h1> I am CatchAllExamplePage {router.query.slug} </h1>
		</div>
	);
}
export default CatchAllExamplePage;
