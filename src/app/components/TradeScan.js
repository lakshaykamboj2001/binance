"use client"
import React, { useState } from 'react'
import styles from './binance.module.css'
import { Image } from 'react-bootstrap';



const TradeScan = () => {
    const [activeTab, setActiveTab] = useState('lite');

    const tabImages = {
        desktop: "/images/download-desktop-dark-en.png",
        lite: "/images/download-lite-dark-en.svg",
        pro: "/images/download-pro-dark-en.svg"
    };

    return (
        <>
            <div className={styles.binanceTradeScanBg}>
                <div className='container'>
                    <div className={styles.binanceTradeScan}>
                        <div className={styles.binanceTradeScanTab}>
                            <div className={styles.binanceTradeScanTabimgs}>
                                <Image
                                    src={tabImages[activeTab]}
                                    alt={`${activeTab}-icon`}
                                    fluid
                                />
                            </div>
                            <div className={styles.binanceTradeScanTabList}>
                                <ul>
                                    <li 
                                        className={activeTab === 'desktop' ? styles.active : ''}
                                        onClick={() => setActiveTab('desktop')}
                                    >
                                        Desktop
                                    </li>
                                    <li 
                                        className={activeTab === 'lite' ? styles.active : ''}
                                        onClick={() => setActiveTab('lite')}
                                    >
                                        Lite
                                    </li>
                                    <li 
                                        className={activeTab === 'pro' ? styles.active : ''}
                                        onClick={() => setActiveTab('pro')}
                                    >
                                        Pro
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.binanceTradeScanRightBg}>
                            <div className={styles.binanceTradeScanRighttxt}>
                                <h2>Trade on the go. Anywhere, anytime.</h2>
                            </div>
                            <div>
                                <div className={styles.binanceTradeScanRightscaner}>
                                    <div className={styles.binanceTradeScanRightscanerimgbg}>
                                        <div className={styles.binanceTradeScanRightscanerimg}>
                                            <svg shape-rendering="crispEdges" height="152" width="152" viewBox="0 0 49 49"><path fill="#FFFFFF" d="M0,0 h49v49H0z"></path><path fill="#000000" d="M0 0h7v1H0zM8 0h1v1H8zM13 0h1v1H13zM15 0h1v1H15zM19 0h1v1H19zM23 0h1v1H23zM25 0h5v1H25zM32 0h1v1H32zM34 0h1v1H34zM40 0h1v1H40zM42,0 h7v1H42zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM11 1h1v1H11zM14 1h1v1H14zM18 1h2v1H18zM22 1h1v1H22zM24 1h1v1H24zM26 1h4v1H26zM31 1h1v1H31zM36 1h5v1H36zM42 1h1v1H42zM48,1 h1v1H48zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h1v1H9zM13 2h1v1H13zM16 2h1v1H16zM18 2h1v1H18zM20 2h2v1H20zM26 2h1v1H26zM29 2h2v1H29zM33 2h1v1H33zM36 2h2v1H36zM39 2h2v1H39zM42 2h1v1H42zM44 2h3v1H44zM48,2 h1v1H48zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM12 3h1v1H12zM14 3h1v1H14zM22 3h2v1H22zM25 3h2v1H25zM31 3h1v1H31zM33 3h5v1H33zM39 3h1v1H39zM42 3h1v1H42zM44 3h3v1H44zM48,3 h1v1H48zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM9 4h3v1H9zM14 4h3v1H14zM18 4h2v1H18zM22 4h5v1H22zM29 4h1v1H29zM31 4h3v1H31zM36 4h2v1H36zM42 4h1v1H42zM44 4h3v1H44zM48,4 h1v1H48zM0 5h1v1H0zM6 5h1v1H6zM12 5h2v1H12zM16 5h7v1H16zM26 5h2v1H26zM30 5h1v1H30zM35 5h4v1H35zM42 5h1v1H42zM48,5 h1v1H48zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30 6h1v1H30zM32 6h1v1H32zM34 6h1v1H34zM36 6h1v1H36zM38 6h1v1H38zM40 6h1v1H40zM42,6 h7v1H42zM8 7h3v1H8zM15 7h3v1H15zM19 7h1v1H19zM21 7h2v1H21zM26 7h1v1H26zM28 7h3v1H28zM33 7h1v1H33zM35 7h3v1H35zM40 7h1v1H40zM0 8h1v1H0zM2 8h2v1H2zM5 8h3v1H5zM9 8h1v1H9zM13 8h1v1H13zM15 8h2v1H15zM20 8h9v1H20zM33 8h3v1H33zM38 8h1v1H38zM40 8h1v1H40zM42 8h1v1H42zM45 8h1v1H45zM47,8 h2v1H47zM1 9h5v1H1zM7 9h6v1H7zM17 9h1v1H17zM19 9h1v1H19zM21 9h1v1H21zM25 9h1v1H25zM29 9h5v1H29zM35 9h1v1H35zM37 9h1v1H37zM40 9h3v1H40zM46 9h2v1H46zM3 10h2v1H3zM6 10h3v1H6zM11 10h1v1H11zM15 10h1v1H15zM17 10h5v1H17zM24 10h2v1H24zM29 10h3v1H29zM33 10h3v1H33zM37 10h1v1H37zM40 10h3v1H40zM44 10h3v1H44zM0 11h2v1H0zM4 11h1v1H4zM8 11h2v1H8zM12 11h1v1H12zM16 11h1v1H16zM22 11h1v1H22zM24 11h1v1H24zM29 11h5v1H29zM36 11h2v1H36zM39 11h1v1H39zM42 11h6v1H42zM1 12h7v1H1zM11 12h2v1H11zM17 12h1v1H17zM19 12h1v1H19zM21 12h6v1H21zM29 12h1v1H29zM31 12h1v1H31zM36 12h1v1H36zM40 12h1v1H40zM43 12h1v1H43zM46 12h1v1H46zM10 13h1v1H10zM12 13h1v1H12zM17 13h1v1H17zM20 13h1v1H20zM24 13h3v1H24zM31 13h3v1H31zM37 13h3v1H37zM41 13h1v1H41zM44 13h1v1H44zM46 13h1v1H46zM48,13 h1v1H48zM3 14h1v1H3zM5 14h6v1H5zM13 14h3v1H13zM21 14h8v1H21zM30 14h1v1H30zM35 14h1v1H35zM37 14h2v1H37zM42 14h1v1H42zM46 14h2v1H46zM2 15h2v1H2zM7 15h1v1H7zM11 15h1v1H11zM13 15h1v1H13zM15 15h1v1H15zM17 15h2v1H17zM21 15h1v1H21zM25 15h2v1H25zM30 15h2v1H30zM33 15h1v1H33zM35 15h2v1H35zM41 15h1v1H41zM43 15h2v1H43zM48,15 h1v1H48zM0 16h2v1H0zM6 16h4v1H6zM13 16h2v1H13zM16 16h3v1H16zM21 16h1v1H21zM25 16h1v1H25zM32 16h2v1H32zM35 16h1v1H35zM37 16h3v1H37zM42 16h1v1H42zM44 16h1v1H44zM46,16 h3v1H46zM2 17h2v1H2zM7 17h2v1H7zM10 17h2v1H10zM16 17h2v1H16zM22 17h1v1H22zM27 17h2v1H27zM34 17h2v1H34zM37 17h1v1H37zM39 17h3v1H39zM43 17h1v1H43zM45 17h2v1H45zM48,17 h1v1H48zM0 18h2v1H0zM3 18h8v1H3zM14 18h2v1H14zM18 18h1v1H18zM20 18h1v1H20zM23 18h2v1H23zM26 18h2v1H26zM29 18h2v1H29zM36 18h2v1H36zM41 18h1v1H41zM43 18h1v1H43zM45 18h1v1H45zM47,18 h2v1H47zM0 19h2v1H0zM5 19h1v1H5zM9 19h1v1H9zM12 19h1v1H12zM14 19h2v1H14zM17 19h1v1H17zM19 19h1v1H19zM21 19h1v1H21zM23 19h2v1H23zM26 19h1v1H26zM28 19h1v1H28zM30 19h1v1H30zM35 19h3v1H35zM39 19h5v1H39zM45 19h1v1H45zM48,19 h1v1H48zM0 20h2v1H0zM6 20h2v1H6zM10 20h1v1H10zM14 20h2v1H14zM17 20h1v1H17zM19 20h2v1H19zM23 20h1v1H23zM27 20h3v1H27zM33 20h1v1H33zM35 20h1v1H35zM37 20h2v1H37zM41 20h1v1H41zM43 20h1v1H43zM45 20h1v1H45zM47,20 h2v1H47zM7 21h1v1H7zM9 21h3v1H9zM15 21h5v1H15zM24 21h1v1H24zM27 21h6v1H27zM36 21h2v1H36zM41 21h5v1H41zM47,21 h2v1H47zM0 22h1v1H0zM3 22h6v1H3zM13 22h1v1H13zM15 22h1v1H15zM17 22h3v1H17zM21 22h9v1H21zM31 22h2v1H31zM34 22h3v1H34zM40 22h5v1H40zM46 22h1v1H46zM0 23h1v1H0zM3 23h2v1H3zM8 23h2v1H8zM13 23h1v1H13zM15 23h1v1H15zM17 23h1v1H17zM20 23h3v1H20zM26 23h1v1H26zM29 23h2v1H29zM33 23h1v1H33zM36 23h2v1H36zM39 23h2v1H39zM44 23h3v1H44zM0 24h5v1H0zM6 24h1v1H6zM8 24h1v1H8zM10 24h2v1H10zM13 24h1v1H13zM18 24h1v1H18zM20 24h3v1H20zM24 24h1v1H24zM26 24h1v1H26zM29 24h1v1H29zM31 24h1v1H31zM35 24h6v1H35zM42 24h1v1H42zM44,24 h5v1H44zM0 25h2v1H0zM4 25h1v1H4zM8 25h1v1H8zM12 25h3v1H12zM16 25h2v1H16zM19 25h4v1H19zM26 25h1v1H26zM31 25h1v1H31zM33 25h1v1H33zM35 25h4v1H35zM40 25h1v1H40zM44 25h1v1H44zM47,25 h2v1H47zM0 26h2v1H0zM4 26h6v1H4zM11 26h1v1H11zM13 26h2v1H13zM16 26h1v1H16zM19 26h8v1H19zM28 26h1v1H28zM30 26h1v1H30zM37 26h2v1H37zM40 26h6v1H40zM47 26h1v1H47zM4 27h2v1H4zM10 27h2v1H10zM16 27h2v1H16zM21 27h1v1H21zM23 27h1v1H23zM25 27h1v1H25zM27 27h4v1H27zM32 27h1v1H32zM38 27h2v1H38zM48,27 h1v1H48zM1 28h7v1H1zM14 28h1v1H14zM16 28h2v1H16zM20 28h3v1H20zM25 28h3v1H25zM29 28h1v1H29zM31 28h3v1H31zM37 28h2v1H37zM40 28h2v1H40zM43 28h1v1H43zM46 28h1v1H46zM0 29h2v1H0zM4 29h2v1H4zM7 29h1v1H7zM10 29h4v1H10zM16 29h1v1H16zM18 29h1v1H18zM20 29h1v1H20zM22 29h1v1H22zM26 29h2v1H26zM29 29h1v1H29zM32 29h5v1H32zM41 29h1v1H41zM45 29h1v1H45zM48,29 h1v1H48zM5 30h3v1H5zM9 30h1v1H9zM11 30h1v1H11zM13 30h2v1H13zM17 30h1v1H17zM20 30h1v1H20zM22 30h4v1H22zM28 30h1v1H28zM31 30h2v1H31zM34 30h1v1H34zM36 30h1v1H36zM38 30h2v1H38zM41 30h3v1H41zM46,30 h3v1H46zM0 31h1v1H0zM5 31h1v1H5zM7 31h1v1H7zM9 31h1v1H9zM11 31h1v1H11zM13 31h1v1H13zM15 31h1v1H15zM17 31h3v1H17zM21 31h1v1H21zM23 31h1v1H23zM30 31h1v1H30zM32 31h4v1H32zM37 31h1v1H37zM39 31h1v1H39zM41 31h5v1H41zM48,31 h1v1H48zM1 32h1v1H1zM3 32h1v1H3zM5 32h2v1H5zM12 32h1v1H12zM14 32h1v1H14zM16 32h2v1H16zM19 32h3v1H19zM23 32h1v1H23zM27 32h1v1H27zM30 32h1v1H30zM32 32h1v1H32zM35 32h4v1H35zM40 32h3v1H40zM44 32h1v1H44zM48,32 h1v1H48zM1 33h1v1H1zM3 33h2v1H3zM7 33h1v1H7zM9 33h1v1H9zM14 33h6v1H14zM23 33h3v1H23zM27 33h3v1H27zM32 33h1v1H32zM34 33h1v1H34zM37 33h2v1H37zM40 33h2v1H40zM43 33h1v1H43zM47,33 h2v1H47zM0 34h1v1H0zM2 34h2v1H2zM5 34h2v1H5zM8 34h2v1H8zM11 34h1v1H11zM16 34h1v1H16zM19 34h2v1H19zM22 34h2v1H22zM25 34h5v1H25zM31 34h1v1H31zM36 34h1v1H36zM38 34h2v1H38zM41 34h1v1H41zM43 34h1v1H43zM3 35h1v1H3zM9 35h6v1H9zM16 35h1v1H16zM20 35h1v1H20zM22 35h2v1H22zM30 35h4v1H30zM36 35h2v1H36zM39 35h1v1H39zM42 35h2v1H42zM45,35 h4v1H45zM2 36h1v1H2zM4 36h4v1H4zM12 36h1v1H12zM14 36h1v1H14zM20 36h3v1H20zM29 36h3v1H29zM34 36h4v1H34zM39 36h1v1H39zM41 36h4v1H41zM46,36 h3v1H46zM2 37h1v1H2zM8 37h1v1H8zM10 37h2v1H10zM15 37h3v1H15zM19 37h2v1H19zM25 37h4v1H25zM31 37h3v1H31zM37 37h2v1H37zM40 37h1v1H40zM43 37h3v1H43zM47,37 h2v1H47zM1 38h1v1H1zM5 38h2v1H5zM8 38h1v1H8zM11 38h1v1H11zM13 38h1v1H13zM17 38h3v1H17zM21 38h4v1H21zM27 38h2v1H27zM31 38h1v1H31zM35 38h4v1H35zM40 38h2v1H40zM44 38h4v1H44zM1 39h3v1H1zM7 39h2v1H7zM11 39h2v1H11zM16 39h1v1H16zM18 39h3v1H18zM23 39h1v1H23zM26 39h1v1H26zM28 39h2v1H28zM31 39h2v1H31zM34 39h2v1H34zM37 39h2v1H37zM40 39h2v1H40zM47,39 h2v1H47zM0 40h3v1H0zM6 40h4v1H6zM13 40h1v1H13zM16 40h4v1H16zM21 40h7v1H21zM31 40h2v1H31zM34 40h1v1H34zM37 40h1v1H37zM40 40h5v1H40zM46 40h2v1H46zM8 41h2v1H8zM12 41h4v1H12zM17 41h2v1H17zM21 41h2v1H21zM26 41h4v1H26zM33 41h3v1H33zM39 41h2v1H39zM44 41h3v1H44zM48,41 h1v1H48zM0 42h7v1H0zM8 42h2v1H8zM12 42h2v1H12zM15 42h1v1H15zM17 42h3v1H17zM21 42h2v1H21zM24 42h1v1H24zM26 42h1v1H26zM31 42h1v1H31zM33 42h6v1H33zM40 42h1v1H40zM42 42h1v1H42zM44 42h1v1H44zM47,42 h2v1H47zM0 43h1v1H0zM6 43h1v1H6zM8 43h1v1H8zM11 43h1v1H11zM14 43h4v1H14zM19 43h1v1H19zM22 43h1v1H22zM26 43h1v1H26zM28 43h1v1H28zM30 43h1v1H30zM35 43h6v1H35zM44 43h2v1H44zM0 44h1v1H0zM2 44h3v1H2zM6 44h1v1H6zM12 44h3v1H12zM16 44h2v1H16zM21 44h6v1H21zM28 44h4v1H28zM34 44h2v1H34zM37 44h1v1H37zM39 44h6v1H39zM47 44h1v1H47zM0 45h1v1H0zM2 45h3v1H2zM6 45h1v1H6zM8 45h1v1H8zM10 45h1v1H10zM12 45h1v1H12zM14 45h1v1H14zM16 45h1v1H16zM21 45h2v1H21zM25 45h7v1H25zM39 45h3v1H39zM43 45h2v1H43zM46 45h2v1H46zM0 46h1v1H0zM2 46h3v1H2zM6 46h1v1H6zM8 46h2v1H8zM12 46h2v1H12zM16 46h5v1H16zM27 46h2v1H27zM30 46h2v1H30zM34 46h1v1H34zM36 46h2v1H36zM39 46h1v1H39zM42 46h4v1H42zM0 47h1v1H0zM6 47h1v1H6zM11 47h1v1H11zM13 47h1v1H13zM19 47h1v1H19zM21 47h1v1H21zM24 47h1v1H24zM26 47h3v1H26zM34 47h2v1H34zM37 47h1v1H37zM39 47h1v1H39zM41 47h1v1H41zM43 47h1v1H43zM45 47h2v1H45zM0 48h7v1H0zM8 48h1v1H8zM10 48h1v1H10zM12 48h4v1H12zM18 48h4v1H18zM23 48h1v1H23zM27 48h1v1H27zM29 48h2v1H29zM36 48h2v1H36zM45,48 h4v1H45z"></path></svg>
                                        </div>
                                    </div>
                                    <div className={styles.binanceTradeScanRightscanertext}>
                                        <h6>Scan to Download App</h6>
                                        <p>iOS and Android</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.binanceTradeScanRightlogos}>
                                <div className={styles.bTScanRightlogos}>
                                    <svg class="bn-svg text-[40px] text-t-primary mobile:text-[32px] tablet:text-[32px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.69 1.978c.133 1.149-.345 2.28-1.046 3.112-.73.819-1.9 1.445-3.037 1.364-.15-1.104.428-2.28 1.073-2.996.73-.815 1.997-1.438 3.01-1.48zm3.64 6.17c-.135.076-2.231 1.27-2.208 3.699.026 2.94 2.707 3.912 2.739 3.922-.015.069-.42 1.403-1.424 2.757-.84 1.193-1.72 2.359-3.116 2.38-.665.014-1.113-.168-1.58-.357-.488-.197-.996-.402-1.79-.402-.843 0-1.374.212-1.886.416-.442.177-.87.349-1.474.372-1.33.047-2.347-1.273-3.217-2.454-1.738-2.413-3.092-6.8-1.277-9.786.88-1.464 2.484-2.406 4.197-2.432.755-.014 1.48.262 2.114.504.485.186.918.35 1.273.35.312 0 .733-.158 1.224-.343.773-.291 1.72-.648 2.683-.552.659.018 2.536.247 3.745 1.924l-.003.002z" fill="#eaecef"></path></svg>
                                    MacOS
                                </div>
                                <div className={styles.bTScanRightlogos}>
                                    <svg class="bn-svg text-[40px] text-t-primary mobile:text-[32px] tablet:text-[32px]" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg"><path d="M3 3.895h8.533v8.529H3v-8.53zm9.467 0H21v8.529h-8.533v-8.53zM3 13.362h8.533v8.533H3v-8.533zm9.467 0H21v8.533h-8.533" fill="#eaecef"></path></svg>
                                    Windows
                                </div>
                                <div className={styles.bTScanRightlogos}>
                                    <svg class="bn-svg text-[40px] text-t-primary mobile:text-[32px] tablet:text-[32px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.578 18.633c-.553-.23-1.015-.588-.99-1.267.039-.691-.488-1.139-.488-1.139s.463-1.498.039-2.74c-.424-1.24-1.837-3.225-2.917-4.735-1.092-1.51-.167-3.239-1.156-5.453-.99-2.227-3.546-2.087-4.92-1.14-1.375.948-.951 3.29-.887 4.404.064 1.114.026 1.894-.103 2.189-.128.281-1.015 1.344-1.606 2.214-.59.883-1.015 2.714-1.451 3.456-.424.755-.129 1.434-.129 1.434s-.295.102-.527.589c-.23.486-.693.716-1.516.883-.822.166-.822.691-.629 1.28.193.589 0 .909-.231 1.664-.232.742.925.973 2.03 1.1 1.117.129 2.363.846 3.417.986 1.053.128 1.375-.716 1.375-.716s1.182-.27 2.428-.295a10.117 10.117 0 012.428.256s.231.525.655.755c.424.23 1.35.256 1.94-.358.591-.627 2.171-1.408 3.058-1.895.899-.499.745-1.241.18-1.472zM12.895 4.246c.565 0 1.015.55 1.015 1.242 0 .486-.231.909-.566 1.113l-.27-.115c.206-.102.348-.358.348-.653 0-.384-.245-.704-.54-.704-.296 0-.54.32-.54.704 0 .141.039.282.09.397-.18-.064-.334-.128-.462-.18a2.24 2.24 0 01-.09-.575c0-.678.462-1.229 1.015-1.229zm-.064 2.611c.282.103.59.282.565.461-.039.18-.18.18-.565.41-.386.23-1.208.742-1.478.768-.27.038-.41-.115-.694-.295-.282-.179-.809-.614-.68-.844 0 0 .41-.32.59-.474.18-.166.643-.563.925-.512.296.051 1.054.384 1.337.486zm-2.544-2.419c.45 0 .81.525.81 1.178 0 .115-.014.23-.04.333a.828.828 0 00-.32.192c-.052.038-.103.09-.155.128a.824.824 0 00.065-.512c-.065-.359-.296-.615-.527-.576-.231.038-.373.358-.321.716.064.359.295.615.526.576.013 0 .026 0 .039-.012a2.978 2.978 0 01-.321.281c-.321-.153-.566-.601-.566-1.126.013-.653.373-1.178.81-1.178zm-.86 16.487c-.104.473-.656.806-.656.806-.501.154-1.889-.448-2.518-.704-.63-.256-2.236-.346-2.441-.576-.206-.243.103-.755.18-1.254.077-.5-.154-.807-.077-1.152.077-.333 1.104-.333 1.49-.576.398-.23.475-.91.784-1.101.32-.18.886.473 1.13.832.231.358 1.13 1.933 1.49 2.317.373.422.72.934.617 1.408zm5.806-4.544c-.09.46-.09 2.124-.09 2.124s-1.015 1.396-2.595 1.626c-1.58.23-2.364.064-2.364.064l-.886-1.011s.693-.103.59-.781c-.102-.678-2.106-1.626-2.466-2.483-.36-.845-.064-2.279.398-3.008.463-.717.758-2.279 1.208-2.803.462-.525.822-1.626.655-2.125 0 0 .99 1.177 1.67.985.694-.192 2.236-1.33 2.467-1.139.231.192 2.197 4.506 2.39 5.875.192 1.37-.129 2.42-.129 2.42s-.758-.205-.848.256zm5.036 3.072c-.308.281-2.017.96-2.53 1.497-.515.525-1.17.96-1.58.832-.412-.128-.772-.69-.592-1.497.18-.807.334-1.703.309-2.202-.026-.512-.129-1.19 0-1.293.128-.102.333-.051.333-.051s-.102.96.489 1.216c.59.256 1.426-.102 1.683-.358.257-.256.436-.628.436-.628s.257.128.232.538c-.026.41.18.986.565 1.19.373.192.964.474.655.756z" fill="#eaecef"></path></svg>
                                    Linux
                                </div>
                            </div>
                            <div className={styles.binanceTradeScanRightDownloadbtn}>
                                <button><svg class="bn-svg text-[20px] text-iconNormal" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 9V6H16v3h3V3H4.5v6h3zm-3 12H19v-6h-3v3H7.5v-3h-3v6zm6.009-13h3v4.002l2.508.006-4.008 4.008-4.01-4.008 2.51-.025V8z" fill="#848e9c"></path></svg>
                                More Download Options</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TradeScan
