import {useState} from 'react'
import restaurantApi from '../pages/api/restaurantProvider'
import {useContext} from 'react'
import { RestaurantContext } from '../context/RestaurantContext';
function AddRestaurant() {
    const {addRestaurants}=useContext(RestaurantContext)
    const [name,setName]=useState('')
    const [location,setLocation]=useState('')
    const [priceRange,setPriceRange]=useState('Price Range')
    const submitRestaurant=async(e)=>{
         e.preventDefault();
         try {
             const response=await restaurantApi.post("/",{
                 name,
                 location,
                 price_range:priceRange,
             })
             addRestaurants(response.data.data.restaurant)
             setName('')
             setLocation('')
             setPriceRange('Price Range')
             console.log(response)
         } catch (error) {
             console.log(error)
         }
    }
    return (
        <div className="p-8">
            <form>
                <div className="flex justify-around max-w-4xl m-auto">
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="Input" placeholder="Name"/>
                        <input value={location} onChange={(e)=>setLocation(e.target.value)} type="text" className="Input" placeholder="Location"/>
                        <select 
                        value={priceRange}
                        onChange={(e)=>setPriceRange(e.target.value)}
                        className="Input">
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                        </select>
                        <button type="submit" className="bg-blue-600 text-white p-3 rounded border-none" onClick={submitRestaurant}>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant
