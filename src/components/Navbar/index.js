import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to ="/">
                <h1>Sistem Informasi</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/tentang' activeStyle>
                    Tentang
                </NavLink>
                <NavLink to="/prospek" activeStyle>
                    Prospek
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar;