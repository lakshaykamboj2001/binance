import React from 'react'
import styles from './binance.module.css'
import { Image } from 'react-bootstrap';
import Link from 'next/link';


const UserTrust = () => {
    return (
        <>
            <div className={styles.binanceUserBg}>
                <div className='container'>
                    <div className={styles.binanceUser}>
                        <div className={styles.binanceUserTrust}>
                            <div className={styles.bUTIncriment}>
                                <span>254,639,006</span>
                                <h2>USERS</h2>
                                <h2>TRUST US</h2>
                                <div className={styles.bUTInputmail}>
                                    <input type='mail' placeholder='Email/Phone number' />
                                    <button>Get Started</button>
                                </div>
                            </div>
                            <div className={styles.binanceUserTrustGoogleApp}>
                                <div className={styles.binanceUserTrustGoogle}>
                                    <p>Or Continue With</p>
                                    <div className={styles.binanceUserTrustGooglebtn}>
                                        <button>
                                            <Image
                                                src="/images/apple-icon.png"
                                                alt="apple-icon"
                                                fluid
                                            />
                                        </button>
                                        <button>
                                            <Image
                                                src="/images/google-icon.png"
                                                alt="apple-icon"
                                                fluid
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.binanceUserTrustDldApp}>
                                    <p>Download App</p>
                                    <button><svg class="bn-svg h-full w-full cursor-pointer text-t-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm11 0h-2v4h4v-2h3v-2h-4v2h-1v-2zm5 3h-2v2h-2v2h4v-4zm-5 2h-2v2h2v-2zM13 4h7v7h-7V4zM8.5 6.5h-2v2h2v-2zm-2 9h2v2h-2v-2zm11-9h-2v2h2v-2z" fill="white"></path></svg></button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.binanceUserCrypto}>
                            <div className={`${styles.binanceUserCryptoPopular} ${styles.binanceUserCryptoPopularMargin}`}>
                                <div className={styles.binanceUserCryptoPopulartxt}>
                                    <div className={styles.binanceCryptoViewTab}>
                                        <h6>Popular</h6>
                                        <h6>New Listing</h6>
                                    </div>
                                    <p><span>View All 350+ </span>Coins</p>
                                </div>
                                <div className={`${styles.binanceUserCryptoPopularLINK} ${styles.binanceUserCryptoPopularBitCoin}`}>
                                    <div className={styles.binanceCryptoViewTablists}>
                                        <div className={styles.bCryptoViewTablists}>
                                            <Image
                                                src="/images/bit.png"
                                                alt="bit-coin"
                                                fluid
                                            />
                                            <h5>BTC</h5>
                                            <span>Bitcoin</span>
                                        </div>
                                        <div className={styles.bCryptoViewTablistsno}>
                                            <p>$<span>565432123456</span></p>
                                        </div>
                                        <div className={styles.bCryptoViewTablistsnoPercent}>
                                            <span>+1.99%</span>
                                        </div>
                                    </div>
                                    <div className={styles.binanceCryptoViewTablists}>
                                        <div className={styles.bCryptoViewTablists}>
                                            <Image
                                                src="/images/bit.png"
                                                alt="bit-coin"
                                                fluid
                                            />
                                            <h5>BTC</h5>
                                            <span>Bitcoin</span>
                                        </div>
                                        <div className={styles.bCryptoViewTablistsno}>
                                            <p>$<span>565432123456</span></p>
                                        </div>
                                        <div className={styles.bCryptoViewTablistsnoPercent}>
                                            <span>+1.99%</span>
                                        </div>
                                    </div>
                                    <div className={styles.binanceCryptoViewTablists}>
                                        <div className={styles.bCryptoViewTablists}>
                                            <Image
                                                src="/images/bit.png"
                                                alt="bit-coin"
                                                fluid
                                            />
                                            <h5>BTC</h5>
                                            <span>Bitcoin</span>
                                        </div>
                                        <div className={styles.bCryptoViewTablistsno}>
                                            <p>$<span>565432123456</span></p>
                                        </div>
                                        <div className={`${styles.bCryptoViewTablistsnoPercent} ${styles.bCryptoViewTablistsnoPercentChangeclr}`}>
                                            <span>-3.04%</span>
                                        </div>
                                    </div>
                                    <div className={styles.binanceCryptoViewTablists}>
                                        <div className={styles.bCryptoViewTablists}>
                                            <Image
                                                src="/images/bit.png"
                                                alt="bit-coin"
                                                fluid
                                            />
                                            <h5>BTC</h5>
                                            <span>Bitcoin</span>
                                        </div>
                                        <div className={styles.bCryptoViewTablistsno}>
                                            <p>$<span>565432123456</span></p>
                                        </div>
                                        <div className={styles.bCryptoViewTablistsnoPercent}>
                                            <span>+1.99%</span>
                                        </div>
                                    </div>
                                    <div className={styles.binanceCryptoViewTablists}>
                                        <div className={styles.bCryptoViewTablists}>
                                            <Image
                                                src="/images/bit.png"
                                                alt="bit-coin"
                                                fluid
                                            />
                                            <h5>BTC</h5>
                                            <span>Bitcoin</span>
                                        </div>
                                        <div className={styles.bCryptoViewTablistsno}>
                                            <p>$<span>565432123456</span></p>
                                        </div>
                                        <div className={styles.bCryptoViewTablistsnoPercent}>
                                            <span>+1.99%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.binanceUserCryptoPopular}>
                                <div className={styles.binanceUserCryptoPopulartxt}>
                                    <h6>News</h6>
                                    <p>View All News</p>
                                </div>
                                <div className={styles.binanceUserCryptoPopularLINK}>
                                    <Link href="#">Bitcoin(BTC) Surpasses 106,000 USDT with a 1.52% Increase in 24 Hours</Link>
                                    <Link href="#"> Kenya Proposes Law For Local Offices Of Virtual Asset Providers</Link>
                                    <Link href="#">Bitcoin(BTC) Drops Below 103,000 USDT with a 4.43% Decrease in 24 Hours</Link>
                                    <Link href="#">Bank Of Japan Considers Interest Rate Hike In Upcoming Meeting</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UserTrust
