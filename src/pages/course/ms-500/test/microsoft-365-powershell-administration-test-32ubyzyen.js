import {h, Component} from 'preact'
import Page from '../../../../components/page'
import {onAuthStateChanged} from '../../../../components/firebase/on-auth-state-changed'
import {getDoc} from '../../../../components/firebase/get-doc'
import saveDoc from '../../../../components/firebase/save-doc'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
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
    this.startTest = this.startTest.bind(this)
    this.setUid = this.setUid.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.eraseProgress = this.eraseProgress.bind(this)
    this.gotoLatestQuestion = this.gotoLatestQuestion.bind(this)

    const isBrowser = () => typeof window !== 'undefined'

    this.state = {
      uid: '',
      test: {"answers":{"2egqhjkom":{"5vjlp_zg_":{"53xmpuyd1":{"id":"53xmpuyd1","isCorrect":false},"fdy3eqptb":{"id":"fdy3eqptb","isCorrect":false},"id":"5vjlp_zg_","s2i55zn6y":{"id":"s2i55zn6y","isCorrect":true}},"e0fkkyanr":{"gnula41xc":{"id":"gnula41xc","isCorrect":false},"gtswslcbt":{"id":"gtswslcbt","isCorrect":true},"id":"e0fkkyanr","qgmvhchdd":{"id":"qgmvhchdd","isCorrect":false}}},"aktkstizt":{"efwb9hl3c":{"answerId":"jruifkk09","id":"efwb9hl3c"},"pd6a539va":{"answerId":"-j8imb47o","id":"pd6a539va"}},"lvam3s9vy":{"75fthwwax":{"id":"75fthwwax","idx":2},"ov_on3-no":{"id":"ov_on3-no","idx":1},"tygbxq-nb":{"id":"tygbxq-nb","idx":0}},"zqutjz7m0":{"1yeehmrdc":{"id":"1yeehmrdc","isCorrect":false},"a4atpbozc":{"id":"a4atpbozc","isCorrect":false},"bsquilii4":{"id":"bsquilii4","isCorrect":true},"rekj0j4ll":{"id":"rekj0j4ll","isCorrect":false}}},"datePublished":"2022/9/9","description":"Test your knowledge of Microsoft 365 PowerShell. Everything you see here could be on your Microsoft 365 security administrator (MS-500) test!","featuredImage":"https://i.ibb.co/4VQpFYg/Policies-and-rules.png","id":"32ubyzyen","images":["https://i.ibb.co/4VQpFYg/Policies-and-rules.png"],"publish":true,"questions":{"2egqhjkom":{"answerOptions":{"5vjlp_zg_":{"answerHtml":"","answers":{"53xmpuyd1":{"id":"53xmpuyd1","text":"4"},"fdy3eqptb":{"id":"fdy3eqptb","text":"1"},"s2i55zn6y":{"id":"s2i55zn6y","text":"2"}},"id":"5vjlp_zg_","text":"1+1?"},"e0fkkyanr":{"answerHtml":"","answers":{"gnula41xc":{"id":"gnula41xc","text":"2"},"gtswslcbt":{"id":"gtswslcbt","text":"3"},"qgmvhchdd":{"id":"qgmvhchdd","text":"1"}},"id":"e0fkkyanr","text":"What's 1+2"}},"id":"2egqhjkom","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"902l","text":"This is my hot area question.","type":"unstyled"}],"entityMap":{}},"questionHtml":"<p>This is my hot area question.</p>\n","questionText":"This is my hot area question.","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"82edg","text":"Answers are 1+2=3 & 1+1=2","type":"unstyled"}],"entityMap":{}},"referencesHtml":"<p>Answers are 1+2=3 &amp; 1+1=2</p>\n","slug":"hot-area-3-2egqhjkom","title":"Hot area 3","type":"hot-area"},"aktkstizt":{"answerOptions":{"-j8imb47o":{"answer":"2","answerHtml":"","id":"-j8imb47o"},"1s24p6txc":{"answer":"4","answerHtml":"","id":"1s24p6txc"},"jruifkk09":{"answer":"3","answerHtml":"","id":"jruifkk09"}},"id":"aktkstizt","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"462q6","text":"What's the math problem?","type":"unstyled"}],"entityMap":{}},"questionHtml":"<p>What's the math problem?</p>\n","questionText":"What's the math problem?","questions":{"efwb9hl3c":{"answerId":"","id":"efwb9hl3c","text":"1+2"},"pd6a539va":{"answerId":"","id":"pd6a539va","text":"1+1"}},"references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"c1k2d","text":"1+1=2","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"2qee5","text":"1+2=3","type":"unstyled"}],"entityMap":{}},"referencesHtml":"<p>1+1=2</p>\n<p>1+2=3</p>\n","slug":"drag-and-drop-title-aktkstizt","title":"Drag and drop Title!","type":"drag-drop"},"lvam3s9vy":{"answerOptions":{"75fthwwax":{"answer":"3","answerHtml":"","id":"75fthwwax"},"fxugpl6siz":{"answer":"5","answerHtml":"","id":"fxugpl6siz"},"ov_on3-no":{"answer":"2","answerHtml":"","id":"ov_on3-no"},"sqfa3jlxx":{"answer":"10","answerHtml":"","id":"sqfa3jlxx"},"tygbxq-nb":{"answer":"1","answerHtml":"","id":"tygbxq-nb"}},"id":"lvam3s9vy","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"b9q8o","text":"Put the numbers in order from 1-3","type":"unstyled"}],"entityMap":{}},"questionHtml":"<p>Put the numbers in order from 1-3</p>\n","questionText":"Put the numbers in order from 1-3","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"cnde5","text":"Should be 1 then 2 then 3","type":"unstyled"}],"entityMap":{}},"referencesHtml":"<p>Should be 1 then 2 then 3</p>\n","slug":"this-is-my-build-list-que-lvam3s9vy","title":"This is my build list question title","type":"build-list"},"zqutjz7m0":{"answerOptions":{"1yeehmrdc":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"eaneh","text":"A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a device state condition","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a device state condition</p>\n","id":"1yeehmrdc"},"a4atpbozc":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"dchvg","text":"A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a client apps condition","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a client apps condition</p>\n","id":"a4atpbozc"},"bsquilii4":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"6sjn1","text":"An app protection policy in Microsoft Endpoint Manager","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>An app protection policy in Microsoft Endpoint Manager</p>\n","id":"bsquilii4"},"rekj0j4ll":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"87pal","text":"A device compliance policy in Microsoft Endpoint Manager","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>A device compliance policy in Microsoft Endpoint Manager</p>\n","id":"rekj0j4ll"}},"id":"zqutjz7m0","images":["https://i.ibb.co/4VQpFYg/Policies-and-rules.png"],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"481vj","text":"Your company has a Microsoft 365 subscription.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"7a48h","text":"The company does not permit users to enroll personal devices in mobile device management (MDM).","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"2ims1","text":"Users in the sales department have personal iOS devices.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"1qrdm","text":"You need to ensure that the sales department users can use the Microsoft Power BI app from iOS devices to access the Power BI data in your tenant.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"8m19v","text":"The users must be prevented from backing up the app data to iCloud.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"62b05","text":"What should you create?","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":1,"offset":0}],"inlineStyleRanges":[],"key":"ck7bs","text":" ","type":"atomic"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"fb22e","text":"","type":"unstyled"}],"entityMap":{"0":{"data":{"alt":"Policies and rules","src":"https://i.ibb.co/4VQpFYg/Policies-and-rules.png"},"mutability":"IMMUTABLE","type":"IMAGE"}}},"questionHtml":"<p>Your company has a Microsoft 365 subscription.</p>\n<p>The company does not permit users to enroll personal devices in mobile device management (MDM).</p>\n<p>Users in the sales department have personal iOS devices.</p>\n<p>You need to ensure that the sales department users can use the Microsoft Power BI app from iOS devices to access the Power BI data in your tenant.</p>\n<p>The users must be prevented from backing up the app data to iCloud.</p>\n<p>What should you create?</p>\n<img src=\"https://i.ibb.co/4VQpFYg/Policies-and-rules.png\" alt=\"Policies and rules\" style=\"height: undefined;width: undefined\"/>\n<p></p>\n","questionText":"Your company has a Microsoft 365 subscription. The company does not permit users to enroll personal devices in mobile device management (MDM). Users in the sales department have personal iOS devices. You need to ensure that the sales department users can use the Microsoft Power BI app from iOS devices to access the Power BI data in your tenant. The users must be prevented from backing up the app data to iCloud. What should you create? ","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"6bh37","text":"App protection policies that apply to Microsoft 365 apps, for example, Power BI, will protect apps even if the user is on an unmanaged device.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":98,"offset":0}],"inlineStyleRanges":[],"key":"cimr4","text":"https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx","type":"unstyled"}],"entityMap":{"0":{"data":{"href":"https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx","target":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx"},"mutability":"MUTABLE","type":"LINK"}}},"referencesHtml":"<p>App protection policies that apply to Microsoft 365 apps, for example, Power BI, will protect apps even if the user is on an unmanaged device.</p>\n<p><a href=\"https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx\" target=\"_self\">https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx</a></p>\n","slug":"users-must-be-prevented-f-zqutjz7m0","title":"users must be prevented from backing up the app data to iCloud","type":"multiple-choice"}},"sectionId":"qwJW5VrBW","slug":"microsoft-365-powershell-administration-test-32ubyzyen","title":"Microsoft 365 PowerShell administration test","type":"test"},
      showLoginModal: false,
      showRestartModal: false
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

      getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
        if (!userAcct.tests)
          userAcct.tests = {}

        this.setState({userAcct})
      })
    }
  }

  startTest() {
    if (this.state.uid === '' || !this.state.userAcct) {
      this.setState({showLoginModal: true})
    } else if (this.state.userAcct.tests[this.state.test.id]) {
      this.setState({showRestartModal: true})
    } else {
      window.location.href = `/course/ms-500/test/${this.state.test.slug}/question/${Object.values(this.state.test.questions)[0].slug}`
    }
  }

  handleClose(modalCloseProp) {
    return () => {
      const close = {}
      close[modalCloseProp] = false
      this.setState(close)
    }
  }

  eraseProgress() {
    const userAcct = clone(this.state.userAcct)
    delete userAcct.tests[this.state.test.id]
    this.setState({userAcct})
    saveDoc('courses/MS-500/users', userAcct).then(() => {
      window.location.href = `/course/ms-500/test/${this.state.test.slug}/question/${Object.values(this.state.test.questions)[0].slug}`
    })
  }

  gotoLatestQuestion() {
    const questions = Object.values(this.state.test.questions)
    const test = this.state.userAcct.tests[this.state.test.id]
    let redirecting = false

    for(let i = 0; i < questions.length; i++) {
      const question = questions[i]
      if (!test[question.id] || !test[question.id].answers) {
        redirecting = true
        window.location.href = `/course/ms-500/test/${this.state.test.slug}/question/${question.slug}`
      }
    }

    if (!redirecting) {
      window.location.href = `/course/ms-500/test/${this.state.test.slug}/question/${questions[0].slug}`
    }
  }

  render() {
    return (
      <Page title={this.state.test.title} description={`Microsoft 365 MS-500 practice test questions on the "${this.state.test.title}" topic`}>
        <main>
          <Container>
            <Grid container>
              <Grid item xs={10}>
                <Typography variant="h3" component="h1" style={marginTop24Style}>{this.state.test.title}</Typography>
              </Grid>
              <Grid item xs={2} style={alignRight}>
                <Button onClick={this.startTest}>Start test</Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" component="h2" style={marginTop24Style}>Questions for this test</Typography>
              </Grid>
              <Grid item xs={12}>
                <ol>
                  { Object.values(this.state.test.questions).map((question, idx) => (
                    <li><Link href={`/course/ms-500/test/${this.state.test.slug}/question/${question.slug}`} underline="hover" key={idx}>{question.title}</Link></li>
                  ))}
                </ol>
              </Grid>
              <Grid item xs={12} style={alignRight}>
                <Button onClick={this.startTest}>Start test</Button>
              </Grid>
            </Grid>
          </Container>
          <Dialog open={this.state.showLoginModal} onClose={this.handleClose('showLoginModal')} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">Log in?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">Do you want to login to save your progress?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button href={`/login?goto=/course/ms-500/test/${this.state.test.slug}/question/${Object.values(this.state.test.questions)[0].slug}`}>Login</Button>
              <Button href={`/sign-up?goto=/course/ms-500/test/${this.state.test.slug}/question/${Object.values(this.state.test.questions)[0].slug}`}>Sign up</Button>
              <Button href={`/course/ms-500/test/${this.state.test.slug}/question/${Object.values(this.state.test.questions)[0].slug}`} autoFocus>No</Button>
            </DialogActions>
          </Dialog>

          <Dialog open={this.state.showRestartModal} onClose={this.handleClose('showRestartModal')} aria-labelledby="dialog-title" aria-describedby="dialog-description">
            <DialogTitle id="dialog-title">Restart test?</DialogTitle>
            <DialogContent>
              <DialogContentText id="dialog-description">Do you want to erase your progress and restart the test?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.eraseProgress}>Erase progress</Button>
              <Button onClick={this.gotoLatestQuestion}>Continue where I was</Button>
            </DialogActions>
          </Dialog>
        </main>
      </Page>
    )
  }
}

export default EditPage
