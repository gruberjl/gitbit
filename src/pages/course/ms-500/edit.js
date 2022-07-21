import { h, Component } from "preact"
import { convertFromRaw } from 'draft-js'
import Page from '../../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import getAllDocs from '../../../components/firebase/get-all-docs'

class EditPage extends Component {
  constructor(props) {
    super(props)
    this.addDocs = this.addDocs.bind(this)

    const isBrowser = () => typeof window !== 'undefined'

    if (isBrowser()) {
      getAllDocs('Tests/MS-500/Questions').then(this.addDocs)
    }

    this.state = {
      docs: []
    }
  }

  addDocs(docs) {
    const newDocs = docs.map(doc => {
      doc.question = convertFromRaw(doc.question).getPlainText()
      return doc
    })

    this.setState({
      docs: newDocs
    })
  }

  render() {
    return (
      <Page title={'Microsoft 365 MS-500 practice test questions'} description={'Microsoft 365 MS-500 practice test questions edit page'}>
        <main>
          <Container>
            <Grid container>
              <Grid item xs={10}>
                <h1>Questions</h1>
              </Grid>
              <Grid item xs={2} className='text-end'>
                <Button href="/course/ms-500/question/edit">Add</Button>
              </Grid>
              </Grid>
              <Grid container>
              <Grid item>
                <TableContainer>
                  <Table striped bordered hover>
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Question</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.docs.map((doc, idx) => (
                        <TableRow key={idx}>
                          <TableCell>{doc.id}</TableCell>
                          <TableCell><Button variant="text" href={`/course/ms-500/question/edit/?docid=${doc.id}`}>{doc.question}</Button></TableCell>
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

export default EditPage
