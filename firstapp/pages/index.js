import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Hello Next</title>
			</Head>
			<p> Hello Next World. I am host</p>
		</div>
	);
}
