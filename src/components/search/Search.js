import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    console.log(navigate)
    
    function getSearchedValue(e) {
        const value = e.target.value
        setSearch(value)
    }

    function navigateTosearchedPage () {
        navigate(`/search/${search}`)
    }


    return (
    
        <div style={{"textAlign":"center"}}>
            <input type="text" placeholder='Search...' onChange={getSearchedValue}
            />
            <button 
                disabled={search.length < 1}
                className={search.length < 1  ? "disableBtn" : "searchBtn"}
                onClick={navigateTosearchedPage}
            >
                <i className="fa-solid fa-magnifying-glass "></i>
            </button>
        </div>
    );
}

export default Search;