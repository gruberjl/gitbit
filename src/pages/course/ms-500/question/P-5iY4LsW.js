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
      question: {"answers":[{"isCorrectAnswer":false,"value":"An alert will be created if User2 downloads 50 files in 30 seconds from the Montreal office."},{"value":"An alert will be created if User2 downloads one file per second for two minutes from the Seattle office.","isCorrectAnswer":true},{"isCorrectAnswer":false,"value":"An alert will be created if User1 downloads 40 files in 10 seconds from the New York office."}],"question":{"entityMap":{"0":{"data":{"src":"https://i.ibb.co/MDcKN4R/location-chart.png","height":"auto","alignment":"left","alt":"Location chart","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"1":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"left","src":"https://i.ibb.co/cw2YC3W/users-chart.png","alt":"Users chart","width":"auto","height":"auto"}},"2":{"mutability":"MUTABLE","type":"IMAGE","data":{"src":"https://i.ibb.co/cQNvDmf/policy-filter.png","height":"auto","alignment":"left","width":"auto","alt":"Policy Filter"}},"3":{"data":{"alignment":"left","height":"auto","alt":"Policy Alert","width":"auto","src":"https://i.ibb.co/yXBMZm7/Policy-Alert.png"},"mutability":"MUTABLE","type":"IMAGE"}},"blocks":[{"type":"unstyled","key":"8vprs","entityRanges":[],"text":"Your organization has a Microsoft 365 tenant.","depth":0,"data":{},"inlineStyleRanges":[]},{"entityRanges":[],"type":"unstyled","depth":0,"data":{},"inlineStyleRanges":[],"text":"The organization has the offices shown below.","key":"a3ln6"},{"inlineStyleRanges":[],"data":{},"text":" ","depth":0,"key":"1eeo1","type":"atomic","entityRanges":[{"key":0,"length":1,"offset":0}]},{"depth":0,"key":"1r9kv","text":"The Microsoft 365 tenant has the following users.","inlineStyleRanges":[],"entityRanges":[],"data":{},"type":"unstyled"},{"entityRanges":[{"length":1,"key":1,"offset":0}],"depth":0,"inlineStyleRanges":[],"data":{},"key":"27nqr","text":" ","type":"atomic"},{"type":"unstyled","key":"5nibv","data":{},"depth":0,"text":"Your tenant has the following Microsoft Cloud App Security policy.","entityRanges":[],"inlineStyleRanges":[{"offset":0,"style":"color-rgb(80,80,80)","length":66},{"style":"bgcolor-rgb(255,255,255)","length":66,"offset":0},{"style":"fontsize-16","length":66,"offset":0},{"length":66,"offset":0,"style":"fontfamily-Roboto Condensed\", sans-serif"}]},{"depth":0,"key":"fbe54","entityRanges":[{"offset":0,"key":2,"length":1}],"inlineStyleRanges":[],"data":{},"text":" ","type":"atomic"},{"inlineStyleRanges":[],"text":"","data":{},"entityRanges":[],"type":"unstyled","key":"bjtno","depth":0},{"text":" ","inlineStyleRanges":[],"data":{},"key":"4qpph","type":"atomic","entityRanges":[{"key":3,"offset":0,"length":1}],"depth":0},{"data":{},"type":"unstyled","inlineStyleRanges":[],"depth":0,"entityRanges":[],"key":"38sdi","text":"Check the box next to each true statement."}]},"references":{"blocks":[{"inlineStyleRanges":[],"data":{},"entityRanges":[],"key":"fqqbc","type":"unstyled","text":"Microsoft Defender for Cloud Apps reviews public IP addresses so Montreal is not covered. New York is also excluded by the IP address filter.","depth":0},{"depth":0,"text":"https://www.gitbit.org/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP","type":"unstyled","entityRanges":[{"key":0,"length":107,"offset":0}],"data":{},"key":"5jjp4","inlineStyleRanges":[]}],"entityMap":{"0":{"type":"LINK","data":{"url":"https://www.gitbit.org/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP","targetOption":"_blank"},"mutability":"MUTABLE"}}},"id":"P-5iY4LsW"},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has a Microsoft 365 tenant.</p>
<p>The organization has the offices shown below.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/MDcKN4R/location-chart.png" alt="Location chart" style="height: auto;width: auto"/></div>
<p>The Microsoft 365 tenant has the following users.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/cw2YC3W/users-chart.png" alt="Users chart" style="height: auto;width: auto"/></div>
<p><span style="color: rgb(80,80,80);background-color: rgb(255,255,255);font-size: 16px;font-family: Roboto Condensed", sans-serif;">Your tenant has the following Microsoft Cloud App Security policy.</span></p>
<div style="text-align:left;"><img src="https://i.ibb.co/cQNvDmf/policy-filter.png" alt="Policy Filter" style="height: auto;width: auto"/></div>
<p></p>
<div style="text-align:left;"><img src="https://i.ibb.co/yXBMZm7/Policy-Alert.png" alt="Policy Alert" style="height: auto;width: auto"/></div>
<p>Check the box next to each true statement.</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant. The organization has the offices shown below. The Microsoft 365 tenant has the following users. Your tenant has the following Microsoft Cloud App Security policy. Check the box next to each true statement.`,
      referencesHtml: `<p>Microsoft Defender for Cloud Apps reviews public IP addresses so Montreal is not covered. New York is also excluded by the IP address filter.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP" target="_blank">https://www.gitbit.org/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP</a></p>
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
