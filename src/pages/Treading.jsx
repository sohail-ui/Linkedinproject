import Moviecard from '../components/Moviecard'
import { useEffect,useState } from 'react';
import axios from 'axios';
const Treading = () => {
    const [content,setcontent]=useState([]);

    const fetchTrending=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}`);
        setcontent(data.results);
    }
    useEffect(()=>{
        fetchTrending();
    }, []);

  return (
    <div>
      <span className='uppercase flex justify-center font-serif text-2xl p-1 text-white'>Treanding today</span>
      <section className='flex  flex-wrap justify-around  gap-5 mx-8'>
        {  content &&
            content.map((c)=>(
            <Moviecard key={c.id} 
            id={c.id} 
            poster={c.poster_path}
             title={c.title || c.name}
              date={c.first_air_date || c.release_date} 
              media_type={c.media_type}
              vote_average={c.vote_average} />)
        )}
        <Moviecard/>
      </section>
    </div>
  )
}

export default Treading;
