import {h, Component} from 'preact'
import Page from '../../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import {onAuthStateChanged} from '../../../components/firebase/on-auth-state-changed'
import testData from '../../../data/tests'
import course from '../../../data/course'
import Typography from '@mui/material/Typography'

const isBrowser = () => typeof window !== 'undefined'
const sortedTests = testData.sort((a, b) => course.contentOrder.indexOf(a.id) - course.contentOrder.indexOf(b.id))
const questions = []
sortedTests.forEach((test) => {
  Object.values(test.questions).forEach((question) => {
    questions.push(question)
  })
})

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
      <Page title={'Microsoft 365 MS-500 practice test questions'} description={'Microsoft 365 MS-500 practice test questions edit page'} jsonLdType={'WebPage'} image={'/assets/microsoft365-security-administrator-associate-600x600.png'}>
        <main>
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <h1>Microsoft MS-500 Practice Questions</h1>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              { this.state.uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ?
                <Grid item xs={1}>
                  <Typography variant="h6" gutterBottom component="h3">Edit</Typography>
                </Grid> :
                ''
              }
              <Grid item xs={this.state.uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ? 10 : 12}>
                <Typography variant="h6" gutterBottom component="h2">Question</Typography>
              </Grid>
              {sortedTests.map((test) => (
                Object.values(test.questions).map((question, questionIdx) => (
                  <Grid container item xs={12} key={questionIdx}>
                    { this.state.uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ?
                      <Grid item xs={1}>
                        <Button variant="text" href={`/course/edit-question?courseId=MS-500&testId=${test.id}&questionId=${question.id}`}>Edit</Button>
                      </Grid> :
                      ''
                    }
                    <Grid item xs={this.state.uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ? 10 : 12} sx={{borderTop: '1px solid rgb(224, 224, 224);'}}>
                      <Button variant="text" href={`/course/ms-500/test/${test.slug}/question/${question.slug}`}>{question.questionText}</Button>
                    </Grid>
                  </Grid>
                ))
              ))}
            </Grid>
          </Container>
        </main>
      </Page>
    )
  }
}

// <TableContainer>
//   <Table>
//     <TableHead>
//       <TableRow>
//         { this.state.uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ?
//           <TableCell>Edit</TableCell> :
//           ''
//         }
//         <TableCell>Question</TableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       {questions.map((doc, idx) => (
//         <TableRow key={idx}>
//           { this.state.uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ?
//             <TableCell><Button variant="text" href={`/course/ms-500/edit-question?docid=${doc.id}`}>Edit</Button></TableCell > :
//             ''
//           }
//           <TableCell><Button variant="text" href={`/course/ms-500/question/${doc.id}`}>{doc.question}</Button></TableCell >
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// </TableContainer>

export default BrowseQuestionsPage
