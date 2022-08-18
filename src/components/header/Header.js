import React from 'react'
import styled from 'styled-components'

function Header () {
    return(
        <Navbar>
            <div className="nav-div-block">
                <NavBlock>
                    <a href="home">
                        <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="" />
                    </a>
                    <Nav>
                        <a href="">Home</a>
                        <NavLink>
                            <DropDown>
                                <DropArrow></DropArrow>
                                <div className="text-block">Who We Are</div>
                            </DropDown>
                        </NavLink>
                    </Nav>
                </NavBlock>
            </div>
        </Navbar>
    )
}


export default Header

const Navbar = styled.div`
    position: fixed;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: auto;
    display: flex;
    padding-top: 1em;
    padding-bottom: 1em;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    align-items: center;
    background-color: #fff;
    justify-content: center;
    -webkit-box-align: center;
    /* background: #dddddd; */
    z-index: 1000;

    ::before{
        content: " ";
        display: table;
    }


    .nav-div-block{
        display: flex;
        width: 90vw;
        -webkit-box-pack: justify;
        align-items: center;
        justify-content: space-between;
        -webkit-box-align: center;
    }
`

const NavBlock = styled.div`
    display: flex;
    align-items: center;
    -webkit-box-align: center;

    a{
        position: relative;
        float: left;
        text-decoration: none;
        color: #333333;
        padding-right: 3em;

        img{
            width: 11vw;
            max-width: 100%;
            vertical-align: middle;
            display: inline-block;  
        }
    }
`

const Nav = styled.nav`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: #484848;
    position: relative;
    float: right;

    a{
        margin-left: 0px;
        color: #051c40;
        padding: 1em;
        font-family: 'Hl 500 Medium', sans-serif;
        line-height: 1.5em;
        font-weight: 500;
        position: relative;
        display: inline-block;
        text-decoration: none;
        text-align: left;
        margin-right: auto;
        font-size: 1em;
    }
`

const NavLink = styled.div`
    z-index: 1;
    height: 10%;
    margin-top: 0px;
    padding: 0em;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    line-height: 1.5em;
    font-weight: 500;
    font-family: 'Hl 500 Medium', sans-serif;
`
const DropDown = styled.div`
    padding-left: 40px;
    display: flex;
    height: 100%;
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 1em 30px 1em 1em;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: stretch;
    align-items: stretch;
`
const DropArrow = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    margin-right: 20px;
    width: 1em;
    height: 1em;

    ::before{
        content: "V";
    }
`