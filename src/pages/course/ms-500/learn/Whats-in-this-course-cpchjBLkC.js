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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4m8er', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: 'be9j9', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6dipa', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: 'bgmtb', text: ' ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '49mms', text: 'Have you ever wondered how to effectively and efficiently manage your organization’s security? If so, you are not alone. When it comes to information security, there are many challenges that businesses face. For example, security professionals must constantly keep up with the latest cyber threats, update their security measures and protocols regularly, train their employees on best practices regarding security protocols, and much more. These responsibilities can be extremely challenging for any administrator or team of administrators in any business. Fortunately, there are many certifications related to information security that can help you stand out from your peers when searching for a job. One certification that is worth getting is the Microsoft 365 Security Administration certificate. This article will provide you with many details about this certification and why you should get one if you are considering pursuing it as a secondary career objective or something similar in the future.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8p94p', text: 'Without further ado, welcome to the MS-500 course on GitBit! In this course, you\'ll learn everything you need to know to pass the MS-500: Microsoft 365 Security Administration certification. You\'ll also learn everything you need to know to secure your Microsoft 365 tenant. Within this course, there are three things: lessons, hands-on guides, and practice tests. For a hands-on experience, we\'ll be using a free Microsoft 365 tenant which I\'ll help you set up in the next lesson. Before we jump in let\'s discuss the test.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ao8hj', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '73ml1', text: 'Is the MS-500 Worth It?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '294dc', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9vvt8', text: 'Microsoft 365 is everywhere. With over 90% of fortune 500 companies using Microsoft 365 managing and securing Microsoft 365 is an in-demand skill. It isn\'t just used by large businesses. Over a million companies are using Microsoft 365. That\'s a lot of organizations that have security requirements. But that\'s not the only reason to hire someone with a Microsoft 365 Security Administration certificate.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '638uk', text: 'Microsoft partners also need to hire employees that have their Microsoft 365 Security Administration certificate. For Microsoft partners to have a silver partnership they need at least one employee that has passed the MS-500. Microsoft gold partners need at least four employees that have passed the MS-500.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd0vrb', text: 'How much can you expect to earn?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: '43tkf', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 13, offset: 305}], inlineStyleRanges: [], key: '6ihlu', text: 'The amount of money you can make with the certification varies depending on the industry and the company you work for. However, on average, you can expect to make around $100,000 a year with this certification. As a matter of fact, the average pay for a Microsoft 365 Security Administrator is $100,053 - Zip Recruiter. This amount can increase depending on the industry you get a job in and your position. If you are just starting in the field, you can earn around $60,000 a year.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bsktj', text: 'Who should take the MS-500?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'lpne', text: 'Anyone that\'s starting their career in IT or information technology security should look to pass the MS-500 and achieve their Microsoft 365 Security Administration certificate. But it isn\'t just for beginners.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'de0bv', text: 'Since Microsoft partners are required to have at least four employees with the Microsoft 365 Security Administration certificate it\'s a great way to get hired or stand out above your peers.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ek1eb', text: 'How to Obtain a Microsoft Cloud Security Administration Certificate?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: '4s6sp', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e5uas', text: 'To obtain this certification, you must first take and pass the exam. The MS-500 exam comprises 40-60 questions and you have 120 minutes to finish the exam. The exam costs roughly $165. You need a score of at least 700 out of 1000 to pass.  To prepare for the exam, you can use this site! Surprised right? GitBit has everything you need to pass the MS-500 and receive your Microsoft 365 Security Administration certificate. First, go through the lessons provided. Once you\'ve completed the lessons take a couple of practice exams. I recommend waiting to schedule the exam until after you receive a 90% on our practice exams.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9jcd2', text: 'What\'s in the MS-500', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '7q0q1', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2ejk', text: 'The MS-500: Microsoft 365 Security Administration is a 40-60 question exam that includes multiple-choice, drag and drop, as well as, hands-on labs. It covers a wide variety of security and administration topics on Microsoft 365.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2ps14', text: 'Here\'s a quick break-down from Microsoft on what\'s covered in the MS-500:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '30k5v', text: 'Implement and manage identity and access (35-40%)', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '71p15', text: 'Secure Microsoft 365 hybrid environments', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9ftmn', text: 'Secure Identities', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1lsg4', text: 'Implement authentication methods', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'chn41', text: 'Implement conditional access', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '75iu5', text: 'Implement roles and role groups', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dhpef', text: 'Configure and manage identity governance', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '49kq2', text: 'Implement Azure AD Identity Protection ', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c8v92', text: 'Implement and manage threat protection (25-30%)', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6t35a', text: 'Implement and manage Microsoft Defender for Identity', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ap8gj', text: 'Implement device threat protection', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6hrnd', text: 'Implement and manage device and application protection', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eiqam', text: 'Implement and manage Microsoft Defender for Office 365', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f9po1', text: 'Monitor Microsoft 365 Security with Azure Sentinel', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4p3pl', text: 'Implement and manage Microsoft Cloud App Security', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '91jgf', text: 'Implement and manage information protection (10-15%)', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2k422', text: 'Manage sensitive information', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'af0ci', text: 'Manage Data Loss Prevention (DLP)', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2qujk', text: 'Manage data governance and retention', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7rlfl', text: 'Manage governance and compliance features in Microsoft 365 (20-25%)', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '79q8l', text: 'Configure and analyze security reporting', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7feo3', text: 'Manage and analyze audit logs and reports', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2l6mm', text: 'Discover and respond to compliance queries in Microsoft 365', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6p8d0', text: 'Manage regulatory compliance', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fvsmr', text: 'Manage insider risk solutions in Microsoft 365', type: 'unordered-list-item'}], entityMap: {0: {data: {alt: 'What\'s in the Microsoft 365 Security Administration (MS-500) certificate?', height: '315', src: 'https://www.youtube.com/embed/Ei2zDM2-UxM?autoplay=1&mute=1', width: '560'}, mutability: 'IMMUTABLE', type: 'EMBEDDED_LINK'}, 1: {data: {alt: 'What\'s in the Microsoft 365 Security Administration (MS-500) certificate?', height: '315', src: 'https://i.ibb.co/RhBg5HR/What-s-in-the-MS-500.jpg', url: 'https://www.ziprecruiter.com/Salaries/Microsoft-365-Security-Administrator-Salary', width: '560'}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 2: {data: {alt: 'Microsoft 365 is everywhere!', height: '315', src: 'https://i.ibb.co/rHBNrBp/Slide2.jpg', url: 'https://www.ziprecruiter.com/Salaries/Microsoft-365-Security-Administrator-Salary', width: '560'}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 3: {data: {alt: 'You can earn over $100,000 as a Microsoft 365 security administrator', src: 'https://i.ibb.co/rQR1z85/Slide3.jpg', url: 'https://www.ziprecruiter.com/Salaries/Microsoft-365-Security-Administrator-Salary'}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 4: {data: {alt: 'How to obtain the MS-500 certificate?', src: 'https://i.ibb.co/mqzLBKJ/Slide4.jpg', url: 'https://www.ziprecruiter.com/Salaries/Microsoft-365-Security-Administrator-Salary'}, mutability: 'MUTABLE', type: 'LINK'}, 5: {data: {alt: 'How to obtain the MS-500 certificate?', src: 'https://i.ibb.co/mqzLBKJ/Slide4.jpg', url: 'https://www.ziprecruiter.com/Salaries/Microsoft-365-Security-Administrator-Salary'}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 6: {data: {alt: 'What\'s in the MS-500 test?', src: 'https://i.ibb.co/mCyG8j3/Slide5.jpg'}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'The Microsoft 365 security administrator certificate is one of the hottest certificates in cybersecurity. With most Fortune 500 organizations using it and an average salary over $100,000 a year it\'s no wonder the MS-500 is one of the best certificates for cybersecurity.', featuredImage: 'https://i.ibb.co/RhBg5HR/What-s-in-the-MS-500.jpg', id: 'cpchjBLkC', images: ['https://i.ibb.co/KLRXSmP/gitbit-icon-500x500.png', 'https://i.ibb.co/zFs9Vfb/microsoft365-security-administrator-associate-600x600.png', 'https://i.ibb.co/RhBg5HR/What-s-in-the-MS-500.jpg', 'https://i.ibb.co/RhBg5HR/What-s-in-the-MS-500.jpg', 'https://i.ibb.co/rHBNrBp/Slide2.jpg', 'https://i.ibb.co/rQR1z85/Slide3.jpg', 'https://i.ibb.co/mqzLBKJ/Slide4.jpg', 'https://i.ibb.co/mCyG8j3/Slide5.jpg'], publish: true, sectionId: 'qwJW5VrBW', slug: 'Whats-in-this-course-cpchjBLkC', title: 'Is the MS-500 worth it?', type: 'article'},
      nextContentSlug: 'learn/Creating-a-free-Microsoft-365-tenant-for-practice-KKkBOVuS4',
      previousContentSlug: 'PREVIOUS_CONTENT',
      hasCompletedContent: false,
      userAcct: {completedContent: []}
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged(this.getUid)
    this.addScroll()((w, d, s, i)=> {
      w.ldAdInit=w.ldAdInit||[]; w.ldAdInit.push({slot: 15664931508787046, size: [0, 0], id: 'ld-534-9587'}); if (!d.getElementById(i)) {
        const j=d.createElement(s); const p=d.getElementsByTagName(s)[0]; j.async=true; j.src='//cdn2.decide.dev/_js/ajs.js'; j.id=i; p.parentNode.insertBefore(j, p)
      }
    })(window, document, 'script', 'ld-ajs')((w, d, s, i)=> {
      w.ldAdInit=w.ldAdInit||[]; w.ldAdInit.push({slot: 15664932884518758, size: [0, 0], id: 'ld-7740-2760'}); if (!d.getElementById(i)) {
        const j=d.createElement(s); const p=d.getElementsByTagName(s)[0]; j.async=true; j.src='//cdn2.decide.dev/_js/ajs.js'; j.id=i; p.parentNode.insertBefore(j, p)
      }
    })(window, document, 'script', 'ld-ajs')
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
                  <div id="ld-534-9587" />
                  <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                  <div><p />
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ei2zDM2-UxM?autoplay=1&mute=1" frameBorder="0" />
                    <p />
                    <img src="https://i.ibb.co/RhBg5HR/What-s-in-the-MS-500.jpg" alt="What's in the Microsoft 365 Security Administration (MS-500) certificate?" style="height: 315;width: 560" />
                    <p>Have you ever wondered how to effectively and efficiently manage your organization’s security? If so, you are not alone. When it comes to information security, there are many challenges that businesses face. For example, security professionals must constantly keep up with the latest cyber threats, update their security measures and protocols regularly, train their employees on best practices regarding security protocols, and much more. These responsibilities can be extremely challenging for any administrator or team of administrators in any business. Fortunately, there are many certifications related to information security that can help you stand out from your peers when searching for a job. One certification that is worth getting is the Microsoft 365 Security Administration certificate. This article will provide you with many details about this certification and why you should get one if you are considering pursuing it as a secondary career objective or something similar in the future.</p>
                    <p>Without further ado, welcome to the MS-500 course on GitBit! In this course, you'll learn everything you need to know to pass the MS-500: Microsoft 365 Security Administration certification. You'll also learn everything you need to know to secure your Microsoft 365 tenant. Within this course, there are three things: lessons, hands-on guides, and practice tests. For a hands-on experience, we'll be using a free Microsoft 365 tenant which I'll help you set up in the next lesson. Before we jump in let's discuss the test.</p>
                    <p />
                    <div id="ld-7740-2760" /><h2>Is the MS-500 Worth It?</h2>
                    <img src="https://i.ibb.co/rHBNrBp/Slide2.jpg" alt="Microsoft 365 is everywhere!" style="height: 315;width: 560" />
                    <p>Microsoft 365 is everywhere. With over 90% of fortune 500 companies using Microsoft 365 managing and securing Microsoft 365 is an in-demand skill. It isn't just used by large businesses. Over a million companies are using Microsoft 365. That's a lot of organizations that have security requirements. But that's not the only reason to hire someone with a Microsoft 365 Security Administration certificate.</p>
                    <p>Microsoft partners also need to hire employees that have their Microsoft 365 Security Administration certificate. For Microsoft partners to have a silver partnership they need at least one employee that has passed the MS-500. Microsoft gold partners need at least four employees that have passed the MS-500.</p>
                    <h2>How much can you expect to earn?</h2>
                    <img src="https://i.ibb.co/rQR1z85/Slide3.jpg" alt="You can earn over $100,000 as a Microsoft 365 security administrator" />
                    <p>The amount of money you can make with the certification varies depending on the industry and the company you work for. However, on average, you can expect to make around $100,000 a year with this certification. As a matter of fact, the average pay for a Microsoft 365 Security Administrator is $100,053 - <a href="https://www.ziprecruiter.com/Salaries/Microsoft-365-Security-Administrator-Salary" target="_self">Zip Recruiter</a>. This amount can increase depending on the industry you get a job in and your position. If you are just starting in the field, you can earn around $60,000 a year.</p>
                    <h2>Who should take the MS-500?</h2>
                    <p>Anyone that's starting their career in IT or information technology security should look to pass the MS-500 and achieve their Microsoft 365 Security Administration certificate. But it isn't just for beginners.</p>
                    <p>Since Microsoft partners are required to have at least four employees with the Microsoft 365 Security Administration certificate it's a great way to get hired or stand out above your peers.</p>
                    <h2>How to Obtain a Microsoft Cloud Security Administration Certificate?</h2>
                    <img src="https://i.ibb.co/mqzLBKJ/Slide4.jpg" alt="How to obtain the MS-500 certificate?" />
                    <p>To obtain this certification, you must first take and pass the exam. The MS-500 exam comprises 40-60 questions and you have 120 minutes to finish the exam. The exam costs roughly $165. You need a score of at least 700 out of 1000 to pass.  To prepare for the exam, you can use this site! Surprised right? GitBit has everything you need to pass the MS-500 and receive your Microsoft 365 Security Administration certificate. First, go through the lessons provided. Once you've completed the lessons take a couple of practice exams. I recommend waiting to schedule the exam until after you receive a 90% on our practice exams.</p>
                    <h2>What's in the MS-500</h2>
                    <img src="https://i.ibb.co/mCyG8j3/Slide5.jpg" alt="What's in the MS-500 test?" />
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
