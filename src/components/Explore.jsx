import styled from 'styled-components';
import kelingkingBeach from '../assets/kelingkingBeach.jpg';
import resort from '../assets/resort.jpg';
import road from '../assets/road.jpg';
import { device } from '../utils/mediaQueries';

const Explore = () => {
    return (
        <Wrapper className='container'>
            <div>
                <h2>explore popular destinations</h2>
                <button className='btn'>explore more</button>
            </div>
            <ul>
                <li>
                    <img
                        src={kelingkingBeach}
                        alt='beach'
                        className='img'
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nostrum praesentium nobis
                        deleniti temporibus totam. Cum.
                    </p>
                </li>
                <li>
                    <img src={resort} alt='beach' className='img' />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Esse repellat magnam nemo
                        repudiandae accusantium sint!
                    </p>
                </li>
                <li>
                    <img src={road} alt='beach' className='img' />
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Omnis blanditiis facere quae
                        eligendi? Autem, hic!
                    </p>
                </li>
            </ul>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    &.container {
        padding-bottom: 0;
        background-color: var(--primary-900);
    }
    h2 {
        margin-bottom: 0;
        color: var(--textColor);
    }
    ul {
        display: flex;
        gap: 12px;
    }

    .img {
        height: 100%;
        object-position: center;
    }
    p {
        box-shadow: var(--shadow-2);
        background-color: white;
        padding: 1.5rem;
    }
    li {
        border: 7px solid white;
        border-bottom: none;
        position: relative;
        flex: 1;
        height: 60vh;
    }
    div {
        display: grid;
        grid-template-columns: 3fr 1fr;
        margin-bottom: 1rem;
    }

    @media ${device.mobile} {
        &.container {
            padding: 1rem;
        }
        div {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 70vw;
            text-align: center;
            margin: 0 auto;
        }
        h2 {
            font-size: 1.7rem;
        }
        ul {
            flex-direction: column;
            margin-top: 1rem;
        }
        li {
            border: 2px solid white;
            margin: 0 auto;
            flex: 1;
            height: 100vh;
            width: 80vw;
        }
        p {
            margin: 0;
        }
    }
    @media ${device.tablet} {
        &.container {
            padding: 2rem 1rem;
        }
        ul {
            display: flex;
            gap: 10px;
        }
    }
`;
export default Explore;
