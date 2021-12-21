import Head from 'next/head'
import Header from "../components/Header"
import AddRestaurant from "../components/AddRestaurant"
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Yelp Clone</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header/>
      <AddRestaurant/>
    </div>
  )
}
