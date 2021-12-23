import {RestaurantContext} from '../../../context/RestaurantContext'
import {useState,useContext,useEffect} from 'react'
import restaurantApi from '../../api/restaurantProvider'
import {useRouter} from 'next/router'
function update({props}) {
    const router = useRouter()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [priceRange, setPriceRange] = useState('')
    const {restaurants}=useContext(RestaurantContext)
    const handleSubmit=async(e)=>{
        try {
            e.preventDefault()
              const updateRestaurant=await restaurantApi.put(`/${props}`,
              {
                  name,
                  location,
                  price_range:priceRange
              })
              console.log(updateRestaurant)
              router.push('/')
        } catch (error) {
            console.log(error)
        }  
    }
    useEffect(()=>{
        const fetchData=async()=>{
            try {
               const response=await restaurantApi.get(`/${props}`)
               setName(response.data.data.restaurant.name)
               setLocation(response.data.data.restaurant.location)
               setPriceRange(response.data.data.restaurant.price_range)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])
    return (
        <div className="p-8">
            <h1 className="text-center text-5xl">Update Restaurant</h1>
            <form className="flex flex-col">
                <div className="flex flex-col p-4">
                    <label htmlFor="name" className="pb-2">Name</label>
                    <input value={name} className="Input"
                    onChange={(e)=>{setName(e.target.value)}} id="name" type="text" />
                </div>
                <div className="flex flex-col p-4">
                    <label htmlFor="location" className="pb-2">Location</label>
                    <input value={location} className="Input" 
                    onChange={(e)=>{setLocation(e.target.value)}} id="location" type="text" />
                </div>
                <div className="flex flex-col p-4">
                    <label htmlFor="price_range" className="pb-2">Price Range</label>
                    <input value={priceRange} className="Input"
                     onChange={(e)=>{setPriceRange(e.target.value)}} id="price_range" type="text" />
                </div>
                <button type="submit" onClick={handleSubmit} className="flex-start self-center p-2 bg-blue-700 text-white rounded">
                    Submit
                </button>
            </form>
        </div>
    )
}

update.getInitialProps=({query})=>{
    return{
        props: query.id
    }
}

export default update