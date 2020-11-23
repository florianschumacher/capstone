import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';


/*  */
export default function SearchForm() {
    const [searchTerm, setSearchTerm] = useState({
        sendForm: ''
    })
    const handleChange = event => { setSearchTerm(event.target.value); }
};


return (
    <FormWrapper onSubmit={sendForm}>
        <div>
            <label htmlFor="searchFormula"></label>
        </div>

    </FormWrapper>
)