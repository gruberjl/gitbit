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
      question: {"answers":[{"value":"On VPN1: Configure and authentication provider.","isCorrectAnswer":false},{"value":"On VPN1: Configure an accounting provider.","isCorrectAnswer":true},{"value":"On VPN1: Create a connection request policy","isCorrectAnswer":false},{"value":"On VPN1: Create a RADIUS client.","isCorrectAnswer":false},{"value":"One Server1, enabled the following inbound port: 443","isCorrectAnswer":false},{"value":"One Server1, enabled the following inbound port: 1723","isCorrectAnswer":false},{"value":"One Server1, enabled the following inbound port: 1813","isCorrectAnswer":true},{"isCorrectAnswer":false,"value":"One Server1, enabled the following inbound port: 8080"},{"value":"One Server1, enabled the following inbound port: 8531","isCorrectAnswer":false}],"references":{"blocks":[{"data":{},"entityRanges":[],"text":"Three steps are required to set up VPN monitoring using Defender for Identity","depth":0,"key":"d1ihq","inlineStyleRanges":[],"type":"unstyled"},{"type":"unstyled","key":"1f1td","entityRanges":[],"data":{},"inlineStyleRanges":[],"depth":0,"text":"1. Configure RADIUS Accounting on VPN1"},{"text":"2. Enable VPN / RADIUS Accounts in Defender for Identity","data":{},"type":"unstyled","entityRanges":[],"key":"dl9j3","depth":0,"inlineStyleRanges":[]},{"inlineStyleRanges":[],"type":"unstyled","data":{},"entityRanges":[],"text":"3. Enable inbound port 1813 on Server1","key":"3va51","depth":0},{"data":{},"key":"3ulat","text":"https://www.gitbit.org/course/ms-500/learn/Whats-Microsoft-Defender-for-identity-Kye_yNLxA","inlineStyleRanges":[],"entityRanges":[{"key":0,"length":90,"offset":0}],"depth":0,"type":"unstyled"},{"entityRanges":[{"key":1,"length":87,"offset":0}],"data":{},"key":"9hq9g","text":"https://docs.microsoft.com/en-us/azure-advanced-threat-protection/install-atp-step6-vpn","type":"unstyled","inlineStyleRanges":[],"depth":0}],"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://www.gitbit.org/course/ms-500/learn/Whats-Microsoft-Defender-for-identity-Kye_yNLxA","targetOption":"_blank"}},"1":{"type":"LINK","data":{"url":"https://docs.microsoft.com/en-us/azure-advanced-threat-protection/install-atp-step6-vpn","targetOption":"_blank"},"mutability":"MUTABLE"}}},"question":{"blocks":[{"text":"Your network contains an Active Directory domain named GitBit.org. The domain contains a VPN server named VPN1 that runs Windows Server 2016 and has the Remote Access server role installed.","inlineStyleRanges":[],"key":"ctt8t","depth":0,"entityRanges":[],"data":{},"type":"unstyled"},{"key":"1quvv","data":{},"type":"unstyled","depth":0,"inlineStyleRanges":[],"text":"You have a Microsoft Azure subscription.","entityRanges":[]},{"entityRanges":[],"depth":0,"text":"You are deploying Microsoft Defender for Identity.","type":"unstyled","key":"am3ap","inlineStyleRanges":[],"data":{}},{"data":{},"entityRanges":[],"key":"798kf","depth":0,"type":"unstyled","inlineStyleRanges":[],"text":"You install the Microsoft Defender for Identity sensor on a server named Server1 that runs Windows Server 2016."},{"data":{},"type":"unstyled","inlineStyleRanges":[],"text":"You need to integrate the VPN and Defender for Identity.","entityRanges":[],"depth":0,"key":"df6j8"},{"data":{},"inlineStyleRanges":[],"text":"What should you do?","key":"3iban","depth":0,"type":"unstyled","entityRanges":[]}],"entityMap":{}},"id":"ne1Cl3a38"},
      previousQuestionId: '',
      nextQuestionId: '',
      questionId: 'ne1Cl3a38',
      questionIdx: '',
      questionHtml: `<p>Your network contains an Active Directory domain named GitBit.org. The domain contains a VPN server named VPN1 that runs Windows Server 2016 and has the Remote Access server role installed.</p>
<p>You have a Microsoft Azure subscription.</p>
<p>You are deploying Microsoft Defender for Identity.</p>
<p>You install the Microsoft Defender for Identity sensor on a server named Server1 that runs Windows Server 2016.</p>
<p>You need to integrate the VPN and Defender for Identity.</p>
<p>What should you do?</p>
`,
      questionText: `Your network contains an Active Directory domain named GitBit.org. The domain contains a VPN server named VPN1 that runs Windows Server 2016 and has the Remote Access server role installed. You have a Microsoft Azure subscription. You are deploying Microsoft Defender for Identity. You install the Microsoft Defender for Identity sensor on a server named Server1 that runs Windows Server 2016. You need to integrate the VPN and Defender for Identity. What should you do?`,
      referencesHtml: `<p>Three steps are required to set up VPN monitoring using Defender for Identity</p>
<p>1. Configure RADIUS Accounting on VPN1</p>
<p>2. Enable VPN / RADIUS Accounts in Defender for Identity</p>
<p>3. Enable inbound port 1813 on Server1</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Whats-Microsoft-Defender-for-identity-Kye_yNLxA" target="_blank">https://www.gitbit.org/course/ms-500/learn/Whats-Microsoft-Defender-for-identity-Kye_yNLxA</a></p>
<p><a href="https://docs.microsoft.com/en-us/azure-advanced-threat-protection/install-atp-step6-vpn" target="_blank">https://docs.microsoft.com/en-us/azure-advanced-threat-protection/install-atp-step6-vpn</a></p>
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
        url: 'https://www.gitbit.org/course/ms-500/question/ne1Cl3a38',
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
