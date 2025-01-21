import React from 'react'
import styles from './binance.module.css'
import { Image } from 'react-bootstrap';
import Link from 'next/link';


const Header = () => {
    return (
        <>
                <div className='container'>
                <div className={styles.HeaderBg}>
                <div className={styles.HeaderLogo}>
                    <Link href="">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        fluid
                    />
                    </Link>
                   
                </div>
                <div className={styles.HeaderList}>
                    <ul>
                        <li><Link href="">Buy Crypto</Link></li>
                        <li><Link href="">Markets</Link></li>
                        <li><Link href="">Trades</Link></li>
                        <li><Link href="">Futures</Link></li>
                        <li><Link href="">Earn</Link></li>
                        <li><Link href="">Square</Link></li>
                        <li><Link href="">More</Link></li>
                    </ul>
                </div>
                </div>

            </div>
        </>
    )
}

export default Header
