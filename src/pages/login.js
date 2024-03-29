import {h} from 'preact'
import {useState} from 'preact/hooks'
import Page from '../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import signInWithEmailAndPassword from '../components/firebase/sign-in-with-email-and-password'
import Stack from '@mui/material/Stack'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')

  const submit = () => {
    signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const params = new URLSearchParams(location.search)
          const goto = params.get('goto')
          if (goto)
            window.location.href = goto
          else
            window.location.href = '/dashboard'
        })
        .catch((error) => {
          console.log(error.code)
          setErr(error.message)
        })
  }

  return (
    <Page title={'Log In'} description={'Sign in to receive free Microsoft 365 Security Administrator (MS-500) certificate training. Users are able to track their progress through the lessons, as well as, the tests.'} jsonLdType={'WebPage'} image={'/assets/microsoft365-security-administrator-associate-600x600.png'}>
      <main>
        <Container>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="h1" sx={{mt: 4, mb: 4}}>Sign in</Typography>
              <Box component="form">
                <Stack spacing={2}>
                  <TextField label="Email" variant="outlined" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  <TextField label="Password" variant="outlined" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                  { err === '' ? null :
                    <Alert severity="error">
                      {err}
                    </Alert>
                  }
                  <Button variant="contained" type="button" onClick={submit}>Log in</Button>
                  <Button variant="text" href='/sign-up'>Don't have an account? Sign up. It's free!</Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </Page>
  )
}

export default LoginPage
