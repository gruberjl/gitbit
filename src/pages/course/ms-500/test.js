import {h, Component} from 'preact'
import Page from '../../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import {onAuthStateChanged} from '../../../components/firebase/on-auth-state-changed'
import {getDoc} from '../../../components/firebase/get-doc'

const isBrowser = () => typeof window !== 'undefined'

class TestPage extends Component {
  constructor(props) {
    super(props)
    this.setUid = this.setUid.bind(this)

    let params = new URLSearchParams()
    if (isBrowser())
      params = new URLSearchParams(location.search)

    this.state = {
      docs: [],
      testId: params.get('testid'),
      nextQuestionId: ''
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

      getDoc(`users/${user.uid}/tests`, this.state.testId).then((test) => {
        this.setState({
          test,
          nextQuestionId: test.questions[0].id
        })
      })
    } else
      window.location.href = '/login'
  }

  render() {
    return (
      <Page title={'Ready to begin your exam?'} description={'Microsoft 365 MS-500 practice test prep page'}>
        <main>
          <div>
            <Container>
              <Grid container>
                <Grid item>
                  <h1>MS-500 Test</h1>
                  <h2>Skills measured</h2>
                  <ul>
                    <li>Implement and manage identity and access (30-35%)</li>
                    <li>Implement and manage threat protection (20-25%)</li>
                    <li>Implement and manage information protection (15-20%)</li>
                    <li>Manage governance and compliance features in Microsoft 365 (25-30%)</li>
                  </ul>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item>
                  { this.state.nextQuestionId ?
                    <Button variant="contained" size="large" href={`/course/ms-500/question/${this.state.nextQuestionId}?testId=${this.state.testId}`}>Start Test</Button> :
                    <span>Please wait for the test to load</span>
                  }
                </Grid>
              </Grid>
            </Container>
          </div>
        </main>
      </Page>
    )
  }
}

export default TestPage
