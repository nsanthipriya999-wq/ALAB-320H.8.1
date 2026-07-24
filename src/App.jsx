import { useState,useEffect } from "react";
import StarshipCard from "./components/StarshipCard";
import { getAllStarships } from "./services/sw-api";
export default function App(){
//---------state variables-----------------
  const [starships, setStarships] = useState([]);
  const [nextPage,setNextPage]=useState(null);

  // Takes two arguments:
  // 1st is a setup function (callback function)
  // 2nd is a dependency list (array)

  //-----------------useEffect----------------------
  useEffect(() => {

    
    async function fetchStarships () {
     try{
      const data = await getAllStarships();
      console.log(data);
      setStarships(data.results);
      setNextPage(data.next);
    }catch(error)
    {
      console.log(error);
    }
  }
    fetchStarships();

  }, []);

  //---load more---------------------------------

  async function loadMoreStarships(){

    const data =await getAllStarships(nextPage);

    setStarships((PrevStarships)=>[
           ...PrevStarships,
           ...data.results




    ]);
    setNextPage(data.next);
  }
  
console.log("starships:", starships);
console.log("nextPage:", nextPage);
  return (
    <div className="container">
      {starships.map((starship) => (  
         <StarshipCard
            key={starship.url}
            starship={starship}
        
        />
      ))}
        {
          nextPage && (
             <button onClick={loadMoreStarships}>Load More</button>

          )}
  
    </div>
  );
}


