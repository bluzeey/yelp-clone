import {useRouter} from 'next/router'
function update({props}) {
    return (
        <div>
            <h1 className="text-center">Update Restaurant:{props}</h1>
            <form className="flex flex-col">
                <div className="">
                    <label htmlFor="name">Name</label>
                    <input type="text" />
                </div>
                <div className="">
                    <label htmlFor="location">Location</label>
                    <input type="text" />
                </div>
                <div className="">
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
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