import React from 'react'
import styles from './binance.module.css'
import Link from 'next/link'
import { Image } from 'react-bootstrap';

const socialMediaIcons = [
    { src: '/images/apple-icon.png', alt: 'Telegram' },
    { src: '/images/apple-icon.png', alt: 'Twitter' },
    { src: '/images/apple-icon.png', alt: 'Facebook' },
    { src: '/images/apple-icon.png', alt: 'Reddit' },
    { src: '/images/apple-icon.png', alt: 'Instagram' },
    { src: '/images/apple-icon.png', alt: 'YouTube' },
    { src: '/images/apple-icon.png', alt: 'TikTok' },
    { src: '/images/apple-icon.png', alt: 'Discord' },
    { src: '/images/apple-icon.png', alt: 'LinkedIn' },
    { src: '/images/apple-icon.png', alt: 'Medium' },
    { src: '/images/apple-icon.png', alt: 'GitHub' }
];

const Footer = () => {
    return (
        <>
            <div className={styles.FooterBg}>
                <div className='container'>
                    <div className={styles.FooterContentPading}>
                        <div className={styles.FooterContent}>
                            <div className={styles.FooterCommunity}>
                                <h3>Community</h3>
                                <div className={styles.footerIcongroup}>
                                    {socialMediaIcons.map((icon, index) => (
                                        <div className={styles.footerIcongroupfllx}>
                                            <Link href="" key={`social-icon-${index}`}>
                                                <Image
                                                    src={icon.src}
                                                    alt={icon.alt}
                                                    fluid
                                                />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.footerNavlist}>
                                <div className={styles.footerNavlistflx}>
                                    <div className={styles.footerNavlistSub}>
                                        <h3>Community</h3>
                                        <ul>
                                            <li><Link href="">About</Link></li>
                                            <li><Link href="">Careers</Link></li>
                                            <li><Link href="">Announcements</Link></li>
                                            <li><Link href="">News</Link></li>
                                            <li><Link href="">Press</Link></li>

                                        </ul>
                                    </div>
                                    <div className={styles.footerNavlistSub}>
                                        <h3>Community</h3>
                                        <ul>
                                            <li><Link href="">About</Link></li>
                                            <li><Link href="">Careers</Link></li>
                                            <li><Link href="">Announcements</Link></li>
                                            <li><Link href="">News</Link></li>
                                            <li><Link href="">Press</Link></li>

                                        </ul>
                                    </div>
                                    <div className={styles.footerNavlistSub}>
                                        <h3>Community</h3>
                                        <ul>
                                            <li><Link href="">About</Link></li>
                                            <li><Link href="">Careers</Link></li>
                                            <li><Link href="">Announcements</Link></li>
                                            <li><Link href="">News</Link></li>
                                            <li><Link href="">Press</Link></li>

                                        </ul>
                                        <div className={`${styles.footerNavlistSub} ${styles.footerNavlistSubmargin}`}>
                                            <h3>Community</h3>
                                            <ul>
                                                <li><Link href="">About</Link></li>
                                                <li><Link href="">Careers</Link></li>
                                                <li><Link href="">Announcements</Link></li>
                                                <li><Link href="">News</Link></li>
                                                <li><Link href="">Press</Link></li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.footerNavlistSub}>
                                        <h3>Community</h3>
                                        <ul>
                                            <li><Link href="">About</Link></li>
                                            <li><Link href="">Careers</Link></li>
                                            <li><Link href="">Announcements</Link></li>
                                            <li><Link href="">News</Link></li>
                                            <li><Link href="">Press</Link></li>

                                        </ul>
                                        <div className={`${styles.footerNavlistSub} ${styles.footerNavlistSubmargin}`}>
                                            <h3>Community</h3>
                                            <ul>
                                                <li><Link href="">About</Link></li>
                                                <li><Link href="">Careers</Link></li>
                                                <li><Link href="">Announcements</Link></li>
                                                <li><Link href="">News</Link></li>
                                                <li><Link href="">Press</Link></li>

                                            </ul>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className={styles.footerCopyrightText}>
                            <p>Binance© 2025</p>
                            <Link href="">Cookie Preferences</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
