import {h, Component} from 'preact'
import Page from '../../../../../../components/page'
import {onAuthStateChanged} from '../../../../../../components/firebase/on-auth-state-changed'
import {getDoc} from '../../../../../../components/firebase/get-doc'
import saveDoc from '../../../../../../components/firebase/save-doc'
import Header from '../../../../../../components/test-question/header'
import Footer from '../../../../../../components/test-question/footer'
import Choice from '../../../../../../components/test-question/choice'
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

    const isBrowser = () => typeof window !== 'undefined'

    this.state = {
      uid: '',
      unsavedChanges: false,
      alert: '',
      answerShown: false,
      showQuestionList: false,
      question: {
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
      },
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
      },
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
      if (this.state.unsavedChanges) {
        this.save().then(() => {
          window.location.href = `/course/ms-500/test/${this.state.test.slug}/question/${question.slug}`
        })
      } else {
        window.location.href = `/course/ms-500/test/${this.state.test.slug}/question/${question.slug}`
      }
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
    window.location.href = `/course/ms-500/test/${this.state.test.slug}/summary`
  }

  render() {
    return (
      <Page jsonLdType={'QAPage'} jsonLd={this.state.jsonLd} title={this.state.question.title} description={this.state.question.questionText}>
        <main>
          <Container>
            <Header uid={this.state.uid} questionIdx={this.state.questionIdx} previousQuestionSlug={this.state.previousQuestionSlug} nextQuestionSlug={this.state.nextQuestionSlug} testSlug={this.state.test.slug} toggleEndExam={this.toggleEndExam} numOfQuestions={Object.values(this.state.test.questions).length} />
            {
              {
                'multiple-choice': <Choice question={this.state.question} setAnswer={this.setAnswer} answers={this.state.userAcct.tests[this.state.test.id][this.state.question.id].answers} testAnswers={this.state.test.answers[this.state.question.id]} showAnswers={this.state.answerShown} />
              }[this.state.question.type]
            }
            <Grid container>
              <Grid item xs={12}>
                <div dangerouslySetInnerHTML={{__html: this.state.question.referencesHtml}} style={{display: this.state.answerShown ? 'block' : 'none'}} />
              </Grid>
            </Grid>
            <Footer uid={this.state.uid} previousQuestionSlug={this.state.previousQuestionSlug} nextQuestionSlug={this.state.nextQuestionSlug} testSlug={this.state.test.slug} toggleEndExam={this.toggleEndExam} toggleShowAnswer={this.toggleShowAnswer} toggleQuestionList={this.toggleQuestionList} />
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
