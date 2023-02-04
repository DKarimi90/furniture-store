import FurnitureList from '../components /FurnitureList'
import useFetch from '../useFetch'


function Home() {

  const {furniture, isPending, error } = useFetch("https://new-json-server.vercel.app/furniture")  


    

  return (
    <div className='home'>
        {isPending && <div>Loading...</div>}
        {furniture && <FurnitureList furniture = {furniture}/>}
        {error && <div>{error}</div>}
    </div>
  )
}

export default Home