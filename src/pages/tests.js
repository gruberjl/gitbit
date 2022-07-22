import {h, Component} from 'preact'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MyTests from '../components/my-tests'
import {onAuthStateChanged} from '../components/firebase/on-auth-state-changed'
import Page from '../components/page'

const isBrowser = () => typeof window !== 'undefined'

class Tests extends Component {
  constructor() {
    super()
    this.setUid = this.setUid.bind(this)

    this.state = {
      uid: ''
    }
  }

  componentDidMount() {
    if (isBrowser())
      this.onAuthStateChangedListener = onAuthStateChanged(this.setUid)
  }

  componentWillUnmount() {
    this.onAuthStateChangedListener()
  }

  setUid(user) {
    if (user) {
      this.setState({
        uid: user.uid
      })
    } else
      window.location.href = '/login'
  }

  render() {
    return (
      <Page title={'Practice Tests to prepare for Microsoft 365 MS-500'} description={'Practice Tests to help you prepare for Microsoft 365 MS-500'}>
        <main>
          <Container>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={10}>
                <h1>Tests</h1>
              </Grid>
              <Grid item xs={2}>
                <Button href="/tests/new">Start New</Button>
              </Grid>
            </Grid>
            <Grid container sx={{mx: 'auto'}}>
              <Grid item sx={{mx: 'auto'}}>
                <MyTests />
              </Grid>
            </Grid>
          </Container>
        </main>
      </Page>
    )
  }
}

export default Tests
