import Head from 'next/head'
import Image from 'next/image'
import Aboutus from '../components/aboutus'
import Flyway from '../components/flyway'
import Newsletter from "../components/newsletter"
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (

      <main className={styles.main}>
        <Aboutus></Aboutus>
        <Flyway></Flyway>
        <Newsletter></Newsletter>
      </main>
  )
}
