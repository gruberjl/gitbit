import {h, Component} from 'preact'
import Page from '../../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import {onAuthStateChanged} from '../../../components/firebase/on-auth-state-changed'
import questions from '../../../data/questions'
import Typography from '@mui/material/Typography'
import Check from '@mui/icons-material/Check'

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
            <Grid container spacing={2}>
              { this.state.uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ?
                <Grid item xs={1}>
                  <Typography variant="h6" gutterBottom component="h3">Edit</Typography>
                </Grid> :
                ''
              }
              { this.state.uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ?
                <Grid item xs={1}>
                  <Typography variant="h6" gutterBottom component="h3">canonical</Typography>
                </Grid> :
                ''
              }
              <Grid item xs={this.state.uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ? 10 : 12}>
                <Typography variant="h6" gutterBottom component="h2">Question</Typography>
              </Grid>
              {questions.map((doc, idx) => (
                <Grid container item xs={12} key={idx}>
                  { this.state.uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ?
                    <Grid item xs={1}>
                      <Button variant="text" href={`/course/ms-500/edit-question?docid=${doc.id}`}>Edit</Button>
                    </Grid> :
                    ''
                  }
                  { this.state.uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ?
                    <Grid item xs={1}>
                      { doc.canonical ?
                          <Check /> : ''

                      }
                    </Grid> :
                    ''
                  }
                  <Grid item xs={this.state.uid === 'bff94pwBjUP4qIb2Rbuy3l6Mhgg2' ? 10 : 12} sx={{borderTop: '1px solid rgb(224, 224, 224);'}}>
                    <Button variant="text" href={`/course/ms-500/question/${doc.id}`}>{doc.question}</Button>
                  </Grid>
                </Grid>
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
