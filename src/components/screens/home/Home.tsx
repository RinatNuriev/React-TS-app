import React from 'react';
import CreateCarForm from '../../create-car-form/CreateCarForm';
import { CarService } from '../../../services/car.service';
import { useQuery } from '@tanstack/react-query';
import NewHeader from '../../UI/Header';
import Catalog from '../../UI/Catalog';

const Home = () => {

    const { data, isLoading } = useQuery(['cars'], () => CarService.getAll(),)

    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            <h1>Cars catalog</h1>

            <NewHeader />

            <CreateCarForm />

            <Catalog data={data} />

        </div>
    );
};

export default Home;