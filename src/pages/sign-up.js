import { h } from "preact"
import { useState } from 'preact/hooks'
import Page from '../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import createUserWithEmailAndPassword from '../components/firebase/create-user-with-email-and-password'
import saveDoc from '../components/firebase/save-doc'

const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')

  const submit = () => {
    createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const data = {
          id: userCredential.user.uid,
          role: 'student',
          uid: userCredential.user.uid
        }
        saveDoc('courses/MS-500/users/', data)
        window.location.href = '/dashboard'
      })
      .catch((error) => {
        console.log(error.code)
        console.log(error.message)
        setErr(error.message)
      })
  }

  return (
    <Page title={'Sign Up'}>
      <main>
        <Container>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography component="h1" variant="h2" sx={{mt:4, mb:4}}>Sign up for free to start learning!</Typography>
              <Box component="form">
                <Stack spacing={2}>
                  <TextField label="Email" variant="outlined" type='email' value={email} onChange={e => setEmail(e.target.value)} helperText="We don't share your email." />
                  <TextField label="Password" variant="outlined" type='password' value={password} onChange={e => setPassword(e.target.value)} />
                  { err === '' ? null :
                    <Alert severity="error">
                      {err}
                    </Alert>
                  }

                  <Button variant="contained" type="button" onClick={submit}>
                    Submit
                  </Button>
                  <div>
                    <Button variant="text" href='/login'>Already have an account? Sign in</Button>
                  </div>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </Page>
  )
}

export default SignUpPage
