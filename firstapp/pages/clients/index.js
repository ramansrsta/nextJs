import Link from "next/link";
function Clients() {
	return (
		<div>
			<h1> I am Clients </h1>
			<ul>
				<li>
					<Link
						href={{
							pathname: "clients/[id]",
							query: { id: "1" },
						}}
					>
						Individual Client
					</Link>
				</li>
			</ul>
		</div>
	);
}
export default Clients;
