import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components/macro';


/*  */
const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const handleChange = (event) => { setSearchTerm(event.target.value); }

    const resetInputField = () => {
        setSearchTerm('')
    }

    const callSearch = (event) => {
        event.preventDefault()
        props.search(searchTerm)
        resetInputField();
    }

    const Input = (event) => {
        const handleKeyDown = (event) => { if (event.key === 'Enter') { callSearch(); } }


        return (
            <container>
                <form className="search">
                    <input
                        value={searchTerm}
                        onChange={handleChange}
                        type="text"
                    />
                </form>

                <input type="submit" value="SEARCH" onKeyDown={handleKeyDown} />
            </container>
        )
    }
}

export default Search;

