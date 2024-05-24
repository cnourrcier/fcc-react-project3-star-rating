import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import './styles.css';

export default function StarRating({ numOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(currentIndex) {
        console.log(currentIndex);
        setRating(currentIndex);
    }

    function handleMouseHover(currentIndex) {
        console.log(currentIndex);
        setHover(currentIndex);
    }

    function handleMouseLeave() {
        setHover(0);
    }

    return <div className='star-rating-container'>
        <div className='star-rating'>
            {
                [...Array(numOfStars)].map((_, index) => {
                    // index starts at 0, so add 1.
                    index += 1;

                    return <FaStar
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseHover(index)}
                        onMouseLeave={handleMouseLeave}
                        size={40}
                    />
                })
            }
        </div>
    </div>
}