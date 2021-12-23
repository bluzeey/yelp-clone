import {useEffect,useContext,useState} from 'react';
import { RestaurantContext } from '../context/RestaurantContext';
import RestaurantApi from '../pages/api/restaurantProvider'
import {useRouter} from 'next/router'
import StarRating from './StarRating'

function RestaurantList() {
    const router=useRouter()
    const {restaurants,setRestaurants} =useContext(RestaurantContext)
    const [reviews,setReviews]=useState([])
    const deleteRestaurant=async(id)=>{
        try {
            const response=await RestaurantApi.delete(`/${id}`)
            console.log(response)
            setRestaurants(restaurants.filter(r => r.id !== id))
        } catch (error) {
            console.log(error)
        }  
    }
    useEffect(()=>{
        const fetchData=async()=>{
            try {
               const response=await RestaurantApi.get("/")
               console.log(response)
               setRestaurants(response.data.data.restaurant)
               setReviews(response.data.data.reviews)
               console.log(reviews?.[0])
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
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-gray-400 ">
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
                             {restaurants && restaurants.map((restaurant,i) =>(
                             <tr key={restaurant.id} className="bg-gray-800 border-gray-700">
                                <td onClick={()=>{router.push('/restaurants/'+restaurant.id)}}
                                className="py-4 px-6 text-sm font-medium whitespace-nowrap text-white cursor-pointer">
                                    {restaurant.name}
                                </td>
                                <td className="py-4 px-6 text-sm  whitespace-nowrap text-gray-400">
                                    {restaurant.location}
                                </td>
                                <td className="py-4 px-6 text-sm  whitespace-nowrap text-gray-400">
                                    {"$".repeat(restaurant.price_range)}
                                </td>
                                {reviews?.[i] ? (<td className="py-4 px-6 text-sm  whitespace-nowrap text-gray-400">
                                    <StarRating rating={reviews?.[i]?.avg}/>({reviews?.[i]?.count})
                                </td>):(
                                    <td className="py-4 px-6 text-sm  whitespace-nowrap text-gray-400">No Reviews</td>
                                )}
                                
                                <td>
                                   <button onClick={()=>router.push(`restaurants/${restaurant.id}/update`)} className="py-2 px-6 text-sm text-white bg-yellow-500 font-medium text-right rounded whitespace-nowrap cursor-pointer">
                                       Update 
                                   </button>
                                </td>
                                <td >
                                   <button onClick={()=>{deleteRestaurant(restaurant.id)}} className="py-2 px-6 text-sm text-white bg-red-600 font-medium rounded text-right whitespace-nowrap cursor-pointer">
                                       Delete
                                   </button>
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
