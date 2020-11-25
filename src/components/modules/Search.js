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
            <FormWrapper>>
                <form className="search">
                    <input
                        value={searchTerm}
                        onChange={handleChange}
                        type="text"
                    />
                </form>

                <input type="submit" value="SEARCH" onKeyDown={handleKeyDown} />
            </FormWrapper>
        )
    }
}

export default Search;

const FormWrapper = styled.div`
    background-color: 216, 50%, 96%;
    background-size: 375px;
    `