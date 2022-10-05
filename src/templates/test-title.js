import {h, Component} from 'preact'
import Page from '../../../../components/page'
import {onAuthStateChanged} from '../../../../components/firebase/on-auth-state-changed'
import {getDoc} from '../../../../components/firebase/get-doc'
import saveDoc from '../../../../components/firebase/save-doc'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
const clone = require('clone')

const marginTop24Style = {
  marginTop: '24px'
}

const alignRight = {
  textAlign: 'right',
  marginTop: '24px'
}

const isBrowser = () => typeof window !== 'undefined'

class EditPage extends Component {
  constructor(props) {
    super(props)
    this.startTest = this.startTest.bind(this)
    this.setUid = this.setUid.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.eraseProgress = this.eraseProgress.bind(this)
    this.gotoLatestQuestion = this.gotoLatestQuestion.bind(this)
    this.getJsonLd = this.getJsonLd.bind(this)

    this.state = {
      uid: '',
      test: {TEST: true},
      showLoginModal: false,
      showRestartModal: false
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

      getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
        if (!userAcct.tests)
          userAcct.tests = {}

        this.setState({userAcct})
      })
    }
  }

  startTest() {
    if (this.state.uid === '' || !this.state.userAcct)
      this.setState({showLoginModal: true})
    else if (this.state.userAcct.tests[this.state.test.id])
      this.setState({showRestartModal: true})
    else
      window.location.href = `/course/ms-500/test/${this.state.test.slug}/question/${Object.values(this.state.test.questions)[0].slug}`
  }

  handleClose(modalCloseProp) {
    return () => {
      const close = {}
      close[modalCloseProp] = false
      this.setState(close)
    }
  }

  eraseProgress() {
    const userAcct = clone(this.state.userAcct)
    delete userAcct.tests[this.state.test.id]
    this.setState({userAcct})
    saveDoc('courses/MS-500/users', userAcct).then(() => {
      window.location.href = `/course/ms-500/test/${this.state.test.slug}/question/${Object.values(this.state.test.questions)[0].slug}`
    })
  }

  gotoLatestQuestion() {
    const questions = Object.values(this.state.test.questions)
    const test = this.state.userAcct.tests[this.state.test.id]
    let redirecting = false

    for (let i = 0; i < questions.length; i++) {
      const question = questions[i]
      if (!test[question.id] || !test[question.id].answers) {
        redirecting = true
        window.location.href = `/course/ms-500/test/${this.state.test.slug}/question/${question.slug}`
      }
    }

    if (!redirecting)
      window.location.href = `/course/ms-500/test/${this.state.test.slug}/question/${questions[0].slug}`
  }

  getJsonLd() {
    return {
      '@context': 'http://schema.org',
      '@type': 'FAQPage',
      assesses: this.state.test.title,
      educationalLevel: 'beginner',
      learningResourceType: 'Quiz',
      teaches: this.state.test.title,
      abstract: this.state.test.description,
      image: this.state.test.featuredImage,
      name: this.state.test.title,
      '@id': location.href,
      description: this.state.test.description,
      mainEntity: Object.values(this.state.test.questions).map((question) => {
        return {
          '@type': 'Question',
          name: question.questionText,
          acceptedAnswer: {
            '@type': 'Answer',
            text: question.answerText
          }
        }
      })
    }
  }

  render() {
    return (
      <Page title={this.state.test.title} description={this.state.test.description} jsonLd={this.getJsonLd()} jsonLdType="Quiz" image={this.state.test.featuredImage}>
        <main>
          <Container>
            <Grid container>
              <Grid item xs={10}>
                <Typography variant="h3" component="h1" style={marginTop24Style}>{this.state.test.title}</Typography>
              </Grid>
              <Grid item xs={2} style={alignRight}>
                <Button onClick={this.startTest}>Start test</Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" component="h2" style={marginTop24Style}>Questions for this test</Typography>
              </Grid>
              <Grid item xs={12}>
                <ol>
                  { Object.values(this.state.test.questions).map((question, idx) => (
                    <li key={idx}><Link href={`/course/ms-500/test/${this.state.test.slug}/question/${question.slug}`} underline="hover">{question.title}</Link></li>
                  ))}
                </ol>
              </Grid>
              <Grid item xs={12} style={alignRight}>
                <Button onClick={this.startTest}>Start test</Button>
              </Grid>
            </Grid>
          </Container>
          <Dialog open={this.state.showLoginModal} onClose={this.handleClose('showLoginModal')} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">Log in?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">Do you want to login to save your progress?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button href={`/login?goto=/course/ms-500/test/${this.state.test.slug}/question/${Object.values(this.state.test.questions)[0].slug}`}>Login</Button>
              <Button href={`/sign-up?goto=/course/ms-500/test/${this.state.test.slug}/question/${Object.values(this.state.test.questions)[0].slug}`}>Sign up</Button>
              <Button href={`/course/ms-500/test/${this.state.test.slug}/question/${Object.values(this.state.test.questions)[0].slug}`} autoFocus>No</Button>
            </DialogActions>
          </Dialog>

          <Dialog open={this.state.showRestartModal} onClose={this.handleClose('showRestartModal')} aria-labelledby="dialog-title" aria-describedby="dialog-description">
            <DialogTitle id="dialog-title">Restart test?</DialogTitle>
            <DialogContent>
              <DialogContentText id="dialog-description">Do you want to erase your progress and restart the test?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.eraseProgress}>Erase progress</Button>
              <Button onClick={this.gotoLatestQuestion}>Continue where I was</Button>
            </DialogActions>
          </Dialog>
        </main>
      </Page>
    )
  }
}

export default EditPage
