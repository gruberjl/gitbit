import {h} from 'preact'
import {useState, useEffect} from 'preact/hooks'
import {onAuthStateChanged} from './firebase/on-auth-state-changed'
import {signOut} from './firebase/sign-out'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const gitBitImg = '/assets/gitbit-icon-light-80x80.png'
const appBarNameStyle = {
  mr: 2,
  display: 'flex',
  fontFamily: 'monospace',
  fontWeight: 700,
  color: 'inherit',
  textDecoration: 'none',
  alignItems: 'center'
}

export default function PageHeader() {
  const [uid, setUid] = useState('')
  const [openDrawer, toggleDrawer] = useState(false)
  const isBrowser = () => typeof window !== 'undefined'

  let pathname; let search; let hash
  if (isBrowser()) {
    pathname = window.location.pathname
    search = window.location.search
    hash = window.location.hash
    if (pathname !== '/' && pathname.endsWith('/')) {
      console.log(`redirecting from: ${pathname} to ${pathname.slice(0, -1) + search + hash}`)
      window.location.href = pathname.slice(0, -1) + search + hash
    }
  }

  useEffect(() => {
    if (isBrowser()) {
      const unsubscribe = onAuthStateChanged((user) => {
        if (user)
          setUid(user.uid)
        else
          setUid('')
      })

      return () => unsubscribe()
    }
  }, [])


  const signout = () => {
    signOut().then(() => {
      window.location.href = '/'
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <a href='/' style={appBarNameStyle}>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                  <img src={gitBitImg} alt="GitBit Logo" width='40' height='40' />
                </IconButton>

                <Typography variant="h6" href='/'>
                  GitBit
                </Typography>
              </a>
              { uid == '' ?
                <Box sx={{flexGrow: 1}}>
                  <Button href='/blog' sx={{my: 2, color: 'white', display: {xs: 'none', md: 'inline-flex'}}}>Blog</Button>
                  <Button href='/course/ms-500/learn/Whats-in-this-course-cpchjBLkC' sx={{my: 2, color: 'white', display: {xs: 'none', md: 'inline-flex'}}}>First lesson</Button>
                </Box> :
                <Box sx={{flexGrow: 1}}>
                  <Button href='/dashboard' sx={{my: 2, color: 'white', display: {xs: 'none', md: 'inline-flex'}}}>Dashboard</Button>
                  <Button href='/tests' sx={{my: 2, color: 'white', display: {xs: 'none', md: 'inline-flex'}}}>My Tests</Button>
                  <Button href='/blog' sx={{my: 2, color: 'white', display: {xs: 'none', md: 'inline-flex'}}}>Blog</Button>
                </Box>
              }
              { uid ?
                <Button sx={{display: {xs: 'none', md: 'inline-flex'}}} color="inherit" onClick={signout}>Sign Out</Button> :
                <Button sx={{display: {xs: 'none', md: 'inline-flex'}}} color="inherit" href='/sign-up'>Sign Up</Button>
              }
              <IconButton onClick={() => toggleDrawer(!openDrawer)} aria-label="menu" color="inherit" sx={{display: {xs: 'inline-flex', sm: 'inline-flex', md: 'none'}}}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Drawer anchor="right" open={openDrawer} onClose={() => toggleDrawer(!openDrawer)}>
        <Box sx={{width: 250}} role="presentation" onClick={() => toggleDrawer(!openDrawer)} onKeyDown={() => toggleDrawer(!openDrawer)}>
          { uid == '' ?
            <List>
              <ListItem disablePadding>
                <ListItemButton href='/course/ms-500/learn/Whats-in-this-course-cpchjBLkC'>
                  <ListItemText primary="Go to first lesson" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton href='/blog'>
                  <ListItemText primary="Blog" />
                </ListItemButton>
              </ListItem>
            </List> :
            <List>
              <ListItem disablePadding>
                <ListItemButton href='/dashboard'>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton href='/tests'>
                  <ListItemText primary="My Tests" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton href='/blog'>
                  <ListItemText primary="Blog" />
                </ListItemButton>
              </ListItem>
            </List>
          }
          <Divider />
          <List>
            { uid == '' ?
              <ListItem disablePadding>
                <ListItemButton href='/sign-up'>
                  <ListItemText primary="Sign Up" />
                </ListItemButton>
              </ListItem> :
              <ListItem disablePadding>
                <ListItemButton onClick={signout}>
                  <ListItemText primary="Sign Out" />
                </ListItemButton>
              </ListItem>
            }
          </List>
        </Box>
      </Drawer>
    </div>
  )
}
