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
      question: {question: {entityMap: {}, blocks: [{depth: 0, key: '312gb', text: 'Security Requirements: GitBit identifies the following security requirements:', type: 'unstyled', entityRanges: [], inlineStyleRanges: [{offset: 0, length: 23, style: 'BOLD'}], data: {}}, {data: {}, type: 'unordered-list-item', depth: 0, key: 'c0t0v', text: 'Access to the Azure Active Directory admin center by the user administrators must be reviewed every seven days. If an administrator fails to respond to an access request within three days, access must be removed', entityRanges: [], inlineStyleRanges: []}, {data: {}, inlineStyleRanges: [], entityRanges: [], text: 'Users who manage Microsoft 365 workloads must only be allowed to perform administrative tasks for up to three hours at a time. Global administrators must be exempt from this requirement', key: '4kl8j', type: 'unordered-list-item', depth: 0}, {text: 'Users must be prevented from inviting external users to view company data. Only global administrators and a user named User1 must be able to send invitations', data: {}, inlineStyleRanges: [], key: '7n342', entityRanges: [], depth: 0, type: 'unordered-list-item'}, {key: '4v2gu', type: 'unordered-list-item', data: {}, inlineStyleRanges: [], entityRanges: [], depth: 0, text: 'Azure Advanced Threat Protection (ATP) must capture security group modifications for sensitive groups, such as Domain Admins in Active Directory'}, {inlineStyleRanges: [], data: {}, key: 'c5gnj', depth: 0, entityRanges: [], text: 'Workload administrators must use multi-factor authentication (MFA) when signing in from an anonymous or an unfamiliar location', type: 'unordered-list-item'}, {key: 'cmhvm', inlineStyleRanges: [], text: 'The location of the user administrators must be audited when the administrators authenticate to Azure AD', type: 'unordered-list-item', entityRanges: [], data: {}, depth: 0}, {entityRanges: [], text: 'Email messages that include attachments containing malware must be delivered without the attachment', depth: 0, data: {}, inlineStyleRanges: [], key: 'ad81j', type: 'unordered-list-item'}, {inlineStyleRanges: [], depth: 0, text: 'The principle of least privilege must be used whenever possible', type: 'unordered-list-item', data: {}, entityRanges: [], key: '3v1so'}, {type: 'unstyled', text: 'You plan to configure an access review to meet the security requirements for the workload administrators. You create an access review policy and specify the scope and a group.', entityRanges: [], inlineStyleRanges: [], data: {}, key: 'f6ml2', depth: 0}, {depth: 0, text: 'Which other settings should you configure? To answer, select the appropriate options in the answer area.', key: '8jjma', type: 'unstyled', data: {}, entityRanges: [], inlineStyleRanges: []}]}, answers: [{isCorrectAnswer: false, value: 'Set the frequency to One time'}, {value: 'Set the frequency to Weekly', isCorrectAnswer: true}, {value: 'Set the frequency to Monthly', isCorrectAnswer: false}, {value: 'To ensure that access is removed if an administrator fails to respond, configure the: Upon completion settings', isCorrectAnswer: true}, {value: 'To ensure that access is removed if an administrator fails to respond, configure the: Advanced settings', isCorrectAnswer: false}, {value: 'To ensure that access is removed if an administrator fails to respond, configure the: Programs', isCorrectAnswer: false}, {value: 'To ensure that access is removed if an administrator fails to respond, configure the: Reviewers', isCorrectAnswer: false}], references: {blocks: [{key: 'ao1ti', data: {}, entityRanges: [], type: 'unstyled', inlineStyleRanges: [], text: 'Setting the frequency to weekly allows you to review the roles every 7 days.', depth: 0}, {type: 'unstyled', key: 'a38rm', data: {}, inlineStyleRanges: [], text: 'You set the access to be removed under "Upon completion settings"', entityRanges: [], depth: 0}, {inlineStyleRanges: [], key: 'beg9g', text: 'https://www.gitbit.org/course/ms-500/learn/Automating-Access-Review-in-Microsoft-365-rK48f6iM2', data: {}, entityRanges: [{length: 94, key: 0, offset: 0}], depth: 0, type: 'unstyled'}], entityMap: {0: {mutability: 'MUTABLE', data: {url: 'https://www.gitbit.org/course/ms-500/learn/Automating-Access-Review-in-Microsoft-365-rK48f6iM2', targetOption: '_blank'}, type: 'LINK'}}}, id: 'HHipoVYNs'},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p><strong>Security Requirements: </strong>GitBit identifies the following security requirements:</p>
<ul>
<li>Access to the Azure Active Directory admin center by the user administrators must be reviewed every seven days. If an administrator fails to respond to an access request within three days, access must be removed</li>
<li>Users who manage Microsoft 365 workloads must only be allowed to perform administrative tasks for up to three hours at a time. Global administrators must be exempt from this requirement</li>
<li>Users must be prevented from inviting external users to view company data. Only global administrators and a user named User1 must be able to send invitations</li>
<li>Azure Advanced Threat Protection (ATP) must capture security group modifications for sensitive groups, such as Domain Admins in Active Directory</li>
<li>Workload administrators must use multi-factor authentication (MFA) when signing in from an anonymous or an unfamiliar location</li>
<li>The location of the user administrators must be audited when the administrators authenticate to Azure AD</li>
<li>Email messages that include attachments containing malware must be delivered without the attachment</li>
<li>The principle of least privilege must be used whenever possible</li>
</ul>
<p>You plan to configure an access review to meet the security requirements for the workload administrators. You create an access review policy and specify the scope and a group.</p>
<p>Which other settings should you configure? To answer, select the appropriate options in the answer area.</p>
`,
      questionText: `Security Requirements: GitBit identifies the following security requirements: Access to the Azure Active Directory admin center by the user administrators must be reviewed every seven days. If an administrator fails to respond to an access request within three days, access must be removed Users who manage Microsoft 365 workloads must only be allowed to perform administrative tasks for up to three hours at a time. Global administrators must be exempt from this requirement Users must be prevented from inviting external users to view company data. Only global administrators and a user named User1 must be able to send invitations Azure Advanced Threat Protection (ATP) must capture security group modifications for sensitive groups, such as Domain Admins in Active Directory Workload administrators must use multi-factor authentication (MFA) when signing in from an anonymous or an unfamiliar location The location of the user administrators must be audited when the administrators authenticate to Azure AD Email messages that include attachments containing malware must be delivered without the attachment The principle of least privilege must be used whenever possible You plan to configure an access review to meet the security requirements for the workload administrators. You create an access review policy and specify the scope and a group. Which other settings should you configure? To answer, select the appropriate options in the answer area.`,
      referencesHtml: `<p>Setting the frequency to weekly allows you to review the roles every 7 days.</p>
<p>You set the access to be removed under "Upon completion settings"</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Automating-Access-Review-in-Microsoft-365-rK48f6iM2" target="_blank">https://www.gitbit.org/course/ms-500/learn/Automating-Access-Review-in-Microsoft-365-rK48f6iM2</a></p>
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
      <Page jsonLdType={'QAPage'} jsonLd={this.state.jsonLd} title={this.state.questionText} description={this.state.questionText}>
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
