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
      path: '/course/ms-500/learn/Locking-down-your-Microsoft-365-tenant-from-Microsoft-engineers-FldNualGC',
      article: {article: {blocks: [{text: 'I\'ve never had any issues with Microsoft engineers accessing my data or changing my tenant without my explicit approval. Nevertheless, Microsoft has developed a way to lock out Microsoft engineers from your tenant. If you open a support ticket with Microsoft and they require access to your tenant they will need to send you an explicit request. Microsoft calls this feature Customer Lockbox.', entityRanges: [], type: 'unstyled', data: {}, key: '42g4m', depth: 0, inlineStyleRanges: []}, {depth: 0, data: {}, text: 'Customer Lockbox allows you and your admins to secure your Microsoft 365 tenant from Microsoft engineers. That\'s right. The engineers at the organization hosting your data won\'t be able to access your data. Not without your explicit permission. Once a request is approved the Microsoft engineers will only be able to access your data for a limited window. Typically, 4 hours but it may be longer or shorter depending on your service issues.', type: 'unstyled', inlineStyleRanges: [], key: '627on', entityRanges: []}, {key: '6faak', text: 'Lockbox workflow', inlineStyleRanges: [], entityRanges: [], data: {}, type: 'header-two', depth: 0}, {text: 'Before we jump into configuring Customer Lockbox let\'s discuss the broad strokes or take a bird\'s eye view of the workflow. So Let\'s say you\'ve enabled Customer Lockbox. A month goes by and all of a sudden you have an issue with your Microsoft 365 tenant. Uh-oh. You open a service request with Microsoft and then they tell you they need access to your tenant. With Lockbox enabled the following will take place:', type: 'unstyled', inlineStyleRanges: [], data: {}, entityRanges: [], key: '6tkm4', depth: 0}, {entityRanges: [], inlineStyleRanges: [], data: {}, text: '1. You open a support ticket with Microsoft.', depth: 0, type: 'unstyled', key: '38nfe'}, {entityRanges: [], inlineStyleRanges: [], type: 'unstyled', key: 'c6tmb', depth: 0, data: {}, text: '2. Microsoft views the request and verifies they need to access your tenant.'}, {key: '89t8a', text: '3. The Microsoft engineer and their manager will send the Lockbox request to you and your other Customer Lockbox admins.', inlineStyleRanges: [], entityRanges: [], depth: 0, data: {}, type: 'unstyled'}, {key: '2hs2m', depth: 0, entityRanges: [], inlineStyleRanges: [], text: '4. You or another admin in your organization will approve the request.', type: 'unstyled', data: {}}, {depth: 0, entityRanges: [], data: {}, text: '5. The Microsoft engineer will review your tenant.', key: '3ldgf', inlineStyleRanges: [], type: 'unstyled'}, {depth: 0, data: {}, inlineStyleRanges: [], entityRanges: [], key: '742uc', type: 'unstyled', text: '6. The request will time out and the Microsoft engineer will be automatically locked out of your data again.'}, {entityRanges: [], key: 'fco89', depth: 0, text: 'License requirements', type: 'header-two', inlineStyleRanges: [], data: {}}, {data: {}, type: 'unstyled', text: 'Your users will need one of the following licenses to enable the Customer Lockbox feature:', inlineStyleRanges: [], key: '9onng', depth: 0, entityRanges: []}, {key: 'e5mkv', data: {}, inlineStyleRanges: [], entityRanges: [], depth: 0, text: 'Office 365 E5', type: 'unordered-list-item'}, {type: 'unordered-list-item', data: {}, depth: 0, inlineStyleRanges: [], key: '9aviu', entityRanges: [], text: 'Microsoft 365 E5'}, {key: '1o357', inlineStyleRanges: [], depth: 0, text: 'Microsoft 365 E5 Compliance', type: 'unordered-list-item', entityRanges: [], data: {}}, {text: 'Office 365 Advanced Compliance', type: 'unordered-list-item', entityRanges: [], key: '4p8c5', inlineStyleRanges: [], data: {}, depth: 0}, {data: {}, text: 'Enable Customer Lockbox', key: '9cori', entityRanges: [], inlineStyleRanges: [], type: 'header-two', depth: 0}, {entityRanges: [], key: 'ad6o6', inlineStyleRanges: [], text: 'So now that we\'ve reviewed the overview and talked about licensing let\'s get into it. How do we enable Customer Lockbox? It\'s pretty simple, just click the right check box and the right place.', type: 'unstyled', depth: 0, data: {}}, {inlineStyleRanges: [{length: 26, style: 'BOLD', offset: 17}, {length: 8, style: 'BOLD', offset: 46}, {length: 12, offset: 57, style: 'BOLD'}, {offset: 72, length: 18, style: 'BOLD'}, {style: 'BOLD', offset: 93, length: 16}], depth: 0, text: '1. Log in to the Microsoft 365 admin center > Settings > Org settings > Security & privacy > Customer Lockbox.', type: 'unstyled', entityRanges: [], key: '5nm90', data: {}}, {depth: 0, data: {}, entityRanges: [], text: '2. Click Require approval for all data access requests. Click Save.', key: '36rn3', type: 'unstyled', inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 45}, {style: 'BOLD', offset: 62, length: 4}]}, {entityRanges: [{key: 0, length: 1, offset: 0}], data: {}, inlineStyleRanges: [], depth: 0, key: '6i5pt', text: ' ', type: 'atomic'}, {data: {}, inlineStyleRanges: [], type: 'header-two', key: '72ctb', depth: 0, entityRanges: [], text: 'Approving Customer Lockbox requests'}, {data: {}, inlineStyleRanges: [], key: 'ebfll', depth: 0, text: 'So now you have Customer Lockbox enabled let\'s talk about the Customer Lockbox requests because eventually, you\'ll get one... Maybe. Maybe not. Who knows. But either way, you\'ll need to know how to approve the requests in case you get one. So, how do you know if they have a request and how do you approve it once the request is opened?', type: 'unstyled', entityRanges: []}, {text: 'In short, you\'ll receive an email that looks like the following:', depth: 0, entityRanges: [], key: 'e6ttt', data: {}, inlineStyleRanges: [], type: 'unstyled'}, {text: ' ', key: 'b7cgh', entityRanges: [{length: 1, key: 1, offset: 0}], depth: 0, data: {}, inlineStyleRanges: [], type: 'atomic'}, {entityRanges: [], depth: 0, type: 'unstyled', key: '59pnh', data: {}, inlineStyleRanges: [], text: 'Now that we have a Customer Lockbox request how do we approve the request so the Microsoft engineer can access our tenant and fix it? It\'s simple, just find the right button and click it.'}, {inlineStyleRanges: [{style: 'BOLD', length: 40, offset: 3}, {offset: 46, length: 7, style: 'BOLD'}, {length: 25, style: 'BOLD', offset: 56}], key: 'e70s1', text: '1. Log in to the Microsoft 365 admin center > Support > Customer Lockbox Requests.', entityRanges: [], type: 'unstyled', depth: 0, data: {}}, {inlineStyleRanges: [], data: {}, depth: 0, text: '2. Click the request you wish to approve.', key: '9mqo5', type: 'unstyled', entityRanges: []}, {entityRanges: [{offset: 0, length: 1, key: 2}], key: '5gbmc', inlineStyleRanges: [], text: ' ', depth: 0, data: {}, type: 'atomic'}, {text: '3. Click Approve.', depth: 0, data: {}, key: '3oug8', type: 'unstyled', inlineStyleRanges: [{style: 'BOLD', length: 7, offset: 9}], entityRanges: []}], entityMap: {0: {data: {src: 'https://i.ibb.co/DCmpnT9/Enable-Customer-Lockbox.png', width: 'auto', alignment: 'none', alt: 'Enable customer lockbox', height: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {type: 'IMAGE', data: {alt: 'Customer Lockbox request email', height: 'auto', alignment: 'left', width: 'auto', src: 'https://i.ibb.co/RzpwWs3/Customer-Lockbox-Request.png'}, mutability: 'MUTABLE'}, 2: {mutability: 'MUTABLE', data: {width: 'auto', src: 'https://i.ibb.co/P6KjrNK/data-access-request.png', alt: 'Customer Lockbox data access requests', alignment: 'left', height: 'auto'}, type: 'IMAGE'}}}, id: 'FldNualGC', description: 'Customer Lockbox is a tool built into the Microsoft 365 tenant that locks out Microsoft engineers from accessing your tenant', title: 'Locking down your Microsoft 365 tenant from Microsoft engineers', images: ['https://i.ibb.co/P6KjrNK/data-access-request.png', 'https://i.ibb.co/P6KjrNK/data-access-request.png', 'https://i.ibb.co/RzpwWs3/Customer-Lockbox-Request.png', 'https://i.ibb.co/DCmpnT9/Enable-Customer-Lockbox.png'], slug: 'Locking-down-your-Microsoft-365-tenant-from-Microsoft-engineers-FldNualGC', datePublished: '2022/5/26', featuredImage: 'https://i.ibb.co/DCmpnT9/Enable-Customer-Lockbox.png', publish: true, sectionId: 'AFV_acckJ', type: 'article'},
      nextContentSlug: 'Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ',
      previousContentSlug: 'Implement-Self-service-password-reset-in-Microsoft-365-2S9jn0aLr',
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
                  <div ><img src="https://i.ibb.co/DCmpnT9/Enable-Customer-Lockbox.png" alt="Enable customer lockbox" style="height: auto;width: auto" /></div>
                  <h2>Approving Customer Lockbox requests</h2>
                  <p>So now you have Customer Lockbox enabled let's talk about the Customer Lockbox requests because eventually, you'll get one... Maybe. Maybe not. Who knows. But either way, you'll need to know how to approve the requests in case you get one. So, how do you know if they have a request and how do you approve it once the request is opened?</p>
                  <p>In short, you'll receive an email that looks like the following:</p>
                  <div ><img src="https://i.ibb.co/RzpwWs3/Customer-Lockbox-Request.png" alt="Customer Lockbox request email" style="height: auto;width: auto" /></div>
                  <p>Now that we have a Customer Lockbox request how do we approve the request so the Microsoft engineer can access our tenant and fix it? It's simple, just find the right button and click it.</p>
                  <p>1. <strong>Log in to the Microsoft 365 admin center</strong> &gt; <strong>Support</strong> &gt; <strong>Customer Lockbox Requests</strong>.</p>
                  <p>2. Click the request you wish to approve.</p>
                  <div ><img src="https://i.ibb.co/P6KjrNK/data-access-request.png" alt="Customer Lockbox data access requests" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Approve</strong>.</p>
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
