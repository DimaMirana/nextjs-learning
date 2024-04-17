import styles from '../../../styles/ninjas.module.css';
import Link from "next/link"

//this runs as buildtime
export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
    props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }: any) => {
  console.log(ninjas)

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja: any) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <h3 className={styles.single}>{ ninja.name }</h3>
        </Link>
      ))}
    </div>
  );
}
 
export default Ninjas;