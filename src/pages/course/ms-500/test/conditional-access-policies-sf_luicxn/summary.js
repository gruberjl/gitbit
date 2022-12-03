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
import {pink} from '@mui/material/colors'
import Snackbar from '@mui/material/Snackbar'
import Box from '@mui/material/Box'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
const clone = require('clone')

const gradeQuestion = (question, correctAnswers, testQuestion) => {
  let pointsReceived = 0

  if (testQuestion.type === 'hot-area') {
    Object.values(correctAnswers).forEach((correctAnswer) => {
      const answer = question.answers[correctAnswer.id] || {}
      const correctAnswerId = Object.values(correctAnswer).find((a) => a.isCorrect).id

      if (answer.answer == correctAnswerId)
        pointsReceived++
    })
  } else if (testQuestion.type === 'drag-drop') {
    Object.values(correctAnswers).forEach((correctAnswer) => {
      const correctAnswerId = correctAnswer.answerId
      const answer = question.answers[correctAnswer.id]

      if (answer.answerId === correctAnswerId)
        pointsReceived++
    })
  } else if (testQuestion.type === 'build-list') {
    Object.values(correctAnswers).forEach((correctAnswer) => {
      const answer = question.answers[correctAnswer.id]
      if (answer && answer.idx === correctAnswer.idx)
        pointsReceived++
    })
    Object.values(question.answers).forEach((answer) => {
      const correctAnswer = correctAnswers[answer.id]
      if (!correctAnswer || correctAnswer.idx !== answer.idx)
        pointsReceived--
    })
  } else if (testQuestion.type === 'multiple-choice') {
    Object.values(correctAnswers).forEach((correctAnswer) => {
      const userMarkedCorrect = Boolean(question.answers[correctAnswer.id])

      if (correctAnswer.isCorrect && userMarkedCorrect)
        pointsReceived++
      else if (!correctAnswer.isCorrect && userMarkedCorrect)
        pointsReceived--
    })
  } else
    console.error('unknown question type')


  if (pointsReceived < 0)
    pointsReceived = 0

  return pointsReceived
}

const getMaxPoints = (testQuestion, answers) => {
  let maxPoints = 0

  if (testQuestion.type === 'hot-area')
    maxPoints = Object.values(answers).length
  else if (testQuestion.type === 'drag-drop')
    maxPoints = Object.values(answers).length
  else if (testQuestion.type === 'build-list')
    maxPoints = Object.values(answers).length
  else if (testQuestion.type === 'multiple-choice') {
    Object.values(answers).forEach((answer) => {
      if (answer.isCorrect)
        maxPoints++
    })
  } else
    console.error(`Cannot get max points. unknown question type. question.type===${testQuestion.type}`)


  return maxPoints
}

const isBrowser = () => typeof window !== 'undefined'

class TestsSummary extends Component {
  constructor(props) {
    super(props)
    this.setUid = this.setUid.bind(this)
    this.gradeTest = this.gradeTest.bind(this)
    this.save = this.save.bind(this)
    this.getJsonLd = this.getJsonLd.bind(this)
    this.setCompletedContent = this.setCompletedContent.bind(this)

    this.state = {
      uid: '',
      alert: '',
      nextContentSlug: 'learn/The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk',
      previousContentSlug: 'learn/Whats-a-conditional-access-policy-V1en9Iugh',
      test: {answers: {cuc4rrmfn: {'-jcwpjk2q': {id: '-jcwpjk2q', isCorrect: true}, '1fyqg-o98': {id: '1fyqg-o98', isCorrect: false}, tzkp0yc1m: {id: 'tzkp0yc1m', isCorrect: false}, xialyqe45: {id: 'xialyqe45', isCorrect: false}}, ue6ueasrc: {'0wexho7c5': {id: '0wexho7c5', idx: 0}, '4kz5--xd_': {id: '4kz5--xd_', idx: 2}, hnlfoza9w: {id: 'hnlfoza9w', idx: 3}, zc48eiabm: {id: 'zc48eiabm', idx: 1}}, yfm2sgksr: {kdsrpvy5j: {id: 'kdsrpvy5j', isCorrect: false}, lrlu3ra4p: {id: 'lrlu3ra4p', isCorrect: false}, v2hvstxme: {id: 'v2hvstxme', isCorrect: false}, vy2kaz8or: {id: 'vy2kaz8or', isCorrect: true}}}, datePublished: '2022/9/27', description: 'Test your knowledge of conditional access policies. Every question you may see in the MS-500 for conditional access policies is shown here.', featuredImage: 'https://i.ibb.co/q5NZSJf/conditional-access-policy.png', id: 'sf_luicxn', images: ['https://i.ibb.co/q5NZSJf/conditional-access-policy.png'], publish: true, questions: {cuc4rrmfn: {answerOptions: {'-jcwpjk2q': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'amle', text: 'Sign-ins logs located in the Azure Active Directory admin center', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Sign-ins logs located in the Azure Active Directory admin center</p>\n', id: '-jcwpjk2q'}, '1fyqg-o98': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7t6b3', text: 'Audit logs located in the Azure Active Directory admin center', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Audit logs located in the Azure Active Directory admin center</p>\n', id: '1fyqg-o98'}, tzkp0yc1m: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5jra2', text: 'Activity logs located in the Cloud App Security admin center', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Activity logs located in the Cloud App Security admin center</p>\n', id: 'tzkp0yc1m'}, xialyqe45: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '69se3', text: 'The compliance report in the Microsoft Endpoint Manager admin center', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>The compliance report in the Microsoft Endpoint Manager admin center</p>\n', id: 'xialyqe45'}}, id: 'cuc4rrmfn', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3amid', text: 'Your organization has configured multiple conditional access policies to block non-compliant devices from connecting to Microsoft 365 and other services.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ftpcn', text: 'Some users complain that they cannot access some services due to their devices being non-compliant.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9qq3o', text: 'Where can you go to check which conditional access policy is blocking the users\' login?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has configured multiple conditional access policies to block non-compliant devices from connecting to Microsoft 365 and other services.</p>\n<p>Some users complain that they cannot access some services due to their devices being non-compliant.</p>\n<p>Where can you go to check which conditional access policy is blocking the users\' login?</p>\n', questionText: 'Your organization has configured multiple conditional access policies to block non-compliant devices from connecting to Microsoft 365 and other services. Some users complain that they cannot access some services due to their devices being non-compliant. Where can you go to check which conditional access policy is blocking the users\' login?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 35, offset: 11, style: 'BOLD'}, {length: 6, offset: 49, style: 'BOLD'}, {length: 12, offset: 57, style: 'BOLD'}, {length: 18, offset: 116, style: 'BOLD'}], key: 'f4616', text: 'Sign in to Azure Active Directory admin center > Users > Sign in logs > click the sign-in you want to investigate > Conditional access.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 86, offset: 0}], inlineStyleRanges: [], key: '6ufqg', text: 'https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh', type: 'unstyled'}], entityMap: {0: {data: {url: 'https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Sign in to <strong>Azure Active Directory admin center</strong> &gt; <strong>Users </strong>&gt; <strong>Sign in logs</strong> &gt; click the sign-in you want to investigate &gt; <strong>Conditional access</strong>.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh" target="_self">https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh</a></p>\n', slug: 'where-to-check-which-cond-cuc4rrmfn', title: 'Where to check which conditional access policy is blocking the users login', type: 'multiple-choice'}, ue6ueasrc: {answerOptions: {'0wexho7c5': {answer: 'From the Azure AD admin center, register AppA', answerHtml: '', id: '0wexho7c5'}, '4kz5--xd_': {answer: 'Open the Cloud App Security admin center', answerHtml: '', id: '4kz5--xd_'}, hnlfoza9w: {answer: 'Create an access policy', answerHtml: '', id: 'hnlfoza9w'}, zc48eiabm: {answer: 'Create a conditional access policy', answerHtml: '', id: 'zc48eiabm'}}, id: 'ue6ueasrc', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1q7nj', text: 'All the devices in the Microsoft 365 tenant are managed by using Microsoft Intune.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6gf2a', text: 'Your organization has purchased an app named AppA.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd9ioa', text: 'AppA that supports Microsoft\'s session controls.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'frh6e', text: 'Your manager asks you to configure AppA so it can be reviewed in real-time.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4e0tc', text: 'What do you need to do?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>All the devices in the Microsoft 365 tenant are managed by using Microsoft Intune.</p>\n<p>Your organization has purchased an app named AppA.</p>\n<p>AppA that supports Microsoft\'s session controls.</p>\n<p>Your manager asks you to configure AppA so it can be reviewed in real-time.</p>\n<p>What do you need to do?</p>\n', questionText: 'All the devices in the Microsoft 365 tenant are managed by using Microsoft Intune. Your organization has purchased an app named AppA. AppA that supports Microsoft\'s session controls. Your manager asks you to configure AppA so it can be reviewed in real-time. What do you need to do?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '43gs5', text: 'You\'ll need to perform three steps to manage a device:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd8fnm', text: 'From the Azure AD admin center, register AppA.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9shuk', text: 'From the Azure AD admin center, create a conditional access policy.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bp36b', text: 'From the Cloud App Security admin center, create an access policy.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 69, offset: 0}], inlineStyleRanges: [], key: 'bd4ql', text: 'https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad', target: '_blank', url: 'https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>You\'ll need to perform three steps to manage a device:</p>\n<ol>\n<li>From the Azure AD admin center, register AppA.</li>\n<li>From the Azure AD admin center, create a conditional access policy.</li>\n<li>From the Cloud App Security admin center, create an access policy.</li>\n</ol>\n<p><a href="https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad" target="_self">https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad</a></p>\n', slug: 'configure-appa-so-it-can--ue6ueasrc', title: 'Configure AppA so it can be reviewed in real-time', type: 'build-list'}, yfm2sgksr: {answerOptions: {kdsrpvy5j: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eaamo', text: 'A user risk policy', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A user risk policy</p>\n', id: 'kdsrpvy5j'}, lrlu3ra4p: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fblpr', text: 'A sign-in risk policy', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A sign-in risk policy</p>\n', id: 'lrlu3ra4p'}, v2hvstxme: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4nbip', text: 'An Azure MFA Server', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>An Azure MFA Server</p>\n', id: 'v2hvstxme'}, vy2kaz8or: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5inok', text: 'A named location in Azure Active Directory (Azure AD)', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A named location in Azure Active Directory (Azure AD)</p>\n', id: 'vy2kaz8or'}}, id: 'yfm2sgksr', images: ['https://i.ibb.co/q5NZSJf/conditional-access-policy.png'], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'deju', text: 'Your company has a main office and a Microsoft 365 subscription.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4lpib', text: 'You need to enforce Microsoft Azure Multi-Factor Authentication (MFA) by using conditional access for all users who are NOT physically present in the office.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'da6eh', text: 'What should you include in the configuration?', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4rj7u', text: '', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your company has a main office and a Microsoft 365 subscription.</p>\n<p>You need to enforce Microsoft Azure Multi-Factor Authentication (MFA) by using conditional access for all users who are NOT physically present in the office.</p>\n<p>What should you include in the configuration?</p>\n<p></p>\n', questionText: 'Your company has a main office and a Microsoft 365 subscription. You need to enforce Microsoft Azure Multi-Factor Authentication (MFA) by using conditional access for all users who are NOT physically present in the office. What should you include in the configuration? ', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bp3jq', text: 'Named locations are required when you want to create a conditional access policy requiring MFA while excluding certain locations.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 86, offset: 0}], inlineStyleRanges: [], key: '51n5p', text: 'https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 93, offset: 0}], inlineStyleRanges: [], key: 'b57n9', text: 'https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition', type: 'unstyled'}], entityMap: {0: {data: {url: 'https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {url: 'https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Named locations are required when you want to create a conditional access policy requiring MFA while excluding certain locations.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh" target="_self">https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh</a></p>\n<p><a href="https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition" target="_self">https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition</a></p>\n', slug: 'create-conditional-access-yfm2sgksr', title: 'Create conditional access policy to enforce MFA but exclude physical locations', type: 'multiple-choice'}}, sectionId: 'AFV_acckJ', slug: 'conditional-access-policies-sf_luicxn', title: 'Conditional access policies', type: 'test'}
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

  setCompletedContent(userAcct) {
    return new Promise((resolve) => {
      if (!userAcct.completedContent.includes(this.state.test.id)) {
        userAcct.completedContent.push(this.state.test.id)
        this.setState({userAcct}, () => {
          saveDoc('courses/MS-500/users', userAcct).then(() => resolve())
        })
      } else
        return resolve()
    })
  }

  gradeTest() {
    let maxPoints = 0
    let pointsReceived = 0
    const userAcct = clone(this.state.userAcct)
    this.setCompletedContent(userAcct)

    Object.keys(this.state.test.answers).forEach((questionId) => {
      const answers = this.state.test.answers[questionId]
      const question = userAcct.tests[this.state.test.id][questionId]
      const testQuestion = this.state.test.questions[questionId]
      const questionMaxPoints = getMaxPoints(testQuestion, answers)
      const pointsReceivedForQuestion = question ? gradeQuestion(question, answers, testQuestion) : 0
      if (!userAcct.tests[this.state.test.id][questionId])
        userAcct.tests[this.state.test.id][questionId] = {answers: {}, id: questionId}

      userAcct.tests[this.state.test.id][questionId].maxPoints = questionMaxPoints
      userAcct.tests[this.state.test.id][questionId].pointsReceived = pointsReceivedForQuestion
      pointsReceived = pointsReceived + pointsReceivedForQuestion
      maxPoints = maxPoints + questionMaxPoints
    })

    userAcct.tests[this.state.test.id].score = Math.round(pointsReceived / maxPoints * 1000)

    this.setState({userAcct, alert: 'test grading complete!'}, () => {
      this.save()
    })

    setTimeout(() => {
      this.setState({alert: ''})
    }, 3000)
  }

  save() {
    return saveDoc(`courses/MS-500/users`, this.state.userAcct, false)
  }

  getJsonLd() {
    return {
      $schema: 'https://json-schema.org/draft/2019-09/schema',
      '@context': 'http://schema.org',
      '@type': 'Quiz',
      assesses: this.state.test.title,
      educationalLevel: 'beginner',
      learningResourceType: 'Quiz',
      teaches: this.state.test.title,
      abstract: this.state.test.description,
      image: this.state.test.featuredImage,
      name: this.state.test.title,
      '@id': location.href,
      description: this.state.test.description
    }
  }

  render() {
    return (
      <Page title={`${this.state.test.title} Summary`} description={this.state.test.description} jsonLd={this.getJsonLd()} jsonLdType="Quiz">
        <main style={{backgroundColor: '#F3F6F9'}}>
          <Container>
            <Box sx={{display: 'flex', justifyContent: 'space-between', py: 3}}>
              <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/dashboard' : `/course/ms-500/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
              <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/dashboard' : `/course/ms-500/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos />}>Next</Button>
            </Box>

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
                { Object.keys(this.state.test.answers).map((questionId) => (
                  <Grid container item xs={6} key={questionId}>
                    <Grid item xs={1}>
                      <Button variant="text" href={`/course/ms-500/test/${this.state.test.slug}/question/${this.state.test.questions[questionId].slug}`}>
                        { this.state.userAcct.tests[this.state.test.id][questionId] ? (this.state.userAcct.tests[this.state.test.id][questionId].maxPoints === this.state.userAcct.tests[this.state.test.id][questionId].pointsReceived ?
                          <CheckBox color='success' /> :
                           <CheckBoxOutlineBlank sx={{color: pink[500]}} />) : ''

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
