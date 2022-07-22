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
      question: {references: {blocks: [{data: {}, type: 'unstyled', text: 'The following admin roles are exempt from the group naming policy:', inlineStyleRanges: [], entityRanges: [], depth: 0, key: '8fq1t'}, {key: '1ukc', entityRanges: [], depth: 0, text: 'Global admin', data: {}, inlineStyleRanges: [], type: 'unordered-list-item'}, {depth: 0, entityRanges: [], key: '8lsf2', inlineStyleRanges: [], text: 'User account admin', data: {}, type: 'unordered-list-item'}, {inlineStyleRanges: [{length: 22, offset: 0, style: 'color-rgb(33,37,41)'}, {style: 'bgcolor-rgb(255,255,255)', length: 22, offset: 0}, {style: 'fontsize-16', length: 22, offset: 0}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 0, length: 22}], depth: 0, type: 'unordered-list-item', text: 'Partner Tier 1 Support', entityRanges: [], data: {'margin-left': '1.5em'}, key: 'co28m'}, {type: 'unordered-list-item', text: 'Partner Tier 2 Support', inlineStyleRanges: [{offset: 0, length: 22, style: 'color-rgb(33,37,41)'}, {style: 'bgcolor-rgb(255,255,255)', length: 22, offset: 0}, {length: 22, offset: 0, style: 'fontsize-16'}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 22, offset: 0}], data: {'margin-left': '1.5em'}, entityRanges: [], key: '9s2n4', depth: 0}, {type: 'unstyled', text: 'Therefore User1 and User2 don\'t need to follow the group naming policies', data: {}, entityRanges: [], inlineStyleRanges: [], key: '3em5e', depth: 0}, {key: '7ilk2', text: 'Reference:', type: 'unstyled', depth: 0, data: {}, entityRanges: [], inlineStyleRanges: []}, {entityRanges: [{length: 95, offset: 0, key: 0}], data: {}, key: '3jdj9', inlineStyleRanges: [], depth: 0, text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV ', type: 'unstyled'}, {text: 'https://docs.microsoft.com/en-us/microsoft-365/solutions/groups-naming-policy?view=o365-worldwide', inlineStyleRanges: [], data: {}, depth: 0, type: 'unstyled', entityRanges: [{key: 1, offset: 0, length: 97}], key: '65oq6'}], entityMap: {0: {type: 'LINK', mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV'}}, 1: {type: 'LINK', mutability: 'MUTABLE', data: {url: 'https://docs.microsoft.com/en-us/microsoft-365/solutions/groups-naming-policy?view=o365-worldwide', targetOption: '_blank'}}}}, id: 'mJBFDIVrJ', question: {entityMap: {0: {type: 'IMAGE', data: {width: 'auto', alt: 'Users and Roles', height: 'auto', alignment: 'left', src: 'https://i.ibb.co/fGL2dQn/Users-and-roles2.png'}, mutability: 'MUTABLE'}}, blocks: [{entityRanges: [], inlineStyleRanges: [], text: 'You have an Azure AD tenant named GitBit.org that contains the following users.', type: 'unstyled', depth: 0, data: {}, key: '8f8r7'}, {data: {}, text: ' ', type: 'atomic', inlineStyleRanges: [], key: 'ddeu2', entityRanges: [{offset: 0, key: 0, length: 1}], depth: 0}, {type: 'unstyled', entityRanges: [], depth: 0, text: 'You add configure the following group naming policies:', data: {}, inlineStyleRanges: [], key: 'ei4n7'}, {inlineStyleRanges: [{offset: 9, length: 9, style: 'BOLD'}], text: 'The word internal is added to the list of blocked words.', entityRanges: [], depth: 0, type: 'unordered-list-item', key: 'bo0g0', data: {}}, {inlineStyleRanges: [{style: 'BOLD', length: 7, offset: 8}], key: 'd26uu', text: 'You set GitBit- as a prefix.', entityRanges: [], data: {}, depth: 0, type: 'unordered-list-item'}, {key: '6pac7', type: 'unstyled', entityRanges: [], depth: 0, inlineStyleRanges: [], text: 'Check the box next to each true statement below.', data: {}}]}, answers: [{value: 'User1 can create a distribution group named Distribution', isCorrectAnswer: true}, {isCorrectAnswer: true, value: 'User2 can create a distribution group named GitBit-Internal'}, {value: 'User2 can create a security group named InternalOnly', isCorrectAnswer: true}]},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You have an Azure AD tenant named GitBit.org that contains the following users.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/fGL2dQn/Users-and-roles2.png" alt="Users and Roles" style="height: auto;width: auto"/></div>
<p>You add configure the following group naming policies:</p>
<ul>
<li>The word <strong>internal </strong>is added to the list of blocked words.</li>
<li>You set <strong>GitBit-</strong> as a prefix.</li>
</ul>
<p>Check the box next to each true statement below.</p>
`,
      questionText: `You have an Azure AD tenant named GitBit.org that contains the following users. You add configure the following group naming policies: The word internal is added to the list of blocked words. You set GitBit- as a prefix. Check the box next to each true statement below.`,
      referencesHtml: `<p>The following admin roles are exempt from the group naming policy:</p>
<ul>
<li>Global admin</li>
<li>User account admin</li>
<li style="margin-left:1.5em;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Partner Tier 1 Support</span></li>
<li style="margin-left:1.5em;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Partner Tier 2 Support</span></li>
</ul>
<p>Therefore User1 and User2 don't need to follow the group naming policies</p>
<p>Reference:</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV" target="_blank">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV</a>&nbsp;</p>
<p><a href="https://docs.microsoft.com/en-us/microsoft-365/solutions/groups-naming-policy?view=o365-worldwide" target="_blank">https://docs.microsoft.com/en-us/microsoft-365/solutions/groups-naming-policy?view=o365-worldwide</a></p>
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
