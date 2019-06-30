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
                                <strong>Introduction</strong>
                            </Link>
                        </li>
                        <li className="pointer">
                            <Link
                                spy={true}
                                to="authentication"
                                activeClass="active"
                                smooth={true}>
                                <strong>Authentication</strong>
                            </Link>
                        </li>
                        <li className="pointer">
                            <Link
                                spy={true}
                                to="errors"
                                activeClass="active"
                                smooth={true}
                                onClick={() => this.setState({ errors: !this.state.errors })}>
                                <strong>Errors</strong>
                            </Link>
                            {this.state.errors && <ul>
                                <li><a className="pointer">Handling Errors</a></li>
                            </ul>}

                        </li>
                        <li onClick={() => this.setState({ balance: !this.state.balance })}>
                            <a className="pointer"><strong>Balance</strong></a>
                            {this.state.balance && <ul>
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
                            </ul>}
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

// const SideBar = () => {
//     return (

//     )
// }

export default SideBar
