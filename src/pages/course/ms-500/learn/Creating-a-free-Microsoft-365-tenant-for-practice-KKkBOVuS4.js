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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7famg', text: 'Before we can start learning how to secure Microsoft 365 we will need a test tenant. A tenant where we can implement whatever you want and test things out before implementing them in production. A place where we can perform hands-on learning in a live environment without affecting production. Fortunately, we can set up a Microsoft 365 tenant for free to try out. You only need a free email address, such as gmail.com, outlook.com, or yahoo.com, and a phone number.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 13, offset: 9}], inlineStyleRanges: [], key: '424dd', text: '1. Go to Office 365 E5     ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 10, offset: 9}], inlineStyleRanges: [], key: 'cims2', text: '2. Click Free Trial', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '8ki3m', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 35, style: 'BOLD'}], key: 'c6rpj', text: '3. Enter your email address. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 9, style: 'BOLD'}], key: '90fvb', text: '4. Click Set up account.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 62, style: 'BOLD'}], key: '3fqj7', text: '5. Fill out the form under Tell us about yourself. Then click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: '6mjuf', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '67j8a', text: '6. Enter your phone number and click Send verification code. Enter the code texted to you.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: 'b4bvf', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 18, offset: 75, style: 'BOLD'}, {length: 4, offset: 130, style: 'BOLD'}], key: '6q2lc', text: '7. Enter a name for your test tenant, for example, gitbittest1. Then click Check Availability. Find an available name. Then click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: '242v4', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 105, style: 'BOLD'}], key: 'e07ns', text: '8. Then enter a username, and password for your new tenant. Remember them or write them down. Then click Sign up.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ano85', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eml33', text: 'That\'s it. You now have a Microsoft 365 test tenant.', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'left', alt: 'Microsoft 365 E5 Trial', height: 'auto', src: 'https://i.ibb.co/F07sjQJ/microsoft-365-e5-trial.png', targetOption: '_blank', url: 'https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.17&type=3&subid=0', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {alignment: 'left', alt: 'Tell us about yourself form', height: 'auto', src: 'https://i.ibb.co/MMLchmz/tell-us-about-yourself.png', targetOption: '_blank', url: 'https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.17&type=3&subid=0', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 2: {data: {alignment: 'none', alt: 'Microsoft 365 E5 Trial', height: 745, src: 'https://i.ibb.co/F07sjQJ/microsoft-365-e5-trial.png', targetOption: '_blank', url: 'https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.17&type=3&subid=0', width: 1594}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Tell us about yourself form', height: 775, src: 'https://i.ibb.co/MMLchmz/tell-us-about-yourself.png', width: 687}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Send verification code', height: 649, src: 'https://i.ibb.co/0ngk6BK/send-verification-code.png', width: 562}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'How you\'ll sign in', height: 597, src: 'https://i.ibb.co/xSYVRY1/how-youll-sign-in.png', width: 688}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'How you\'ll sign in - enter credentials', height: 848, src: 'https://i.ibb.co/QJXH0Dk/how-youll-sign-in-2.png', width: 684}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'You\'ll need a Microsoft 365 lab to learn how to manage the environment. How to create a free Microsoft 365 tenant to test new security features and pass you MS-500.', featuredImage: 'https://i.ibb.co/F07sjQJ/microsoft-365-e5-trial.png', id: 'KKkBOVuS4', images: ['https://i.ibb.co/5L6jZrq/sign-up-for-microsoft-365-free-trial.png', 'https://i.ibb.co/5L6jZrq/sign-up-for-microsoft-365-free-trial.png', 'https://i.ibb.co/F07sjQJ/microsoft-365-e5-trial.png', 'https://i.ibb.co/MMLchmz/tell-us-about-yourself.png', 'https://i.ibb.co/0ngk6BK/send-verification-code.png', 'https://i.ibb.co/xSYVRY1/how-youll-sign-in.png', 'https://i.ibb.co/xSYVRY1/how-youll-sign-in.png', 'https://i.ibb.co/QJXH0Dk/how-youll-sign-in-2.png'], publish: true, pushlish: true, sectionId: 'qwJW5VrBW', slug: 'Creating-a-free-Microsoft-365-tenant-for-practice-KKkBOVuS4', title: 'Creating a free Microsoft 365 tenant for practice', type: 'article'},
      nextContentSlug: 'learn/Managing-the-Microsoft-365-tenant-Introduction-to-the-admin-centers-bzotoOjEe',
      previousContentSlug: 'learn/Whats-in-this-course-cpchjBLkC',
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
                  <div><p>Before we can start learning how to secure Microsoft 365 we will need a test tenant. A tenant where we can implement whatever you want and test things out before implementing them in production. A place where we can perform hands-on learning in a live environment without affecting production. Fortunately, we can set up a Microsoft 365 tenant for free to try out. You only need a free email address, such as gmail.com, outlook.com, or yahoo.com, and a phone number.</p>
                    <p>1. Go to <a href="https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.17&type=3&subid=0" target="_blank" rel="noreferrer">Office 365 E5</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p>2. Click <a href="https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.17&type=3&subid=0" target="_blank" rel="noreferrer">Free Trial</a></p>
                    <div ><img src="https://i.ibb.co/F07sjQJ/microsoft-365-e5-trial.png" alt="Microsoft 365 E5 Trial" height="745" width="1594" style="aspect-ratio: auto 1594 / 745; height: auto;" /></div>
                    <p>3. Enter your email address. Click <strong>Next</strong>.</p>
                    <p>4. Click <strong>Set up account</strong>.</p>
                    <p>5. Fill out the form under Tell us about yourself. Then click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/MMLchmz/tell-us-about-yourself.png" alt="Tell us about yourself form" height="775" width="687" style="aspect-ratio: auto 687 / 775; height: auto;" /></div>
                    <p>6. Enter your phone number and click Send verification code. Enter the code texted to you.</p>
                    <div ><img src="https://i.ibb.co/0ngk6BK/send-verification-code.png" alt="Send verification code" height="649" width="562" style="aspect-ratio: auto 562 / 649; height: auto;" /></div>
                    <p>7. Enter a name for your test tenant, for example, gitbittest1. Then click <strong>Check Availability</strong>. Find an available name. Then click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/xSYVRY1/how-youll-sign-in.png" alt="How you'll sign in" height="597" width="688" style="aspect-ratio: auto 688 / 597; height: auto;" /></div>
                    <p>8. Then enter a username, and password for your new tenant. Remember them or write them down. Then click <strong>Sign up</strong>.</p>
                    <div ><img src="https://i.ibb.co/QJXH0Dk/how-youll-sign-in-2.png" alt="How you'll sign in - enter credentials" height="848" width="684" style="aspect-ratio: auto 684 / 848; height: auto;" /></div>
                    <p>That's it. You now have a Microsoft 365 test tenant.</p>
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
