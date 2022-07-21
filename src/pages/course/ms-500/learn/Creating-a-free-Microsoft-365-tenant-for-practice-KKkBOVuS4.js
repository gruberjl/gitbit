import { h, Component } from "preact"
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

const removePaddingStyle = {
  padding: '0px'
}

const marginTop24Style = {
  marginTop: '24px'
}

const listItemStyle = {
  border: 'none',
  paddingTop: '12px',
  paddingBottom: '12px'
}

class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.trackScrolling = this.trackScrolling.bind(this)
    this.setHasCompletedContent = this.setHasCompletedContent.bind(this)

    this.state = {
      isTrackScrolling: false,
      path: '/course/ms-500/learn/Creating-a-free-Microsoft-365-tenant-for-practice-KKkBOVuS4',
      article: {"article":{"entityMap":{"0":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","height":"auto","src":"https://i.ibb.co/F07sjQJ/microsoft-365-e5-trial.png","url":"https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.17&type=3&subid=0","alignment":"left","width":"auto","alt":"Microsoft 365 E5 Trial"}},"1":{"data":{"alignment":"left","height":"auto","alt":"Tell us about yourself form","width":"auto","src":"https://i.ibb.co/MMLchmz/tell-us-about-yourself.png","url":"https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.17&type=3&subid=0","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"},"2":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Microsoft 365 E5 Trial","url":"https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.17&type=3&subid=0","height":"auto","alignment":"none","targetOption":"_blank","width":"auto","src":"https://i.ibb.co/F07sjQJ/microsoft-365-e5-trial.png"}},"3":{"mutability":"MUTABLE","data":{"alt":"Tell us about yourself form","alignment":"none","width":"auto","src":"https://i.ibb.co/MMLchmz/tell-us-about-yourself.png","height":"auto"},"type":"IMAGE"},"4":{"data":{"src":"https://i.ibb.co/0ngk6BK/send-verification-code.png","alt":"Send verification code","height":"auto","alignment":"none","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"5":{"mutability":"MUTABLE","data":{"height":"auto","width":"auto","src":"https://i.ibb.co/xSYVRY1/how-youll-sign-in.png","alignment":"none","alt":"How you'll sign in"},"type":"IMAGE"},"6":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","width":"auto","src":"https://i.ibb.co/QJXH0Dk/how-youll-sign-in-2.png","alignment":"none","alt":"How you'll sign in - enter credentials"}}},"blocks":[{"data":{},"key":"7famg","inlineStyleRanges":[],"text":"Before we can start learning how to secure Microsoft 365 we will need a test tenant. A tenant where we can implement whatever you want and test things out before implementing them in production. A place where we can perform hands-on learning in a live environment without affecting production. Fortunately, we can set up a Microsoft 365 tenant for free to try out. You only need a free email address, such as gmail.com, outlook.com, or yahoo.com, and a phone number.","type":"unstyled","entityRanges":[],"depth":0},{"key":"424dd","type":"unstyled","entityRanges":[{"key":0,"offset":9,"length":13}],"data":{},"depth":0,"inlineStyleRanges":[],"text":"1. Go to Office 365 E5     "},{"entityRanges":[{"length":10,"key":1,"offset":9}],"data":{},"depth":0,"key":"cims2","text":"2. Click Free Trial","inlineStyleRanges":[],"type":"unstyled"},{"key":"8ki3m","depth":0,"data":{},"type":"atomic","inlineStyleRanges":[],"text":" ","entityRanges":[{"offset":0,"key":2,"length":1}]},{"text":"3. Enter your email address. Click Next.","type":"unstyled","depth":0,"inlineStyleRanges":[{"style":"BOLD","offset":35,"length":4}],"data":{},"key":"c6rpj","entityRanges":[]},{"type":"unstyled","text":"4. Click Set up account.","depth":0,"data":{},"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":14}],"entityRanges":[],"key":"90fvb"},{"data":{},"inlineStyleRanges":[{"length":4,"style":"BOLD","offset":62}],"key":"3fqj7","text":"5. Fill out the form under Tell us about yourself. Then click Next.","type":"unstyled","depth":0,"entityRanges":[]},{"entityRanges":[{"key":3,"offset":0,"length":1}],"text":" ","key":"6mjuf","data":{},"type":"atomic","depth":0,"inlineStyleRanges":[]},{"entityRanges":[],"key":"67j8a","inlineStyleRanges":[],"depth":0,"type":"unstyled","data":{},"text":"6. Enter your phone number and click Send verification code. Enter the code texted to you."},{"text":" ","inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":4}],"data":{},"key":"b4bvf","depth":0,"type":"atomic"},{"text":"7. Enter a name for your test tenant, for example, gitbittest1. Then click Check Availability. Find an available name. Then click Next.","inlineStyleRanges":[{"length":18,"offset":75,"style":"BOLD"},{"offset":130,"style":"BOLD","length":4}],"type":"unstyled","entityRanges":[],"key":"6q2lc","depth":0,"data":{}},{"type":"atomic","key":"242v4","entityRanges":[{"offset":0,"key":5,"length":1}],"data":{},"text":" ","depth":0,"inlineStyleRanges":[]},{"entityRanges":[],"key":"e07ns","inlineStyleRanges":[{"style":"BOLD","length":7,"offset":105}],"type":"unstyled","text":"8. Then enter a username, and password for your new tenant. Remember them or write them down. Then click Sign up.","data":{},"depth":0},{"inlineStyleRanges":[],"key":"ano85","text":" ","type":"atomic","entityRanges":[{"offset":0,"key":6,"length":1}],"depth":0,"data":{}},{"key":"eml33","text":"That's it. You now have a Microsoft 365 test tenant.","type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"depth":0,"data":{}}]},"pushlish":true,"datePublished":"2022/5/26","type":"article","title":"Creating a free Microsoft 365 tenant for practice","images":["https://i.ibb.co/5L6jZrq/sign-up-for-microsoft-365-free-trial.png","https://i.ibb.co/5L6jZrq/sign-up-for-microsoft-365-free-trial.png","https://i.ibb.co/F07sjQJ/microsoft-365-e5-trial.png","https://i.ibb.co/MMLchmz/tell-us-about-yourself.png","https://i.ibb.co/0ngk6BK/send-verification-code.png","https://i.ibb.co/xSYVRY1/how-youll-sign-in.png","https://i.ibb.co/xSYVRY1/how-youll-sign-in.png","https://i.ibb.co/QJXH0Dk/how-youll-sign-in-2.png"],"publish":true,"slug":"Creating-a-free-Microsoft-365-tenant-for-practice-KKkBOVuS4","id":"KKkBOVuS4","featuredImage":"https://i.ibb.co/F07sjQJ/microsoft-365-e5-trial.png","description":"How to create a free Microsoft 365 tenant to test new security features and pass you MS-500","sectionId":"qwJW5VrBW"},
      nextContentSlug: 'Managing-the-Microsoft-365-tenant-Introduction-to-the-admin-centers-bzotoOjEe',
      previousContentSlug: 'Whats-in-this-course-cpchjBLkC',
      hasCompletedContent: false,
      userAcct: {completedContent: []}
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged((user) => {
      if (user) {
        getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
          if (!userAcct.completedContent) {
            userAcct.completedContent = []
          }
          this.setState({userAcct})
        })
      }
    })

    if (isBrowser()) {
      document.addEventListener('scroll', this.trackScrolling)
      this.setState({isTrackScrolling: true})
    }
  }

  componentWillUnmount() {
    if (isBrowser() && this.state.isTrackScrolling)
      document.removeEventListener('scroll', this.trackScrolling);

    this.onAuthStateChangedListener()
  }

  trackScrolling() {
    if (document.body.scrollHeight * .8 < window.innerHeight + window.scrollY) {
      this.setHasCompletedContent(true)
    }
  }

  setHasCompletedContent(val) {
    if (val === true) {
      document.removeEventListener('scroll', this.trackScrolling);
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
        "Microsoft",
        "Microsoft 365",
        "Office 365",
        'MS-500',
        'Microsoft 365 Security Administration'
      ],
      "author": {
        "@type": "Person",
        "name": "John Gruber",
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
<p>1. Go to <a href="https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.17&type=3&subid=0" target="_blank">Office 365 E5</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p>2. Click <a href="https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.17&type=3&subid=0" target="_blank">Free Trial</a></p>
<div ><img src="https://i.ibb.co/F07sjQJ/microsoft-365-e5-trial.png" alt="Microsoft 365 E5 Trial" style="height: auto;width: auto"/></div>
<p>3. Enter your email address. Click <strong>Next</strong>.</p>
<p>4. Click <strong>Set up account</strong>.</p>
<p>5. Fill out the form under Tell us about yourself. Then click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/MMLchmz/tell-us-about-yourself.png" alt="Tell us about yourself form" style="height: auto;width: auto"/></div>
<p>6. Enter your phone number and click Send verification code. Enter the code texted to you.</p>
<div ><img src="https://i.ibb.co/0ngk6BK/send-verification-code.png" alt="Send verification code" style="height: auto;width: auto"/></div>
<p>7. Enter a name for your test tenant, for example, gitbittest1. Then click <strong>Check Availability</strong>. Find an available name. Then click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/xSYVRY1/how-youll-sign-in.png" alt="How you'll sign in" style="height: auto;width: auto"/></div>
<p>8. Then enter a username, and password for your new tenant. Remember them or write them down. Then click <strong>Sign up</strong>.</p>
<div ><img src="https://i.ibb.co/QJXH0Dk/how-youll-sign-in-2.png" alt="How you'll sign in - enter credentials" style="height: auto;width: auto"/></div>
<p>That's it. You now have a Microsoft 365 test tenant.</p>
</div>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt:3 }}>
                  <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
                  <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos/>}>Next</Button>
                </Box>
              </Grid>
              <Grid item lg={3} sx={{ mt: 3 }}>
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
