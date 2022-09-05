import axios from 'axios'
import { Icountry } from './types'

const API_URL = 'https://jsonplaceholder.typicode.com/users'


export const CountryService = {
   async getAll() {
       return axios.get<Icountry[]>(API_URL)
   } 
}