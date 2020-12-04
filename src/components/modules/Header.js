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
    position: fixed;
    margin: 0;
    margin-left: -8px;
    margin-top: -8px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.125rem;
    width: 23.438rem;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 33%, rgba(178,140,64,1) 33%);
    z-index: 97;
    border-style: none;
    box-shadow: 0.25rem 0.25rem 0.5rem #b28c40;
    h1 {
        display: flex;
        justify-content: right;
        text-align: left;
        margin-right: 1.5rem;
        margin-left: 1.5rem;
        padding-left: 2rem;
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
    };
`
export default Header;

