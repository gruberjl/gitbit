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

class ArticlePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9l0s', text: 'The errors', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 20, style: 'BOLD'}], key: 'ckrac', text: 'Device preparation: Failed', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 10, offset: 45, style: 'BOLD'}], key: '50sfs', text: 'Preparing your device for mobile management (0x800705b4)', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ae8dm', text: 'Installation exceeded the time limit set by your organization. Please try again or contact your IT support person for help.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '7qn1s', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'al2fq', text: 'By clicking Collect logs > saving the logs to the documents folder and clicking proceed anyway I was able to manually finish the setup and review the logs.', type: 'unstyled'}], entityMap: {0: {data: {alt: 'Error during autopilot Preparing your device for mobile management (0x800705b4)', src: 'https://i.ibb.co/PGgky8b/Preparing-your-device-for-mobile-management-0x800705b4.png'}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, datePublished: '2022/11/3', description: 'An error occurs during the autopilot setup. The error happens during the Preparing your device for mobile management phase. The error is 0x800705b4.', featuredImage: 'https://i.ibb.co/PGgky8b/Preparing-your-device-for-mobile-management-0x800705b4.png', id: 'hzp4wlq9q', images: ['https://i.ibb.co/PGgky8b/Preparing-your-device-for-mobile-management-0x800705b4.png'], publish: true, slug: 'error-in-autopilot-device-preparation-failed-preparing-your-device-for-mobile-management-0x800705b4-hzp4wlq9q', title: 'Error in Autopilot: Device preparation failed. Preparing your device for mobile management (0x800705b4)', type: 'article'}
    }
  }

  render() {
    const jsonLd = {
      headline: this.state.article.title,
      datePublished: this.state.article.publishDate,
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
        <Container>
          <Grid container>
            <Grid item>
              <main>
                <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                <div><h2>The errors</h2>
                  <p>Device preparation: <strong>Failed</strong></p>
                  <p>Preparing your device for mobile management (<strong>0x800705b4</strong>)</p>
                  <p>Installation exceeded the time limit set by your organization. Please try again or contact your IT support person for help.</p>
                  <img src="https://i.ibb.co/PGgky8b/Preparing-your-device-for-mobile-management-0x800705b4.png" alt="Error during autopilot Preparing your device for mobile management (0x800705b4)" style="height: undefined;width: undefined" />
                  <p>By clicking Collect logs &gt; saving the logs to the documents folder and clicking proceed anyway I was able to manually finish the setup and review the logs.</p>
                </div>
              </main>
            </Grid>
          </Grid>
        </Container>
      </Page>
    )
  }
}

export default ArticlePage
