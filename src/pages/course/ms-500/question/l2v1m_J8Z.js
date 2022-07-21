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
      question: {"references":{"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w"}}},"blocks":[{"inlineStyleRanges":[],"key":"5t3am","data":{},"entityRanges":[],"depth":0,"text":"All of them will match Rule2 because it is the most restrictive.","type":"unstyled"},{"entityRanges":[{"offset":0,"length":116,"key":0}],"inlineStyleRanges":[],"key":"eu9vf","depth":0,"data":{},"text":"https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w","type":"unstyled"}]},"id":"l2v1m_J8Z","answers":[{"isCorrectAnswer":false,"value":"External users will be able to open and read File1"},{"value":"Any user in your organization can open and read File2","isCorrectAnswer":false},{"isCorrectAnswer":false,"value":"External users will be able to open and read File3"}],"question":{"blocks":[{"text":"Your organization has a Microsoft 365 tenant with the primary domain of gitbit.org","type":"unstyled","key":"50gpj","depth":0,"entityRanges":[],"data":{},"inlineStyleRanges":[]},{"key":"260nn","depth":0,"data":{},"entityRanges":[],"type":"unstyled","text":"OneDrive contains the following files that are shared externally.","inlineStyleRanges":[]},{"depth":0,"key":"euhdj","text":" ","data":{},"type":"atomic","entityRanges":[{"key":0,"length":1,"offset":0}],"inlineStyleRanges":[]},{"depth":0,"type":"unstyled","key":"a6paf","data":{},"inlineStyleRanges":[],"text":"You create a data loss prevention (DLP) policy and apply it to OneDrive. You configure the DLP policy with the following rules","entityRanges":[]},{"key":"6vh9m","entityRanges":[],"depth":0,"inlineStyleRanges":[{"style":"BOLD","length":6,"offset":0}],"type":"unstyled","data":{},"text":"Rule 1:"},{"entityRanges":[],"text":"Applies when content is marked with Label1 and shared with people outside my organization","inlineStyleRanges":[],"key":"bgdm7","data":{},"depth":0,"type":"unordered-list-item"},{"key":"e369v","inlineStyleRanges":[],"text":"Restrict access by blocking people outside your organization.","type":"unordered-list-item","data":{},"depth":0,"entityRanges":[]},{"key":"7are6","data":{},"text":"Notify the user who shared or last modified the content.","entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"unordered-list-item"},{"inlineStyleRanges":[],"key":"df6nh","type":"unordered-list-item","text":"Allow overrides from Microsoft 365 services.","depth":0,"data":{},"entityRanges":[]},{"depth":0,"type":"unordered-list-item","data":{},"inlineStyleRanges":[],"entityRanges":[],"key":"av8gm","text":"Priority: 0"},{"text":"Rule2:","entityRanges":[],"data":{},"type":"unstyled","key":"og34","inlineStyleRanges":[{"style":"BOLD","length":5,"offset":0}],"depth":0},{"text":"Applies when content is marked with Label1 or Label2","data":{},"key":"cjeds","depth":0,"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":0,"length":42},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":42},{"length":42,"style":"fontsize-16","offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":42,"offset":0}],"type":"unordered-list-item","entityRanges":[]},{"text":"Block everyone from accessing the content excluding the owner and last modifier","key":"854sf","data":{},"entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"unordered-list-item"},{"depth":0,"entityRanges":[],"text":"Priority: 1","key":"3s1li","data":{},"type":"unordered-list-item","inlineStyleRanges":[]},{"entityRanges":[],"depth":0,"data":{},"key":"5ujn5","inlineStyleRanges":[{"style":"BOLD","length":5,"offset":0}],"text":"Rule3:","type":"unstyled"},{"type":"unordered-list-item","data":{},"key":"f2jcf","inlineStyleRanges":[],"depth":0,"text":"Applies when content is marked with Label2 and shared with people outside my organization","entityRanges":[]},{"text":"Restrict access by blocking people outside your organization. ","key":"4rk5n","depth":0,"entityRanges":[],"data":{"margin-left":"1.5em"},"type":"unordered-list-item","inlineStyleRanges":[{"length":61,"offset":0,"style":"color-rgb(33,37,41)"},{"style":"bgcolor-rgb(255,255,255)","offset":0,"length":61},{"length":61,"offset":0,"style":"fontsize-16"},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":61}]},{"inlineStyleRanges":[{"length":56,"offset":0,"style":"color-rgb(33,37,41)"},{"length":56,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"offset":0,"style":"fontsize-16","length":56},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":56}],"text":"Notify the user who shared or last modified the content. ","type":"unordered-list-item","key":"6lr8c","entityRanges":[],"depth":0,"data":{"margin-left":"1.5em"}},{"entityRanges":[],"type":"unordered-list-item","inlineStyleRanges":[{"length":44,"style":"color-rgb(33,37,41)","offset":0},{"length":44,"style":"bgcolor-rgb(255,255,255)","offset":0},{"style":"fontsize-16","length":44,"offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":44}],"depth":0,"text":"Allow overrides from Microsoft 365 services. ","data":{"margin-left":"1.5em"},"key":"7iado"},{"data":{},"text":"Priority: 2","inlineStyleRanges":[],"entityRanges":[],"key":"1mk1m","type":"unordered-list-item","depth":0},{"key":"4p8lg","entityRanges":[],"depth":0,"type":"unstyled","inlineStyleRanges":[],"text":"Check the box next to each true statement","data":{}}],"entityMap":{"0":{"data":{"src":"https://i.ibb.co/rMYDH1g/file-labels.png","width":"auto","height":"auto","alt":"Files and labels chart","alignment":"left"},"mutability":"MUTABLE","type":"IMAGE"}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionId: 'l2v1m_J8Z',
      questionIdx: '',
      questionHtml: `<p>Your organization has a Microsoft 365 tenant with the primary domain of gitbit.org</p>
<p>OneDrive contains the following files that are shared externally.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/rMYDH1g/file-labels.png" alt="Files and labels chart" style="height: auto;width: auto"/></div>
<p>You create a data loss prevention (DLP) policy and apply it to OneDrive. You configure the DLP policy with the following rules</p>
<p><strong>Rule 1</strong>:</p>
<ul>
<li>Applies when content is marked with Label1 and shared with people outside my organization</li>
<li>Restrict access by blocking people outside your organization.</li>
<li>Notify the user who shared or last modified the content.</li>
<li>Allow overrides from Microsoft 365 services.</li>
<li>Priority: 0</li>
</ul>
<p><strong>Rule2</strong>:</p>
<ul>
<li><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Applies when content is marked with Label1</span> or Label2</li>
<li>Block everyone from accessing the content excluding the owner and last modifier</li>
<li>Priority: 1</li>
</ul>
<p><strong>Rule3</strong>:</p>
<ul>
<li>Applies when content is marked with Label2 and shared with people outside my organization</li>
<li style="margin-left:1.5em;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Restrict access by blocking people outside your organization.</span>&nbsp;</li>
<li style="margin-left:1.5em;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Notify the user who shared or last modified the content.</span>&nbsp;</li>
<li style="margin-left:1.5em;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Allow overrides from Microsoft 365 services.</span>&nbsp;</li>
<li>Priority: 2</li>
</ul>
<p>Check the box next to each true statement</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant with the primary domain of gitbit.org OneDrive contains the following files that are shared externally. You create a data loss prevention (DLP) policy and apply it to OneDrive. You configure the DLP policy with the following rules Rule 1: Applies when content is marked with Label1 and shared with people outside my organization Restrict access by blocking people outside your organization. Notify the user who shared or last modified the content. Allow overrides from Microsoft 365 services. Priority: 0 Rule2: Applies when content is marked with Label1 or Label2 Block everyone from accessing the content excluding the owner and last modifier Priority: 1 Rule3: Applies when content is marked with Label2 and shared with people outside my organization Restrict access by blocking people outside your organization. Notify the user who shared or last modified the content. Allow overrides from Microsoft 365 services. Priority: 2 Check the box next to each true statement`,
      referencesHtml: `<p>All of them will match Rule2 because it is the most restrictive.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w" target="_blank">https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w</a></p>
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
        url: 'https://www.gitbit.org/course/ms-500/question/l2v1m_J8Z',
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
