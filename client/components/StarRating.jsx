import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf'
function StarRating({rating}) {
    let stars=[]
    for(let i=1;i<=5;i++){
        if(i<=rating){
            stars.push(<StarIcon className="text-yellow-500"/>)
        }else if(i===Math.ceil(rating) && !Number.isInteger(rating)){
            stars.push(<StarHalfIcon className="text-yellow-500"/>)
        }else{
            stars.push(<StarOutlineIcon className="text-yellow-500"/>)
        }
    }
    return (
        <>
            {stars}
        </>
    )
}

export default StarRating
