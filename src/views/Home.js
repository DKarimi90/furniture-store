import FurnitureList from '../components /FurnitureList'
import useFetch from '../useFetch'


function Home() {

  const {furniture, isPending, error } = useFetch("http://localhost:8001/furniture")  


    

  return (
    <div className='home'>
        {isPending && <div>Loading...</div>}
        {furniture && <FurnitureList furniture = {furniture}/>}
        {error && <div>{error}</div>}
    </div>
  )
}

export default Home