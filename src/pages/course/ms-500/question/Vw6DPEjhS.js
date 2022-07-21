import { h, Component } from "preact"
import Page from '../../../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import saveDoc from '../../../../components/firebase/save-doc'
import {onAuthStateChanged} from '../../../../components/firebase'
import {getDoc} from '../../../../components/firebase'
import draftToHtml from 'draftjs-to-html'

const optionStyles = {
  marginTop: '14px',
  marginBottom: '14px',
  display: 'flex'
}

const checkboxStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const referencesStyle = {
  marginTop: '24px'
}

const bottomButtonStyle = {
  marginTop: '24px'
}

const isBrowser = () => typeof window !== 'undefined'

class EditQuestionPage extends Component {
  constructor(props) {
    super(props)
    this.setUid = this.setUid.bind(this)
    this.handleCorrectAnswerChange = this.handleCorrectAnswerChange.bind(this)
    this.toggleShowAnswer = this.toggleShowAnswer.bind(this)
    this.toggleShowQuestions = this.toggleShowQuestions.bind(this)
    this.gotoQuestion = this.gotoQuestion.bind(this)
    this.toggleEndExam = this.toggleEndExam.bind(this)
    this.endExam = this.endExam.bind(this)
    const params = new URLSearchParams(props.location.search)

    this.state = {
      questions: {},
      uid: '',
      testId: params.get('testId'),
      test: {},
      question: {"references":{"blocks":[{"inlineStyleRanges":[{"offset":0,"length":89,"style":"color-rgb(33,37,41)"},{"style":"bgcolor-rgb(255,255,255)","length":89,"offset":0},{"length":89,"offset":0,"style":"fontsize-16"},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":89}],"key":"77i1q","data":{},"text":"Device1 is an Android device that is not encrypted that's a member of GroupA and GroupC. DevicePolicy3 applies to Android devices that are members of GroupA so DevicePolicy3 is applied and requires the device to be encrypted. Since Device1 is not encrypted the device is not compliant.","depth":0,"entityRanges":[],"type":"unstyled"},{"inlineStyleRanges":[],"key":"bi4mp","text":"Device2 is a Windows 10 computer that's encrypted and a member of GroupB and GroupC. DevicePolicy2 has an exclusion of GroupC so Device2 doesn't have a compliance policy. As stated all devices that don't have a compliance policy are marked compliant so Device2 is marked compliant.","type":"unstyled","data":{},"entityRanges":[],"depth":0},{"data":{},"key":"aisi1","text":"Device6 is a Windows 10 computer that is not a member of any group therefore it has no compliance policy applied and is therefore marked as compliant.","entityRanges":[],"inlineStyleRanges":[],"type":"unstyled","depth":0},{"key":"4tanb","data":{},"text":"https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN ","depth":0,"entityRanges":[{"length":86,"key":0,"offset":0}],"type":"unstyled","inlineStyleRanges":[]}],"entityMap":{"0":{"mutability":"MUTABLE","type":"LINK","data":{"url":"https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN","targetOption":"_blank"}}}},"answers":[{"isCorrectAnswer":false,"value":"Device1"},{"isCorrectAnswer":true,"value":"Device2"},{"value":"Device6","isCorrectAnswer":true}],"question":{"blocks":[{"key":"6t3pm","data":{},"entityRanges":[],"inlineStyleRanges":[],"text":"The devices enrolled in Intune are configured as shown in the following table:","type":"unstyled","depth":0},{"inlineStyleRanges":[],"data":{},"depth":0,"key":"9tjo3","text":" ","entityRanges":[{"length":1,"key":0,"offset":0}],"type":"atomic"},{"key":"c0grv","entityRanges":[],"type":"unstyled","inlineStyleRanges":[],"text":"The device compliance policies in Intune are configured as shown in the following table:","data":{},"depth":0},{"entityRanges":[{"key":1,"length":1,"offset":0}],"depth":0,"data":{},"text":" ","key":"99it7","type":"atomic","inlineStyleRanges":[]},{"key":"56p0h","data":{},"text":"The device compliance policies have the assignments shown in the following table:","type":"unstyled","inlineStyleRanges":[],"depth":0,"entityRanges":[]},{"type":"atomic","data":{},"text":" ","entityRanges":[{"key":2,"length":1,"offset":0}],"inlineStyleRanges":[],"key":"62f10","depth":0},{"data":{},"inlineStyleRanges":[],"entityRanges":[],"type":"unstyled","depth":0,"key":"a7l90","text":"The Mark devices with no compliance policy are assigned as Compliant."},{"entityRanges":[],"text":"You are evaluating which devices are compliant with Intune.","key":"16cgt","inlineStyleRanges":[],"data":{},"type":"unstyled","depth":0},{"data":{},"inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"key":"evag6","depth":0,"text":"Check the box if the device is compliant"}],"entityMap":{"0":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"left","width":"auto","src":"https://i.ibb.co/rt25GT1/Devices.png","height":"auto","alt":"Devices Chart"}},"1":{"data":{"width":"auto","alignment":"left","src":"https://i.ibb.co/YZzVcsL/Device-policies.png","alt":"Device policies chart","height":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"2":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","src":"https://i.ibb.co/hXnkN3N/Device-policy-goups.png","width":"auto","alt":"Device policy group chart","alignment":"left"}}}},"id":"Vw6DPEjhS"},
      previousQuestionId: '',
      nextQuestionId: '',
      questionId: 'Vw6DPEjhS',
      questionIdx: '',
      questionHtml: `<p>The devices enrolled in Intune are configured as shown in the following table:</p>
<div style="text-align:left;"><img src="https://i.ibb.co/rt25GT1/Devices.png" alt="Devices Chart" style="height: auto;width: auto"/></div>
<p>The device compliance policies in Intune are configured as shown in the following table:</p>
<div style="text-align:left;"><img src="https://i.ibb.co/YZzVcsL/Device-policies.png" alt="Device policies chart" style="height: auto;width: auto"/></div>
<p>The device compliance policies have the assignments shown in the following table:</p>
<div style="text-align:left;"><img src="https://i.ibb.co/hXnkN3N/Device-policy-goups.png" alt="Device policy group chart" style="height: auto;width: auto"/></div>
<p>The Mark devices with no compliance policy are assigned as Compliant.</p>
<p>You are evaluating which devices are compliant with Intune.</p>
<p>Check the box if the device is compliant</p>
`,
      questionText: `The devices enrolled in Intune are configured as shown in the following table: The device compliance policies in Intune are configured as shown in the following table: The device compliance policies have the assignments shown in the following table: The Mark devices with no compliance policy are assigned as Compliant. You are evaluating which devices are compliant with Intune. Check the box if the device is compliant`,
      referencesHtml: `<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Device1 is an Android device that is not encrypted that's a member of GroupA and GroupC. </span>DevicePolicy3 applies to Android devices that are members of GroupA so DevicePolicy3 is applied and requires the device to be encrypted. Since Device1 is not encrypted the device is not compliant.</p>
<p>Device2 is a Windows 10 computer that's encrypted and a member of GroupB and GroupC. DevicePolicy2 has an exclusion of GroupC so Device2 doesn't have a compliance policy. As stated all devices that don't have a compliance policy are marked compliant so Device2 is marked compliant.</p>
<p>Device6 is a Windows 10 computer that is not a member of any group therefore it has no compliance policy applied and is therefore marked as compliant.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN" target="_blank">https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN</a>&nbsp;</p>
`,
      selectedAnswer: [],
      answerShown: false,
      questionsShown: false,
      endExamShown: false,
      endExamText: 'Are you sure you want to end the exam?'
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
        url: 'https://www.gitbit.org/course/ms-500/question/Vw6DPEjhS',
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
        getDoc(`users/${this.state.uid}/tests`, this.state.testId).then(test => {
          let previousQuestionId = ''
          let nextQuestionId = ''
          let currentQuestion
          let previousItm
          let foundQuestion = false
          let questionIdx
          let selectedAnswer = this.state.selectedAnswer

          test.questions.forEach((question, idx) => {
            if (foundQuestion) {
                nextQuestionId = question.id
                foundQuestion = false
            }

            if (this.state.questionId === question.id) {
              foundQuestion = true
              currentQuestion = question
              questionIdx = idx+1
              if (previousItm)
                previousQuestionId = previousItm.id

              if (currentQuestion.answered)
                selectedAnswer = currentQuestion.answered
            }

            previousItm = question
          })

          getDoc(`Tests/MS-500/Questions`, currentQuestion.id).then(question => {
            const questionHtml = draftToHtml(question.question)
            const referencesHtml = draftToHtml(question.references)
            this.setState({question, questionHtml, referencesHtml})
          })

          this.setState({
            test,
            questionIdx: questionIdx,
            nextQuestionId: nextQuestionId,
            previousQuestionId: previousQuestionId,
            selectedAnswer
          })
        })
      } else {
        getDoc(`Tests/MS-500/Questions`, this.state.questionId).then(question => {
          const questionHtml = draftToHtml(question.question)
          const referencesHtml = draftToHtml(question.references)
          this.setState({question, questionHtml, referencesHtml})
        })
      }
    }
  }

  handleCorrectAnswerChange(event) {
    const idx = event.target.dataset.index
    const target = event.target
    const selectedAnswer = [...this.state.selectedAnswer]

    if (target.checked) {
      selectedAnswer.push(idx)
    } else {
      const index = selectedAnswer.indexOf(`${idx}`)
      selectedAnswer.splice(index, 1)
    }

    this.setState({selectedAnswer})

    if (this.state.testId) {
      const test = Object.assign({}, this.state.test)

      test.questions = test.questions.map(question => {
        if (question.id === this.state.questionId) {
          question.answered = selectedAnswer
        }
        return question
      })

      saveDoc(`users/${this.state.uid}/tests`, test)

      this.setState({test})
    }
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
    let answers = this.state.question.answers ? this.state.question.answers : []

    answers = [...answers].map((answer, index) => {
      answer.isSelected = this.state.selectedAnswer.includes(`${index}`)
      answer.optionStyles = Object.assign({}, optionStyles)
      if (this.state.answerShown && answer.isCorrectAnswer) {
        answer.optionStyles.background = 'green'
      }

      return answer
    })

    return (
      <Page jsonLdType={'QAPage'} jsonLd={this.state.jsonLd} title={this.state.questionText} description={this.state.questionText}>
        <main>
          <div>
            <Container>
              <Grid container>
                <Grid item md={6} xs={12} lg={8}><h1>Question {this.state.questionIdx}</h1></Grid>
                <Grid item md={6} xs={12} lg={4} className='flex-space-between'> {
                  this.state.previousQuestionId !== '' ?
                    <Button href={`/course/ms-500/question/${this.state.previousQuestionId}?testId=${this.state.testId}`}>Previous Question</Button> :
                    ''
                  }
                  {
                    this.state.nextQuestionId !== '' ?
                      <Button href={`/course/ms-500/question/${this.state.nextQuestionId}?testId=${this.state.testId}`}>Next Question</Button> : (
                          this.state.testId ?
                            <Button onClick={this.toggleEndExam} color="secondary">End Exam</Button> :
                            ''
                      )

                  }
                </Grid>
              </Grid>
              <Grid container className="img-width-100">
                { this.state.questionHtml !== '' ?
                  <div dangerouslySetInnerHTML={{__html: this.state.questionHtml}}></div>
                  : ''
                }
              </Grid>
              <Grid container>
                {answers.map((answerState, index) => {
                  return (
                    <FormGroup style={answerState.optionStyles} key={index}>
                      <FormControlLabel control={<Checkbox name={"AnswerCheck" + index} id={"AnswerCheck" + index} data-index={index} inline style={checkboxStyles} checked={this.state.selectedAnswer.includes(`${index}`)} onChange={this.handleCorrectAnswerChange} />} label={answerState.value} />
                    </FormGroup>
                  )
                })}
              </Grid>
              <Grid container>
                <Grid item>
                  { this.state.answerShown ?
                    <div style={referencesStyle} dangerouslySetInnerHTML={{__html: this.state.referencesHtml}}></div> :
                    ''
                  }
                </Grid>
              </Grid>
              <Grid container className='align-right'><Grid item md={6} xs={12} lg={8}></Grid>
              <Grid item md={6} xs={12} lg={4} className='flex-space-between'> {
                  this.state.previousQuestionId !== '' ?
                    <Button href={`/course/ms-500/question/${this.state.previousQuestionId}?testId=${this.state.testId}`}>Previous Question</Button> :
                    ''
                  }
                {
                  this.state.nextQuestionId !== '' ?
                    <Button href={`/course/ms-500/question/${this.state.nextQuestionId}?testId=${this.state.testId}`}>Next Question</Button> :
                    this.state.testId ?
                      <Button onClick={this.toggleEndExam} color="secondary">End Exam</Button> :
                      ''
                  }
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Button onClick={this.toggleShowAnswer} style={bottomButtonStyle}>
                    { this.state.answerShown ?
                      <span>Hide Answer</span> :
                      <span>Show Answer</span>
                    }
                  </Button>
                </Grid>
                { this.state.testId ?
                  <Grid item xs={12} md={6} className='align-right'>
                    <Button onClick={this.toggleShowQuestions} style={bottomButtonStyle}>
                      { this.state.questionsShown ?
                        <span>Hide Question List</span> :
                        <span>Show Question List</span>
                      }
                    </Button>
                  </Grid> :
                  ''
                }
              </Grid>
              { this.state.testId ?
                <Grid container>
                  <Grid item className='align-right'>
                    <Button onClick={this.toggleEndExam} variant="warning" style={bottomButtonStyle}>End Exam</Button>
                  </Grid>
                </Grid> :
                ''
              }
            </Container>
          </div>

          <Dialog onClose={this.toggleShowQuestions} open={this.state.questionsShown}>
            <DialogTitle>Showing Test Questions</DialogTitle>
            <TableContainer>
              <Table striped bordered hover>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Answer</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { this.state.test && this.state.test.questions ? this.state.test.questions.map((question, idx) => (
                    <TableRow hover key={idx} onClick={this.gotoQuestion(question.id)} className="cursor-pointer">
                      <TableCell>{idx+1}</TableCell>
                      <TableCell>{question.answered}</TableCell>
                    </TableRow>
                  )) : '' }
                </TableBody>
              </Table>
            </TableContainer>
          </Dialog>

          <Dialog onClose={this.toggleEndExam} open={this.state.endExamShown}>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
              <DialogContentText>{ this.state.endExamText }</DialogContentText>
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
