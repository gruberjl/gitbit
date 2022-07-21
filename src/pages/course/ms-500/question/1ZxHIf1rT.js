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
      question: {"answers":[{"value":"In the Microsoft 365 admin center enable threat management.","isCorrectAnswer":false},{"isCorrectAnswer":false,"value":"In the Exchange Admin center create a mail flow rule to block phishing attempts"},{"value":"In Security & compliance admin center > Threat Management > Policy > Anti-phishing. Enable the settings.","isCorrectAnswer":true}],"references":{"blocks":[{"entityRanges":[{"key":0,"offset":0,"length":91}],"inlineStyleRanges":[],"depth":0,"text":"https://www.iorad.com/player/1797326/MS-500---You-need-to-protect-against-phishing-attacks-","data":{},"key":"42jki","type":"unstyled"},{"entityRanges":[],"key":"aj23h","data":{},"inlineStyleRanges":[],"type":"ordered-list-item","text":"Open the Security & Compliance Admin center","depth":0},{"inlineStyleRanges":[],"depth":0,"entityRanges":[],"key":"8i7t1","text":"Click Threat Management > Policy > Anti-Phishing > Default policy","type":"ordered-list-item","data":{}},{"type":"ordered-list-item","text":"Click Edit impersonation policy","key":"1g8r0","data":{},"entityRanges":[],"depth":0,"inlineStyleRanges":[]},{"key":"3t9je","text":"Go to Add domains to protect.","depth":0,"inlineStyleRanges":[],"type":"ordered-list-item","entityRanges":[],"data":{}},{"data":{},"text":"Enable Automatically include the domains I own","inlineStyleRanges":[],"entityRanges":[],"key":"6u4eq","depth":0,"type":"ordered-list-item"},{"data":{},"key":"7dag8","text":"Go to actions","type":"ordered-list-item","entityRanges":[],"inlineStyleRanges":[],"depth":0},{"data":{},"key":"d694b","depth":0,"inlineStyleRanges":[],"entityRanges":[],"text":"Click Don't apply any action and set to Quarantine the message","type":"ordered-list-item"},{"key":"c4vv5","type":"ordered-list-item","inlineStyleRanges":[],"depth":0,"data":{},"entityRanges":[],"text":"Go to Mailbox Intelligence"},{"entityRanges":[],"text":"Click Enable mailbox intelligence-based impersonation protection.","inlineStyleRanges":[],"key":"17lmp","depth":0,"data":{},"type":"ordered-list-item"},{"entityRanges":[],"data":{},"depth":0,"text":"Click If email is sent by an impersonated user. Set to Quarantine the message.","inlineStyleRanges":[],"key":"c2c11","type":"ordered-list-item"},{"inlineStyleRanges":[],"depth":0,"text":"Save","data":{},"type":"ordered-list-item","key":"egrsb","entityRanges":[]},{"depth":0,"key":"egh8a","data":{},"inlineStyleRanges":[],"entityRanges":[{"length":94,"key":1,"offset":0}],"text":"https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT ","type":"unstyled"},{"depth":0,"entityRanges":[{"length":146,"offset":0,"key":2}],"key":"8jkc1","inlineStyleRanges":[],"text":"https://support.office.com/en-us/article/protect-against-phishing-attempts-in-microsoft-365-86c425e1-1686-430a-9151-f7176cce4f2c#ID0EAABAAA=Try_it ","data":{},"type":"unstyled"},{"depth":0,"text":"https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/set-up-anti-phishing-policies?view=o365-worldwide#example-anti-phishing-policy-to- protect-a-user-and-a-domain ","inlineStyleRanges":[],"entityRanges":[{"key":3,"offset":0,"length":186}],"key":"9dqq3","data":{},"type":"unstyled"}],"entityMap":{"0":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","url":"https://www.iorad.com/player/1797326/MS-500---You-need-to-protect-against-phishing-attacks-"}},"1":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT"}},"2":{"mutability":"MUTABLE","type":"LINK","data":{"url":"https://support.office.com/en-us/article/protect-against-phishing-attempts-in-microsoft-365-86c425e1-1686-430a-9151-f7176cce4f2c#ID0EAABAAA=Try_it","targetOption":"_blank"}},"3":{"data":{"targetOption":"_blank","url":"https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/set-up-anti-phishing-policies?view=o365-worldwide#example-anti-phishing-policy-to-"},"type":"LINK","mutability":"MUTABLE"}}},"id":"1ZxHIf1rT","question":{"blocks":[{"inlineStyleRanges":[],"entityRanges":[],"data":{},"type":"unstyled","text":"You need to protect against phishing attacks. The solution must meet the following requirements:","depth":0,"key":"d3cc3"},{"entityRanges":[],"text":"Phishing email messages must be quarantined if the messages are sent from a spoofed domain.","inlineStyleRanges":[],"key":"93hsr","data":{},"type":"unordered-list-item","depth":0},{"data":{},"type":"unordered-list-item","key":"88pl3","inlineStyleRanges":[],"depth":0,"text":"As many phishing email messages as possible must be identified.","entityRanges":[]},{"depth":0,"inlineStyleRanges":[],"data":{},"entityRanges":[],"key":"3hl1m","type":"unstyled","text":"The solution must apply to the current SMTP domain names and any domain names added later."},{"depth":0,"text":"What steps should you take to complete the task?","data":{},"entityRanges":[],"key":"41bh9","type":"unstyled","inlineStyleRanges":[]}],"entityMap":{}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionId: '1ZxHIf1rT',
      questionIdx: '',
      questionHtml: `<p>You need to protect against phishing attacks. The solution must meet the following requirements:</p>
<ul>
<li>Phishing email messages must be quarantined if the messages are sent from a spoofed domain.</li>
<li>As many phishing email messages as possible must be identified.</li>
</ul>
<p>The solution must apply to the current SMTP domain names and any domain names added later.</p>
<p>What steps should you take to complete the task?</p>
`,
      questionText: `You need to protect against phishing attacks. The solution must meet the following requirements: Phishing email messages must be quarantined if the messages are sent from a spoofed domain. As many phishing email messages as possible must be identified. The solution must apply to the current SMTP domain names and any domain names added later. What steps should you take to complete the task?`,
      referencesHtml: `<p><a href="https://www.iorad.com/player/1797326/MS-500---You-need-to-protect-against-phishing-attacks-" target="_blank">https://www.iorad.com/player/1797326/MS-500---You-need-to-protect-against-phishing-attacks-</a></p>
<ol>
<li>Open the Security &amp; Compliance Admin center</li>
<li>Click Threat Management &gt; Policy &gt; Anti-Phishing &gt; Default policy</li>
<li>Click Edit impersonation policy</li>
<li>Go to Add domains to protect.</li>
<li>Enable Automatically include the domains I own</li>
<li>Go to actions</li>
<li>Click Don't apply any action and set to Quarantine the message</li>
<li>Go to Mailbox Intelligence</li>
<li>Click Enable mailbox intelligence-based impersonation protection.</li>
<li>Click If email is sent by an impersonated user. Set to Quarantine the message.</li>
<li>Save</li>
</ol>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT" target="_blank">https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT</a>&nbsp;</p>
<p><a href="https://support.office.com/en-us/article/protect-against-phishing-attempts-in-microsoft-365-86c425e1-1686-430a-9151-f7176cce4f2c#ID0EAABAAA=Try_it" target="_blank">https://support.office.com/en-us/article/protect-against-phishing-attempts-in-microsoft-365-86c425e1-1686-430a-9151-f7176cce4f2c#ID0EAABAAA=Try_it</a>&nbsp;</p>
<p><a href="https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/set-up-anti-phishing-policies?view=o365-worldwide#example-anti-phishing-policy-to-" target="_blank">https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/set-up-anti-phishing-policies?view=o365-worldwide#example-anti-phishing-policy-to- protect-a-user-and-a-domain</a>&nbsp;</p>
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
        url: 'https://www.gitbit.org/course/ms-500/question/1ZxHIf1rT',
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
