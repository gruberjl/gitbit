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
      question: {"references":{"blocks":[{"key":"4e9b4","text":"From the Microsoft admin center > Users > grant the user the Service Support admin role","data":{},"type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"depth":0},{"type":"unstyled","entityRanges":[{"key":0,"length":95,"offset":0}],"depth":0,"text":"https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU ","key":"ev7ts","data":{},"inlineStyleRanges":[]},{"entityRanges":[{"offset":0,"length":136,"key":1}],"text":"https://www.iorad.com/player/1796220/MS-500---Ensure-that-a-user-named-Joe-Gruber-can-monitor-the-service-health-of-your-Microsoft-365-t ","type":"unstyled","inlineStyleRanges":[],"data":{},"key":"fersh","depth":0},{"data":{},"type":"unstyled","key":"3mvdh","entityRanges":[],"inlineStyleRanges":[],"text":"You need to assign the Service Administrator role to Joe Gruber:","depth":0},{"inlineStyleRanges":[],"entityRanges":[],"data":{},"text":"In the Microsoft 365 Admin Center, type Joe Gruber into the Search for users, groups, settings or tasks search box.","depth":0,"type":"ordered-list-item","key":"42o8h"},{"type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"text":"Select the Joe Gruber user account from the search results.","data":{},"key":"fnu33","entityRanges":[]},{"entityRanges":[],"key":"e9182","inlineStyleRanges":[],"data":{},"text":"In the Roles section of the user account properties, click Manage roles.","depth":0,"type":"ordered-list-item"},{"key":"eb8m3","entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"ordered-list-item","text":"Click the Admin center access radio box.","data":{}},{"depth":0,"entityRanges":[],"text":"click the Service support admin role.","type":"ordered-list-item","key":"eob91","data":{},"inlineStyleRanges":[]},{"text":"Click Save to save the changes.","type":"ordered-list-item","key":"ceo5r","inlineStyleRanges":[],"entityRanges":[],"data":{},"depth":0},{"type":"unstyled","inlineStyleRanges":[],"depth":0,"text":"Reference: https://docs.microsoft.com/en-us/office365/enterprise/view-service-health ","entityRanges":[{"offset":11,"length":73,"key":2}],"key":"95ko3","data":{}}],"entityMap":{"0":{"data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU"},"type":"LINK","mutability":"MUTABLE"},"1":{"data":{"targetOption":"_blank","url":"https://www.iorad.com/player/1796220/MS-500---Ensure-that-a-user-named-Joe-Gruber-can-monitor-the-service-health-of-your-Microsoft-365-t"},"mutability":"MUTABLE","type":"LINK"},"2":{"data":{"url":"https://docs.microsoft.com/en-us/office365/enterprise/view-service-health","targetOption":"_blank"},"mutability":"MUTABLE","type":"LINK"}}},"id":"26vLPgDay","answers":[{"isCorrectAnswer":false,"value":"Global Administrator role"},{"value":"Service Support Administrator role","isCorrectAnswer":true},{"value":"User Administrator role","isCorrectAnswer":false}],"question":{"blocks":[{"key":"ciu80","text":"Your organization has a Microsoft 365 tenant. You've hired a new employee named John Gruber. You manager has asked you to assign John a role in Microsoft 365. John is required to monitor the service health in Microsoft 365 and create service requests. Your organization adheres to the principle of least privilege.","entityRanges":[],"depth":0,"type":"unstyled","data":{},"inlineStyleRanges":[{"style":"color-rgb(80,80,80)","length":135,"offset":179},{"style":"bgcolor-rgb(255,255,255)","offset":179,"length":135},{"offset":179,"length":135,"style":"fontsize-16"},{"length":135,"style":"fontfamily-Roboto Condensed\", sans-serif","offset":179}]},{"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":28,"offset":0},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":28},{"length":28,"style":"fontsize-16","offset":0},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":28}],"type":"unstyled","entityRanges":[],"depth":0,"data":{},"text":"What role should you assign?","key":"fkb4t"}],"entityMap":{}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionId: '26vLPgDay',
      questionIdx: '',
      questionHtml: `<p>Your organization has a Microsoft 365 tenant. You've hired a new employee named John Gruber. You manager has asked you to assign John a role in Microsoft 365. John is required to <span style="color: rgb(80,80,80);background-color: rgb(255,255,255);font-size: 16px;font-family: Roboto Condensed", sans-serif;">monitor the service health in Microsoft 365 and create service requests. Your organization adheres to the principle of least privilege.</span></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">What role should you assign?</span></p>
`,
      questionText: `Your organization has a Microsoft 365 tenant. You've hired a new employee named John Gruber. You manager has asked you to assign John a role in Microsoft 365. John is required to monitor the service health in Microsoft 365 and create service requests. Your organization adheres to the principle of least privilege. What role should you assign?`,
      referencesHtml: `<p>From the Microsoft admin center &gt; Users &gt; grant the user the Service Support admin role</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU" target="_blank">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU</a>&nbsp;</p>
<p><a href="https://www.iorad.com/player/1796220/MS-500---Ensure-that-a-user-named-Joe-Gruber-can-monitor-the-service-health-of-your-Microsoft-365-t" target="_blank">https://www.iorad.com/player/1796220/MS-500---Ensure-that-a-user-named-Joe-Gruber-can-monitor-the-service-health-of-your-Microsoft-365-t</a>&nbsp;</p>
<p>You need to assign the Service Administrator role to Joe Gruber:</p>
<ol>
<li>In the Microsoft 365 Admin Center, type Joe Gruber into the Search for users, groups, settings or tasks search box.</li>
<li>Select the Joe Gruber user account from the search results.</li>
<li>In the Roles section of the user account properties, click Manage roles.</li>
<li>Click the Admin center access radio box.</li>
<li>click the Service support admin role.</li>
<li>Click Save to save the changes.</li>
</ol>
<p>Reference: <a href="https://docs.microsoft.com/en-us/office365/enterprise/view-service-health" target="_blank">https://docs.microsoft.com/en-us/office365/enterprise/view-service-health</a>&nbsp;</p>
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
        url: 'https://www.gitbit.org/course/ms-500/question/26vLPgDay',
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
