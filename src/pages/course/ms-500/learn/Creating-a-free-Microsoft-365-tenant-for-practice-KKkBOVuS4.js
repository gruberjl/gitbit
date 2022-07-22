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
      path: '/course/ms-500/learn/Creating-a-free-Microsoft-365-tenant-for-practice-KKkBOVuS4',
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7famg', text: 'Before we can start learning how to secure Microsoft 365 we will need a test tenant. A tenant where we can implement whatever you want and test things out before implementing them in production. A place where we can perform hands-on learning in a live environment without affecting production. Fortunately, we can set up a Microsoft 365 tenant for free to try out. You only need a free email address, such as gmail.com, outlook.com, or yahoo.com, and a phone number.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 13, offset: 9}], inlineStyleRanges: [], key: '424dd', text: '1. Go to Office 365 E5     ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 10, offset: 9}], inlineStyleRanges: [], key: 'cims2', text: '2. Click Free Trial', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '8ki3m', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 35, style: 'BOLD'}], key: 'c6rpj', text: '3. Enter your email address. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 9, style: 'BOLD'}], key: '90fvb', text: '4. Click Set up account.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 62, style: 'BOLD'}], key: '3fqj7', text: '5. Fill out the form under Tell us about yourself. Then click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: '6mjuf', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '67j8a', text: '6. Enter your phone number and click Send verification code. Enter the code texted to you.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: 'b4bvf', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 18, offset: 75, style: 'BOLD'}, {length: 4, offset: 130, style: 'BOLD'}], key: '6q2lc', text: '7. Enter a name for your test tenant, for example, gitbittest1. Then click Check Availability. Find an available name. Then click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: '242v4', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 105, style: 'BOLD'}], key: 'e07ns', text: '8. Then enter a username, and password for your new tenant. Remember them or write them down. Then click Sign up.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ano85', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eml33', text: 'That\'s it. You now have a Microsoft 365 test tenant.', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'left', alt: 'Microsoft 365 E5 Trial', height: 'auto', src: 'https://i.ibb.co/F07sjQJ/microsoft-365-e5-trial.png', targetOption: '_blank', url: 'https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.17&type=3&subid=0', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {alignment: 'left', alt: 'Tell us about yourself form', height: 'auto', src: 'https://i.ibb.co/MMLchmz/tell-us-about-yourself.png', targetOption: '_blank', url: 'https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.17&type=3&subid=0', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 2: {data: {alignment: 'none', alt: 'Microsoft 365 E5 Trial', height: 'auto', src: 'https://i.ibb.co/F07sjQJ/microsoft-365-e5-trial.png', targetOption: '_blank', url: 'https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.17&type=3&subid=0', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Tell us about yourself form', height: 'auto', src: 'https://i.ibb.co/MMLchmz/tell-us-about-yourself.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Send verification code', height: 'auto', src: 'https://i.ibb.co/0ngk6BK/send-verification-code.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'How you\'ll sign in', height: 'auto', src: 'https://i.ibb.co/xSYVRY1/how-youll-sign-in.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'How you\'ll sign in - enter credentials', height: 'auto', src: 'https://i.ibb.co/QJXH0Dk/how-youll-sign-in-2.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'How to create a free Microsoft 365 tenant to test new security features and pass you MS-500', featuredImage: 'https://i.ibb.co/F07sjQJ/microsoft-365-e5-trial.png', id: 'KKkBOVuS4', images: ['https://i.ibb.co/5L6jZrq/sign-up-for-microsoft-365-free-trial.png', 'https://i.ibb.co/5L6jZrq/sign-up-for-microsoft-365-free-trial.png', 'https://i.ibb.co/F07sjQJ/microsoft-365-e5-trial.png', 'https://i.ibb.co/MMLchmz/tell-us-about-yourself.png', 'https://i.ibb.co/0ngk6BK/send-verification-code.png', 'https://i.ibb.co/xSYVRY1/how-youll-sign-in.png', 'https://i.ibb.co/xSYVRY1/how-youll-sign-in.png', 'https://i.ibb.co/QJXH0Dk/how-youll-sign-in-2.png'], publish: true, pushlish: true, sectionId: 'qwJW5VrBW', slug: 'Creating-a-free-Microsoft-365-tenant-for-practice-KKkBOVuS4', title: 'Creating a free Microsoft 365 tenant for practice', type: 'article'},
      nextContentSlug: 'Managing-the-Microsoft-365-tenant-Introduction-to-the-admin-centers-bzotoOjEe',
      previousContentSlug: 'Whats-in-this-course-cpchjBLkC',
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
            `}
          </style>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={9}>
                <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                <div><p>Before we can start learning how to secure Microsoft 365 we will need a test tenant. A tenant where we can implement whatever you want and test things out before implementing them in production. A place where we can perform hands-on learning in a live environment without affecting production. Fortunately, we can set up a Microsoft 365 tenant for free to try out. You only need a free email address, such as gmail.com, outlook.com, or yahoo.com, and a phone number.</p>
                  <p>1. Go to <a href="https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.17&type=3&subid=0" target="_blank" rel="noreferrer">Office 365 E5</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <p>2. Click <a href="https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.17&type=3&subid=0" target="_blank" rel="noreferrer">Free Trial</a></p>
                  <div ><img src="https://i.ibb.co/F07sjQJ/microsoft-365-e5-trial.png" alt="Microsoft 365 E5 Trial" style="height: auto;width: auto" /></div>
                  <p>3. Enter your email address. Click <strong>Next</strong>.</p>
                  <p>4. Click <strong>Set up account</strong>.</p>
                  <p>5. Fill out the form under Tell us about yourself. Then click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/MMLchmz/tell-us-about-yourself.png" alt="Tell us about yourself form" style="height: auto;width: auto" /></div>
                  <p>6. Enter your phone number and click Send verification code. Enter the code texted to you.</p>
                  <div ><img src="https://i.ibb.co/0ngk6BK/send-verification-code.png" alt="Send verification code" style="height: auto;width: auto" /></div>
                  <p>7. Enter a name for your test tenant, for example, gitbittest1. Then click <strong>Check Availability</strong>. Find an available name. Then click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/xSYVRY1/how-youll-sign-in.png" alt="How you'll sign in" style="height: auto;width: auto" /></div>
                  <p>8. Then enter a username, and password for your new tenant. Remember them or write them down. Then click <strong>Sign up</strong>.</p>
                  <div ><img src="https://i.ibb.co/QJXH0Dk/how-youll-sign-in-2.png" alt="How you'll sign in - enter credentials" style="height: auto;width: auto" /></div>
                  <p>That's it. You now have a Microsoft 365 test tenant.</p>
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
