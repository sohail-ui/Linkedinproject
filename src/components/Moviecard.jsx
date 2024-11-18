 import React from 'react'
 
 const Moviecard=({id,poster,title,date,media_type,vote_average})=>{
   return (
     <div className='bg-white rounded-xl p-5  w-[300px] shadow-2xl'>
       <div className='inline-block  bg-[#1976d2] py-1 px-2 rounded-xl mb-3 text-sm'>{vote_average}</div>
       <img src={"http://image.tmdb.org/t/p/w300" +poster} alt=""  className='w-full h-auto rounded-lg mb-3 ' />
       <b className='block text-lg font-bold mb-2'>{title}</b>
       <div className='flex justify-between text-sm text-[#757575]'>
        <span>{media_type}</span>
        <span>{date}</span>
       </div>
     </div>
   )
 }
 
 export default Moviecard
 