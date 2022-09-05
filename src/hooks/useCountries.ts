import { useQuery } from 'react-query';
import { CountryService } from '../services/country.services';
import { Icountry } from './../services/types';


export const useCountries = () => {
    const { isLoading, data: countries } = useQuery(
        'country list',
        () => CountryService.getAll(),
        {
            onError: (error: any) => {
                alert(error.message)
            },
            select: ({ data }): Icountry[] => 
                data.map((country) => ({
                    ...country,
                    name: country.name,
                    username:country.username,
                    email:country.email
                }))
            }
    )

    return { isLoading, countries }
}