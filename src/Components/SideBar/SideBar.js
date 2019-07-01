/*eslint-disable*/
import React, { Component } from 'react'
import { Link } from "react-scroll";

class SideBar extends Component {
    state = {
        introduction: false,
        authentication: false,
        errors: false,
        balance: false
    }

    render() {
        return (
            <aside className="book-menu fixed">
                <nav>
                    <h2 className="book-brand">
                        <a>Stripe API</a>
                    </h2>
                    <ul>

                        <li className="pointer">
                            <Link
                                spy={true}
                                to="introduction"
                                activeClass="active"
                                smooth={true}>
                                Introduction
                            </Link>
                        </li>

                        <li className="pointer">
                            <Link
                                spy={true}
                                to="authentication"
                                activeClass="active"
                                smooth={true}>
                                Authentication
                            </Link>
                        </li>
                        <li className="pointer">
                            <Link
                                spy={true}
                                to="errors"
                                activeClass="active"
                                smooth={true}
                                onClick={() => this.setState({ errors: !this.state.errors })}>
                                Errors
                            </Link>
                            {this.state.errors && <ul>
                                <li><a className="pointer">Handling Errors</a></li>
                            </ul>}

                        </li>


                        <h3><b>Core Resources</b></h3>


                        <li className="pointer">
                            <Link
                                spy={true}
                                to="balance"
                                activeClass="active"
                                smooth={true}
                                onClick={() => this.setState({ balance: !this.state.balance })}
                            >
                                Balance
                            </Link>

                            {this.state.balance && <ul>
                                <li>
                                    <Link
                                        spy={true}
                                        to = "object"
                                        activeClass="active"
                                        smooth={true}
                                        className="pointer">The Balance Object</Link>
                                </li>
                                <li>
                                    <Link
                                        spy={true}
                                        to="transaction"
                                        activeClass="active"
                                        smooth={true}
                                        className="pointer">The Balance Transaction Object</Link>
                                </li>
                                <li>
                                    <Link
                                        spy={true}
                                        to="retrieve"
                                        activeClass="active"
                                        smooth={true}
                                        className="pointer">Retrieve Balance</Link>
                                </li>
                               
                                <li>
                                    <Link
                                        spy={true}
                                        to="listall"
                                        activeClass="active"
                                        smooth={true}
                                        className="pointer">List all balance history</Link>
                                </li>
                            </ul>}
                        </li>



                        <li className="pointer">
                            <Link
                                spy={true}
                                activeClass="active"
                                smooth={true}
                            >
                                Charges
                            </Link>

                        </li>


                        <li className="pointer">
                            <Link
                                spy={true}
                                activeClass="active"
                                smooth={true}
                            >
                                Customers
                            </Link>

                        </li>




                        <li className="pointer">
                            <Link
                                spy={true}
                                activeClass="active"
                                smooth={true}
                            >
                                Disputes
                            </Link>

                        </li>



                        <li className="pointer">
                            <Link
                                spy={true}
                                activeClass="active"
                                smooth={true}
                            >
                                Events
                            </Link>

                        </li>




                        <li className="pointer">
                            <Link
                                spy={true}
                                activeClass="active"
                                smooth={true}
                            >
                                Files
                            </Link>

                        </li>



                        <li className="pointer">
                            <Link
                                spy={true}
                                activeClass="active"
                                smooth={true}
                            >
                                File Links
                            </Link>

                        </li>


                        <li className="pointer">
                            <Link
                                spy={true}
                                activeClass="active"
                                smooth={true}
                            >
                                PaymentIntents
                            </Link>

                        </li>


                        <li className="pointer">
                            <Link
                                spy={true}
                                activeClass="active"
                                smooth={true}
                            >
                                Payouts
                            </Link>

                        </li>




                        <li className="pointer">
                            <Link
                                spy={true}
                                activeClass="active"
                                smooth={true}
                            >
                                Products
                            </Link>

                        </li>


                        <li className="pointer">
                            <Link
                                spy={true}
                                activeClass="active"
                                smooth={true}
                            >
                                Refunds
                            </Link>

                        </li>

                        <li className="pointer">
                            <Link
                                spy={true}
                                activeClass="active"
                                smooth={true}
                            >
                                Tokens
                            </Link>

                        </li>

                    </ul>
                    <div className="sign-btn">
                        Signin
                    </div>
                </nav>
            </aside>
        )
    }
}


export default SideBar
