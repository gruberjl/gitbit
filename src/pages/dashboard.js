import { h } from "preact"
import { useState, useEffect } from 'preact/hooks'
import Page from '../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { onAuthStateChanged } from "../components/firebase/on-auth-state-changed"
import { getDoc } from '../components/firebase/get-doc'
import ContentsRead from '../components/contents-read'
import MyTests from '../components/my-tests'
import contents from '../data/contents'
import Paper from '@mui/material/Paper'

const isBrowser = () => typeof window !== 'undefined'

const getNextContent = (completedContent) => {
  if (completedContent.length === 0)
    return contents[0]

  const idx = contents.findIndex(content => completedContent.indexOf(content.id) === -1)
  if (idx === -1)
    return {isComplete:true}

  return contents[idx]
}

const DashboardPage = () => {
  const [userAcct, setUserAcct] = useState({completedContent: []})
  const [nextContent, setNextContent] = useState(contents[0])
  const [uid, setUid] = useState('')

  useEffect(() => {
    if (isBrowser()) {
      const onAuthStateChangedListener = onAuthStateChanged(user => {
        if (user) {
          setUid(user.uid)
          getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
            if (!userAcct.completedContent) {
              userAcct.completedContent = []
            }
            setUserAcct(userAcct)
            setNextContent(getNextContent(userAcct.completedContent))
          })
        } else {
          window.location.href = '/login'
        }
      })

      return () => onAuthStateChangedListener()
    }
  }, [])

  return (
    <Page title={'MS-500 Dashboard'}>
      <main style={{backgroundColor: '#F3F6F9'}}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="h3" component="h1" sx={{mt:4, mb:4}}>MS-500 Dashboard</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            { uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ?
              <Grid item xs={12}>
                <a href='http://localhost:8000/course/edit-course?courseId=MS-500'>Manage site</a>
              </Grid> :
              ''
            }
            <Grid item xs={12} lg={3}>
              <Card>
                { nextContent.isComplete
                  ? ''
                  : <CardMedia component="img" variant="top" image={nextContent.featuredImage} alt="featured image of the next lesson" />
                }
                { nextContent.isComplete ?
                  (
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{mt:4, mb:4}}>Start a practice test</Typography>
                      <CardActions>
                        <Button variant="contained" href="/tests/new">Start practice test</Button>
                      </CardActions>
                    </CardContent>
                  ) : (
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{mt:4, mb:4}}>{nextContent.title}</Typography>
                      <CardActions>
                        <Button variant="contained" href={`/course/ms-500/learn/${nextContent.slug}`}>Start next lesson</Button>
                      </CardActions>
                    </CardContent>
                  )
                }
              </Card>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="h4" component="h2" sx={{mt:4, mb:4}}>Course content</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid>
              <ContentsRead completedContent={userAcct.completedContent} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={10}>
              <Typography variant="h4" component="h2" sx={{mt:4, mb:4}}>Practice Tests</Typography>
            </Grid>
            <Grid xs={2} justifyContent="end" style={{display:'flex'}}>
              <Button href="/tests/new">Start New</Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" sx={{pb:4}}>
            <Grid>
              <Paper elevation={3} >
                <MyTests />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </Page>
  )
}

export default DashboardPage
