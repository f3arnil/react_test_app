import React, { Component } from 'react'
import { Link } from 'react-router'

export default class List extends Component {
    render() {
        return ( 
            <div>
                <div className = 'row'>
                    <div className = 'col-md-12'>
                        <h3> List </h3> </div> </div> <div className = 'row'>
                        <div className = 'col-md-12'>
                            <ul className = 'list'>
                                <li className = 'list__item'>
                                    <Link to='/one/'> One </Link>
                                </li>
                                <li className = 'list__item'>
                                    <Link to = '/two/'>Two</Link>
                                </li>
                                <li className = 'list__item' >
                                    <Link to = '/three/'>Three</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        )
    }
}
