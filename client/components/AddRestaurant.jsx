function AddRestaurant() {
    return (
        <div className="p-4 ">
            <form>
                <div className="flex justify-around max-w-4xl m-auto">
                        <input type="text" className="Input" placeholder="Name"/>
                        <input type="text" className="Input" placeholder="Location"/>
                        <select className="Input">
                            <option disabled>Price_range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                        </select>
                        <button className="bg-blue-600 text-white p-3 rounded border-none">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant
