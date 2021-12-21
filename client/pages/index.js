import Head from 'next/head'
import Header from "../components/Header"
import AddRestaurant from "../components/AddRestaurant"
import RestaurantList from "../components/RestaurantList"
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Yelp Clone</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header/>
      <AddRestaurant/>
      <RestaurantList/>
    </div>
  )
}
