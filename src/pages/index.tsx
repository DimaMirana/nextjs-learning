import Link from "next/link"
import styles from "../../styles/home.module.css"
import Head from "next/head"

export default function Page() {
  return <>
    <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
    </Head>
    <div>
    <h1 className={styles.title}>HomePage</h1>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt ex totam necessitatibus cum possimus beatae quod commodi aliquam rem harum ab saepe amet, at id atque fuga recusandae rerum!</p>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt ex totam necessitatibus cum possimus beatae quod commodi aliquam rem harum ab saepe amet, at id atque fuga recusandae rerum!</p>
    <Link className={styles.btn} href="/ninjas">See All Ninjas</Link>
  </div>
  </>
}