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
      question: {id: 'CpYSMRiSf', references: {entityMap: {0: {mutability: 'MUTABLE', type: 'LINK', data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP'}}, 1: {type: 'LINK', mutability: 'MUTABLE', data: {url: 'https://docs.microsoft.com/en-us/cloud-app-security/file-filters', targetOption: '_blank'}}}, blocks: [{data: {}, key: 'f1nc0', depth: 0, type: 'unstyled', entityRanges: [], inlineStyleRanges: [], text: 'A filter of "File name contains File" will match every file that has the word "file" in the name so all three files will match.'}, {type: 'unstyled', inlineStyleRanges: [], text: 'https://www.gitbit.org/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP', depth: 0, key: 'fod9p', data: {}, entityRanges: [{length: 107, key: 0, offset: 0}]}, {key: '9gn3b', type: 'unstyled', data: {}, text: 'https://docs.microsoft.com/en-us/cloud-app-security/file-filters', inlineStyleRanges: [], entityRanges: [{key: 1, length: 64, offset: 0}], depth: 0}]}, answers: [{isCorrectAnswer: true, value: 'File1.docx'}, {value: 'ImportantFile2.docx', isCorrectAnswer: true}, {value: 'File_Important3.docx', isCorrectAnswer: true}], question: {blocks: [{entityRanges: [], key: 'alja5', text: 'One of your Microsoft 365 users stores the following files in Microsoft OneDrive.', data: {}, inlineStyleRanges: [], depth: 0, type: 'unstyled'}, {text: 'File1.docx', data: {}, entityRanges: [], type: 'unordered-list-item', key: '47kp0', inlineStyleRanges: [], depth: 0}, {type: 'unordered-list-item', depth: 0, data: {}, text: 'ImportantFile2.docx', inlineStyleRanges: [], entityRanges: [], key: '8ejcs'}, {text: 'File_Important3.docx', data: {}, type: 'unordered-list-item', entityRanges: [], key: '3fb8u', depth: 0, inlineStyleRanges: []}, {depth: 0, inlineStyleRanges: [], key: 'fjqmq', type: 'unstyled', text: 'Your Microsoft 365 tenant has a Microsoft Cloud App Security file policy that has the filter shown below.', entityRanges: [], data: {}}, {inlineStyleRanges: [], key: '4qgqa', entityRanges: [{key: 0, length: 1, offset: 0}], type: 'atomic', text: ' ', depth: 0, data: {}}, {data: {}, key: 'c6ujm', inlineStyleRanges: [{offset: 0, style: 'color-rgb(80,80,80)', length: 117}, {style: 'bgcolor-rgb(255,255,255)', offset: 0, length: 117}, {length: 117, style: 'fontsize-16', offset: 0}, {length: 117, style: 'fontfamily-Roboto Condensed", sans-serif', offset: 0}], entityRanges: [], text: 'Your manager asks you which files with the above policy apply. Check the box next to each file the policy will apply.', depth: 0, type: 'unstyled'}], entityMap: {0: {type: 'IMAGE', mutability: 'MUTABLE', data: {alignment: 'left', height: 'auto', alt: 'Cloud App Security File Filter', width: 'auto', src: 'https://i.ibb.co/r2286TH/File-Filter.png'}}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>One of your Microsoft 365 users stores the following files in Microsoft OneDrive.</p>
<ul>
<li>File1.docx</li>
<li>ImportantFile2.docx</li>
<li>File_Important3.docx</li>
</ul>
<p>Your Microsoft 365 tenant has a Microsoft Cloud App Security file policy that has the filter shown below.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/r2286TH/File-Filter.png" alt="Cloud App Security File Filter" style="height: auto;width: auto"/></div>
<p><span style="color: rgb(80,80,80);background-color: rgb(255,255,255);font-size: 16px;font-family: Roboto Condensed", sans-serif;">Your manager asks you which files with the above policy apply. Check the box next to each file the policy will apply.</span></p>
`,
      questionText: `One of your Microsoft 365 users stores the following files in Microsoft OneDrive. File1.docx ImportantFile2.docx File_Important3.docx Your Microsoft 365 tenant has a Microsoft Cloud App Security file policy that has the filter shown below. Your manager asks you which files with the above policy apply. Check the box next to each file the policy will apply.`,
      referencesHtml: `<p>A filter of "File name contains File" will match every file that has the word "file" in the name so all three files will match.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP" target="_blank">https://www.gitbit.org/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP</a></p>
<p><a href="https://docs.microsoft.com/en-us/cloud-app-security/file-filters" target="_blank">https://docs.microsoft.com/en-us/cloud-app-security/file-filters</a></p>
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
