
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { checkout } from '../checkout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Payment Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="#">Payment Page</a>
        </h1>


        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Iphone 13 Pro Max</h2>
            <Image src='/images/apple.png' width={100} height={100} alt={'phone'}/>
            <p>256gb 8gb ram</p>
            <button onClick={()=>{
              checkout({
                lineItems:[
                  {
                    price:'price_1M9jM0SC1sOfLuRA6GMQ5OHP',
                    quantity:1
                  }
                ]
              }) 
            }} className={styles.btn_style}>Buy</button>
          </div>
          

          <div className={styles.card}>
            <h2>One Plus</h2>
            <Image src='/images/huwaei.png' width={100} height={100} alt={'phone'}/>
            <p>512gb 16gb ram</p>
            <button className={styles.btn_style} onClick={()=>{
              checkout({
                lineItems:[
                  {
                    price:'price_1M9jN7SC1sOfLuRAkOefoOgE',
                    quantity:1
                  }
                ]
              }) 
            }}>Buy</button>
          </div>

          <div className={styles.card}>
            <h2>Samsung F22</h2>
            <Image src='/images/nokia.png' width={100} height={100} alt={'phone'}/>
            <p>128gb 4gb ram</p>
            <button className={styles.btn_style} onClick={()=>{
              checkout({
                lineItems:[
                  {
                    price:'price_1M9jNkSC1sOfLuRAfkW4QCpl',
                    quantity:1
                  }
                ]
              }) 
            }}>Buy</button>
          </div>

          <div className={styles.card}>
            <h2>Redmi 7i</h2>
            <Image src='/images/redmi.png' width={100} height={100}  alt={'phone'}/>
            <p>32gb 16gb ram</p>
            <button className={styles.btn_style} onClick={()=>{
              checkout({
                lineItems:[
                  {
                    price:'price_1M9jOESC1sOfLuRAuw9r2BJi',
                    quantity:1
                  }
                ]
              }) 
            }}>Buy</button>
          </div>
        </div>
      </main>

      
    </div>
  )
}
