/** @jsx jsx */

import { jsx, Styled, useColorMode } from 'theme-ui'
import { Link } from "gatsby"
import Button from './button'
import SelectLanguage from './SelectLanguage';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const themes = ['deep', 'funk', 'future', 'swiss']
const modes = ['default', 'dark']

const getThemeName = (theme) => 
{
  switch (theme)
  {
    case 'deep':
      return 'Deep'
    case 'funk':
      return 'Funk'
    case 'future':
      return 'Future'
    case 'swiss':
      return 'Swiss'
    default:
        return theme
  }
}

const getModeName = (mode) => 
{
  switch (mode)
  {
    case 'dark':
      return (<span role="img" aria-label="moon">🌕 </span>)
    case 'default':
      return (<span role="img" aria-label="sun">☀️ </span>)
    default:
      return mode
  }
}

export default function Layout({ children }) 
{

  const [theme, setTheme] = useColorMode()
  const [mode, setMode] = useColorMode()

  const cycleTheme = (e) => 
  {
    const i = themes.indexOf(theme)
    const next = themes[(i + 1) % themes.length]
    setTheme(next)
  }

  const cycleMode = (e) => 
  {
    const i = modes.indexOf(mode)
    const next = modes[(i + 1) % modes.length]
    setMode(next)
  }

  return (
    <Styled.root>
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Gustavo Costa</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Início</ListLink>
          <ListLink to="/sobre/">Acerca</ListLink>
          <ListLink to="/contacto/">Contacto</ListLink>
          <Button
            sx={{
              ml: 2,
            }}
            onClick={cycleTheme}>
            <span role="img" aria-label="theme">🎨 </span>
            {getThemeName(theme)}
          </Button>
          <Button
            sx={{
              ml: 2,
            }}
            onClick={cycleMode}>
            {getModeName(mode)}
          </Button>
          <SelectLanguage langs={props.langs} />
        </ul>
      </header>
      {children}
    </div>
    </Styled.root>
  )
}
