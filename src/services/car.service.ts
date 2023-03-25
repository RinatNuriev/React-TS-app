import axios from 'axios'
import {  ICar, ICarData } from '../types/car.interface'


export const CarService = {

    async getAll() {
        const response = await axios.get<ICar[]>('https://my-json-server.typicode.com/RinatNuriev/React-TS-app/cars')

        return response.data
    },

    async getById(id: string) {
        const response = await axios.get<ICar[]>(`https://my-json-server.typicode.com/RinatNuriev/React-TS-app/cars?id=${id}`)

        return response.data[0]
    },

    async create(data: ICarData) {
        return axios.post('https://my-json-server.typicode.com/RinatNuriev/React-TS-app/cars', data)
    }

}