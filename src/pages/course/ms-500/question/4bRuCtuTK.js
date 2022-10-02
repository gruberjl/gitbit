import {h, Component} from 'preact'
import Page from '../../../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import saveDoc from '../../../../components/firebase/save-doc'
import {onAuthStateChanged} from '../../../../components/firebase/on-auth-state-changed'
import {getDoc} from '../../../../components/firebase/get-doc'
import Choice from '../../../../components/question/choice'
import Header from '../../../../components/question/header'
import Footer from '../../../../components/question/footer'
import universalStyles from '../../../../components/universal-styles'

const isBrowser = () => typeof window !== 'undefined'

class EditQuestionPage extends Component {
  constructor(props) {
    super(props)
    this.setUid = this.setUid.bind(this)
    this.toggleShowAnswer = this.toggleShowAnswer.bind(this)
    this.toggleShowQuestions = this.toggleShowQuestions.bind(this)
    this.gotoQuestion = this.gotoQuestion.bind(this)
    this.toggleEndExam = this.toggleEndExam.bind(this)
    this.endExam = this.endExam.bind(this)
    this.onTestQuestionChange = this.onTestQuestionChange.bind(this)

    let params = new URLSearchParams()
    if (isBrowser())
      params = new URLSearchParams(location.search)

    this.state = {
      uid: '',
      testId: params.get('testId'),
      test: {questions: [{answers: []}]},
      question: {"answers":[{"isCorrectAnswer":false,"value":"Compliance Manager Assessor"},{"isCorrectAnswer":true,"value":"Global Administrator"},{"isCorrectAnswer":false,"value":"Portal Admin"},{"isCorrectAnswer":false,"value":"Compliance Manager Administrator"}],"canonical":"https://www.gitbit.org/course/ms-500/test/control-permissions-and-access-through-admin-roles-j9ggabtua/question/what-role-case-assign-com-_a-p5dxmy","id":"4bRuCtuTK","question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"55r32","text":"You have a Microsoft 365 subscription that contains a user named User1.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"cdcn4","text":"You plan to use Compliance Manager.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"7dnsm","text":"You need to ensure that User1 can assign Compliance Manager roles to users. The solution must use the principle of least privilege.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"6ercr","text":"Which role should you assign to User1?","type":"unstyled"}],"entityMap":{}},"references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"52v6e","text":"Compliance Manager Assessor can Create assessments, implement improvement actions, and update test status for improvement actions but they can't assign roles.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"7d54g","text":"Portal admin isn't a role in Microsoft 365 or the compliance admin center.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"co4ct","text":"Compliance Manager administrators can manage template creation and modification but cannot assign roles.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"7iklp","text":"Global admin is the only role listed that can assign compliance manager roles.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":95,"offset":0}],"inlineStyleRanges":[],"key":"5d67o","text":"https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU ","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":1,"length":109,"offset":0}],"inlineStyleRanges":[],"key":"dq98i","text":"https://docs.microsoft.com/en-us/microsoft-365/compliance/working-with-compliance-manager?view=o365-worldwide ","type":"unstyled"}],"entityMap":{"0":{"data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU"},"mutability":"MUTABLE","type":"LINK"},"1":{"data":{"targetOption":"_blank","url":"https://docs.microsoft.com/en-us/microsoft-365/compliance/working-with-compliance-manager?view=o365-worldwide"},"mutability":"MUTABLE","type":"LINK"}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You have a Microsoft 365 subscription that contains a user named User1.</p>
<p>You plan to use Compliance Manager.</p>
<p>You need to ensure that User1 can assign Compliance Manager roles to users. The solution must use the principle of least privilege.</p>
<p>Which role should you assign to User1?</p>
`,
      questionText: `You have a Microsoft 365 subscription that contains a user named User1. You plan to use Compliance Manager. You need to ensure that User1 can assign Compliance Manager roles to users. The solution must use the principle of least privilege. Which role should you assign to User1?`,
      referencesHtml: `<p>Compliance Manager Assessor can Create assessments, implement improvement actions, and update test status for improvement actions but they can't assign roles.</p>
<p>Portal admin isn't a role in Microsoft 365 or the compliance admin center.</p>
<p>Compliance Manager administrators can manage template creation and modification but cannot assign roles.</p>
<p>Global admin is the only role listed that can assign compliance manager roles.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU" target="_blank">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU</a>&nbsp;</p>
<p><a href="https://docs.microsoft.com/en-us/microsoft-365/compliance/working-with-compliance-manager?view=o365-worldwide" target="_blank">https://docs.microsoft.com/en-us/microsoft-365/compliance/working-with-compliance-manager?view=o365-worldwide</a>&nbsp;</p>
`,
      answerShown: false,
      questionsShown: false,
      endExamShown: false
    }

    this.state.jsonLd = {
      datePublished: '9-8-2021',
      keywords: [
        'Microsoft',
        'Microsoft 365',
        'Office 365',
        'MS-500',
        'Microsoft 365 Security Administration'
      ],
      mainEntity: {
        '@type': 'Question',
        name: this.state.questionText.substring(0, 150),
        text: this.state.questionText,
        answerCount: this.state.question.answers ? this.state.question.answers.length : 0,
        dateCreated: '2021-09-08T16:52:31Z',
        author: {
          '@type': 'Person',
          name: 'John Gruber',
          url: 'https://medium.com/@gruberjl'
        }
      }
    }

    if (this.state.question.answers) {
      this.state.jsonLd.mainEntity.acceptedAnswer = {
        '@type': 'Answer',
        text: this.state.question.answers ? this.state.question.answers.filter((answer) => answer.isCorrectAnswer).map((a) => a.value).join('; ') : 'None',
        url: `https://www.gitbit.org/course/ms-500/question/${this.state.question.id}`,
        author: {
          type: 'Person',
          name: 'John Gruber',
          url: 'https://medium.com/@gruberjl'
        },
        upvoteCount: 1,
        dateCreated: '2021-09-08T16:52:31Z'
      }
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

      if (this.state.testId) {
        getDoc(`users/${user.uid}/tests`, this.state.testId).then((test) => {
          const questionIdx = test.questions.findIndex((question) => question.id === this.state.question.id)
          const previousQuestionId = questionIdx > 0 ? test.questions[questionIdx-1].id : ''
          const nextQuestionId = test.questions.length-1 == questionIdx ? '' : test.questions[questionIdx+1].id

          this.setState({
            test,
            questionIdx,
            nextQuestionId,
            previousQuestionId
          })
        })
      }
    }
  }

  onTestQuestionChange(testQuestion) {
    const test = JSON.parse(JSON.stringify(this.state.test))
    test.questions[this.state.questionIdx] = testQuestion
    this.setState({test})
    saveDoc(`users/${this.state.uid}/tests`, test)
  }

  toggleShowAnswer() {
    const answerShown = !this.state.answerShown
    this.setState({answerShown})
  }

  toggleShowQuestions() {
    const questionsShown = !this.state.questionsShown
    this.setState({questionsShown})
  }

  toggleEndExam() {
    const endExamShown = !this.state.endExamShown
    this.setState({endExamShown})
  }

  gotoQuestion(questionId) {
    return () => {
      window.location.href = `/course/ms-500/question/${questionId}?testId=${this.state.testId}`
    }
  }

  endExam() {
    const test = this.state.test
    test.isComplete = true

    saveDoc(`users/${this.state.uid}/tests`, test).then(() => {
      window.location.href = `/tests/summary?testId=${this.state.testId}`
    })
  }

  render() {
    return (
      <Page jsonLdType={'QAPage'} jsonLd={this.state.jsonLd} title={this.state.questionText} description={this.state.questionText} canonical={this.state.question.canonical}>
        <main>
          <style>{universalStyles}</style>
          <div>
            <Container>
              <Header questionIdx={this.state.questionIdx} previousQuestionId={this.state.previousQuestionId} nextQuestionId={this.state.nextQuestionId} testId={this.state.testId} toggleEndExam={this.toggleEndExam} />
              <Choice questionHtml={this.state.questionHtml} question={this.state.question} testQuestion={this.state.test.questions[this.state.questionIdx]} onTestQuestionChange={this.onTestQuestionChange} showAnswer={this.state.answerShown} />
              <Grid container>
                <Grid item xs={12}>
                  { this.state.answerShown ?
                    <div dangerouslySetInnerHTML={{__html: this.state.referencesHtml}} /> :
                    ''
                  }
                </Grid>
              </Grid>
              <Footer previousQuestionId={this.state.previousQuestionId} nextQuestionId={this.state.nextQuestionId} testId={this.state.testId} toggleEndExam={this.toggleEndExam} toggleShowAnswer={this.toggleShowAnswer} toggleQuestionList={this.toggleShowQuestions} />
            </Container>
          </div>

          <Dialog onClose={this.toggleShowQuestions} open={this.state.questionsShown}>
            <DialogTitle>Test Questions</DialogTitle>
            <TableContainer>
              <Table striped bordered hover>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Answered</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { this.state.test.questions.map((question, idx) => (
                    <TableRow hover key={idx} onClick={this.gotoQuestion(question.id)} className="cursor-pointer">
                      <TableCell>{idx+1}</TableCell>
                      <TableCell>{question.answers.length>0 ? 'Complete' : 'Not complete'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Dialog>

          <Dialog onClose={this.toggleEndExam} open={this.state.endExamShown}>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
              <DialogContentText>Are you sure you want to end the exam?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={this.endExam}>
                Yes
              </Button>
              <Button variant="outlined" onClick={this.toggleEndExam}>
                No
              </Button>
            </DialogActions>
          </Dialog>
        </main>
      </Page>
    )
  }
}

export default EditQuestionPage
