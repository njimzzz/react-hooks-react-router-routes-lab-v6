function DirectorCard({movies,name}) {
  //console.log(movies);
//    const listMovies = movies.forEach((one,index) => {
//     console.log(one);
//     return (
//             <li key={index}>{one}</li>
//     )
//    });
   return(
       <>
        <article>
           <h2>{name}</h2>
           <ul>
             <li>{movies}</li>
           </ul>
        </article> 
       </>
   )
       
}

export default DirectorCard