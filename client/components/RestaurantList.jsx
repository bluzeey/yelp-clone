import {useEffect,useContext} from 'react';
import { RestaurantContext } from '../context/RestaurantContext';
import RestaurantApi from '../pages/api/restaurantProvider'
function RestaurantList() {
    const {restaurants,setRestaurants} =useContext(RestaurantContext)
    useEffect(()=>{
        const fetchData=async()=>{
            try {
               const response=await RestaurantApi.get("/")
               console.log(response)
               setRestaurants(response.data.data.restaurant)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])
    return (
    <div className="flex flex-col p-8">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                    <table className="min-w-full">
                        <thead className="bg-blue-700 ">
                            <tr>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-gray-400">
                                    Restaurant
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-gray-400">
                                    Location
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-gray-400">
                                    Price Range
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-gray-400">
                                    Ratings
                                </th>
                                <th scope="col" className="relative py-3 px-6">
                                    <span className="sr-only">Edit</span>
                                </th>
                                <th scope="col" className="relative py-3 px-6">
                                    <span className="sr-only">Update</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                             {restaurants && restaurants.map(restaurant =>(
                             <tr key={restaurant.id} className="bg-gray-800 border-gray-700">
                                <td className="py-4 px-6 text-sm font-medium whitespace-nowrap text-white">
                                    {restaurant.name}
                                </td>
                                <td className="py-4 px-6 text-sm  whitespace-nowrap text-gray-400">
                                    {restaurant.location}
                                </td>
                                <td className="py-4 px-6 text-sm  whitespace-nowrap text-gray-400">
                                    {"$".repeat(restaurant.price_range)}
                                </td>
                                <td className="py-4 px-6 text-sm  whitespace-nowrap text-gray-400">
                                    No Reviews
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                    <a href="#" className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">Update</a>
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                    <a href="#" className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">Delete</a>
                                </td>
                            </tr> 
                            ))} 
                       
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RestaurantList
