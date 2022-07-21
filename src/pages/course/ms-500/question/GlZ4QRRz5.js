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
      question: {"question":{"entityMap":{"0":{"type":"IMAGE","data":{"alt":"Group type chart","height":"auto","src":"https://i.ibb.co/ysp7Thd/group-type-chart2.png","width":"auto","alignment":"left"},"mutability":"MUTABLE"},"1":{"data":{"src":"https://i.ibb.co/VgcSY26/group-type-chart2.png","alignment":"left","height":"auto","width":"auto","alt":"Group type chart"},"mutability":"MUTABLE","type":"IMAGE"}},"blocks":[{"data":{},"key":"d19n8","type":"unstyled","depth":0,"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":106,"length":140},{"offset":106,"length":140,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","length":140,"offset":106},{"offset":106,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":140}],"entityRanges":[],"text":"Your organization has a Microsoft 365 tenant and an on-premises Active Directory domain named gitbit.org. Your on-premises domain is synced to Microsoft 365. Your on-premises domain has the following groups that are being synced to Microsoft 365."},{"data":{},"entityRanges":[{"key":0,"length":1,"offset":0}],"depth":0,"type":"atomic","inlineStyleRanges":[],"text":" ","key":"5r2qb"},{"data":{},"entityRanges":[],"depth":0,"inlineStyleRanges":[],"key":"9fvb7","text":"Your organization has the following cloud-only groups in Azure AD.","type":"unstyled"},{"depth":0,"key":"b3k1q","type":"atomic","inlineStyleRanges":[],"text":" ","entityRanges":[{"offset":0,"length":1,"key":1}],"data":{}},{"depth":0,"key":"1dj79","type":"unstyled","text":"You've been tasked with creating an information protection label named LabelA. You've created the label and now need to publish the label.","data":{},"inlineStyleRanges":[],"entityRanges":[]},{"text":"What groups can you publish LabelA to?","depth":0,"entityRanges":[],"key":"aoue8","type":"unstyled","inlineStyleRanges":[],"data":{}}]},"id":"GlZ4QRRz5","answers":[{"isCorrectAnswer":true,"value":"Group1"},{"value":"Group2","isCorrectAnswer":false},{"value":"Group3","isCorrectAnswer":false},{"isCorrectAnswer":true,"value":"Group4"},{"value":"Group11","isCorrectAnswer":false},{"isCorrectAnswer":false,"value":"Group12"},{"value":"Group13","isCorrectAnswer":true},{"value":"Group14","isCorrectAnswer":true}],"references":{"entityMap":{"0":{"type":"LINK","data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf"},"mutability":"MUTABLE"},"1":{"data":{"targetOption":"_blank","url":"http://localhost:8000/course/ms-500/question/edit/?docid=GSRw6_3Xv"},"type":"LINK","mutability":"MUTABLE"}},"blocks":[{"entityRanges":[{"offset":0,"key":0,"length":103}],"depth":0,"text":"https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf","data":{},"inlineStyleRanges":[],"type":"unstyled","key":"cg4bf"},{"inlineStyleRanges":[],"data":{},"depth":0,"text":"The groups must be mail-enabled.","type":"unstyled","entityRanges":[],"key":"esf1l"},{"text":"Labels can be published to any specific user or email-enabled group. The group can be a security group, distribution group, or Microsoft 365 group. The group can have assigned or dynamic membership.","entityRanges":[],"type":"unstyled","key":"604a5","data":{},"depth":0,"inlineStyleRanges":[]},{"entityRanges":[{"key":1,"offset":0,"length":96}],"data":{},"text":"https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide ","type":"unstyled","inlineStyleRanges":[],"key":"49c1","depth":0}]}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionId: 'GlZ4QRRz5',
      questionIdx: '',
      questionHtml: `<p>Your organization has a Microsoft 365 tenant and an on-premises Active Directory domain named gitbit.org. <span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Your on-premises domain is synced to Microsoft 365. Your on-premises domain has the following groups that are being synced to Microsoft 365.</span></p>
<div style="text-align:left;"><img src="https://i.ibb.co/ysp7Thd/group-type-chart2.png" alt="Group type chart" style="height: auto;width: auto"/></div>
<p>Your organization has the following cloud-only groups in Azure AD.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/VgcSY26/group-type-chart2.png" alt="Group type chart" style="height: auto;width: auto"/></div>
<p>You've been tasked with creating an information protection label named LabelA. You've created the label and now need to publish the label.</p>
<p>What groups can you publish LabelA to?</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant and an on-premises Active Directory domain named gitbit.org. Your on-premises domain is synced to Microsoft 365. Your on-premises domain has the following groups that are being synced to Microsoft 365. Your organization has the following cloud-only groups in Azure AD. You've been tasked with creating an information protection label named LabelA. You've created the label and now need to publish the label. What groups can you publish LabelA to?`,
      referencesHtml: `<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_blank">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>
<p>The groups must be mail-enabled.</p>
<p>Labels can be published to any specific user or email-enabled group. The group can be a security group, distribution group, or Microsoft 365 group. The group can have assigned or dynamic membership.</p>
<p><a href="http://localhost:8000/course/ms-500/question/edit/?docid=GSRw6_3Xv" target="_blank">https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide</a>&nbsp;</p>
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
        url: 'https://www.gitbit.org/course/ms-500/question/GlZ4QRRz5',
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
