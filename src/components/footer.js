import {h} from 'preact'
import {useState} from 'preact/hooks'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ThumbUpIcon from '@mui/icons-material/ThumbUpAlt'
import ThumbDownIcon from '@mui/icons-material/ThumbDownAlt'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import Facebook from '@mui/icons-material/Facebook'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Twitter from '@mui/icons-material/Twitter'
import YouTube from '@mui/icons-material/YouTube'

const marginLeft28 = {
  marginLeft: '28px'
}

const padding = {
  paddingTop: '12px',
  paddingBottom: '12px'
}

export default function Footer({footerMargin='24px'}) {
  const [openDrawer, toggleDrawer] = useState(false)
  const [upvoted, setUpvote] = useState(false)

  return (
    <div style={{marginTop: footerMargin}}>
      <Drawer anchor="bottom" open={openDrawer} onClose={() => toggleDrawer(!openDrawer)}>
        <Container maxWidth="xl">
          <Grid container spacing={2} style={padding}>
            <Grid item>
              <Typography variant="h6" component="span">Thanks! Would you mind taking 1 minute to fill out a form?</Typography>
            </Grid>
            <Grid item>
              <Button href={upvoted ? 'https://www.sitejabber.com/reviews/gitbit.org' : 'https://forms.office.com/Pages/ResponsePage.aspx?id=3mxMlmXy_0q_xTiSry7TfeI4eQKFdZtCqEnxf3eEFiJUNVNEQUkzT1BUQVRPUE42SDhJUzdNMlhVTS4u'} target="_blank">Yes</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => toggleDrawer(false)}>No thanks</Button>
            </Grid>
          </Grid>
        </Container>
      </Drawer>

      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography variant="h6" noWrap component="div">Did you like the site?</Typography>
              <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{mr: 2}} style={marginLeft28} onClick={() => {
                setUpvote(true); toggleDrawer(!openDrawer)
              }}>
                <ThumbUpIcon />
              </IconButton>
              <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{mr: 2}} onClick={() => {
                setUpvote(false); toggleDrawer(!openDrawer)
              }}>
                <ThumbDownIcon />
              </IconButton>
            </Toolbar>
            <Toolbar disableGutters>
              <Grid container justifyContent="center" spacing={1}>
                <IconButton size="large" color="inherit" href='https://www.facebook.com/GitBit0' aria-label="Check out Gitbit on Facebook">
                  <Facebook />
                </IconButton>
                <IconButton size="large" color="inherit" href='https://www.linkedin.com/company/gitbit-org/' aria-label="Check out Gitbit on Linkedin">
                  <LinkedIn />
                </IconButton>
                <IconButton size="large" color="inherit" href='https://twitter.com/gruberjl' aria-label="Check out Gitbit on Twitter">
                  <Twitter />
                </IconButton>
                <IconButton size="large" color="inherit" href='https://www.youtube.com/@gitbitorg' aria-label="Check out Gitbit on YouTube">
                  <YouTube />
                </IconButton>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  )
}
