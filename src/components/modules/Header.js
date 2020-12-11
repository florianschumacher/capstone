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
    margin-left: 0px;
    margin-top: 0px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.125rem;
    width: 23.438rem;
    background: rgba(178,140,64,1);
    z-index: 97;
    border-style: none;
    border-bottom: 0.25rem white;
    box-shadow: 0rem 0.25rem 0.5rem #b28c40;
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

