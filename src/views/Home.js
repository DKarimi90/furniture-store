import FurnitureList from '../components /FurnitureList'
import useFetch from '../useFetch'


function Home() {

  const {furniture, isPending, error } = useFetch("https://json-server-m8mg595x9-dkarimi90.vercel.app/furniture")  


    

  return (
    <div className='home'>
        {isPending && <div>Loading...</div>}
        {furniture && <FurnitureList furniture = {furniture}/>}
        {error && <div>{error}</div>}
    </div>
  )
}

export default Home