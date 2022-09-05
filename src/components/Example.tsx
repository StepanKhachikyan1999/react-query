import React from 'react'
import { useCountries } from '../hooks/useCountries'


const Example = () => {

    const { isLoading, countries } = useCountries()
    return (
        <div>
            <>
                {isLoading ? <h1>Loading .......</h1> : countries?.length ? (
                    <div>
                        {
                            countries.map((item: any) => (
                                <div key={item.id}>
                                    <h1>Name - {item.name}</h1>
                                    <h2>username - {item.username}</h2>
                                    <h3>email - {item.email}</h3>
                                </div>
                            ))
                        }

                    </div>
                ) : (
                    <div>Elements not found</div>
                )}
            </>
        </div>
    )
}

export default Example