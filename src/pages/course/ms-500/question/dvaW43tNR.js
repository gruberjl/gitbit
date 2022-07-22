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
      question: {question: {blocks: [{type: 'unstyled', key: '7riqo', text: 'Your organization has a Microsoft 365 tenant with a SharePoint Online site named SiteA. SiteA has the following files/folders.', depth: 0, inlineStyleRanges: [], data: {}, entityRanges: []}, {depth: 0, key: 'dq7a1', entityRanges: [{length: 1, key: 0, offset: 0}], data: {}, text: ' ', type: 'atomic', inlineStyleRanges: []}, {entityRanges: [], depth: 0, inlineStyleRanges: [], type: 'unstyled', data: {}, text: 'At 9:00, you create a Microsoft Cloud App Security policy named PolicyA shown below.', key: 'ba1kt'}, {depth: 0, key: '14nv1', inlineStyleRanges: [], text: ' ', type: 'atomic', data: {}, entityRanges: [{length: 1, key: 1, offset: 0}]}, {text: 'Then you upload the files to SiteA', type: 'unstyled', entityRanges: [], key: '9eqph', data: {}, depth: 0, inlineStyleRanges: []}, {key: '61lv3', entityRanges: [{offset: 0, length: 1, key: 2}], depth: 0, type: 'atomic', inlineStyleRanges: [], text: ' ', data: {}}, {type: 'unstyled', text: 'Mark the checkbox next to each true statement.', data: {}, entityRanges: [], depth: 0, key: 'dpuu0', inlineStyleRanges: [{length: 20, offset: 26, style: 'color-rgb(80,80,80)'}, {offset: 26, style: 'bgcolor-rgb(255,255,255)', length: 20}, {style: 'fontsize-16', offset: 26, length: 20}, {length: 20, style: 'fontfamily-Roboto Condensed", sans-serif', offset: 26}]}], entityMap: {0: {data: {alt: 'Folder File Chart', height: 'auto', width: 'auto', alignment: 'left', src: 'https://i.ibb.co/3fcDZQY/Folder-File-Chart.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {mutability: 'MUTABLE', data: {src: 'https://www.examtopics.com/assets/media/exam-media/03686/0016100001.jpg', alignment: 'left', width: 'auto', height: 'auto', alt: 'Cloud App Security Settings'}, type: 'IMAGE'}, 2: {type: 'IMAGE', data: {src: 'https://i.ibb.co/k9YYtBy/file-upload-times-chart.png', alt: 'Files upload times chart', alignment: 'left', width: 'auto', height: 'auto'}, mutability: 'MUTABLE'}}}, references: {blocks: [{entityRanges: [], type: 'unstyled', key: 'bmkuh', depth: 0, data: {}, text: 'File1 will trigger the alert because it is in Folder1. Then File4, File6, File7, and File8 will trigger the alerts. File 9 won\'t trigger the alert because the daily alert limit is set to 5.', inlineStyleRanges: []}, {entityRanges: [{length: 107, key: 0, offset: 0}], text: 'https://www.gitbit.org/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP', key: 'elndc', data: {}, inlineStyleRanges: [], type: 'unstyled', depth: 0}, {inlineStyleRanges: [], text: 'https://docs.microsoft.com/en-us/cloud-app-security/data-protection-policies', data: {}, entityRanges: [{offset: 0, key: 1, length: 76}], depth: 0, type: 'unstyled', key: '7erjo'}], entityMap: {0: {type: 'LINK', mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP'}}, 1: {type: 'LINK', mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/cloud-app-security/data-protection-policies'}}}}, answers: [{isCorrectAnswer: true, value: 'File1 triggers an alert from Policy1'}, {isCorrectAnswer: false, value: 'File3 triggers an alert from Policy1'}, {value: 'File9 triggers an alert from Policy1', isCorrectAnswer: false}], id: 'dvaW43tNR'},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
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
