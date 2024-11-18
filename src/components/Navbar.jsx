import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../utils/mediaQueries';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <Wrapper>
            <div className='nav-header'>
                <h4>Travel</h4>
                <button
                    className='menu-toggle'
                    onClick={() => setShowMenu(!showMenu)}
                >
                    ☰
                </button>
            </div>
            <div className='lists'>
                <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
                    <li>accommodations</li>
                    <li>destinations</li>
                    <li>about us</li>
                    <li>contact us</li>
                </ul>
                <button className='btn'>login</button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    text-transform: capitalize;
    padding: 1rem;
    background-color: var(--grey-50);

    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h4 {
        color: var(--headingColor);
    }

    .menu-toggle {
        background: none;
        border: none;
        margin-right:2rem;
        color: var(--headingColor);
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
    }

    ul {
        display: flex;
        gap: 10px;
    }

    li {
        color: var(--text-color);
    }

    li:hover {
        color: var(--primary-200);
        cursor: pointer;
    }
    .lists {
        display: flex;
        justify-content: space-around;
    }
    /* Media Queries */
    @media ${device.mobile} {
        .menu-toggle {
            display: block;
        }

        ul {
            display: none;
            flex-direction: column;
            gap: 1rem;
            position: absolute;
            top: 20%;
            left: 0;
            width: 100%;
            background-color: white;
            padding: 1.9rem;
        }

        ul.show {
            display: flex;
        }

        .btn {
            position: absolute;
            left: 1rem;
            top:3.1rem;
        }
    }
`;

export default Navbar;
