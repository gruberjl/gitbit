import { h, Component } from "preact"
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
      test: {questions:[{answers:[]}]},
      question: {"question":{"blocks":[{"entityRanges":[],"type":"unstyled","data":{},"depth":0,"inlineStyleRanges":[],"key":"8ag66","text":"You have a Microsoft 365 tenant with Microsoft 365 E5 licenses. Your organization uses Intune and it's managed through the Microsoft Endpoint Manager admin center."},{"key":"3cv0k","inlineStyleRanges":[],"entityRanges":[],"text":"You've already configured the compliance policy settings as below.","type":"unstyled","data":{},"depth":0},{"depth":0,"inlineStyleRanges":[],"data":{},"entityRanges":[{"length":1,"offset":0,"key":0}],"type":"atomic","key":"fdqe7","text":" "},{"data":{},"depth":0,"key":"2spop","type":"unstyled","text":"On April 1, 2022, you create the device compliance policies shown below","entityRanges":[],"inlineStyleRanges":[]},{"text":" ","data":{},"depth":0,"type":"atomic","inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":1,"length":1}],"key":"65slj"},{"entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"unstyled","data":{},"text":"On April 5, 2022, users enroll the following Windows 10 devices in Intune.","key":"b31el"},{"data":{},"type":"atomic","inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":2,"length":1}],"key":"2annk","text":" ","depth":0},{"type":"unstyled","key":"7isct","entityRanges":[],"depth":0,"data":{},"text":"Check the boxes below if the statements are true.","inlineStyleRanges":[]}],"entityMap":{"0":{"data":{"height":"auto","alt":"Compliance policy default settings","width":"auto","alignment":"left","src":"https://i.ibb.co/7QprCW9/Compliance-policy-default-settings.png"},"mutability":"MUTABLE","type":"IMAGE"},"1":{"data":{"src":"https://i.ibb.co/Y7cX97M/compliance-policy-requirements.png","alignment":"left","height":"auto","width":"auto","alt":"Compliance policy requirement"},"mutability":"MUTABLE","type":"IMAGE"},"2":{"data":{"alt":"Compliance policy devices","alignment":"left","src":"https://i.ibb.co/X5ck0VC/compliance-policy-devices.png","height":"auto","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"}}},"id":"6ch3t7KY1","answers":[{"value":"On April 6, 2022, Device2 is flagged as compliant","isCorrectAnswer":true},{"isCorrectAnswer":true,"value":"On April 10, 2022, Device1 is flagged as compliant"},{"value":"On April 16, 2020, Device1 is flagged as compliant","isCorrectAnswer":false}],"references":{"blocks":[{"text":"On April 6, 2022, Device2 is flagged as compliant is true","entityRanges":[],"key":"atuk","inlineStyleRanges":[{"style":"BOLD","length":57,"offset":0}],"type":"unstyled","data":{},"depth":0},{"type":"unstyled","data":{},"key":"5utm","depth":0,"inlineStyleRanges":[],"entityRanges":[],"text":"Device2 is in Group2 so Policy2 applies."},{"depth":0,"entityRanges":[],"key":"fng6i","text":"Device2 is not compliant with Policy2, however, the device won't be marked as non-compliant until 10 days after the device was enrolled.","inlineStyleRanges":[],"type":"unstyled","data":{}},{"entityRanges":[],"data":{},"type":"unstyled","key":"gcor","depth":0,"text":"On April 10, 2022, Device1 is flagged as compliant is true","inlineStyleRanges":[{"style":"BOLD","offset":0,"length":58}]},{"text":"Device1 is in Group1 and Group2 so both Policy1 and Policy2 apply.","key":"eku7n","depth":0,"entityRanges":[],"inlineStyleRanges":[],"data":{},"type":"unstyled"},{"text":"Device1 is compliant with Policy1 but non-compliant with Policy2. However, the device won't be marked as non-compliant until 10 days after the device was enrolled.","entityRanges":[],"inlineStyleRanges":[],"depth":0,"data":{},"type":"unstyled","key":"ik9r"},{"entityRanges":[],"data":{},"type":"unstyled","depth":0,"text":"On April 16, 2020, Device1 is flagged as compliant is not true","key":"8ujou","inlineStyleRanges":[{"length":62,"style":"BOLD","offset":0}]},{"key":"cs208","type":"unstyled","depth":0,"inlineStyleRanges":[],"text":"Device1 is in Group1 and Group2 so both Policy1 and Policy2 apply.","entityRanges":[],"data":{}},{"data":{},"text":"Device1 is compliant with Policy1 but non-compliant with Policy2.","depth":0,"type":"unstyled","entityRanges":[],"key":"1d05a","inlineStyleRanges":[]},{"entityRanges":[],"inlineStyleRanges":[],"text":"March 16 is more than 10 days after the device was enrolled so it will now be marked as non-compliant by Policy2.","depth":0,"key":"ftmse","type":"unstyled","data":{}},{"type":"unstyled","key":"acqoh","entityRanges":[{"length":86,"offset":0,"key":0}],"data":{},"depth":0,"inlineStyleRanges":[],"text":"https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN"}],"entityMap":{"0":{"mutability":"MUTABLE","type":"LINK","data":{"url":"https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN","targetOption":"_blank"}}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You have a Microsoft 365 tenant with Microsoft 365 E5 licenses. Your organization uses Intune and it's managed through the Microsoft Endpoint Manager admin center.</p>
<p>You've already configured the compliance policy settings as below.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/7QprCW9/Compliance-policy-default-settings.png" alt="Compliance policy default settings" style="height: auto;width: auto"/></div>
<p>On April 1, 2022, you create the device compliance policies shown below</p>
<div style="text-align:left;"><img src="https://i.ibb.co/Y7cX97M/compliance-policy-requirements.png" alt="Compliance policy requirement" style="height: auto;width: auto"/></div>
<p>On April 5, 2022, users enroll the following Windows 10 devices in Intune.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/X5ck0VC/compliance-policy-devices.png" alt="Compliance policy devices" style="height: auto;width: auto"/></div>
<p>Check the boxes below if the statements are true.</p>
`,
      questionText: `You have a Microsoft 365 tenant with Microsoft 365 E5 licenses. Your organization uses Intune and it's managed through the Microsoft Endpoint Manager admin center. You've already configured the compliance policy settings as below. On April 1, 2022, you create the device compliance policies shown below On April 5, 2022, users enroll the following Windows 10 devices in Intune. Check the boxes below if the statements are true.`,
      referencesHtml: `<p><strong>On April 6, 2022, Device2 is flagged as compliant is true</strong></p>
<p>Device2 is in Group2 so Policy2 applies.</p>
<p>Device2 is not compliant with Policy2, however, the device won't be marked as non-compliant until 10 days after the device was enrolled.</p>
<p><strong>On April 10, 2022, Device1 is flagged as compliant is true</strong></p>
<p>Device1 is in Group1 and Group2 so both Policy1 and Policy2 apply.</p>
<p>Device1 is compliant with Policy1 but non-compliant with Policy2. However, the device won't be marked as non-compliant until 10 days after the device was enrolled.</p>
<p><strong>On April 16, 2020, Device1 is flagged as compliant is not true</strong></p>
<p>Device1 is in Group1 and Group2 so both Policy1 and Policy2 apply.</p>
<p>Device1 is compliant with Policy1 but non-compliant with Policy2.</p>
<p>March 16 is more than 10 days after the device was enrolled so it will now be marked as non-compliant by Policy2.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN" target="_blank">https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN</a></p>
`,
      answerShown: false,
      questionsShown: false,
      endExamShown: false
    }

    this.state.jsonLd = {
      datePublished: '9-8-2021',
      keywords: [
  			"Microsoft",
  			"Microsoft 365",
  			"Office 365",
        'MS-500',
        'Microsoft 365 Security Administration'
  		],
      mainEntity: {
        '@type': "Question",
        name: this.state.questionText.substring(0, 150),
        text: this.state.questionText,
        answerCount: this.state.question.answers ? this.state.question.answers.length : 0,
        dateCreated: "2021-09-08T16:52:31Z",
        author: {
          "@type": "Person",
          "name": "John Gruber",
          url: 'https://medium.com/@gruberjl'
        }
      }
    }

    if (this.state.question.answers) {
      this.state.jsonLd.mainEntity.acceptedAnswer = {
        "@type": "Answer",
        "text": this.state.question.answers ? this.state.question.answers.filter(answer => answer.isCorrectAnswer).map(a => a.value).join('; ') : 'None',
        url: `https://www.gitbit.org/course/ms-500/question/${this.state.question.id}`,
        author: {
          type: 'Person',
          name: 'John Gruber',
          url: 'https://medium.com/@gruberjl'
        },
        upvoteCount: 1,
        dateCreated: "2021-09-08T16:52:31Z"
      }
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

      if (this.state.testId) {
        getDoc(`users/${user.uid}/tests`, this.state.testId).then(test => {
          const questionIdx = test.questions.findIndex(question => question.id === this.state.question.id)
          const previousQuestionId = questionIdx > 0 ? test.questions[questionIdx-1].id : ''
          const nextQuestionId = test.questions.length-1 == questionIdx ? '' : test.questions[questionIdx+1].id

          this.setState({
            test,
            questionIdx: questionIdx,
            nextQuestionId: nextQuestionId,
            previousQuestionId: previousQuestionId
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
              <Header questionIdx={this.state.questionIdx} previousQuestionId={this.state.previousQuestionId} nextQuestionId={this.state.nextQuestionId} testId={this.state.testId} toggleEndExam={this.toggleEndExam}/>
              <Choice questionHtml={this.state.questionHtml} question={this.state.question} testQuestion={this.state.test.questions[this.state.questionIdx]} onTestQuestionChange={this.onTestQuestionChange} showAnswer={this.state.answerShown} />
              <Grid container>
                <Grid item xs={12}>
                  { this.state.answerShown ?
                    <div dangerouslySetInnerHTML={{__html: this.state.referencesHtml}}></div> :
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
