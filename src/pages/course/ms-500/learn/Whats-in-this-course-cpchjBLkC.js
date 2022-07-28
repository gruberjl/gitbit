/* eslint react/jsx-no-undef: "off", no-tabs: "off", no-irregular-whitespace: "off" */
import {h, Component} from 'preact'
import Page from '../../../../components/page'
import ContentsRead from '../../../../components/contents-read'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import {getDoc} from '../../../../components/firebase/get-doc'
import saveDoc from '../../../../components/firebase/save-doc'
import {onAuthStateChanged} from '../../../../components/firebase/on-auth-state-changed'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import Box from '@mui/material/Box'

const isBrowser = () => typeof window !== 'undefined'

const marginTop24Style = {
  marginTop: '24px'
}
let bottomOfArticle

class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.trackScrolling = this.trackScrolling.bind(this)
    this.setHasCompletedContent = this.setHasCompletedContent.bind(this)
    this.getUid = this.getUid.bind(this)
    this.addScroll = this.addScroll.bind(this)

    this.state = {
      isTrackScrolling: false,
      path: '/course/ms-500/learn/Whats-in-this-course-cpchjBLkC',
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 15, style: 'color-rgb(33,37,41)'}, {length: 6, offset: 15, style: 'bgcolor-rgb(255,255,255)'}, {length: 6, offset: 15, style: 'fontsize-16'}, {length: 6, offset: 15, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 6, offset: 33, style: 'BOLD'}], key: '4m8er', text: 'Welcome to the MS-500  course on GitBit! In this course, you\'ll learn everything you need to know to pass the MS-500: Microsoft 365 Security Administration. You\'ll also learn everything you need to know to secure your Office 365 tenant. Throughout this course, we\'ll be doing a ton of lectures and a ton of hands-on. For a hands-on experience, we\'ll be using a free Microsoft 365 tenant.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9jcd2', text: 'What\'s in the MS-500', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8okhq', text: 'The MS-500: Microsoft 365 Security Administration is a 40-60 question exam that includes multiple-choice, drag and drop, as well as, hands-on labs. It covers a wide variety of security and administration topics on Microsoft 365.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2ps14', text: 'Here\'s a quick break-down from Microsoft on what\'s covered in the MS-500:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '30k5v', text: 'Implement and manage identity and access (35-40%)', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '71p15', text: 'Secure Microsoft 365 hybrid environments', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9ftmn', text: 'Secure Identities', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1lsg4', text: 'Implement authentication methods', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'chn41', text: 'Implement conditional access', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '75iu5', text: 'Implement roles and role groups', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dhpef', text: 'Configure and manage identity governance', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '49kq2', text: 'Implement Azure AD Identity Protection ', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c8v92', text: 'Implement and manage threat protection (25-30%)', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6t35a', text: 'Implement and manage Microsoft Defender for Identity', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ap8gj', text: 'Implement device threat protection', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6hrnd', text: 'Implement and manage device and application protection', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eiqam', text: 'Implement and manage Microsoft Defender for Office 365', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f9po1', text: 'Monitor Microsoft 365 Security with Azure Sentinel', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4p3pl', text: 'Implement and manage Microsoft Cloud App Security', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '91jgf', text: 'Implement and manage information protection (10-15%)', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2k422', text: 'Manage sensitive information', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'af0ci', text: 'Manage Data Loss Prevention (DLP)', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2qujk', text: 'Manage data governance and retention', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7rlfl', text: 'Manage governance and compliance features in Microsoft 365 (20-25%)', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '79q8l', text: 'Configure and analyze security reporting', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7feo3', text: 'Manage and analyze audit logs and reports', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2l6mm', text: 'Discover and respond to compliance queries in Microsoft 365', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6p8d0', text: 'Manage regulatory compliance', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fvsmr', text: 'Manage insider risk solutions in Microsoft 365', type: 'unordered-list-item'}], entityMap: {}}, datePublished: '2022/5/26', description: 'Topics covered in GitBit\'s MS-500: Microsoft 365 Security Administration course', featuredImage: 'https://i.ibb.co/zFs9Vfb/microsoft365-security-administrator-associate-600x600.png', id: 'cpchjBLkC', images: ['https://i.ibb.co/KLRXSmP/gitbit-icon-500x500.png', 'https://i.ibb.co/zFs9Vfb/microsoft365-security-administrator-associate-600x600.png'], publish: true, sectionId: 'qwJW5VrBW', slug: 'Whats-in-this-course-cpchjBLkC', title: 'What\'s in this course?', type: 'article'},
      nextContentSlug: 'Creating-a-free-Microsoft-365-tenant-for-practice-KKkBOVuS4',
      previousContentSlug: 'PREVIOUS_CONTENT',
      hasCompletedContent: false,
      userAcct: {completedContent: []}
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged(this.getUid)
    this.addScroll()
  }

  getUid(user) {
    if (user) {
      getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
        if (!userAcct.completedContent)
          userAcct.completedContent = []

        this.setState({userAcct})
      })
    }
  }

  addScroll() {
    if (isBrowser()) {
      const el = document.getElementById('bottom-of-article')
      const rect = el.getBoundingClientRect()
      bottomOfArticle = rect.top
      document.addEventListener('scroll', this.trackScrolling)
      this.setState({isTrackScrolling: true})
    }
  }

  componentWillUnmount() {
    if (isBrowser() && this.state.isTrackScrolling)
      document.removeEventListener('scroll', this.trackScrolling)

    this.onAuthStateChangedListener()
  }

  trackScrolling() {
    if (bottomOfArticle && bottomOfArticle <= window.scrollY+window.innerHeight)
      this.setHasCompletedContent(true)
  }

  setHasCompletedContent(val) {
    if (val === true) {
      document.removeEventListener('scroll', this.trackScrolling)
      this.setState({isTrackScrolling: false})

      if (this.state.userAcct.id) {
        const userAcct = this.state.userAcct

        if (!userAcct.completedContent.includes(this.state.article.id)) {
          userAcct.completedContent.push(this.state.article.id)
          this.setState({userAcct})
          saveDoc('courses/MS-500/users', userAcct)
        }
      }
    }
  }

  render() {
    const jsonLd = {
      headline: this.state.article.title,
      datePublished: this.state.article.datePublished,
      keywords: [
        'Microsoft',
        'Microsoft 365',
        'Office 365',
        'MS-500',
        'Microsoft 365 Security Administration'
      ],
      author: {
        '@type': 'Person',
        name: 'John Gruber',
        url: 'https://medium.com/@gruberjl'
      }
    }

    return (
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={this.state.article.featuredImage} canonical={this.state.path} title={this.state.article.title} description={this.state.article.description}>
        <main>
          <style>
            {`main, h1, h2, h3, h4, h5, h6, p, span, li, a {
                font-family: Roboto, Helvetica, Arial, sans-serif;
                margin-bottom: 0.35em;
                word-break: break-word;
              }
              h1 {
                font-weight: 400;
                font-size: 3rem;
                line-height: 1.167;
                letter-spacing: 0em;
              }
              h2 {
                font-weight: 400;
                font-size: 2.125rem;
                line-height: 1.235;
                letter-spacing: 0.00735em;
              }
              h3 {
                font-weight: 400;
                font-size: 1.5rem;
                line-height: 1.334;
                letter-spacing: 0em;
              }
              h4 {
                font-weight: 500;
                font-size: 1.25rem;
                line-height: 1.6;
                letter-spacing: 0.0075em;
              }
              p, span, li, a {
                font-size: 1rem;
                line-height: 1.5;
                letter-spacing: 0.00938em;
              }
              img {
                max-width: 100%;
                margin: 0 auto;
                display: block;
              }
              pre {
                white-space: pre-wrap;
              }
            `}
          </style>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={9}>
                <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                <div><p>Welcome to the <span >MS-500</span>  course on <strong>GitBit</strong>! In this course, you'll learn everything you need to know to pass the MS-500: Microsoft 365 Security Administration. You'll also learn everything you need to know to secure your Office 365 tenant. Throughout this course, we'll be doing a ton of lectures and a ton of hands-on. For a hands-on experience, we'll be using a free Microsoft 365 tenant.</p>
                  <h2>What's in the MS-500</h2>
                  <p>The MS-500: Microsoft 365 Security Administration is a 40-60 question exam that includes multiple-choice, drag and drop, as well as, hands-on labs. It covers a wide variety of security and administration topics on Microsoft 365.</p>
                  <p>Here's a quick break-down from Microsoft on what's covered in the MS-500:</p>
                  <h3>Implement and manage identity and access (35-40%)</h3>
                  <ul>
                    <li>Secure Microsoft 365 hybrid environments</li>
                    <li>Secure Identities</li>
                    <li>Implement authentication methods</li>
                    <li>Implement conditional access</li>
                    <li>Implement roles and role groups</li>
                    <li>Configure and manage identity governance</li>
                    <li>Implement Azure AD Identity Protection&nbsp;</li>
                  </ul>
                  <h3>Implement and manage threat protection (25-30%)</h3>
                  <ul>
                    <li>Implement and manage Microsoft Defender for Identity</li>
                    <li>Implement device threat protection</li>
                    <li>Implement and manage device and application protection</li>
                    <li>Implement and manage Microsoft Defender for Office 365</li>
                    <li>Monitor Microsoft 365 Security with Azure Sentinel</li>
                    <li>Implement and manage Microsoft Cloud App Security</li>
                  </ul>
                  <h3>Implement and manage information protection (10-15%)</h3>
                  <ul>
                    <li>Manage sensitive information</li>
                    <li>Manage Data Loss Prevention (DLP)</li>
                    <li>Manage data governance and retention</li>
                  </ul>
                  <h3>Manage governance and compliance features in Microsoft 365 (20-25%)</h3>
                  <ul>
                    <li>Configure and analyze security reporting</li>
                    <li>Manage and analyze audit logs and reports</li>
                    <li>Discover and respond to compliance queries in Microsoft 365</li>
                    <li>Manage regulatory compliance</li>
                    <li>Manage insider risk solutions in Microsoft 365</li>
                  </ul>
                </div>
                <div id="bottom-of-article" />
                <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 3}}>
                  <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
                  <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos />}>Next</Button>
                </Box>
              </Grid>
              <Grid item lg={3} sx={{mt: 3}}>
                <ContentsRead completedContent={this.state.userAcct.completedContent} />
              </Grid>
            </Grid>
          </Container>
        </main>
      </Page>
    )
  }
}

export default ArticlePage
