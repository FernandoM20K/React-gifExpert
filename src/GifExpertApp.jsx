import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Cowboy Bebop' ]);

  const onAddCategory = ( newCateogry ) => {

      if( categories.includes(newCateogry) ) return;

      setCategories( [ newCateogry, ...categories ] )
  }

  return (
      <>
          {/* Titulo */}
          <h1>GifExpertApp</h1>

          {/* Input */}
          <AddCategory 
            //setCategories={ setCategories }
            onNewCategory = { (event) => onAddCategory(event) } 
          />

          {/* Listado de Gif */}
          { 
            categories.map( ( category ) => (
              <GifGrid  key={ category } category = { category } />
            )) 
          }
          {/* Gif Item */}

      </>
  )
}