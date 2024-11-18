import styled from 'styled-components';
import bali from '../assets/bali.jpg';
import { device } from '../utils/mediaQueries';

const Destination = () => {
    return (
        <Wrapper className='container'>
            <div>
                <h2>we organize your trip</h2>
                <p>
                    Bali is an Indonesian island in the westernmonst
                    end of the Lesser Sunda Islands,lying between Java
                    to the west and Lombok to the ease. Known for its
                    breathtaking natural scenery,vibrant culture, and
                    stunning beaches, Bali is often referred to as the
                    "Island of the Gods."
                </p>
                <div className='btn-div'>
                    <button className='btn'>see offer</button>
                </div>
            </div>
            <img src={bali} alt='pic' className='img' />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    &.container {
        background-color: var(--primary-900);
        display: grid;
        justify-content: space-around;
        align-items: center;
        grid-template-columns: 43% 55%;
        padding: 2rem 0 6rem 5rem;
        gap: 7px;
    }
    h2 {
        color:var(--textColor);
    }
    p {
        width: 85%;
        color: white;
    }
    @media ${device.mobile} {
        &.container {
            display: block;
            padding: 0 1rem;
        }
        h2 {
            margin: 0.5rem auto;
            text-align: center;
            font-size: 1.8rem;
        }
        p {
            margin: 0 auto;
            text-align: center;
        }

        .btn-div {
            width: 100%;
            text-align: center;
            margin: 1rem 0;
        }
        .btn {
            display: inline-block;
            width: 40%;
        }
    }
    @media ${device.tablet} {
        &.container {
            padding: 2rem 1rem;
            grid-template-columns: 45% 55%;
            gap: 4px;
        }
        h2 {
            text-align: center;
            font-size: 1.6rem;
        }
        p {
            text-align: center;
            margin: 0 auto;
        }
        .btn-div {
            width: 100%;
            text-align: center;
            margin: 1rem 0;
        }
        .btn {
            display: inline-block;
            width: 70%;
        }
    }
`;

export default Destination;
