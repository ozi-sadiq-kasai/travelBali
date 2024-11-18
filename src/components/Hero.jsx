import styled from 'styled-components';
import header from '../assets/header.jpg';
import { device } from '../utils/mediaQueries';

const Hero = () => {
    return (
        <Wrapper className='container'>
            <div>
                <h1>
                    discover the natural beauty <br /> of bali island.
                </h1>
                <p>
                    known for it's breathtaking natural
                    scenery,vibrant culture and stunning beaches. Bali
                    is often referred to as the "island of the God".
                </p>
            </div>
            <img src={header} className='img' alt='image' />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    div {
        position: relative;
        padding-bottom: 15px;
    }
    h1 {
        margin: 0;
        font-size: 4.5rem;
    }
    p {
        position: absolute;
        bottom: 5px;
        left: 48%;
    }
    @media ${device.desktop} {
        p {
            right: 0%;
        }
    }
    @media (min-width: 1024px) {
        p {
           left: 52%;
        }
    }
    @media ${device.mobile} {
        &.container {
            padding: 0 0;
        }
        div {
            position: static;
            padding-bottom: 0;
        }
        h1 {
            margin: 0;
            font-size: 1.9rem;
            text-align: center;
            padding: 0;
        }
        p {
            margin-bottom: 0;
            position: static;
            font-size: 0.8rem;
            width: 80%;
            text-align: center;
            margin: 0 auto;
            bottom: 0;
            left: 0;
        }
    }
    @media ${device.tablet} {
        &.container {
            padding: 0 1rem;
        }
        div {
            position: static;
            padding: 25px;
        }
        h1 {
            font-size: 3rem;
            text-align: center;
        }
        p {
            text-align: center;
            position: static;
            margin: 0 auto;
            bottom: 0;
            left: 0;
        }
    }
`;

export default Hero;
