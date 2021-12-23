import React,{useState, createContext} from 'react';

export const RestaurantContext=createContext()

export const RestaurantContextProvider= props=>{
    const [restaurants,setRestaurants] = useState([])
    
    const [selectedRestaurant,setSelectedRestaurant] =useState([])
    
    const [selectedRestaurantReview,setSelectedRestaurantReview]=useState([])

    const addRestaurants=(restaurant)=>{
        setRestaurants([...restaurants,restaurant])
    }
    return (
        <RestaurantContext.Provider 
        value={{restaurants,setRestaurants,addRestaurants,selectedRestaurant,setSelectedRestaurant,selectedRestaurantReview,setSelectedRestaurantReview}}>
            {props.children}
        </RestaurantContext.Provider>
    )
}