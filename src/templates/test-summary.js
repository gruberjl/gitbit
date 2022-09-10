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

const gradeQuestion = (question, correctAnswers) => {
  let pointsReceived = 0

  Object.values(correctAnswers).forEach(correctAnswer => {
    const userMarkedCorrect = Boolean(question.answers[correctAnswer.id])

    if (correctAnswer.isCorrect && userMarkedCorrect)
      pointsReceived++
    else if (!correctAnswer.isCorrect && userMarkedCorrect) {
      pointsReceived--
    }
  })

  if (pointsReceived < 0)
    pointsReceived = 0

  return pointsReceived
}

const getMaxPoints = (answers) => {
  let maxPoints = 0

  Object.values(answers).forEach(answer => {
    if (answer.isCorrect)
      maxPoints++
  })

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
      test: {score: 0},
      uid: '',
      alert: '',
      test: {
        "images": [
          "https://i.ibb.co/4VQpFYg/Policies-and-rules.png"
        ],
        "id": "32ubyzyen",
        "slug": "microsoft-365-powershell-administration-test-32ubyzyen",
        "type": "test",
        "featuredImage": "https://i.ibb.co/4VQpFYg/Policies-and-rules.png",
        "datePublished": "2022/9/9",
        "answers": {
          "zqutjz7m0": {
            "rekj0j4ll": {
              "id": "rekj0j4ll",
              "isCorrect": false
            },
            "a4atpbozc": {
              "isCorrect": false,
              "id": "a4atpbozc"
            },
            "bsquilii4": {
              "id": "bsquilii4",
              "isCorrect": true
            },
            "1yeehmrdc": {
              "isCorrect": false,
              "id": "1yeehmrdc"
            }
          }
        },
        "description": "Test your knowledge of Microsoft 365 PowerShell. Everything you see here could be on your Microsoft 365 security administrator (MS-500) test!",
        "questions": {
          "zqutjz7m0": {
            "slug": "your-company-has-a-micros-zqutjz7m0",
            "questionHtml": "<p>Your company has a Microsoft 365 subscription.</p>\n<p>The company does not permit users to enroll personal devices in mobile device management (MDM).</p>\n<p>Users in the sales department have personal iOS devices.</p>\n<p>You need to ensure that the sales department users can use the Microsoft Power BI app from iOS devices to access the Power BI data in your tenant.</p>\n<p>The users must be prevented from backing up the app data to iCloud.</p>\n<p>What should you create?</p>\n<img src=\"https://i.ibb.co/4VQpFYg/Policies-and-rules.png\" alt=\"Policies and rules\" style=\"height: undefined;width: undefined\"/>\n<p></p>\n",
            "title": "users must be prevented from backing up the app data to iCloud",
            "referencesHtml": "<p>App protection policies that apply to Microsoft 365 apps, for example, Power BI, will protect apps even if the user is on an unmanaged device.</p>\n<p><a href=\"https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx\" target=\"_self\">https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx</a></p>\n",
            "answerOptions": {
              "1yeehmrdc": {
                "answer": {
                  "blocks": [
                    {
                      "type": "unstyled",
                      "depth": 0,
                      "inlineStyleRanges": [],
                      "key": "eaneh",
                      "data": {},
                      "text": "A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a device state condition",
                      "entityRanges": []
                    }
                  ],
                  "entityMap": {}
                },
                "answerHtml": "<p>A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a device state condition</p>\n",
                "id": "1yeehmrdc"
              },
              "rekj0j4ll": {
                "answer": {
                  "entityMap": {},
                  "blocks": [
                    {
                      "key": "87pal",
                      "data": {},
                      "inlineStyleRanges": [],
                      "entityRanges": [],
                      "text": "A device compliance policy in Microsoft Endpoint Manager",
                      "type": "unstyled",
                      "depth": 0
                    }
                  ]
                },
                "answerHtml": "<p>A device compliance policy in Microsoft Endpoint Manager</p>\n",
                "id": "rekj0j4ll"
              },
              "a4atpbozc": {
                "answer": {
                  "blocks": [
                    {
                      "key": "dchvg",
                      "type": "unstyled",
                      "inlineStyleRanges": [],
                      "depth": 0,
                      "data": {},
                      "text": "A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a client apps condition",
                      "entityRanges": []
                    }
                  ],
                  "entityMap": {}
                },
                "id": "a4atpbozc",
                "answerHtml": "<p>A conditional access policy in Microsoft Azure Active Directory (Azure AD) that has a client apps condition</p>\n"
              },
              "bsquilii4": {
                "answerHtml": "<p>An app protection policy in Microsoft Endpoint Manager</p>\n",
                "id": "bsquilii4",
                "answer": {
                  "blocks": [
                    {
                      "data": {},
                      "type": "unstyled",
                      "entityRanges": [],
                      "text": "An app protection policy in Microsoft Endpoint Manager",
                      "key": "6sjn1",
                      "depth": 0,
                      "inlineStyleRanges": []
                    }
                  ],
                  "entityMap": {}
                }
              }
            },
            "questionText": "Your company has a Microsoft 365 subscription. The company does not permit users to enroll personal devices in mobile device management (MDM). Users in the sales department have personal iOS devices. You need to ensure that the sales department users can use the Microsoft Power BI app from iOS devices to access the Power BI data in your tenant. The users must be prevented from backing up the app data to iCloud. What should you create? ",
            "references": {
              "blocks": [
                {
                  "text": "App protection policies that apply to Microsoft 365 apps, for example, Power BI, will protect apps even if the user is on an unmanaged device.",
                  "depth": 0,
                  "inlineStyleRanges": [],
                  "key": "6bh37",
                  "type": "unstyled",
                  "entityRanges": [],
                  "data": {}
                },
                {
                  "data": {},
                  "depth": 0,
                  "entityRanges": [
                    {
                      "length": 98,
                      "key": 0,
                      "offset": 0
                    }
                  ],
                  "inlineStyleRanges": [],
                  "key": "cimr4",
                  "text": "https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx",
                  "type": "unstyled"
                }
              ],
              "entityMap": {
                "0": {
                  "mutability": "MUTABLE",
                  "data": {
                    "url": "https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx",
                    "target": "_blank",
                    "href": "https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx"
                  },
                  "type": "LINK"
                }
              }
            },
            "question": {
              "blocks": [
                {
                  "depth": 0,
                  "key": "481vj",
                  "text": "Your company has a Microsoft 365 subscription.",
                  "type": "unstyled",
                  "entityRanges": [],
                  "data": {},
                  "inlineStyleRanges": []
                },
                {
                  "text": "The company does not permit users to enroll personal devices in mobile device management (MDM).",
                  "inlineStyleRanges": [],
                  "key": "7a48h",
                  "entityRanges": [],
                  "depth": 0,
                  "type": "unstyled",
                  "data": {}
                },
                {
                  "inlineStyleRanges": [],
                  "type": "unstyled",
                  "data": {},
                  "entityRanges": [],
                  "key": "2ims1",
                  "depth": 0,
                  "text": "Users in the sales department have personal iOS devices."
                },
                {
                  "key": "1qrdm",
                  "entityRanges": [],
                  "text": "You need to ensure that the sales department users can use the Microsoft Power BI app from iOS devices to access the Power BI data in your tenant.",
                  "type": "unstyled",
                  "depth": 0,
                  "inlineStyleRanges": [],
                  "data": {}
                },
                {
                  "depth": 0,
                  "key": "8m19v",
                  "inlineStyleRanges": [],
                  "data": {},
                  "type": "unstyled",
                  "entityRanges": [],
                  "text": "The users must be prevented from backing up the app data to iCloud."
                },
                {
                  "text": "What should you create?",
                  "key": "62b05",
                  "data": {},
                  "type": "unstyled",
                  "depth": 0,
                  "entityRanges": [],
                  "inlineStyleRanges": []
                },
                {
                  "data": {},
                  "depth": 0,
                  "type": "atomic",
                  "inlineStyleRanges": [],
                  "text": " ",
                  "entityRanges": [
                    {
                      "offset": 0,
                      "key": 0,
                      "length": 1
                    }
                  ],
                  "key": "ck7bs"
                },
                {
                  "depth": 0,
                  "inlineStyleRanges": [],
                  "key": "fb22e",
                  "data": {},
                  "entityRanges": [],
                  "text": "",
                  "type": "unstyled"
                }
              ],
              "entityMap": {
                "0": {
                  "type": "IMAGE",
                  "data": {
                    "src": "https://i.ibb.co/4VQpFYg/Policies-and-rules.png",
                    "alt": "Policies and rules"
                  },
                  "mutability": "IMMUTABLE"
                }
              }
            },
            "id": "zqutjz7m0",
            "type": "multiple-choice",
            "images": [
              "https://i.ibb.co/4VQpFYg/Policies-and-rules.png"
            ]
          }
        },
        "sectionId": "qwJW5VrBW",
        "publish": true,
        "title": "Microsoft 365 PowerShell administration test"
      }
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
      const questionMaxPoints = getMaxPoints(answers)
      const question = userAcct.tests[this.state.test.id][questionId]
      const pointsReceivedForQuestion = question ? gradeQuestion(question, answers) : 0

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
                        (this.state.userAcct.tests[this.state.test.id].score > 700 ? 'Pass' : 'Fail') :
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
