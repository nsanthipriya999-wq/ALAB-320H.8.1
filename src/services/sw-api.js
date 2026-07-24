

const BASE_URL = "https://swapi.py4e.com/api/starships/";

export async function getAllStarships(url=BASE_URL) {

      //let starships=[]
      //let url = BASE_URL;
       const response=await fetch((url));
       if(!response.ok){
          throw new Error("Failed to load starships ");
       }
    
    const data = await response.json();
     
     return data;
    }






