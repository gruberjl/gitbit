import {h, Component} from 'preact'
import Page from '../../../../../../components/page'
import {onAuthStateChanged} from '../../../../../../components/firebase/on-auth-state-changed'
import {getDoc} from '../../../../../../components/firebase/get-doc'
import saveDoc from '../../../../../../components/firebase/save-doc'
import Header from '../../../../../../components/test-question/header'
import Footer from '../../../../../../components/test-question/footer'
import Choice from '../../../../../../components/test-question/choice'
import HotArea from '../../../../../../components/test-question/hot-area'
import BuildList from '../../../../../../components/test-question/build-list'
import DragDrop from '../../../../../../components/test-question/drag-drop'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
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
import debounce from 'debounce'
import Snackbar from '@mui/material/Snackbar'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
const clone = require('clone')

const marginTop24Style = {
  marginTop: '24px'
}

const alignRight = {
  textAlign: 'right',
  marginTop: '24px'
}

const isBrowser = () => typeof window !== 'undefined'

class EditPage extends Component {
  constructor(props) {
    super(props)
    this.setUid = this.setUid.bind(this)
    this.toggleEndExam = this.toggleEndExam.bind(this)
    this.toggleShowAnswer = this.toggleShowAnswer.bind(this)
    this.toggleQuestionList = this.toggleQuestionList.bind(this)
    this.gotoQuestion = this.gotoQuestion.bind(this)
    this.setAnswer = this.setAnswer.bind(this)
    this.beforeUnload = this.beforeUnload.bind(this)
    this.save = this.save.bind(this)
    this.endExam = this.endExam.bind(this)
    this.navigateTo = this.navigateTo.bind(this)

    const isBrowser = () => typeof window !== 'undefined'

    this.state = {
      uid: '',
      unsavedChanges: false,
      alert: '',
      answerShown: false,
      showQuestionList: false,
      question: {"answerOptions":{"5vjlp_zg_":{"answerHtml":"","answers":{"53xmpuyd1":{"id":"53xmpuyd1","text":"4"},"fdy3eqptb":{"id":"fdy3eqptb","text":"1"},"s2i55zn6y":{"id":"s2i55zn6y","text":"2"}},"id":"5vjlp_zg_","text":"1+1?"},"e0fkkyanr":{"answerHtml":"","answers":{"gnula41xc":{"id":"gnula41xc","text":"2"},"gtswslcbt":{"id":"gtswslcbt","text":"3"},"qgmvhchdd":{"id":"qgmvhchdd","text":"1"}},"id":"e0fkkyanr","text":"What's 1+2"}},"id":"2egqhjkom","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"902l","text":"This is my hot area question.","type":"unstyled"}],"entityMap":{}},"questionHtml":"<p>This is my hot area question.</p>\n","questionText":"This is my hot area question.","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"82edg","text":"Answers are 1+2=3 & 1+1=2","type":"unstyled"}],"entityMap":{}},"referencesHtml":"<p>Answers are 1+2=3 &amp; 1+1=2</p>\n","slug":"hot-area-3-2egqhjkom","title":"Hot area 3","type":"hot-area"},
      test: {"answers":{"2egqhjkom":{"5vjlp_zg_":{"53xmpuyd1":{"id":"53xmpuyd1","isCorrect":false},"fdy3eqptb":{"id":"fdy3eqptb","isCorrect":false},"id":"5vjlp_zg_","s2i55zn6y":{"id":"s2i55zn6y","isCorrect":true}},"e0fkkyanr":{"gnula41xc":{"id":"gnula41xc","isCorrect":false},"gtswslcbt":{"id":"gtswslcbt","isCorrect":true},"id":"e0fkkyanr","qgmvhchdd":{"id":"qgmvhchdd","isCorrect":false}}},"aktkstizt":{"efwb9hl3c":{"answerId":"jruifkk09","id":"efwb9hl3c"},"pd6a539va":{"answerId":"-j8imb47o","id":"pd6a539va"}},"lvam3s9vy":{"75fthwwax":{"id":"75fthwwax","idx":2},"ov_on3-no":{"id":"ov_on3-no","idx":1},"tygbxq-nb":{"id":"tygbxq-nb","idx":0}},"zqutjz7m0":{"1yeehmrdc":{"id":"1yeehmrdc","isCorrect":false},"a4atpbozc":{"id":"a4atpbozc","isCorrect":false},"bsquilii4":{"id":"bsquilii4","isCorrect":true},"rekj0j4ll":{"id":"rekj0j4ll","isCorrect":false}}},"datePublished":"2022/9/9","description":"Test your knowledge of Microsoft 365 PowerShell. Everything you see here could be on your Microsoft 365 security administrator (MS-500) test!","featuredImage":"https://i.ibb.co/4VQpFYg/Policies-and-rules.png","id":"32ubyzyen","images":["https://i.ibb.co/4VQpFYg/Policies-and-rules.png"],"publish":true,"questions":{"2egqhjkom":{"answerOptions":{"5vjlp_zg_":{"answerHtml":"","answers":{"53xmpuyd1":{"id":"53xmpuyd1","text":"4"},"fdy3eqptb":{"id":"fdy3eqptb","text":"1"},"s2i55zn6y":{"id":"s2i55zn6y","text":"2"}},"id":"5vjlp_zg_","text":"1+1?"},"e0fkkyanr":{"answerHtml":"","answers":{"gnula41xc":{"id":"gnula41xc","text":"2"},"gtswslcbt":{"id":"gtswslcbt","text":"3"},"qgmvhchdd":{"id":"qgmvhchdd","text":"1"}},"id":"e0fkkyanr","text":"What's 1+2"}},"id":"2egqhjkom","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"902l","text":"This is my hot area question.","type":"unstyled"}],"entityMap":{}},"questionHtml":"<p>This is my hot area question.</p>\n","questionText":"This is my hot area question.","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"82edg","text":"Answers are 1+2=3 & 1+1=2","type":"unstyled"}],"entityMap":{}},"referencesHtml":"<p>Answers are 1+2=3 &amp; 1+1=2</p>\n","slug":"hot-area-3-2egqhjkom","title":"Hot area 3","type":"hot-area"},"aktkstizt":{"answerOptions":{"-j8imb47o":{"answer":"2","answerHtml":"","id":"-j8imb47o"},"1s24p6txc":{"answer":"4","answerHtml":"","id":"1s24p6txc"},"jruifkk09":{"answer":"3","answerHtml":"","id":"jruifkk09"}},"id":"aktkstizt","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"462q6","text":"What's the math problem?","type":"unstyled"}],"entityMap":{}},"questionHtml":"<p>What's the math problem?</p>\n","questionText":"What's the math problem?","questions":{"efwb9hl3c":{"answerId":"","id":"efwb9hl3c","text":"1+2"},"pd6a539va":{"answerId":"","id":"pd6a539va","text":"1+1"}},"references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"c1k2d","text":"1+1=2","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"2qee5","text":"1+2=3","type":"unstyled"}],"entityMap":{}},"referencesHtml":"<p>1+1=2</p>\n<p>1+2=3</p>\n","slug":"drag-and-drop-title-aktkstizt","title":"Drag and drop Title!","type":"drag-drop"},"lvam3s9vy":{"answerOptions":{"75fthwwax":{"answer":"3","answerHtml":"","id":"75fthwwax"},"fxugpl6siz":{"answer":"5","answerHtml":"","id":"fxugpl6siz"},"ov_on3-no":{"answer":"2","answerHtml":"","id":"ov_on3-no"},"sqfa3jlxx":{"answer":"10","answerHtml":"","id":"sqfa3jlxx"},"tygbxq-nb":{"answer":"1","answerHtml":"","id":"tygbxq-nb"}},"id":"lvam3s9vy","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"b9q8o","text":"Put the numbers in order from 1-3","type":"unstyled"}],"entityMap":{}},"questionHtml":"<p>Put the numbers in order from 1-3</p>\n","questionText":"Put the numbers in order from 1-3","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"cnde5","text":"Should be 1 then 2 then 3","type":"unstyled"}],"entityMap":{}},"referencesHtml":"<p>Should be 1 then 2 then 3</p>\n","slug":"this-is-my-build-list-que-lvam3s9vy","title":"This is my build list question title","type":"build-list"},"zqutjz7m0":{"answerOptions":{"1yeehmrdc":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"eaneh","text":"A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a device state condition","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a device state condition</p>\n","id":"1yeehmrdc"},"a4atpbozc":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"dchvg","text":"A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a client apps condition","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a client apps condition</p>\n","id":"a4atpbozc"},"bsquilii4":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"6sjn1","text":"An app protection policy in Microsoft Endpoint Manager","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>An app protection policy in Microsoft Endpoint Manager</p>\n","id":"bsquilii4"},"rekj0j4ll":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"87pal","text":"A device compliance policy in Microsoft Endpoint Manager","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>A device compliance policy in Microsoft Endpoint Manager</p>\n","id":"rekj0j4ll"}},"id":"zqutjz7m0","images":["https://i.ibb.co/4VQpFYg/Policies-and-rules.png"],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"481vj","text":"Your company has a Microsoft 365 subscription.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"7a48h","text":"The company does not permit users to enroll personal devices in mobile device management (MDM).","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"2ims1","text":"Users in the sales department have personal iOS devices.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"1qrdm","text":"You need to ensure that the sales department users can use the Microsoft Power BI app from iOS devices to access the Power BI data in your tenant.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"8m19v","text":"The users must be prevented from backing up the app data to iCloud.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"62b05","text":"What should you create?","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":1,"offset":0}],"inlineStyleRanges":[],"key":"ck7bs","text":" ","type":"atomic"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"fb22e","text":"","type":"unstyled"}],"entityMap":{"0":{"data":{"alt":"Policies and rules","src":"https://i.ibb.co/4VQpFYg/Policies-and-rules.png"},"mutability":"IMMUTABLE","type":"IMAGE"}}},"questionHtml":"<p>Your company has a Microsoft 365 subscription.</p>\n<p>The company does not permit users to enroll personal devices in mobile device management (MDM).</p>\n<p>Users in the sales department have personal iOS devices.</p>\n<p>You need to ensure that the sales department users can use the Microsoft Power BI app from iOS devices to access the Power BI data in your tenant.</p>\n<p>The users must be prevented from backing up the app data to iCloud.</p>\n<p>What should you create?</p>\n<img src=\"https://i.ibb.co/4VQpFYg/Policies-and-rules.png\" alt=\"Policies and rules\" style=\"height: undefined;width: undefined\"/>\n<p></p>\n","questionText":"Your company has a Microsoft 365 subscription. The company does not permit users to enroll personal devices in mobile device management (MDM). Users in the sales department have personal iOS devices. You need to ensure that the sales department users can use the Microsoft Power BI app from iOS devices to access the Power BI data in your tenant. The users must be prevented from backing up the app data to iCloud. What should you create? ","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"6bh37","text":"App protection policies that apply to Microsoft 365 apps, for example, Power BI, will protect apps even if the user is on an unmanaged device.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":98,"offset":0}],"inlineStyleRanges":[],"key":"cimr4","text":"https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx","type":"unstyled"}],"entityMap":{"0":{"data":{"href":"https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx","target":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx"},"mutability":"MUTABLE","type":"LINK"}}},"referencesHtml":"<p>App protection policies that apply to Microsoft 365 apps, for example, Power BI, will protect apps even if the user is on an unmanaged device.</p>\n<p><a href=\"https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx\" target=\"_self\">https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx</a></p>\n","slug":"users-must-be-prevented-f-zqutjz7m0","title":"users must be prevented from backing up the app data to iCloud","type":"multiple-choice"}},"sectionId":"qwJW5VrBW","slug":"microsoft-365-powershell-administration-test-32ubyzyen","title":"Microsoft 365 PowerShell administration test","type":"test"},
      questionsShown: false
    }

    this.state.userAcct = {tests: {
      [this.state.test.id]: {
        [this.state.question.id]: {answers: {}}
      }
    }}

    this.state.questionIdx = Object.keys(this.state.test.questions).indexOf(this.state.question.id)
    this.state.previousQuestionSlug = this.state.questionIdx > 0 ? Object.values(this.state.test.questions)[this.state.questionIdx-1].slug : ''
    this.state.nextQuestionSlug = Object.values(this.state.test.questions).length-1 == this.state.questionIdx ? '' : Object.values(this.state.test.questions)[this.state.questionIdx+1].slug

    this.state.jsonLd = {
      datePublished: this.state.test.datePublished,
      keywords: [
        'Microsoft',
        'Microsoft 365',
        'Office 365',
        'MS-500',
        'Microsoft 365 Security Administration'
      ],
      mainEntity: {
        '@type': 'Question',
        name: this.state.question.title,
        text: this.state.question.questionText,
        answerCount: this.state.test.answers ? Object.keys(this.state.test.answers[this.state.question.id]).length : 0,
        dateCreated: this.state.test.datePublished,
        author: {
          '@type': 'Person',
          name: 'John Gruber',
          url: 'https://twitter.com/gruberjl'
        }
      }
    }

    if (this.state.test.answers) {
      this.state.jsonLd.mainEntity.acceptedAnswer = {
        '@type': 'Answer',
        url: `https://www.gitbit.org/course/ms-500/test/${this.state.test.slug}/question/${this.state.question.slug}`,
        author: {
          type: 'Person',
          name: 'John Gruber',
          url: 'https://twitter.com/gruberjl'
        },
        upvoteCount: 1,
        dateCreated: this.state.test.datePublished
      }
      const correctAnswerIds = Object.values(this.state.test.answers[this.state.question.id]).filter(answer => answer.isCorrect).map(answer => answer.id)
      // this.state.jsonLd.mainEntity.acceptedAnswer.text = this.state.test.answers[this.state.question.id] ? Object.values(this.state.test.answers[this.state.question.id]).filter((answer) => correctAnswerIds.includes(answer.id)).map((a) => a.text).join('; ') : 'None'
      this.state.jsonLd.mainEntity.acceptedAnswer.text = 'None'
    }
  }

  componentDidMount() {
    if (isBrowser()) {
      this.onAuthStateChangedListener = onAuthStateChanged(this.setUid)
      window.addEventListener("beforeunload", this.beforeUnload)
    }
  }

  componentWillUnmount() {
    this.onAuthStateChangedListener()
    window.removeEventListener("beforeunload", this.beforeUnload)
  }

  setUid(user) {
    if (user) {
      this.setState({
        uid: user.uid
      })

      getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
        if (!userAcct.tests)
          userAcct.tests = {}

        if (!userAcct.tests[this.state.test.id])
          userAcct.tests[this.state.test.id] = {}

        if (!userAcct.tests[this.state.test.id][this.state.question.id]) {
          userAcct.tests[this.state.test.id][this.state.question.id] = {
            id: this.state.question.id,
            answers: {}
          }
        }

        this.setState({userAcct})
      })
    }
  }

  toggleEndExam() {
    const endExamShown = !this.state.endExamShown
    this.setState({endExamShown})
  }

  toggleShowAnswer() {
    const answerShown = !this.state.answerShown
    this.setState({answerShown})
  }

  toggleQuestionList() {
    const showQuestionList = !this.state.showQuestionList
    this.setState({showQuestionList})
  }

  gotoQuestion(question) {
    return () => {
      this.navigateTo(`/course/ms-500/test/${this.state.test.slug}/question/${question.slug}`)()
    }
  }

  setAnswer(answers) {
    const userAcct = clone(this.state.userAcct)
    userAcct.tests[this.state.test.id][this.state.question.id].answers = answers

    this.setState({userAcct, unsavedChanges:true})
    if (!this.debounceSave)
      this.debounceSave = debounce(this.save, 5000)

    this.debounceSave()
  }

  beforeUnload() {
    if (this.state.unsavedChanges) {
      const s = "You have unsaved changes. Really leave?";
      this.save()

      event = event || window.event;
      if (event)
        event.returnValue = s;

      return s
    }
  }

  save() {
    return saveDoc(`courses/MS-500/users`, this.state.userAcct, false).then(() => {
      return new Promise((resolve, reject) => {
        this.setState({
          alert: 'Content saved',
          unsavedChanges: false
        }, () => {
          return resolve()
        })

        setTimeout(() => {
          this.setState({alert: ''})
        }, 3000)
      })
    })
  }

  endExam() {
    this.navigateTo(`/course/ms-500/test/${this.state.test.slug}/summary`)()
  }

  navigateTo(url) {
    return (ev) => {
      if (this.state.unsavedChanges) {
        if (ev)
          ev.preventDefault()

        this.save().then(() => {
          window.location.href = url
        })
      }
      else
        window.location.href = url
    }
  }

  render() {
    return (
      <Page jsonLdType={'QAPage'} jsonLd={this.state.jsonLd} title={this.state.question.title} description={this.state.question.questionText}>
        <main>
          <Container>
            <Header uid={this.state.uid} questionIdx={this.state.questionIdx} previousQuestionSlug={this.state.previousQuestionSlug} nextQuestionSlug={this.state.nextQuestionSlug} testSlug={this.state.test.slug} toggleEndExam={this.toggleEndExam} numOfQuestions={Object.values(this.state.test.questions).length} navigateTo={this.navigateTo} />
            {
              {
                'multiple-choice': <Choice question={this.state.question} setAnswer={this.setAnswer} answers={this.state.userAcct.tests[this.state.test.id][this.state.question.id].answers} testAnswers={this.state.test.answers[this.state.question.id]} showAnswers={this.state.answerShown} />,
                'hot-area': <HotArea question={this.state.question} setAnswer={this.setAnswer} answers={this.state.userAcct.tests[this.state.test.id][this.state.question.id].answers} testAnswers={this.state.test.answers[this.state.question.id]} showAnswers={this.state.answerShown} />,
                'build-list': <BuildList question={this.state.question} setAnswer={this.setAnswer} answers={this.state.userAcct.tests[this.state.test.id][this.state.question.id].answers} testAnswers={this.state.test.answers[this.state.question.id]} showAnswers={this.state.answerShown} />,
                'drag-drop': <DragDrop question={this.state.question} setAnswer={this.setAnswer} answers={this.state.userAcct.tests[this.state.test.id][this.state.question.id].answers} testAnswers={this.state.test.answers[this.state.question.id]} showAnswers={this.state.answerShown} />
              }[this.state.question.type]
            }
            <Grid container>
              <Grid item xs={12} style={{display: this.state.answerShown ? 'block' : 'none'}} >
                <Typography variant="h5" component="h3" gutterBottom>Answer Explanation</Typography>
              </Grid>
              <Grid item xs={12}>
                <div dangerouslySetInnerHTML={{__html: this.state.question.referencesHtml}} style={{display: this.state.answerShown ? 'block' : 'none'}} />
              </Grid>
            </Grid>
            <Footer uid={this.state.uid} previousQuestionSlug={this.state.previousQuestionSlug} nextQuestionSlug={this.state.nextQuestionSlug} testSlug={this.state.test.slug} toggleEndExam={this.toggleEndExam} toggleShowAnswer={this.toggleShowAnswer} toggleQuestionList={this.toggleQuestionList}  navigateTo={this.navigateTo} />
          </Container>

          <Dialog onClose={this.toggleQuestionList} open={this.state.showQuestionList}>
            <DialogTitle>Test Questions</DialogTitle>
            <TableContainer>
              <Table striped bordered hover>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Answered</TableCell>
                    <TableCell>Question</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { Object.values(this.state.test.questions).map((question, idx) => (
                    <TableRow hover key={idx} onClick={this.gotoQuestion(question)} style={{cursor: 'pointer'}}>
                      <TableCell>{idx+1}</TableCell>
                      <TableCell><Checkbox checked={Object.values(this.state.userAcct.tests[this.state.test.id][this.state.question.id].answers).length > 0} /></TableCell>
                      <TableCell>{question.title}</TableCell>
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
        <Snackbar message={this.state.alert} open={this.state.alert !== ''} />
      </Page>
    )
  }
}

export default EditPage
