import React from "react";
import "../css/search.css";


function Search() {
  return (
    <>

         <div className="search">
          <i class="icon-search"></i>
                <input
                id="inputSearch" 
                type="text" 
                placeholder='rechercher'/>               
       </div>
     
    </>
  );
}

export default Search;