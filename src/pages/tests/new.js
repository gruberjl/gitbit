import { h, Component } from "preact"
import shortid from 'shortid'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import { onAuthStateChanged } from "../../components/firebase/on-auth-state-changed"
import saveDoc from '../../components/firebase/save-doc'
import questions from '../../data/questions'

const alignRightStyles = {
  textAlign: 'right'
}

const isBrowser = () => typeof window !== 'undefined'

class TestsNewPage extends Component {
  constructor(props) {
    super(props)
    this.handleNumOfQuestionsChange = this.handleNumOfQuestionsChange.bind(this)
    this.createTest = this.createTest.bind(this)
    this.setUid = this.setUid.bind(this)

    this.state = {
      numOfQuestions: 60,
      createTestClicked: false,
      uid: ''
    }
  }

  componentDidMount() {
    if (isBrowser()) {
      this.onAuthStateChangedListener = onAuthStateChanged(this.setUid)
    }
  }

  componentWillUnmount() {
    this.onAuthStateChangedListener()
  }

  setUid(user) {
    if (user) {
      this.setState({
        uid: user.uid
      })
    } else {
      window.location.href = '/login'
    }
  }

  handleNumOfQuestionsChange(event) {
    const newValue = event.target.value;
    this.setState({
      numOfQuestions:newValue
    })
  }

  createTest() {
    this.setState({
      createTestClicked:true
    })

    const numOfQuestions = this.state.numOfQuestions

    if (numOfQuestions > 0 && numOfQuestions <= questions.length) {
      const shuffled = questions.sort(() => 0.5 - Math.random());
      const questionsInTest = []
      const selected = shuffled.slice(0, numOfQuestions)

      for (let i = 0; i < selected.length; i++) {
        const testQuestion = {
          id: selected[i].id,
          answers:[]
        }
        questionsInTest.push(testQuestion)
      }

      const data = {
        questions: questionsInTest,
        id: shortid.generate(),
        course: 'MS-500'
      }

      saveDoc(`users/${this.state.uid}/tests`, data)

      window.location.href = `/course/ms-500/test?testid=${data.id}`
    }
  }

  render() {
    const uploadError = ''

    return (
      <Page title={'Create a practice test'} description={'Create a practice test to help you prepare for the Microsoft 365 MS-500 exam'}>
        <main>
          <div>
            <Container>
              <Grid container>
                <Grid item><h1>MS-500 Test</h1></Grid>
              </Grid>
              { uploadError === '' ? null :
                <Grid container>
                  <Alert severity="error">
                    <h5>Error Creating Test</h5>
                    <p>{uploadError}</p>
                  </Alert>
                </Grid>
              }
              <Grid container>
                <Grid item>
                  <TextField
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    label="Number of Questions"
                    defaultValue="60"
                    helperText={`Must be a number between 1-${questions.length}`}
                    variant="standard"
                    value={this.state.numOfQuestions}
                    onChange={this.handleNumOfQuestionsChange}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={10}></Grid>
                <Grid item xs={2} style={alignRightStyles}>
                  <Button variant="contained" onClick={this.createTest}>Create Test</Button>
                </Grid>
              </Grid>
              { this.state.createTestClicked === true && (this.state.numOfQuestions > questions.length || this.state.numOfQuestions < 1) ?
                <Grid container>
                  <Alert severity="error">
                    <h5>Error with number of questions</h5>
                    <p>Question count must be between 1-{questions.length}</p>
                  </Alert>
                </Grid>
                : null
              }
            </Container>
          </div>
        </main>
      </Page>
    )
  }
}

export default TestsNewPage
