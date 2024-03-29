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
    this.mountAds1 = this.mountAds1.bind(this)
    this.mountAds2 = this.mountAds2.bind(this)
    this.addScroll = this.addScroll.bind(this)

    this.state = {
      isTrackScrolling: false,
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '42g4m', text: 'I\'ve never had any issues with Microsoft engineers accessing my data or changing my tenant without my explicit approval. Nevertheless, Microsoft has developed a way to lock out Microsoft engineers from your tenant. If you open a support ticket with Microsoft and they require access to your tenant they will need to send you an explicit request. Microsoft calls this feature Customer Lockbox.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '627on', text: 'Customer Lockbox allows you and your admins to secure your Microsoft 365 tenant from Microsoft engineers. That\'s right. The engineers at the organization hosting your data won\'t be able to access your data. Not without your explicit permission. Once a request is approved the Microsoft engineers will only be able to access your data for a limited window. Typically, 4 hours but it may be longer or shorter depending on your service issues.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6faak', text: 'Lockbox workflow', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6tkm4', text: 'Before we jump into configuring Customer Lockbox let\'s discuss the broad strokes or take a bird\'s eye view of the workflow. So Let\'s say you\'ve enabled Customer Lockbox. A month goes by and all of a sudden you have an issue with your Microsoft 365 tenant. Uh-oh. You open a service request with Microsoft and then they tell you they need access to your tenant. With Lockbox enabled the following will take place:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '38nfe', text: '1. You open a support ticket with Microsoft.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c6tmb', text: '2. Microsoft views the request and verifies they need to access your tenant.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '89t8a', text: '3. The Microsoft engineer and their manager will send the Lockbox request to you and your other Customer Lockbox admins.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2hs2m', text: '4. You or another admin in your organization will approve the request.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3ldgf', text: '5. The Microsoft engineer will review your tenant.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '742uc', text: '6. The request will time out and the Microsoft engineer will be automatically locked out of your data again.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fco89', text: 'License requirements', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9onng', text: 'Your users will need one of the following licenses to enable the Customer Lockbox feature:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e5mkv', text: 'Office 365 E5', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9aviu', text: 'Microsoft 365 E5', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1o357', text: 'Microsoft 365 E5 Compliance', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4p8c5', text: 'Office 365 Advanced Compliance', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dpm29', text: 'What admins can manage Lockbox?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c9ca1', text: 'The following admins can approve Lockbox requests and will receive notifications when a Microsoft engineer requests access.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6qbds', text: 'Global administrators', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fc41s', text: 'Customer Lockbox access', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9cori', text: 'Enable Customer Lockbox', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ad6o6', text: 'So now that we\'ve reviewed the overview and talked about licensing let\'s get into it. How do we enable Customer Lockbox? It\'s pretty simple, just click the right check box and the right place.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 26, offset: 17, style: 'BOLD'}, {length: 8, offset: 46, style: 'BOLD'}, {length: 12, offset: 57, style: 'BOLD'}, {length: 18, offset: 72, style: 'BOLD'}, {length: 16, offset: 93, style: 'BOLD'}], key: '5nm90', text: '1. Log in to the Microsoft 365 admin center > Settings > Org settings > Security & privacy > Customer Lockbox.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 45, offset: 9, style: 'BOLD'}, {length: 4, offset: 62, style: 'BOLD'}], key: '36rn3', text: '2. Click Require approval for all data access requests. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '6i5pt', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '72ctb', text: 'Approving Customer Lockbox requests', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ebfll', text: 'So now you have Customer Lockbox enabled let\'s talk about the Customer Lockbox requests because eventually, you\'ll get one... Maybe. Maybe not. Who knows. But either way, you\'ll need to know how to approve the requests in case you get one. So, how do you know if they have a request and how do you approve it once the request is opened?', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e6ttt', text: 'In short, you\'ll receive an email that looks like the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: 'b7cgh', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '59pnh', text: 'Now that we have a Customer Lockbox request how do we approve the request so the Microsoft engineer can access our tenant and fix it? It\'s simple, just find the right button and click it.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 40, offset: 3, style: 'BOLD'}, {length: 7, offset: 46, style: 'BOLD'}, {length: 25, offset: 56, style: 'BOLD'}], key: 'e70s1', text: '1. Log in to the Microsoft 365 admin center > Support > Customer Lockbox Requests.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9mqo5', text: '2. Click the request you wish to approve.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '5gbmc', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 9, style: 'BOLD'}], key: '3oug8', text: '3. Click Approve.', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'none', alt: 'Enable customer lockbox', height: 914, src: 'https://i.ibb.co/DCmpnT9/Enable-Customer-Lockbox.png', width: 1202}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {data: {alignment: 'left', alt: 'Customer Lockbox request email', height: 536, src: 'https://i.ibb.co/RzpwWs3/Customer-Lockbox-Request.png', width: 806}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'left', alt: 'Customer Lockbox data access requests', height: 495, src: 'https://i.ibb.co/P6KjrNK/data-access-request.png', width: 1188}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'Customer Lockbox is a tool built into the Microsoft 365 tenant that locks out Microsoft engineers from accessing your tenant', featuredImage: 'https://i.ibb.co/DCmpnT9/Enable-Customer-Lockbox.png', id: 'FldNualGC', images: ['https://i.ibb.co/P6KjrNK/data-access-request.png', 'https://i.ibb.co/P6KjrNK/data-access-request.png', 'https://i.ibb.co/RzpwWs3/Customer-Lockbox-Request.png', 'https://i.ibb.co/DCmpnT9/Enable-Customer-Lockbox.png'], publish: true, sectionId: 'AFV_acckJ', slug: 'Locking-down-your-Microsoft-365-tenant-from-Microsoft-engineers-FldNualGC', title: 'Locking down your Microsoft 365 tenant from Microsoft engineers', type: 'article'},
      nextContentSlug: 'learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ',
      previousContentSlug: 'learn/Implement-Self-service-password-reset-in-Microsoft-365-2S9jn0aLr',
      hasCompletedContent: false,
      userAcct: {completedContent: []},
      decideHeight: '1000px'
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged(this.getUid)
    this.addScroll()
    this.mountAds1()
    this.mountAds2()

    const setDecideHeight = (a) => {
      if (!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4))))
        this.setState({decideHeight: '250px'})
    }

    setDecideHeight(navigator.userAgent||navigator.vendor||window.opera)
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

  mountAds1() {
    (function(w, d, s, i) {
      w.ldAdInit=w.ldAdInit||[]; w.ldAdInit.push({slot: 15664931508787046, size: [0, 0], id: 'ld-534-9587'}); if (!d.getElementById(i)) {
        const j=d.createElement(s); const p=d.getElementsByTagName(s)[0]; j.async=true; j.src='//cdn2.decide.dev/_js/ajs.js'; j.id=i; p.parentNode.insertBefore(j, p)
      }
    })(window, document, 'script', 'ld-ajs')
  }

  mountAds2() {
    ((w, d, s, i)=> {
      w.ldAdInit=w.ldAdInit||[]; w.ldAdInit.push({slot: 15664932884518758, size: [0, 0], id: 'ld-7740-2760'}); if (!d.getElementById(i)) {
        const j=d.createElement(s); const p=d.getElementsByTagName(s)[0]; j.async=true; j.src='//cdn2.decide.dev/_js/ajs.js'; j.id=i; p.parentNode.insertBefore(j, p)
      }
    })(window, document, 'script', 'ld-ajs')
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
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={this.state.article.featuredImage} title={this.state.article.title} description={this.state.article.description}>
        <div>
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
                <main>
                  <div id="ld-534-9587" style={{height: this.state.decideHeight, overflow: 'hidden'}} >
                    <p style="position: absolute;z-index: -1">Reserved for ads. Please scroll down.</p>
                  </div>
                  <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                  <div><p>I've never had any issues with Microsoft engineers accessing my data or changing my tenant without my explicit approval. Nevertheless, Microsoft has developed a way to lock out Microsoft engineers from your tenant. If you open a support ticket with Microsoft and they require access to your tenant they will need to send you an explicit request. Microsoft calls this feature Customer Lockbox.</p>
                    <p>Customer Lockbox allows you and your admins to secure your Microsoft 365 tenant from Microsoft engineers. That's right. The engineers at the organization hosting your data won't be able to access your data. Not without your explicit permission. Once a request is approved the Microsoft engineers will only be able to access your data for a limited window. Typically, 4 hours but it may be longer or shorter depending on your service issues.</p>
                    <div id="ld-7740-2760" style={{height: this.state.decideHeight, overflow: 'hidden'}} /><h2>Lockbox workflow</h2>
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
                    <h2>What admins can manage Lockbox?</h2>
                    <p>The following admins can approve Lockbox requests and will receive notifications when a Microsoft engineer requests access.</p>
                    <ul>
                      <li>Global administrators</li>
                      <li>Customer Lockbox access</li>
                    </ul>
                    <h2>Enable Customer Lockbox</h2>
                    <p>So now that we've reviewed the overview and talked about licensing let's get into it. How do we enable Customer Lockbox? It's pretty simple, just click the right check box and the right place.</p>
                    <p>1. Log in to the <strong>Microsoft 365 admin center</strong> &gt; <strong>Settings</strong> &gt; <strong>Org settings</strong> &gt; <strong>Security &amp; privacy</strong> &gt; <strong>Customer Lockbox</strong>.</p>
                    <p>2. Click <strong>Require approval for all data access requests</strong>. Click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/DCmpnT9/Enable-Customer-Lockbox.png" alt="Enable customer lockbox" height="914" width="1202" style="aspect-ratio: auto 1202 / 914; height: auto;" /></div>
                    <h2>Approving Customer Lockbox requests</h2>
                    <p>So now you have Customer Lockbox enabled let's talk about the Customer Lockbox requests because eventually, you'll get one... Maybe. Maybe not. Who knows. But either way, you'll need to know how to approve the requests in case you get one. So, how do you know if they have a request and how do you approve it once the request is opened?</p>
                    <p>In short, you'll receive an email that looks like the following:</p>
                    <div ><img src="https://i.ibb.co/RzpwWs3/Customer-Lockbox-Request.png" alt="Customer Lockbox request email" height="536" width="806" style="aspect-ratio: auto 806 / 536; height: auto;" /></div>
                    <p>Now that we have a Customer Lockbox request how do we approve the request so the Microsoft engineer can access our tenant and fix it? It's simple, just find the right button and click it.</p>
                    <p>1. <strong>Log in to the Microsoft 365 admin center</strong> &gt; <strong>Support</strong> &gt; <strong>Customer Lockbox Requests</strong>.</p>
                    <p>2. Click the request you wish to approve.</p>
                    <div ><img src="https://i.ibb.co/P6KjrNK/data-access-request.png" alt="Customer Lockbox data access requests" height="495" width="1188" style="aspect-ratio: auto 1188 / 495; height: auto;" /></div>
                    <p>3. Click <strong>Approve</strong>.</p>
                  </div>
                  <div id="bottom-of-article" />
                  <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 3}}>
                    <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/dashboard' : `/course/ms-500/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
                    <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/dashboard' : `/course/ms-500/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos />}>Next</Button>
                  </Box>
                </main>
              </Grid>
              <Grid item lg={3} sx={{mt: 3}}>
                <ContentsRead completedContent={this.state.userAcct.completedContent} />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Page>
    )
  }
}

export default ArticlePage
