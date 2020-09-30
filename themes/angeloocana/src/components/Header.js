import React from 'react'
// import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage';

const Header = (props) => (
  <ul id="menu">
    <SelectLanguage langs={props.langs} />
  </ul>
)

export default Header;
