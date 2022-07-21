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
      question: {"question":{"blocks":[{"entityRanges":[],"depth":0,"data":{},"key":"8f8r7","inlineStyleRanges":[],"type":"unstyled","text":"You have an Azure AD tenant named GitBit.org that contains the following users."},{"text":" ","depth":0,"inlineStyleRanges":[],"entityRanges":[{"key":0,"offset":0,"length":1}],"key":"ddeu2","data":{},"type":"atomic"},{"key":"ei4n7","type":"unstyled","entityRanges":[],"depth":0,"inlineStyleRanges":[],"data":{},"text":"You add configure the following group naming policies:"},{"inlineStyleRanges":[{"style":"BOLD","length":9,"offset":9}],"entityRanges":[],"key":"bo0g0","depth":0,"type":"unordered-list-item","data":{},"text":"The word internal is added to the list of blocked words."},{"depth":0,"entityRanges":[],"key":"d26uu","data":{},"inlineStyleRanges":[{"offset":8,"length":7,"style":"BOLD"}],"type":"unordered-list-item","text":"You set GitBit- as a prefix."},{"key":"6pac7","data":{},"type":"unstyled","depth":0,"entityRanges":[],"text":"Check the box next to each true statement below.","inlineStyleRanges":[]}],"entityMap":{"0":{"mutability":"MUTABLE","data":{"width":"auto","height":"auto","src":"https://i.ibb.co/fGL2dQn/Users-and-roles2.png","alignment":"left","alt":"Users and Roles"},"type":"IMAGE"}}},"id":"mJBFDIVrJ","references":{"blocks":[{"inlineStyleRanges":[],"type":"unstyled","key":"8fq1t","text":"The following admin roles are exempt from the group naming policy:","entityRanges":[],"data":{},"depth":0},{"entityRanges":[],"key":"1ukc","depth":0,"inlineStyleRanges":[],"data":{},"type":"unordered-list-item","text":"Global admin"},{"depth":0,"data":{},"key":"8lsf2","inlineStyleRanges":[],"entityRanges":[],"type":"unordered-list-item","text":"User account admin"},{"type":"unordered-list-item","key":"co28m","text":"Partner Tier 1 Support","entityRanges":[],"depth":0,"inlineStyleRanges":[{"offset":0,"length":22,"style":"color-rgb(33,37,41)"},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":22},{"style":"fontsize-16","length":22,"offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":22,"offset":0}],"data":{"margin-left":"1.5em"}},{"text":"Partner Tier 2 Support","key":"9s2n4","entityRanges":[],"depth":0,"inlineStyleRanges":[{"length":22,"style":"color-rgb(33,37,41)","offset":0},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":22},{"offset":0,"style":"fontsize-16","length":22},{"length":22,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0}],"data":{"margin-left":"1.5em"},"type":"unordered-list-item"},{"type":"unstyled","depth":0,"data":{},"key":"3em5e","inlineStyleRanges":[],"entityRanges":[],"text":"Therefore User1 and User2 don't need to follow the group naming policies"},{"inlineStyleRanges":[],"text":"Reference:","depth":0,"type":"unstyled","data":{},"key":"7ilk2","entityRanges":[]},{"key":"3jdj9","data":{},"type":"unstyled","depth":0,"inlineStyleRanges":[],"text":"https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV ","entityRanges":[{"offset":0,"key":0,"length":95}]},{"inlineStyleRanges":[],"text":"https://docs.microsoft.com/en-us/microsoft-365/solutions/groups-naming-policy?view=o365-worldwide","type":"unstyled","key":"65oq6","data":{},"entityRanges":[{"key":1,"length":97,"offset":0}],"depth":0}],"entityMap":{"0":{"data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV"},"type":"LINK","mutability":"MUTABLE"},"1":{"type":"LINK","data":{"url":"https://docs.microsoft.com/en-us/microsoft-365/solutions/groups-naming-policy?view=o365-worldwide","targetOption":"_blank"},"mutability":"MUTABLE"}}},"answers":[{"isCorrectAnswer":true,"value":"User1 can create a distribution group named Distribution"},{"value":"User2 can create a distribution group named GitBit-Internal","isCorrectAnswer":true},{"isCorrectAnswer":true,"value":"User2 can create a security group named InternalOnly"}]},
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
