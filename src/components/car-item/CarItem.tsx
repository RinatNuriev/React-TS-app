import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../components/screens/home/Home.module.css'
import { ICar } from '../../types/car.interface';
import Price from './Price';

const CarItem = ({ car } : {car: ICar}) => {
    return (
        <div>
            <div className={styles.item}>

                <div
                    className={styles.image}
                    style={{
                        backgroundImage: `url(${car.image})`
                    }} />

                <div className={styles.info}>
                    <h2>{car.name}</h2>
                    
                    <Price price={car.price}/>

                    <Link to={`/car/${car.id}`} className='btn'>Read more</Link>
                </div>

            </div>
        </div>
    );
};

export default CarItem;