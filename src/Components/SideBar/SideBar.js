import React from 'react'
import { scroller } from "react-scroll";

const SideBar = () => {
    const scrollToElements = element => {
        scroller.scrollTo(element, {
            duration: 400,
            delay: 100,
            smooth: true,
            offset: -150
        });
    };
    return (
        <aside className="book-menu fixed">
            <nav>
                <h2 className="book-brand">
                    <a>Stripe API</a>
                </h2>
                <ul>
                    <li className="pointer"><a button onClick={() => scrollToElements("introduction")}><strong>Introduction</strong></a></li>
                    <li className="pointer"><a button onClick={() => scrollToElements("authentication")}>Authentication</a></li>
                    <li className="pointer" ><a button onClick={() => scrollToElements("errors")}>Errors</a>
                        <ul>
                            <li><a className="pointer">Handling Errors</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="pointer">Balance</a>
                        <ul>
                            <li>
                                <a className="pointer">The Balance Object</a>
                            </li>
                            <li>
                                <a className="pointer">The Balance Transaction Object</a>
                            </li>
                            <li>
                                <a className="pointer">Retrieve Balance</a>
                            </li>
                            <li>
                                <a className="pointer">Retrieve a balance transaction</a>
                            </li>
                            <li>
                                <a className="pointer">List all balance history</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar
