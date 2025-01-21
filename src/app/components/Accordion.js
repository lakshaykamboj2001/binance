"use client"
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './binance.module.css'
import Link from 'next/link';



const AccordionComponent = () => {
    return (
        <>
            <div className={styles.AccordionComponentBg}>
                <div className='container'>
                    <h3>Frequently Asked Questions</h3>
                    <div className="AccordionComponent">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <span>1</span> What is a cryptocurrency exchange?</Accordion.Header>
                                <Accordion.Body>
                                <Link href="">Cryptocurrency </Link> exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <span>2</span>What products does Binance provide?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AccordionComponent
