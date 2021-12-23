import {useContext,useEffect,useState} from 'react';
import StarRating from '../../../components/StarRating';
import {RestaurantContext} from '../../../context/RestaurantContext'
import restaurantApi from '../../api/restaurantProvider';
function index({props}) {
    const {selectedRestaurant,
        setSelectedRestaurant,
        selectedRestaurantReview,
        setSelectedRestaurantReview}=useContext(RestaurantContext)
    const [name, setName] = useState('')
    const [rating, setRating] = useState('Set Rating')
    const [review, setReview] = useState('')
    const [avgRating,setAvgRating]=useState(0)
    const submitReview=async(e)=>{
           try {
               e.preventDefault();
               const response=await restaurantApi.post(`/${props}/addReview`,{
                   restaurant_id:props,
                   name,
                   review,
                   rating,
               })
               setSelectedRestaurantReview([...selectedRestaurantReview,{restaurant_id:props,name,review,rating}])
               setName('')
               setRating('Set Rating')
               setReview('')
           } catch (error) {
               console.log(error)
           }
    }
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await restaurantApi.get(`/${props}`)
            setSelectedRestaurant(response.data.data.restaurant)
            setSelectedRestaurantReview(response.data.data.reviews)
            setAvgRating(response.data.data.avgReview.avg)
        }
        fetchData();
    },[])
    return (
        <div>
            {selectedRestaurant && (
                    <div>
                        <p className="text-6xl text-center">{selectedRestaurant.name}</p>
                        <div className="mt-5 text-center"><StarRating rating={avgRating}/>({selectedRestaurantReview.length})</div>
                        <div className="grid grid-cols-3">
                        {selectedRestaurantReview &&
                         (selectedRestaurantReview.map((review) =>(
                            <div key={review.id} className="bg-blue-500 w-1/3 m-4 rounded box-border">
                            <div className="flex justify-around align-center m-0 bg-blue-900">
                            <h3 className="text-white ">{review.name}</h3>
                            <div className=""><StarRating rating={review.rating}/></div>
                            <br/>
                            </div>
                            <p className="p-2">{review.review}</p>                             
                        </div>
                        ))
                        )}
                        </div>
                        <form className="flex flex-col">
                            <div className="flex flex-col p-4">
                                <label htmlFor="name" className="pb-2">Name</label>
                                <input value={name} className="Input"
                                onChange={(e)=>{setName(e.target.value)}} id="name" type="text" />
                            </div>
                             
                            <div className="flex flex-col p-4">
                                <label htmlFor="rating" className="pb-2">rating</label>
                                <select 
                                    value={rating}
                                    onChange={(e)=>setRating(e.target.value)}
                                    className="Input">
                                        <option disabled>Set Rating</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                </select>
                            </div>
                            <div className="flex flex-col p-4">
                                <label htmlFor="review" className="pb-2">Review</label>
                                <input value={review} className="Input"
                                onChange={(e)=>{setReview(e.target.value)}} id="review" type="text" />
                            </div>
                            <button onClick={submitReview} type="submit" className="flex-start self-center p-2 bg-blue-700 text-white rounded">
                                Submit
                            </button>
                        </form>
                    </div>
            )}
        </div>
    )
}

index.getInitialProps=({query})=>{
    return{
        props: query.id
    }
}


export default index
