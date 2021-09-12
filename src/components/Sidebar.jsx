import React,{useState} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {SidebarData} from './SidebarData'
import SubMenu from "./SubMenu";
import {IconContext} from "react-icons";


function Sidebar(props) {
    const [sidebar,setSidebar] =useState(false)

    const showSidebar =()=> setSidebar(prev => !prev)
    return (

        <IconContext.Provider value={{color:'#fff'}}>
            <Nav>
                <NavIcon to={'#'} onClick={showSidebar}>
                    <FaIcons.FaBars/>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar} >
                <SidebarWrap>
                    <NavIcon to={'#'}>
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </NavIcon>
                    {SidebarData.map((item,idx)=>{
                        return(
                            <SubMenu key={idx} item={item}/>
                        )
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>

    );
}

export default Sidebar;


const Nav = styled.div`
background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`


const NavIcon = styled(Link)`
margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`


const SidebarNav = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({sidebar}) => sidebar ? '0' : '-100%'};
  transition: 350ms;
  z-index: 10;
  background: #15171c;
  width: 250px;
  height: 100vh;
`


const SidebarWrap = styled.div`
width: 100%;
`
