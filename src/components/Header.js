import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import EmptyTableButton from './EmptyTableButton'

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="https://bit.ly/35apUdG"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
             NSE DATA
            </Navbar.Brand>
            {/* <EmptyTableButton /> */}
       </Navbar>
    )
}

export default Header
