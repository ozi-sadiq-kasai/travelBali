import styled from 'styled-components';
import walking from '../assets/walking.jpg';
import dark from '../assets/dark.jpg';
import dragon from '../assets/dragon.jpg';
import { device } from '../utils/mediaQueries';

const Tradition = () => {
    return (
        <Wrapper className='container'>
            <div>
                <h2>
                    traditional bali <br />
                    accommodation in bali island
                </h2>
                <button className='btn'>explore more</button>
            </div>
            <ul>
                <li>
                    <img
                        src={walking}
                        alt='Girls walking on a scenic path'
                        className='img'
                    />
                </li>
                <li>
                    <img
                        src={dark}
                        alt='A dark serene view'
                        className='img'
                    />
                </li>
                <li>
                    <img
                        src={dragon}
                        alt='A traditional dragon statue'
                        className='img'
                    />
                </li>
            </ul>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    margin-top: 2.5rem;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 5rem;
        .btn {
            padding: 0.7rem 1.8rem;
        }
    }
    ul {
        display: flex;
        gap: 7px;
        li {
            flex: 1;

            &:nth-child(2) {
                flex: 2;
            }
        }

        img {
            height: 100%;
        }
    }
    @media ${device.tablet} {
        &.container {
            padding: 2rem 1rem;
              margin-top: 2.5rem;
    // z-index: 1;
        }
    }
    @media ${device.mobile} {
        &.container {
            padding: 1rem;
              margin-top: 0;
        }
        div {
            margin-top: 0;
            display: block;
            h2 {
                font-size: 1.7rem;
                text-align: center;
            }
            .btn {
                display: block;
                margin: 1rem auto 0;
            }
        }
        ul {
            flex-direction: column;
            margin-top: 1rem;
        }
    }
`;

export default Tradition;
