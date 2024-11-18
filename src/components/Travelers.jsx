import styled from 'styled-components';
import { device } from '../utils/mediaQueries';

const avatar1 = 'https://avatar.iran.liara.run/public/58';
const avatar2 = 'https://avatar.iran.liara.run/public/18';
const avatar3 = 'https://avatar.iran.liara.run/public/28';

const Travelers = () => {
    return (
        <Wrapper className='container'>
            <div className='header'>
                <h2>
                    What our travelers say <br />
                    about us
                </h2>
                <button className='btn'>See More</button>
            </div>
            <ul>
                <li className='card'>
                    <div className='img-content'>
                        <div className='img-div'>
                            <img
                                src={avatar1}
                                alt='avatar'
                                className='img'
                            />
                        </div>
                        <div className='name-div'>
                            <h4>Julia Styles</h4>
                            <p>Nigerian Tourist</p>
                        </div>
                    </div>
                    <div className='content'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Eaque, ipsam?
                        </p>
                    </div>
                </li>
                <li className='card'>
                    <div className='img-content'>
                        <div className='img-div'>
                            <img
                                src={avatar2}
                                alt='avatar'
                                className='img'
                            />
                        </div>
                        <div className='name-div'>
                            <h4>Edward</h4>
                            <p>American Tourist</p>
                        </div>
                    </div>
                    <div className='content'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Eaque, ipsam?
                        </p>
                    </div>
                </li>
                <li className='card'>
                    <div className='img-content'>
                        <div className='img-div'>
                            <img
                                src={avatar3}
                                alt='avatar'
                                className='img'
                            />
                        </div>
                        <div className='name-div'>
                            <h4>Patrick</h4>
                            <p>French Tourist</p>
                        </div>
                    </div>
                    <div className='content'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Eaque, ipsam?
                        </p>
                    </div>
                </li>
            </ul>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    ul {
        margin: 0 auto;
        list-style-type: none;
        padding: 0;
        display: flex;
    }

    .card {
        width: 30%;
        border: 1px solid var(--primary-100);
        padding: 1rem;
        margin: 1rem auto;
    }

    .img-content {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .img-div {
        flex-shrink: 0;
        width: 50px;
        height: 50px;
        margin-right: 1rem;
    }

    .img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }

    .name-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .name-div h4 {
        margin: 0;
        font-size: 1rem;
        font-weight: bold;
    }

    .name-div p {
        margin: 0;
        font-size: 0.9rem;
        color: gray;
    }

    .content p {
        margin: 0.5rem 0;
    }

    @media ${device.mobile} {
        &.container {
            padding: 1rem;
        }
        .header {
            display: flex;
            flex-direction: column;
            h2 {
                font-size: 1.7rem;
                text-align: center;
            }
        }

        ul {
            flex-direction: column;
            .card {
                width: 90%;
            }
        }
    }
`;

export default Travelers;
