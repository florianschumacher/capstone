import styled from 'styled-components/macro';
import React from 'react';

const Header = ({ title }) => {
    return (
        <Head>
            <>
                <h1>
                    {title}
                </h1>
            </>
        </Head>
    )
}

const Head = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.125rem;
    width: 23.4375rem;
    background: #ebeded;
    border-style: none;
    border-bottom: 0.25rem white;
    h1 {
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 300;
        font-size: 2rem;
    };
`
export default Header;

