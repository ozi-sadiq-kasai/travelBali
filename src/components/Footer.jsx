import styled from 'styled-components';
import { device } from '../utils/mediaQueries';

const Footer = () => {
    return (
        <Wrapper className='container'>
            <div className='logo-div'>
                <h3>Logo</h3>
                <p>
                    A place where you can
                    dive,snorkle,relax,experience traditional culture
                    and see the beauty of nature both above and
                    underwater.
                </p>
            </div>
            <div className='contact-div'>
                <ul className='footer-div'>
                    <li className='list-div'>
                        <div>
                            <h5>Accomodation</h5>
                            <ul>
                                <li>
                                    <a href='#'>Destinations</a>
                                </li>
                                <li>
                                    <a href='#'>Features</a>
                                </li>
                                <li>
                                    <a href='#'>Price</a>
                                </li>
                                <li>
                                    <a href='#'>Activities</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='list-div'>
                        <div>
                            <h5>Contact Us</h5>
                            <ul>
                                <li>
                                    <a href='#'>Help Center</a>
                                </li>
                                <li>
                                    <a href='#'>Testimony</a>
                                </li>
                                <li>
                                    <a href='#'>Contact</a>
                                </li>
                                <li>
                                    <a href='#'>FAQs</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='list-div'>
                        <div>
                            <h5>About Us</h5>
                            <ul>
                                <li>
                                    <a href='#'>About Us</a>
                                </li>
                                <li>
                                    <a href='#'>Developers</a>
                                </li>
                                <li>
                                    <a href='#'>Privacy Policy</a>
                                </li>
                                <li>
                                    <a href='#'>Support Center</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: var(--primary-900);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    .logo-div {
        flex: 1;
        p {
            margin-bottom: 0;
        }
    }

    .contact-div {
        padding: 0.7rem 0;
        flex: 2;
    }
    .footer-div {
        display: flex;
        justify-content: space-around;
    }
    .list-div {
        div {
            h5 {
                margin-bottom: 0;
            }
            a {
                color: var(--grey-900);
                font-size: 0.7rem;
            }
        }
    }

    @media ${device.mobile} {
        &.container {
            flex-direction: column;
            padding: 1rem;
        }
        .logo-div {
            h3 {
                margin-bottom: 0;
            }
            p {
                text-align: start;
            }
        }
        .contact-div {
            width: 100%;
        }
        .list-div {
            h5 {
                font-size: 0.8rem;
            }
        }
    }
`;

export default Footer;
