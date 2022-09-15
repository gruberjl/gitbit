import {h, Component} from 'preact'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import {onAuthStateChanged} from '../../../../../components/firebase/on-auth-state-changed'
import saveDoc from '../../../../../components/firebase/save-doc'
import {getDoc} from '../../../../../components/firebase/get-doc'
import CheckBoxOutlineBlank from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBox from '@mui/icons-material/CheckBox'
import Page from '../../../../../components/page'
import Typography from '@mui/material/Typography'
import QUESTIONS from '../../../../../data/questions'
import { pink } from '@mui/material/colors'
import Snackbar from '@mui/material/Snackbar'
const clone = require('clone')

const gradeQuestion = (question, correctAnswers, testQuestion) => {
  let pointsReceived = 0

  if (testQuestion.type === 'hot-area') {
    Object.values(correctAnswers).forEach(correctAnswer => {
      const answer = question.answers[correctAnswer.id]
      const correctAnswerId = Object.values(correctAnswer).find(a => a.isCorrect).id

      if (answer.answer == correctAnswerId)
        pointsReceived++
    })
  } else if (testQuestion.type === 'drag-drop') {
    Object.values(correctAnswers).forEach(correctAnswer => {
      const correctAnswerId = correctAnswer.answerId
      const answer = question.answers[correctAnswer.id]

      if (answer.answerId === correctAnswerId)
        pointsReceived++
    })
  } else if (testQuestion.type === 'build-list') {
    Object.values(correctAnswers).forEach(correctAnswer => {
      const answer = question.answers[correctAnswer.id]
      if (answer && answer.idx === correctAnswer.idx) {
        pointsReceived++
      }
    })
    Object.values(question.answers).forEach(answer => {
      const correctAnswer = correctAnswers[answer.id]
      if (!correctAnswer || correctAnswer.idx !== answer.idx) {
        pointsReceived--
      }
    })
  } else if (testQuestion.type === 'multiple-choice') {
    Object.values(correctAnswers).forEach(correctAnswer => {
      const userMarkedCorrect = Boolean(question.answers[correctAnswer.id])

      if (correctAnswer.isCorrect && userMarkedCorrect)
        pointsReceived++
      else if (!correctAnswer.isCorrect && userMarkedCorrect) {
        pointsReceived--
      }
    })
  } else {
    console.error('unknown question type')
  }

  if (pointsReceived < 0)
    pointsReceived = 0

  return pointsReceived
}

const getMaxPoints = (testQuestion, answers) => {
  let maxPoints = 0

  if (testQuestion.type === 'hot-area') {
    maxPoints = Object.values(answers).length
  } else if (testQuestion.type === 'drag-drop') {
    maxPoints = Object.values(answers).length
  } else if (testQuestion.type === 'build-list') {
    maxPoints = Object.values(answers).length
  } else if (testQuestion.type === 'multiple-choice') {
    Object.values(answers).forEach(answer => {
      if (answer.isCorrect)
        maxPoints++
    })
  } else {
    console.error(`Cannot get max points. unknown question type. question.type===${testQuestion.type}`)
  }

  return maxPoints
}

const isBrowser = () => typeof window !== 'undefined'

class TestsSummary extends Component {
  constructor(props) {
    super(props)
    this.setUid = this.setUid.bind(this)
    this.gradeTest = this.gradeTest.bind(this)
    this.save = this.save.bind(this)

    this.state = {
      uid: '',
      alert: '',
      test: {"answers":{"2egqhjkom":{"5vjlp_zg_":{"53xmpuyd1":{"id":"53xmpuyd1","isCorrect":false},"fdy3eqptb":{"id":"fdy3eqptb","isCorrect":false},"id":"5vjlp_zg_","s2i55zn6y":{"id":"s2i55zn6y","isCorrect":true}},"e0fkkyanr":{"gnula41xc":{"id":"gnula41xc","isCorrect":false},"gtswslcbt":{"id":"gtswslcbt","isCorrect":true},"id":"e0fkkyanr","qgmvhchdd":{"id":"qgmvhchdd","isCorrect":false}}},"aktkstizt":{"efwb9hl3c":{"answerId":"jruifkk09","id":"efwb9hl3c"},"pd6a539va":{"answerId":"-j8imb47o","id":"pd6a539va"}},"lvam3s9vy":{"75fthwwax":{"id":"75fthwwax","idx":2},"ov_on3-no":{"id":"ov_on3-no","idx":1},"tygbxq-nb":{"id":"tygbxq-nb","idx":0}},"zqutjz7m0":{"1yeehmrdc":{"id":"1yeehmrdc","isCorrect":false},"a4atpbozc":{"id":"a4atpbozc","isCorrect":false},"bsquilii4":{"id":"bsquilii4","isCorrect":true},"rekj0j4ll":{"id":"rekj0j4ll","isCorrect":false}}},"datePublished":"2022/9/9","description":"Test your knowledge of Microsoft 365 PowerShell. Everything you see here could be on your Microsoft 365 security administrator (MS-500) test!","featuredImage":"https://i.ibb.co/4VQpFYg/Policies-and-rules.png","id":"32ubyzyen","images":["https://i.ibb.co/4VQpFYg/Policies-and-rules.png"],"publish":true,"questions":{"2egqhjkom":{"answerOptions":{"5vjlp_zg_":{"answerHtml":"","answers":{"53xmpuyd1":{"id":"53xmpuyd1","text":"4"},"fdy3eqptb":{"id":"fdy3eqptb","text":"1"},"s2i55zn6y":{"id":"s2i55zn6y","text":"2"}},"id":"5vjlp_zg_","text":"1+1?"},"e0fkkyanr":{"answerHtml":"","answers":{"gnula41xc":{"id":"gnula41xc","text":"2"},"gtswslcbt":{"id":"gtswslcbt","text":"3"},"qgmvhchdd":{"id":"qgmvhchdd","text":"1"}},"id":"e0fkkyanr","text":"What's 1+2"}},"id":"2egqhjkom","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"902l","text":"This is my hot area question.","type":"unstyled"}],"entityMap":{}},"questionHtml":"<p>This is my hot area question.</p>\n","questionText":"This is my hot area question.","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"82edg","text":"Answers are 1+2=3 & 1+1=2","type":"unstyled"}],"entityMap":{}},"referencesHtml":"<p>Answers are 1+2=3 &amp; 1+1=2</p>\n","slug":"hot-area-3-2egqhjkom","title":"Hot area 3","type":"hot-area"},"aktkstizt":{"answerOptions":{"-j8imb47o":{"answer":"2","answerHtml":"","id":"-j8imb47o"},"1s24p6txc":{"answer":"4","answerHtml":"","id":"1s24p6txc"},"jruifkk09":{"answer":"3","answerHtml":"","id":"jruifkk09"}},"id":"aktkstizt","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"462q6","text":"What's the math problem?","type":"unstyled"}],"entityMap":{}},"questionHtml":"<p>What's the math problem?</p>\n","questionText":"What's the math problem?","questions":{"efwb9hl3c":{"answerId":"","id":"efwb9hl3c","text":"1+2"},"pd6a539va":{"answerId":"","id":"pd6a539va","text":"1+1"}},"references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"c1k2d","text":"1+1=2","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"2qee5","text":"1+2=3","type":"unstyled"}],"entityMap":{}},"referencesHtml":"<p>1+1=2</p>\n<p>1+2=3</p>\n","slug":"drag-and-drop-title-aktkstizt","title":"Drag and drop Title!","type":"drag-drop"},"lvam3s9vy":{"answerOptions":{"75fthwwax":{"answer":"3","answerHtml":"","id":"75fthwwax"},"fxugpl6siz":{"answer":"5","answerHtml":"","id":"fxugpl6siz"},"ov_on3-no":{"answer":"2","answerHtml":"","id":"ov_on3-no"},"sqfa3jlxx":{"answer":"10","answerHtml":"","id":"sqfa3jlxx"},"tygbxq-nb":{"answer":"1","answerHtml":"","id":"tygbxq-nb"}},"id":"lvam3s9vy","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"b9q8o","text":"Put the numbers in order from 1-3","type":"unstyled"}],"entityMap":{}},"questionHtml":"<p>Put the numbers in order from 1-3</p>\n","questionText":"Put the numbers in order from 1-3","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"cnde5","text":"Should be 1 then 2 then 3","type":"unstyled"}],"entityMap":{}},"referencesHtml":"<p>Should be 1 then 2 then 3</p>\n","slug":"this-is-my-build-list-que-lvam3s9vy","title":"This is my build list question title","type":"build-list"},"zqutjz7m0":{"answerOptions":{"1yeehmrdc":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"eaneh","text":"A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a device state condition","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a device state condition</p>\n","id":"1yeehmrdc"},"a4atpbozc":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"dchvg","text":"A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a client apps condition","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a client apps condition</p>\n","id":"a4atpbozc"},"bsquilii4":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"6sjn1","text":"An app protection policy in Microsoft Endpoint Manager","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>An app protection policy in Microsoft Endpoint Manager</p>\n","id":"bsquilii4"},"rekj0j4ll":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"87pal","text":"A device compliance policy in Microsoft Endpoint Manager","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>A device compliance policy in Microsoft Endpoint Manager</p>\n","id":"rekj0j4ll"}},"id":"zqutjz7m0","images":["https://i.ibb.co/4VQpFYg/Policies-and-rules.png"],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"481vj","text":"Your company has a Microsoft 365 subscription.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"7a48h","text":"The company does not permit users to enroll personal devices in mobile device management (MDM).","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"2ims1","text":"Users in the sales department have personal iOS devices.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"1qrdm","text":"You need to ensure that the sales department users can use the Microsoft Power BI app from iOS devices to access the Power BI data in your tenant.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"8m19v","text":"The users must be prevented from backing up the app data to iCloud.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"62b05","text":"What should you create?","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":1,"offset":0}],"inlineStyleRanges":[],"key":"ck7bs","text":" ","type":"atomic"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"fb22e","text":"","type":"unstyled"}],"entityMap":{"0":{"data":{"alt":"Policies and rules","src":"https://i.ibb.co/4VQpFYg/Policies-and-rules.png"},"mutability":"IMMUTABLE","type":"IMAGE"}}},"questionHtml":"<p>Your company has a Microsoft 365 subscription.</p>\n<p>The company does not permit users to enroll personal devices in mobile device management (MDM).</p>\n<p>Users in the sales department have personal iOS devices.</p>\n<p>You need to ensure that the sales department users can use the Microsoft Power BI app from iOS devices to access the Power BI data in your tenant.</p>\n<p>The users must be prevented from backing up the app data to iCloud.</p>\n<p>What should you create?</p>\n<img src=\"https://i.ibb.co/4VQpFYg/Policies-and-rules.png\" alt=\"Policies and rules\" style=\"height: undefined;width: undefined\"/>\n<p></p>\n","questionText":"Your company has a Microsoft 365 subscription. The company does not permit users to enroll personal devices in mobile device management (MDM). Users in the sales department have personal iOS devices. You need to ensure that the sales department users can use the Microsoft Power BI app from iOS devices to access the Power BI data in your tenant. The users must be prevented from backing up the app data to iCloud. What should you create? ","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"6bh37","text":"App protection policies that apply to Microsoft 365 apps, for example, Power BI, will protect apps even if the user is on an unmanaged device.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":98,"offset":0}],"inlineStyleRanges":[],"key":"cimr4","text":"https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx","type":"unstyled"}],"entityMap":{"0":{"data":{"href":"https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx","target":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx"},"mutability":"MUTABLE","type":"LINK"}}},"referencesHtml":"<p>App protection policies that apply to Microsoft 365 apps, for example, Power BI, will protect apps even if the user is on an unmanaged device.</p>\n<p><a href=\"https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx\" target=\"_self\">https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx</a></p>\n","slug":"users-must-be-prevented-f-zqutjz7m0","title":"users must be prevented from backing up the app data to iCloud","type":"multiple-choice"}},"sectionId":"qwJW5VrBW","slug":"microsoft-365-powershell-administration-test-32ubyzyen","title":"Microsoft 365 PowerShell administration test","type":"test"}
    }

    this.state.userAcct = {tests: {
      [this.state.test.id]: { }
    }}
  }

  componentDidMount() {
    if (isBrowser())
      this.onAuthStateChangedListener = onAuthStateChanged(this.setUid)
  }

  componentWillUnmount() {
    this.onAuthStateChangedListener()
  }

  setUid(user) {
    if (!user) {
      window.location.href = '/login'
      return
    }

    this.setState({
      uid: user.uid
    })

    getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
      if (!userAcct.tests)
        userAcct.tests = {}

      if (!userAcct.tests[this.state.test.id])
        userAcct.tests[this.state.test.id] = {}

      this.setState({userAcct}, () => {
        if (!userAcct.tests[this.state.test.id].score)
          this.gradeTest()
      })
    })
  }

  gradeTest() {
    let maxPoints = 0
    let pointsReceived = 0
    const userAcct = clone(this.state.userAcct)

    Object.keys(this.state.test.answers).forEach(questionId => {
      const answers = this.state.test.answers[questionId]
      const question = userAcct.tests[this.state.test.id][questionId]
      const testQuestion = this.state.test.questions[question.id]
      const questionMaxPoints = getMaxPoints(testQuestion, answers)
      const pointsReceivedForQuestion = question ? gradeQuestion(question, answers, testQuestion) : 0

      userAcct.tests[this.state.test.id][questionId].maxPoints = questionMaxPoints
      userAcct.tests[this.state.test.id][questionId].pointsReceived = pointsReceivedForQuestion
      pointsReceived = pointsReceived + pointsReceivedForQuestion
      maxPoints = maxPoints + questionMaxPoints
    })

    userAcct.tests[this.state.test.id].score = Math.round(pointsReceived / maxPoints * 1000)

    this.setState({userAcct, alert:'test grading complete!'}, () => {
      this.save()
    })

    setTimeout(() => {
      this.setState({alert: ''})
    }, 3000)
  }

  save() {
    return saveDoc(`courses/MS-500/users`, this.state.userAcct, false)
  }

  render() {
    const questions = this.state.questions
    return (
      <Page title={'Microsoft 365 MS-500 practice test summary'} description={'Microsoft 365 MS-500 practice test summary'}>
        <main style={{backgroundColor: '#F3F6F9', paddingTop: '60px'}}>
          <Container>
            <Paper elevation={3} sx={{p: 4}}>
              <Grid container className='box' spacing={2}>
                <Grid item xs={6} className='box-row'>
                  <Typography variant="body1"><strong>Exam Number:</strong> MS-500</Typography>
                </Grid>
                <Grid item xs={6} className='box-row'>
                  <Typography variant="body1"><strong>Passing Score:</strong> 700</Typography>
                </Grid>
                <Grid item xs={6} className='box-row'>
                  <Typography variant="body1"><strong>Your Score:</strong> {this.state.userAcct.tests[this.state.test.id].score}</Typography>
                </Grid>
                <Grid item xs={6} className='box-row'>
                  <Typography variant="body1">
                    <strong>Result:</strong> {
                      this.state.userAcct.tests[this.state.test.id].score || this.state.userAcct.tests[this.state.test.id].score === 0 ?
                        (this.state.userAcct.tests[this.state.test.id].score >= 700 ? 'Pass' : 'Fail') :
                        ''
                    }
                  </Typography>
                </Grid>
              </Grid>
            </Paper>

            <Paper elevation={3} sx={{my: 4, p: 4}}>
              <Grid container className='box' spacing={2}>
                <Grid item xs={10}>
                  <Typography variant="h4" component="h1">Test Sumary</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Button onClick={this.gradeTest}>Grade test</Button>
                </Grid>
                { Object.keys(this.state.test.answers).map(questionId => (
                  <Grid container item xs={6} key={questionId}>
                    <Grid item xs={1}>
                      <Button variant="text" href={`/course/ms-500/test/${this.state.test.slug}/question/${this.state.test.questions[questionId].slug}`}>
                        { this.state.userAcct.tests[this.state.test.id][questionId] ? (this.state.userAcct.tests[this.state.test.id][questionId].maxPoints === this.state.userAcct.tests[this.state.test.id][questionId].pointsReceived ?
                          <CheckBox color='success' /> :
                           <CheckBoxOutlineBlank sx={{ color: pink[500] }} />) : ''

                        }
                      </Button>
                    </Grid>
                    <Grid item xs={11}>
                      <Button variant="text" href={`/course/ms-500/test/${this.state.test.slug}/question/${this.state.test.questions[questionId].slug}`}>{this.state.test.questions[questionId].title}</Button>
                    </Grid>
                  </Grid>
                ))}

              </Grid>
            </Paper>
          </Container>
        </main>
        <Snackbar message={this.state.alert} open={this.state.alert !== ''} />
      </Page>
    )
  }
}

export default TestsSummary
