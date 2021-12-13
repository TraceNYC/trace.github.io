import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { prefix } from '../utils/prefix'

import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <img src={`${prefix}/Dashboard-chart1.png`}/>
    </>
  )
}

export default Home;