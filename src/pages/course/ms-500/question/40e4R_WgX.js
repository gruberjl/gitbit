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
      question: {references: {entityMap: {0: {mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI'}, type: 'LINK'}, 1: {type: 'LINK', data: {url: 'https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off', targetOption: '_blank'}, mutability: 'MUTABLE'}}, blocks: [{entityRanges: [], data: {}, inlineStyleRanges: [], depth: 0, key: 'ahbov', type: 'unstyled', text: 'By default, OneDrive files can be shared with anyone so increasing the permission level doesn\'t make sense.'}, {type: 'unstyled', entityRanges: [], inlineStyleRanges: [], text: 'By default, the link settings are set to "Anyone with the link" so they should be set to Specific people.', key: '4thd2', data: {}, depth: 0}, {depth: 0, type: 'unstyled', key: '6sb7a', data: {}, text: 'By setting the OneDrive External sharing to the least permissive level users would only be able to share with users that are currently in the GitBit organization so your users wouldn\'t be able to share with Litware.', inlineStyleRanges: [], entityRanges: []}, {depth: 0, type: 'unstyled', data: {}, entityRanges: [], inlineStyleRanges: [], text: 'Decreasing the permission level for OneDrive External sharing would be correct so users cannot share with anyone.', key: 'b8vlr'}, {data: {}, key: '237vv', text: 'Modifying the device and sync settings wouldn\'t change who users can share too.', depth: 0, inlineStyleRanges: [], entityRanges: [], type: 'unstyled'}, {text: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI ', entityRanges: [{key: 0, length: 128, offset: 0}], inlineStyleRanges: [], depth: 0, data: {}, type: 'unstyled', key: '1ne1r'}, {inlineStyleRanges: [], type: 'unstyled', data: {}, entityRanges: [{key: 1, length: 75, offset: 0}], key: '2e97s', depth: 0, text: 'https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off '}]}, id: '40e4R_WgX', answers: [{value: 'Increase the permission level for OneDrive External sharing so your users can share with users at Uber Bikes.', isCorrectAnswer: false}, {value: 'Modify the Links settings.', isCorrectAnswer: true}, {value: 'Decrease the permissions for OneDrive External sharing so your users can only share with users at Uber Bikes.', isCorrectAnswer: true}, {isCorrectAnswer: false, value: 'Modify the Device access settings so your users cannot access OneDrive files unless they are on a managed device.'}, {isCorrectAnswer: false, value: 'Modify the Sync settings so your users can\'t sync their files to their devices.'}], question: {blocks: [{text: 'Your organization has a Microsoft 365 tenant with a primary domain of GitBit.org', depth: 0, key: '33fgs', entityRanges: [], data: {}, inlineStyleRanges: [], type: 'unstyled'}, {data: {}, text: 'Your organization works with a partner company named Uber Bikes. Your Microsoft OneDrive settings haven\'t been changed.', depth: 0, key: '9sl95', inlineStyleRanges: [], type: 'unstyled', entityRanges: []}, {data: {}, type: 'unstyled', inlineStyleRanges: [], depth: 0, entityRanges: [], text: 'You need to allow your users to share files from Microsoft OneDrive to specific users at Uber Bikes but prevent your users from sharing files with anyone else.', key: '26io4'}, {key: '8uovg', entityRanges: [], inlineStyleRanges: [], depth: 0, type: 'unstyled', data: {}, text: 'What settings should you change in the SharePoint Online admin center?'}], entityMap: {}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has a Microsoft 365 tenant with a primary domain of GitBit.org</p>
<p>Your organization works with a partner company named Uber Bikes. Your Microsoft OneDrive settings haven't been changed.</p>
<p>You need to allow your users to share files from Microsoft OneDrive to specific users at Uber Bikes but prevent your users from sharing files with anyone else.</p>
<p>What settings should you change in the SharePoint Online admin center?</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant with a primary domain of GitBit.org Your organization works with a partner company named Uber Bikes. Your Microsoft OneDrive settings haven't been changed. You need to allow your users to share files from Microsoft OneDrive to specific users at Uber Bikes but prevent your users from sharing files with anyone else. What settings should you change in the SharePoint Online admin center?`,
      referencesHtml: `<p>By default, OneDrive files can be shared with anyone so increasing the permission level doesn't make sense.</p>
<p>By default, the link settings are set to "Anyone with the link" so they should be set to Specific people.</p>
<p>By setting the OneDrive External sharing to the least permissive level users would only be able to share with users that are currently in the GitBit organization so your users wouldn't be able to share with Litware.</p>
<p>Decreasing the permission level for OneDrive External sharing would be correct so users cannot share with anyone.</p>
<p>Modifying the device and sync settings wouldn't change who users can share too.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI" target="_blank">https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI</a>&nbsp;</p>
<p><a href="https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off" target="_blank">https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off</a>&nbsp;</p>
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
