import {h} from 'preact'
import {useState, useEffect} from 'preact/hooks'
import Page from '../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import {onAuthStateChanged} from '../components/firebase/on-auth-state-changed'
import Check from '@mui/icons-material/Check'
import ContentsRead from '../components/contents-read'
import Typography from '@mui/material/Typography'

const certImg = '/assets/microsoft365-security-administrator-associate-600x600.png'
const landingStyles = {
  alignItems: 'center',
  display: 'flex',
  minHeight: 'calc(100vh - 66px)'
}

const minWidth100 = {
  minWidth: '100%'
}

const secondaryLanding = {
  backgroundColor: '#F3F6F9',
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center'
}

const margin100 = {
  margin: '100px auto'
}

const paddingBottom32px = {
  paddingBottom: '32px'
}

const margin12px = {
  margin: '12px 0'
}

const jsonLd = {
  '@type': 'Course',
  headline: 'Training for MS-500: Microsoft Office 365 Security Admin',
  name: 'Training for MS-500: Microsoft Office 365 Security Admin',
  description: 'Get Certified in MS-500 Microsoft 365 Security Administration',
  provider: {
    '@type': 'Organization',
    name: 'GitBit',
    sameAs: 'http://www.gitbit.org'
  },
  keywords: [
    'Microsoft',
    'Microsoft 365',
    'Office 365',
    'MS-500',
    'Microsoft 365 Security Administration'
  ],
  author: {
    '@type': 'Person',
    name: 'John Gruber',
    url: 'https://medium.com/@gruberjl'
  }
}

const isBrowser = () => typeof window !== 'undefined'

const IndexPage = () => {
  const [uid, setUid] = useState('')

  useEffect(() => {
    if (isBrowser()) {
      const onAuthStateChangedListener = onAuthStateChanged((user) => {
        if (user)
          setUid(user.uid)
        else
          setUid('')
      })

      return () => onAuthStateChangedListener()
    }
  }, [])

  return (
    <Page jsonLdType={'Course'} jsonLd={jsonLd} image={certImg} canonical={'https://gitbit.org'} title={'Training for MS-500: Microsoft Office 365 Security Admin'} description={'Get Certified in MS-500 Microsoft 365 Security Administration'}>
      <main>
        <div style={landingStyles}>
          <Container>
            <Grid container justifyContent="center">
              <Grid item md={6}>
                <img src={certImg} alt="Microsoft 365 MS-500 Logo" width='340' height='340' />
              </Grid>
              <Grid container item md={6} rowSpacing={2} spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h3" component="h1">Get Certified in MS-500 Microsoft 365 Security Administration</Typography>
                </Grid>
                { uid ?
                  (
                    <Grid item xs={12}>
                      <Button variant="contained" size="large" href='/dashboard' style={minWidth100}>Go to dashboard</Button>
                    </Grid>
                  ) :
                  (
                    <Grid item xs={12}>
                      <Button variant="contained" size="large" href='/sign-up' style={minWidth100}>Get Started Now</Button>
                    </Grid>
                )}
                { uid ? null :
                  (
                    <Grid item xs={12}>
                      <Button variant="text" size="large" href='/login' style={minWidth100}>I already have an account</Button>
                    </Grid>
                  )
                }
                <Grid item xs={12}>
                  <Button variant="text" size="large" href='/course/ms-500/browse-questions' style={minWidth100}>Browse practice questions</Button>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div style={secondaryLanding}>
          <Container>
            <Grid container style={paddingBottom32px}>
              <Grid item>
                <Typography variant="h4" component="h2">What you'll learn</Typography>
              </Grid>
            </Grid>
            <Grid container rowSpacing={2}>
              <Grid item md={6} container className='margin12 flex'><Grid item xs={1}><Check color="success" fontSize="large" /></Grid><Grid item xs={11}><Typography variant="h5" component="h3">Everything you need to know to pass the MS-500: Microsoft 365 Security Administration.</Typography></Grid></Grid>
              <Grid item md={6} container className='margin12 flex'><Grid item xs={1}><Check color="success" fontSize="large" /></Grid><Grid item xs={11}><Typography variant="h5" component="h3">Creating and manaing admin roles including time-limited admin roles.</Typography></Grid></Grid>
              <Grid item md={6} container className='margin12 flex'><Grid item xs={1}><Check color="success" fontSize="large" /></Grid><Grid item xs={11}><Typography variant="h5" component="h3">Creating and managing conditional access policies.</Typography></Grid></Grid>
              <Grid item md={6} container className='margin12 flex'><Grid item xs={1}><Check color="success" fontSize="large" /></Grid><Grid item xs={11}><Typography variant="h5" component="h3">How to implement multi-factor authentication (MFA).</Typography></Grid></Grid>
              <Grid item md={6} container className='margin12 flex'><Grid item xs={1}><Check color="success" fontSize="large" /></Grid><Grid item xs={11}><Typography variant="h5" component="h3">Setup and manage self service password reset (SSPR).</Typography></Grid></Grid>
              <Grid item md={6} container className='margin12 flex'><Grid item xs={1}><Check color="success" fontSize="large" /></Grid><Grid item xs={11}><Typography variant="h5" component="h3">What's Microsoft Defender.</Typography></Grid></Grid>
              <Grid item md={6} container className='margin12 flex'><Grid item xs={1}><Check color="success" fontSize="large" /></Grid><Grid item xs={11}><Typography variant="h5" component="h3">Setup and manage Microsoft Defender for Identity.</Typography></Grid></Grid>
              <Grid item md={6} container className='margin12 flex'><Grid item xs={1}><Check color="success" fontSize="large" /></Grid><Grid item xs={11}><Typography variant="h5" component="h3">Protecting Windows 10 and other user devices using Microsoft Defender for Endpoint.</Typography></Grid></Grid>
              <Grid item md={6} container className='margin12 flex'><Grid item xs={1}><Check color="success" fontSize="large" /></Grid><Grid item xs={11}><Typography variant="h5" component="h3">Managing Microsoft Defender for Cloud Apps.</Typography></Grid></Grid>
              <Grid item md={6} container className='margin12 flex'><Grid item xs={1}><Check color="success" fontSize="large" /></Grid><Grid item xs={11}><Typography variant="h5" component="h3">How to classify data using labels.</Typography></Grid></Grid>
              <Grid item md={6} container className='margin12 flex'><Grid item xs={1}><Check color="success" fontSize="large" /></Grid><Grid item xs={11}><Typography variant="h5" component="h3">Managing data retention to conform to compliance.</Typography></Grid></Grid>
              <Grid item md={6} container className='margin12 flex'><Grid item xs={1}><Check color="success" fontSize="large" /></Grid><Grid item xs={11}><Typography variant="h5" component="h3">Preventing accidental and malicious data loss with DLP policies.</Typography></Grid></Grid>
              <Grid item md={6} container className='margin12 flex'><Grid item xs={1}><Check color="success" fontSize="large" /></Grid><Grid item xs={11}><Typography variant="h5" component="h3">AND MORE!</Typography></Grid></Grid>
            </Grid>
          </Container>
        </div>
        <Container style={margin100}>
          <Grid container>
            <Grid item style={paddingBottom32px}>
              <Typography variant="h4" component="h2">What you'll need to know before getting started</Typography>
            </Grid>
            <Grid item>
              <ul>
                <Typography variant="h5" component="h3"><li style={margin12px}>Basic knowledge of Windows 10 devices</li></Typography>
                <Typography variant="h5" component="h3"><li style={margin12px}>Basic understanding of Office 365</li></Typography>
                <Typography variant="h5" component="h3"><li style={margin12px}>Simple understanding of authorization and authentication</li></Typography>
                <Typography variant="h5" component="h3"><li style={margin12px}>Basic understanding of computer networking</li></Typography>
              </ul>
            </Grid>
          </Grid>
        </Container>
        <div>
          <div style={secondaryLanding} >
            <Container style={margin100}>
              <Grid container>
                <Grid item>
                  <Typography variant="h4" component="h2">Course content</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item>
                  <ContentsRead />
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </main>
    </Page>
  )
}

export default IndexPage
