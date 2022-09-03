import React from 'react'


function Search() {
    return (

        <>
        
        
            <div className="Search">
           
           
                <input 
                type="text" 
                name="searchBar" 
                placeholder='rechercher' />
                
            </div>
            
            
            <div className='search__Results'>
                <div className="search__Result">

                </div>
            </div>
        </>
    )
}

export default Search;