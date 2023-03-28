import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import withAuth from '../../../HOC/withAuth';
import { CarService } from '../../../services/car.service';
import { ICar } from '../../../types/car.interface';
import CarItem from '../../car-item/CarItem';

const CarDetail = () => {

    const { id } = useParams()
    const [car, setCar] = useState<ICar>({} as ICar)

    useEffect(() => {
        if (!id) return

        const fetchData = async () => {
            const data = await CarService.getById(id)
            setCar(data)
        }

        fetchData()
    }, [id])

    return (
        <div>
            <Link className='btn' to={'/React-TS-app'}>Back</Link>
            <CarItem car={car} />
        </div>

    );
};

export default withAuth(CarDetail);