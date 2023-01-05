import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import  Header from "../components/Header"
import Banner from "../components/Banner"
const inter = Inter({ subsets: ['latin'] })
import SmallCards from "../components/SmallCards"
import MediumCards from "../components/MediumCards"
import LargeCard from "../components/LargeCard"
import Footer from "../components/Footer"


export default function Home({exploredata,livedata}) {
  return (
    <div className='flex flex-col   min-h-screen py-0'>
      <Head>
        <title>AirBnB App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <main className='max-w-7xl px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className=' text-4xl font-semibold pb-5'>
            Explore Nearby
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
             {exploredata?.map(({img,distance,location})=>(
            <SmallCards 
            key={img} 
            location={location} 
            img={img} 
            distance={distance}/>
          ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3'>{livedata?.map(({img,title})=>(
          <MediumCards key={img} img={img} title={title}/>))}</div>
        </section>
        <section>
          <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"

          />
        </section>
      </main>
      <Footer/>
    </div>
  )
}
export  async function getStaticProps(){
  const exploredata = await fetch("https://www.jsonkeeper.com/b/4G1G").then ((res)=>res.json());
  const livedata = await fetch("https://www.jsonkeeper.com/b/VHHT").then((res)=>res.json())
  
  return{
    props:{
      exploredata,
      livedata
    }
  }
}
