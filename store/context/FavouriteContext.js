import { createContext, useState } from "react";

const FavouriteContext = createContext({
  ids: [],
  addFav: (id) => {},
  removeFav: (id) => {},
});

function FavouriteContextProvider({children}){
  const [favouriteMealId,setfavouriteMealId]=useState([]);

  function addFavourite(id){
    setfavouriteMealId((currentFavId)=>{
      [...currentFavId,id]
    })
  }

  function removeFavourite(id){
    setfavouriteMealId((currentFavId)=>{
      currentFavId.filter((mealId)=>{mealId !== id})
    })
  }

  const values={
    ids:favouriteMealId,
    addFav:addFavourite,
    removeFav:removeFavourite,
  }

    return(
        <FavouriteContext.Provider value={values}>{children}</FavouriteContext.Provider>
    )
}

export default FavouriteContextProvider;