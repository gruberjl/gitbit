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
      path: '/course/ms-500/learn/Locking-down-your-Microsoft-365-tenant-from-Microsoft-engineers-FldNualGC',
      article: {"description":"Customer Lockbox is a tool built into the Microsoft 365 tenant that locks out Microsoft engineers from accessing your tenant","id":"FldNualGC","images":["https://i.ibb.co/P6KjrNK/data-access-request.png","https://i.ibb.co/P6KjrNK/data-access-request.png","https://i.ibb.co/RzpwWs3/Customer-Lockbox-Request.png","https://i.ibb.co/DCmpnT9/Enable-Customer-Lockbox.png"],"sectionId":"AFV_acckJ","featuredImage":"https://i.ibb.co/DCmpnT9/Enable-Customer-Lockbox.png","publish":true,"slug":"Locking-down-your-Microsoft-365-tenant-from-Microsoft-engineers-FldNualGC","type":"article","datePublished":"2022/5/26","article":{"entityMap":{"0":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","src":"https://i.ibb.co/DCmpnT9/Enable-Customer-Lockbox.png","alt":"Enable customer lockbox","width":"auto","height":"auto"}},"1":{"data":{"width":"auto","height":"auto","alt":"Customer Lockbox request email","src":"https://i.ibb.co/RzpwWs3/Customer-Lockbox-Request.png","alignment":"left"},"type":"IMAGE","mutability":"MUTABLE"},"2":{"type":"IMAGE","data":{"alt":"Customer Lockbox data access requests","height":"auto","src":"https://i.ibb.co/P6KjrNK/data-access-request.png","width":"auto","alignment":"left"},"mutability":"MUTABLE"}},"blocks":[{"data":{},"key":"42g4m","text":"I've never had any issues with Microsoft engineers accessing my data or changing my tenant without my explicit approval. Nevertheless, Microsoft has developed a way to lock out Microsoft engineers from your tenant. If you open a support ticket with Microsoft and they require access to your tenant they will need to send you an explicit request. Microsoft calls this feature Customer Lockbox.","entityRanges":[],"inlineStyleRanges":[],"type":"unstyled","depth":0},{"key":"627on","data":{},"text":"Customer Lockbox allows you and your admins to secure your Microsoft 365 tenant from Microsoft engineers. That's right. The engineers at the organization hosting your data won't be able to access your data. Not without your explicit permission. Once a request is approved the Microsoft engineers will only be able to access your data for a limited window. Typically, 4 hours but it may be longer or shorter depending on your service issues.","depth":0,"inlineStyleRanges":[],"entityRanges":[],"type":"unstyled"},{"entityRanges":[],"type":"header-two","inlineStyleRanges":[],"text":"Lockbox workflow","key":"6faak","depth":0,"data":{}},{"data":{},"depth":0,"text":"Before we jump into configuring Customer Lockbox let's discuss the broad strokes or take a bird's eye view of the workflow. So Let's say you've enabled Customer Lockbox. A month goes by and all of a sudden you have an issue with your Microsoft 365 tenant. Uh-oh. You open a service request with Microsoft and then they tell you they need access to your tenant. With Lockbox enabled the following will take place:","key":"6tkm4","type":"unstyled","entityRanges":[],"inlineStyleRanges":[]},{"inlineStyleRanges":[],"data":{},"type":"unstyled","text":"1. You open a support ticket with Microsoft.","key":"38nfe","depth":0,"entityRanges":[]},{"data":{},"entityRanges":[],"inlineStyleRanges":[],"type":"unstyled","depth":0,"key":"c6tmb","text":"2. Microsoft views the request and verifies they need to access your tenant."},{"inlineStyleRanges":[],"text":"3. The Microsoft engineer and their manager will send the Lockbox request to you and your other Customer Lockbox admins.","entityRanges":[],"key":"89t8a","type":"unstyled","data":{},"depth":0},{"data":{},"key":"2hs2m","entityRanges":[],"text":"4. You or another admin in your organization will approve the request.","depth":0,"type":"unstyled","inlineStyleRanges":[]},{"key":"3ldgf","depth":0,"text":"5. The Microsoft engineer will review your tenant.","entityRanges":[],"data":{},"inlineStyleRanges":[],"type":"unstyled"},{"inlineStyleRanges":[],"type":"unstyled","key":"742uc","text":"6. The request will time out and the Microsoft engineer will be automatically locked out of your data again.","entityRanges":[],"depth":0,"data":{}},{"depth":0,"inlineStyleRanges":[],"type":"header-two","entityRanges":[],"text":"License requirements","key":"fco89","data":{}},{"text":"Your users will need one of the following licenses to enable the Customer Lockbox feature:","data":{},"key":"9onng","inlineStyleRanges":[],"entityRanges":[],"depth":0,"type":"unstyled"},{"data":{},"key":"e5mkv","entityRanges":[],"depth":0,"type":"unordered-list-item","text":"Office 365 E5","inlineStyleRanges":[]},{"entityRanges":[],"depth":0,"inlineStyleRanges":[],"key":"9aviu","data":{},"text":"Microsoft 365 E5","type":"unordered-list-item"},{"key":"1o357","type":"unordered-list-item","depth":0,"data":{},"entityRanges":[],"inlineStyleRanges":[],"text":"Microsoft 365 E5 Compliance"},{"type":"unordered-list-item","data":{},"inlineStyleRanges":[],"entityRanges":[],"depth":0,"key":"4p8c5","text":"Office 365 Advanced Compliance"},{"text":"Enable Customer Lockbox","key":"9cori","inlineStyleRanges":[],"type":"header-two","entityRanges":[],"depth":0,"data":{}},{"text":"So now that we've reviewed the overview and talked about licensing let's get into it. How do we enable Customer Lockbox? It's pretty simple, just click the right check box and the right place.","key":"ad6o6","entityRanges":[],"data":{},"type":"unstyled","depth":0,"inlineStyleRanges":[]},{"entityRanges":[],"text":"1. Log in to the Microsoft 365 admin center > Settings > Org settings > Security & privacy > Customer Lockbox.","key":"5nm90","data":{},"inlineStyleRanges":[{"length":26,"style":"BOLD","offset":17},{"length":8,"style":"BOLD","offset":46},{"offset":57,"style":"BOLD","length":12},{"style":"BOLD","offset":72,"length":18},{"style":"BOLD","length":16,"offset":93}],"type":"unstyled","depth":0},{"key":"36rn3","data":{},"depth":0,"type":"unstyled","inlineStyleRanges":[{"offset":9,"length":45,"style":"BOLD"},{"style":"BOLD","length":4,"offset":62}],"text":"2. Click Require approval for all data access requests. Click Save.","entityRanges":[]},{"entityRanges":[{"key":0,"length":1,"offset":0}],"data":{},"depth":0,"key":"6i5pt","inlineStyleRanges":[],"text":" ","type":"atomic"},{"entityRanges":[],"depth":0,"key":"72ctb","data":{},"text":"Approving Customer Lockbox requests","type":"header-two","inlineStyleRanges":[]},{"key":"ebfll","inlineStyleRanges":[],"data":{},"text":"So now you have Customer Lockbox enabled let's talk about the Customer Lockbox requests because eventually, you'll get one... Maybe. Maybe not. Who knows. But either way, you'll need to know how to approve the requests in case you get one. So, how do you know if they have a request and how do you approve it once the request is opened?","entityRanges":[],"depth":0,"type":"unstyled"},{"data":{},"type":"unstyled","key":"e6ttt","inlineStyleRanges":[],"depth":0,"entityRanges":[],"text":"In short, you'll receive an email that looks like the following:"},{"text":" ","key":"b7cgh","inlineStyleRanges":[],"type":"atomic","entityRanges":[{"length":1,"offset":0,"key":1}],"data":{},"depth":0},{"data":{},"type":"unstyled","inlineStyleRanges":[],"text":"Now that we have a Customer Lockbox request how do we approve the request so the Microsoft engineer can access our tenant and fix it? It's simple, just find the right button and click it.","depth":0,"entityRanges":[],"key":"59pnh"},{"text":"1. Log in to the Microsoft 365 admin center > Support > Customer Lockbox Requests.","inlineStyleRanges":[{"length":40,"style":"BOLD","offset":3},{"style":"BOLD","offset":46,"length":7},{"style":"BOLD","length":25,"offset":56}],"key":"e70s1","type":"unstyled","entityRanges":[],"depth":0,"data":{}},{"text":"2. Click the request you wish to approve.","data":{},"entityRanges":[],"type":"unstyled","key":"9mqo5","inlineStyleRanges":[],"depth":0},{"key":"5gbmc","depth":0,"text":" ","data":{},"entityRanges":[{"key":2,"length":1,"offset":0}],"type":"atomic","inlineStyleRanges":[]},{"depth":0,"inlineStyleRanges":[{"length":7,"style":"BOLD","offset":9}],"type":"unstyled","key":"3oug8","data":{},"entityRanges":[],"text":"3. Click Approve."}]},"title":"Locking down your Microsoft 365 tenant from Microsoft engineers"},
      nextContentSlug: 'Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ',
      previousContentSlug: 'Implement-Self-service-password-reset-in-Microsoft-365-2S9jn0aLr',
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
                <div><p>I've never had any issues with Microsoft engineers accessing my data or changing my tenant without my explicit approval. Nevertheless, Microsoft has developed a way to lock out Microsoft engineers from your tenant. If you open a support ticket with Microsoft and they require access to your tenant they will need to send you an explicit request. Microsoft calls this feature Customer Lockbox.</p>
<p>Customer Lockbox allows you and your admins to secure your Microsoft 365 tenant from Microsoft engineers. That's right. The engineers at the organization hosting your data won't be able to access your data. Not without your explicit permission. Once a request is approved the Microsoft engineers will only be able to access your data for a limited window. Typically, 4 hours but it may be longer or shorter depending on your service issues.</p>
<h2>Lockbox workflow</h2>
<p>Before we jump into configuring Customer Lockbox let's discuss the broad strokes or take a bird's eye view of the workflow. So Let's say you've enabled Customer Lockbox. A month goes by and all of a sudden you have an issue with your Microsoft 365 tenant. Uh-oh. You open a service request with Microsoft and then they tell you they need access to your tenant. With Lockbox enabled the following will take place:</p>
<p>1. You open a support ticket with Microsoft.</p>
<p>2. Microsoft views the request and verifies they need to access your tenant.</p>
<p>3. The Microsoft engineer and their manager will send the Lockbox request to you and your other Customer Lockbox admins.</p>
<p>4. You or another admin in your organization will approve the request.</p>
<p>5. The Microsoft engineer will review your tenant.</p>
<p>6. The request will time out and the Microsoft engineer will be automatically locked out of your data again.</p>
<h2>License requirements</h2>
<p>Your users will need one of the following licenses to enable the Customer Lockbox feature:</p>
<ul>
<li>Office 365 E5</li>
<li>Microsoft 365 E5</li>
<li>Microsoft 365 E5 Compliance</li>
<li>Office 365 Advanced Compliance</li>
</ul>
<h2>Enable Customer Lockbox</h2>
<p>So now that we've reviewed the overview and talked about licensing let's get into it. How do we enable Customer Lockbox? It's pretty simple, just click the right check box and the right place.</p>
<p>1. Log in to the <strong>Microsoft 365 admin center</strong> &gt; <strong>Settings</strong> &gt; <strong>Org settings</strong> &gt; <strong>Security &amp; privacy</strong> &gt; <strong>Customer Lockbox</strong>.</p>
<p>2. Click <strong>Require approval for all data access requests</strong>. Click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/DCmpnT9/Enable-Customer-Lockbox.png" alt="Enable customer lockbox" style="height: auto;width: auto"/></div>
<h2>Approving Customer Lockbox requests</h2>
<p>So now you have Customer Lockbox enabled let's talk about the Customer Lockbox requests because eventually, you'll get one... Maybe. Maybe not. Who knows. But either way, you'll need to know how to approve the requests in case you get one. So, how do you know if they have a request and how do you approve it once the request is opened?</p>
<p>In short, you'll receive an email that looks like the following:</p>
<div ><img src="https://i.ibb.co/RzpwWs3/Customer-Lockbox-Request.png" alt="Customer Lockbox request email" style="height: auto;width: auto"/></div>
<p>Now that we have a Customer Lockbox request how do we approve the request so the Microsoft engineer can access our tenant and fix it? It's simple, just find the right button and click it.</p>
<p>1. <strong>Log in to the Microsoft 365 admin center</strong> &gt; <strong>Support</strong> &gt; <strong>Customer Lockbox Requests</strong>.</p>
<p>2. Click the request you wish to approve.</p>
<div ><img src="https://i.ibb.co/P6KjrNK/data-access-request.png" alt="Customer Lockbox data access requests" style="height: auto;width: auto"/></div>
<p>3. Click <strong>Approve</strong>.</p>
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
