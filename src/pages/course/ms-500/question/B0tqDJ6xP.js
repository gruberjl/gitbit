import {h, Component} from 'preact'
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
      test: {questions: [{answers: []}]},
      question: {id: 'B0tqDJ6xP', references: {blocks: [{depth: 0, data: {}, inlineStyleRanges: [], key: 'alqe8', type: 'unstyled', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf ', entityRanges: [{length: 103, offset: 0, key: 0}]}, {type: 'unstyled', depth: 0, data: {}, text: 'https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide', key: 'b78bo', entityRanges: [{length: 96, offset: 0, key: 1}], inlineStyleRanges: []}, {key: '9u0k', data: {}, text: 'Only one sensitivity label will be applied to a document automatically. The higher the order number the higher the priority so Label2 will take precedence over Label1.', depth: 0, type: 'unstyled', inlineStyleRanges: [], entityRanges: []}, {data: {}, type: 'unstyled', inlineStyleRanges: [{length: 107, offset: 0, style: 'color-rgb(23,23,23)'}, {length: 107, style: 'bgcolor-rgb(255,255,255)', offset: 0}, {style: 'fontsize-16', length: 107, offset: 0}, {style: 'fontfamily-Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif', offset: 0, length: 107}], entityRanges: [], depth: 0, key: 'bvdfr', text: 'Since the first 2 documents contain Product1 & Product2 Label2 is applied because it has the highest order.'}, {depth: 0, inlineStyleRanges: [{offset: 0, length: 81, style: 'color-rgb(23,23,23)'}, {style: 'bgcolor-rgb(255,255,255)', offset: 0, length: 81}, {length: 81, style: 'fontsize-16', offset: 0}, {style: 'fontfamily-Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif', length: 81, offset: 0}], entityRanges: [], text: 'Since condition2 is case sensitive the third document does not receive the label.', key: '837ic', type: 'unstyled', data: {}}], entityMap: {0: {mutability: 'MUTABLE', type: 'LINK', data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}}, 1: {type: 'LINK', mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide'}}}}, question: {blocks: [{text: 'Your organization has the sensitive info type data classifications shown below.', entityRanges: [], key: 'arbvt', data: {}, depth: 0, inlineStyleRanges: [], type: 'unstyled'}, {data: {}, text: ' ', inlineStyleRanges: [], key: '8a52q', type: 'atomic', depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}]}, {entityRanges: [], inlineStyleRanges: [{style: 'color-rgb(33,37,41)', length: 25, offset: 0}, {length: 25, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {offset: 0, length: 25, style: 'fontsize-16'}, {length: 25, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 0}], type: 'unstyled', data: {}, key: 'culrr', depth: 0, text: 'Your organization has the Information Protection labels shown below'}, {text: ' ', entityRanges: [{length: 1, offset: 0, key: 1}], data: {}, type: 'atomic', depth: 0, key: '19tkh', inlineStyleRanges: []}, {inlineStyleRanges: [{length: 25, style: 'color-rgb(33,37,41)', offset: 0}, {style: 'bgcolor-rgb(255,255,255)', length: 25, offset: 0}, {style: 'fontsize-16', length: 25, offset: 0}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 0, length: 25}], type: 'unstyled', entityRanges: [], text: 'Your organization has the Information Protection label policies shown below', key: '71qem', depth: 0, data: {}}, {depth: 0, inlineStyleRanges: [], key: '9i63c', data: {}, text: ' ', entityRanges: [{key: 2, length: 1, offset: 0}], type: 'atomic'}, {type: 'unstyled', text: 'check the box next to each true statement.', depth: 0, entityRanges: [], inlineStyleRanges: [], data: {}, key: '3ebb3'}], entityMap: {0: {mutability: 'MUTABLE', type: 'IMAGE', data: {alignment: 'left', alt: 'Condition chart', src: 'https://i.ibb.co/Hz0XgJn/condition-chart.png', height: 'auto', width: 'auto'}}, 1: {data: {alignment: 'left', width: 'auto', height: 'auto', alt: 'Label Conditions', src: 'https://i.ibb.co/xYd5gCX/label-conditions.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {mutability: 'MUTABLE', data: {height: 'auto', alignment: 'left', src: 'https://i.ibb.co/H7SJhBG/policy-chart2.png', width: 'auto', alt: 'Policy Chart'}, type: 'IMAGE'}}}, answers: [{value: 'If User1 saves a Word document with "Product1 and Product2" in it, the document will be assigned Label1 automatically.', isCorrectAnswer: false}, {isCorrectAnswer: true, value: 'If User1 saves a Word document with "Product2 and Product1" in it, the document will be assigned Label2 automatically.'}, {isCorrectAnswer: false, value: 'If User1 saves a Word document with "product2" in it, the document will be assigned Label2 automatically.'}]},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has the sensitive info type data classifications shown below.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/Hz0XgJn/condition-chart.png" alt="Condition chart" style="height: auto;width: auto"/></div>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Your organization has the</span> Information Protection labels shown below</p>
<div style="text-align:left;"><img src="https://i.ibb.co/xYd5gCX/label-conditions.png" alt="Label Conditions" style="height: auto;width: auto"/></div>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Your organization has the</span> Information Protection label policies shown below</p>
<div style="text-align:left;"><img src="https://i.ibb.co/H7SJhBG/policy-chart2.png" alt="Policy Chart" style="height: auto;width: auto"/></div>
<p>check the box next to each true statement.</p>
`,
      questionText: `Your organization has the sensitive info type data classifications shown below. Your organization has the Information Protection labels shown below Your organization has the Information Protection label policies shown below check the box next to each true statement.`,
      referencesHtml: `<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_blank">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a>&nbsp;</p>
<p><a href="https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide" target="_blank">https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide</a></p>
<p>Only one sensitivity label will be applied to a document automatically. The higher the order number the higher the priority so Label2 will take precedence over Label1.</p>
<p><span style="color: rgb(23,23,23);background-color: rgb(255,255,255);font-size: 16px;font-family: Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif;">Since the first 2 documents contain Product1 &amp; Product2 Label2 is applied because it has the highest order.</span></p>
<p><span style="color: rgb(23,23,23);background-color: rgb(255,255,255);font-size: 16px;font-family: Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif;">Since condition2 is case sensitive the third document does not receive the label.</span></p>
`,
      answerShown: false,
      questionsShown: false,
      endExamShown: false
    }

    this.state.jsonLd = {
      datePublished: '9-8-2021',
      keywords: [
        'Microsoft',
        'Microsoft 365',
        'Office 365',
        'MS-500',
        'Microsoft 365 Security Administration'
      ],
      mainEntity: {
        '@type': 'Question',
        name: this.state.questionText.substring(0, 150),
        text: this.state.questionText,
        answerCount: this.state.question.answers ? this.state.question.answers.length : 0,
        dateCreated: '2021-09-08T16:52:31Z',
        author: {
          '@type': 'Person',
          name: 'John Gruber',
          url: 'https://medium.com/@gruberjl'
        }
      }
    }

    if (this.state.question.answers) {
      this.state.jsonLd.mainEntity.acceptedAnswer = {
        '@type': 'Answer',
        text: this.state.question.answers ? this.state.question.answers.filter((answer) => answer.isCorrectAnswer).map((a) => a.value).join('; ') : 'None',
        url: `https://www.gitbit.org/course/ms-500/question/${this.state.question.id}`,
        author: {
          type: 'Person',
          name: 'John Gruber',
          url: 'https://medium.com/@gruberjl'
        },
        upvoteCount: 1,
        dateCreated: '2021-09-08T16:52:31Z'
      }
    }
  }

  componentDidMount() {
    if (isBrowser())
      this.onAuthStateChangedListener = onAuthStateChanged(this.setUid)
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
        getDoc(`users/${user.uid}/tests`, this.state.testId).then((test) => {
          const questionIdx = test.questions.findIndex((question) => question.id === this.state.question.id)
          const previousQuestionId = questionIdx > 0 ? test.questions[questionIdx-1].id : ''
          const nextQuestionId = test.questions.length-1 == questionIdx ? '' : test.questions[questionIdx+1].id

          this.setState({
            test,
            questionIdx,
            nextQuestionId,
            previousQuestionId
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
              <Header questionIdx={this.state.questionIdx} previousQuestionId={this.state.previousQuestionId} nextQuestionId={this.state.nextQuestionId} testId={this.state.testId} toggleEndExam={this.toggleEndExam} />
              <Choice questionHtml={this.state.questionHtml} question={this.state.question} testQuestion={this.state.test.questions[this.state.questionIdx]} onTestQuestionChange={this.onTestQuestionChange} showAnswer={this.state.answerShown} />
              <Grid container>
                <Grid item xs={12}>
                  { this.state.answerShown ?
                    <div dangerouslySetInnerHTML={{__html: this.state.referencesHtml}} /> :
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
