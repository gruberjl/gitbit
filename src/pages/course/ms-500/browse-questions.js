import {h, Component} from 'preact'
import Page from '../../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import {onAuthStateChanged} from '../../../components/firebase/on-auth-state-changed'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import questions from '../../../data/questions'

const isBrowser = () => typeof window !== 'undefined'

class BrowseQuestionsPage extends Component {
  constructor(props) {
    super(props)
    this.setUid = this.setUid.bind(this)
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
    }
  }

  render() {
    return (
      <Page title={'Microsoft 365 MS-500 practice test questions'} description={'Microsoft 365 MS-500 practice test questions edit page'}>
        <main>
          <Container>
            <Grid container>
              <Grid item xs={10}>
                <h1>Microsoft MS-500 Practice Questions</h1>
              </Grid>
              <Grid item xs={2} className='text-end'>
                { this.state.uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ?
                  <Button href="/course/ms-500/edit-question">New</Button> :
                  ''
                }
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        { this.state.uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ?
                          <TableCell>Edit</TableCell> :
                          ''
                        }
                        <TableCell>Question</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {questions.map((doc, idx) => (
                        <TableRow key={idx}>
                          { this.state.uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ?
                            <TableCell><Button variant="text" href={`/course/ms-500/edit-question?docid=${doc.id}`}>Edit</Button></TableCell > :
                            ''
                          }
                          <TableCell><Button variant="text" href={`/course/ms-500/question/${doc.id}`}>{doc.question}</Button></TableCell >
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Container>
        </main>
      </Page>
    )
  }
}

export default BrowseQuestionsPage
