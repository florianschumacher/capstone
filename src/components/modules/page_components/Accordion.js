import React, { useState } from 'react';
import styled from 'styled-components/macro';

export default function Accordion({ image, title, ingredientList }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Accordionbody className="accordion">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="accordion-header"
            >
                <img
                    alt="cookie"
                    className="accordion-image"
                    src={image}
                />
                <h2>{title}</h2>
                <div className="accordion-indicator">
                    {isOpen ? '-' : '+'}
                </div>
            </div>
            {isOpen && (
                <div className="accordion-body">{ingredientList.shoppingList.map(ingredient => <li>{ingredient}</li>)}</div>
            )}
        </Accordionbody>
    );
}

const Accordionbody = styled.div`
.accordion-header {
    padding: 10px;
    cursor: pointer;
    position: relative;
  }
  
  .accordion-header:hover {
    background-color: #eee;
  }
  
  .accordion-image {
    width: 70px;
    position: absolute;
    left: 30px;
  }
  
  .accordion-indicator {
    position: absolute;
    font-size: 30px;
    right: 30px;
    top: 24px;
  }
  
  .accordion-body {
    text-align: left;
    font-size: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }`