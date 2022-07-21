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
      question: {"id":"dvaW43tNR","question":{"entityMap":{"0":{"data":{"alignment":"left","alt":"Folder File Chart","width":"auto","src":"https://i.ibb.co/3fcDZQY/Folder-File-Chart.png","height":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"1":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"left","alt":"Cloud App Security Settings","width":"auto","src":"https://www.examtopics.com/assets/media/exam-media/03686/0016100001.jpg","height":"auto"}},"2":{"data":{"alt":"Files upload times chart","alignment":"left","src":"https://i.ibb.co/k9YYtBy/file-upload-times-chart.png","width":"auto","height":"auto"},"mutability":"MUTABLE","type":"IMAGE"}},"blocks":[{"data":{},"depth":0,"inlineStyleRanges":[],"entityRanges":[],"text":"Your organization has a Microsoft 365 tenant with a SharePoint Online site named SiteA. SiteA has the following files/folders.","type":"unstyled","key":"7riqo"},{"data":{},"depth":0,"key":"dq7a1","type":"atomic","inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"text":" "},{"entityRanges":[],"inlineStyleRanges":[],"type":"unstyled","depth":0,"data":{},"key":"ba1kt","text":"At 9:00, you create a Microsoft Cloud App Security policy named PolicyA shown below."},{"text":" ","entityRanges":[{"offset":0,"length":1,"key":1}],"depth":0,"type":"atomic","key":"14nv1","inlineStyleRanges":[],"data":{}},{"text":"Then you upload the files to SiteA","type":"unstyled","key":"9eqph","data":{},"entityRanges":[],"inlineStyleRanges":[],"depth":0},{"type":"atomic","entityRanges":[{"length":1,"offset":0,"key":2}],"depth":0,"data":{},"inlineStyleRanges":[],"key":"61lv3","text":" "},{"type":"unstyled","inlineStyleRanges":[{"offset":26,"style":"color-rgb(80,80,80)","length":20},{"offset":26,"style":"bgcolor-rgb(255,255,255)","length":20},{"style":"fontsize-16","offset":26,"length":20},{"style":"fontfamily-Roboto Condensed\", sans-serif","offset":26,"length":20}],"entityRanges":[],"data":{},"text":"Mark the checkbox next to each true statement.","depth":0,"key":"dpuu0"}]},"references":{"entityMap":{"0":{"type":"LINK","data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP"},"mutability":"MUTABLE"},"1":{"mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://docs.microsoft.com/en-us/cloud-app-security/data-protection-policies"},"type":"LINK"}},"blocks":[{"inlineStyleRanges":[],"text":"File1 will trigger the alert because it is in Folder1. Then File4, File6, File7, and File8 will trigger the alerts. File 9 won't trigger the alert because the daily alert limit is set to 5.","key":"bmkuh","data":{},"depth":0,"entityRanges":[],"type":"unstyled"},{"text":"https://www.gitbit.org/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP","key":"elndc","type":"unstyled","entityRanges":[{"key":0,"length":107,"offset":0}],"inlineStyleRanges":[],"depth":0,"data":{}},{"entityRanges":[{"key":1,"length":76,"offset":0}],"data":{},"text":"https://docs.microsoft.com/en-us/cloud-app-security/data-protection-policies","key":"7erjo","depth":0,"inlineStyleRanges":[],"type":"unstyled"}]},"answers":[{"value":"File1 triggers an alert from Policy1","isCorrectAnswer":true},{"value":"File3 triggers an alert from Policy1","isCorrectAnswer":false},{"value":"File9 triggers an alert from Policy1","isCorrectAnswer":false}]},
      previousQuestionId: '',
      nextQuestionId: '',
      questionId: 'dvaW43tNR',
      questionIdx: '',
      questionHtml: `<p>Your organization has a Microsoft 365 tenant with a SharePoint Online site named SiteA. SiteA has the following files/folders.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/3fcDZQY/Folder-File-Chart.png" alt="Folder File Chart" style="height: auto;width: auto"/></div>
<p>At 9:00, you create a Microsoft Cloud App Security policy named PolicyA shown below.</p>
<div style="text-align:left;"><img src="https://www.examtopics.com/assets/media/exam-media/03686/0016100001.jpg" alt="Cloud App Security Settings" style="height: auto;width: auto"/></div>
<p>Then you upload the files to SiteA</p>
<div style="text-align:left;"><img src="https://i.ibb.co/k9YYtBy/file-upload-times-chart.png" alt="Files upload times chart" style="height: auto;width: auto"/></div>
<p>Mark the checkbox next to <span style="color: rgb(80,80,80);background-color: rgb(255,255,255);font-size: 16px;font-family: Roboto Condensed", sans-serif;">each true statement.</span></p>
`,
      questionText: `Your organization has a Microsoft 365 tenant with a SharePoint Online site named SiteA. SiteA has the following files/folders. At 9:00, you create a Microsoft Cloud App Security policy named PolicyA shown below. Then you upload the files to SiteA Mark the checkbox next to each true statement.`,
      referencesHtml: `<p>File1 will trigger the alert because it is in Folder1. Then File4, File6, File7, and File8 will trigger the alerts. File 9 won't trigger the alert because the daily alert limit is set to 5.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP" target="_blank">https://www.gitbit.org/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP</a></p>
<p><a href="https://docs.microsoft.com/en-us/cloud-app-security/data-protection-policies" target="_blank">https://docs.microsoft.com/en-us/cloud-app-security/data-protection-policies</a></p>
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
        url: 'https://www.gitbit.org/course/ms-500/question/dvaW43tNR',
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
