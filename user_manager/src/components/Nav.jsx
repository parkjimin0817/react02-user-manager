import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'

const Navi = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: ${props => props.theme === 'dark' ? '#333' : '#f8e090'};
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
  font-weight: bold;
  padding: 8px 12px;

  &:hover {
    color: ${props => props.theme === 'dark' ? '#cecece' : '#ff5e00' };
  }
`
const ChangeThemeButton = styled.button`
    background: ${props => props.theme === 'dark' ? '#919191' : '#ffffff;' };
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000;' };
`

const Nav = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <Navi theme={theme}>
        <StyledLink theme={theme} to="/">사용자목록가기</StyledLink>
        <ChangeThemeButton theme={theme} onClick={toggleTheme}>테마 변경</ChangeThemeButton>
    </Navi>
  )
}

export default Nav