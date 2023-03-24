import React from 'react';
import styles from './CreateCarForm.module.css'
import { useForm } from 'react-hook-form'
import { useCreateCar } from './UseCreateCar';
import { ICarData } from '../../types/car.interface';

const CreateCarForm = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm<ICarData>({
        mode: 'onChange'
    })

    const { createCar } = useCreateCar(reset)

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input placeholder='Name'
                {...register('name', { required: 'Name is required' })} />
            {errors?.name?.message && <p style={{ color: 'red', paddingBottom: 10 }}>Name is required</p>}

            <input placeholder='Price' {...register('price', { required: 'Price is require' })} />
            {errors?.price?.message && <p style={{ color: 'red', paddingBottom: 10 }}>Price is required</p>}

            <input placeholder='Image'{...register('image', { required: false })} />

            <button className='btn'>Create</button>
        </form>
    );
};

export default CreateCarForm;