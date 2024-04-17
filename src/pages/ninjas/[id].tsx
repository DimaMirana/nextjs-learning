
//this runs as buildtime
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((ninja: { id: { toString: () => any; }; }) => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async(context: { params: { id: any; }; }) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const data = await res.json();
    console.log(data)

    return {
        props: {
            ninja: data
        }
    }
}

const Details = ({ninja}:any) => {
    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
     );
}
 
export default Details;