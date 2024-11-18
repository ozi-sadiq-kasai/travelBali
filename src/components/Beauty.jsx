import styled from 'styled-components';
import { useState } from 'react';
import { device } from '../utils/mediaQueries';
import { MdChevronLeft } from 'react-icons/md';
import { MdChevronRight } from 'react-icons/md';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import slide6 from '../assets/loveBali.jpg';
import slide7 from '../assets/worship.jpg';
import slide8 from '../assets/sunset.jpg';
import slide9 from '../assets/lantern.jpg';
const slides = [
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
];

const Beauty = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <Wrapper className='container'>
            <article>
                <h2>
                    piece in the beauty of <br />
                    bali island
                </h2>
                <div>
                    <button onClick={prevSlide} className='btn'>
                        <MdChevronLeft />
                    </button>
                    <button onClick={nextSlide} className='btn'>
                        <MdChevronRight />
                    </button>
                </div>
            </article>
            <div className='carousel'>
                <ul
                    style={{
                        transform: `translateX(calc(-${
                            currentIndex * 100
                        }% - ${currentIndex * 1}rem))`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <li key={index}>
                            <img
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                className='img'
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    background-color: var(--primary-900);
    h2 {
        color: var(--textColor);
    }
    article {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            flex: 1;
            margin-bottom: 0;
        }
        div {
            flex: 1;
            padding: 15px 0;
            text-align: center;
            button {
                padding: 0.6rem;
                margin-right: 1rem;
                &:last-child {
                    margin-right: 0;
                }
                &:hover {
                    cursor: pointer;
                    background: #ddd;
                }
            }
        }
    }
    .carousel {
        overflow: hidden;
        position: relative;
        ul {
            display: flex;
            transition: transform 0.25s ease-out;
            padding: 0;
            margin: 0;
            width: 100%;
            li {
                flex: 0 0 100%;
                height: 90vh;

                .img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }
        }
    }
    @media ${device.mobile} {
        &.container {
            padding: 1rem;
        }
        article {
            flex-direction: column;
            h2 {
                text-align: center;
            }
        }
    }
`;

export default Beauty;
