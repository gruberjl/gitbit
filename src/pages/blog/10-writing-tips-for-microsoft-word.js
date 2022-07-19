import { h, Component } from "preact"
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'



class BlogArticle extends Component {
  render() {
    const title = "10 Writing Tips for Microsoft Word"
    const jsonLd = {
      headline: title,
      datePublished: '10-13-2018',
      keywords: [
        "Microsoft",
        "Microsoft Word",
        "Microsoft 365",
        "Office 365",
        "Productivity"
      ],
      "author": {
        "@type": "Person",
        "name": "John Gruber",
        url: 'https://medium.com/@gruberjl'
      }
    }

    return (
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*soXE-MymVVp4327bzccbpA.jpeg'} canonical={'https://medium.com/gitbit/10-writing-tips-for-microsoft-word-60ed6e645515'} title={title} description={"10 tips to save you time and stay organized. Microsoft Word 2016 is built for maximum productivity. Quickly produce professional documents using the rich authoring features."}>
        <main>
          <div>
            <Container className="blog-article">
              <Grid container>
                <Grid item>
                  <Typography variant="h3" component="h1" sx={{mt:4, mb:4}}>10 Writing Tips for Microsoft Word</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                   <div role="button" tabIndex="0">
                      <div><img style={{maxWidth: '100%', height: 'auto'}} alt="white laptop background aesthetic" src="https://miro.medium.com/max/700/1*soXE-MymVVp4327bzccbpA.jpeg" width="700" height="467" role="presentation"/></div>
                   </div>
                   <figcaption>Source: <a href="https://pixabay.com/en/gray-computer-mobile-2158653/" rel="noopener">pixabay.com</a></figcaption>
                  </figure>
                  <Typography variant="body1" gutterBottom>While working for Microsoft, Charles Simonyi and Richard Brodie developed the first version of Microsoft Word. The two developers chipped away at Xerox Bravo, the principal WYSIWYG (What You See Is What You Get) word processor. Word 1.0 launched in October 1983 with versions for Xenix and MS-DOS. The first Windows adaptation launched in 1989, with an enhanced interface. The completion of Windows 3.0 in 1990 turned Word into an enormous business achievement. As of late, Microsoft’s major improvements to this old software have gone unnoticed. Microsoft has added some excellent features to help improve your writing and productivity using Microsoft Word.</Typography>
                  <Typography variant="body1" gutterBottom>I have purposefully ignored some of Microsoft Words best features. Microsoft has enhanced document sharing, reviewing, and co-authoring in the most recent versions. My intention is to shed some insight on how Microsoft Word can improve your writing and productivity. Sharing, editing, and workflows are out of this articles scope.</Typography>
                  <Typography variant="h4" component="h2" gutterBottom>1. Text to Speech with Dictate</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                   <div>
                      <div>
                         <div>
                            <div></div>
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Word Dictation Ribbon" width="609" height="135" role="presentation" src="https://miro.medium.com/max/609/1*VZHhCsYMqlXTpQCb-BPGnw.png" sizes="609px" srcSet="https://miro.medium.com/max/276/1*VZHhCsYMqlXTpQCb-BPGnw.png 276w, https://miro.medium.com/max/552/1*VZHhCsYMqlXTpQCb-BPGnw.png 552w, https://miro.medium.com/max/609/1*VZHhCsYMqlXTpQCb-BPGnw.png 609w"/>
                         </div>
                      </div>
                   </div>
                   <figcaption>Source: </figcaption>
                  </figure>
                  <Typography variant="body1" gutterBottom>You type all day long to get things done. Responding to email, writing documents, and creating presentations to communicate your ideas. Sometimes, this gets tiring. Your fingers get sore, your wrists hurt. Do you ever wish you could just talk to your computer and have it write for you? Research shows you can speak much faster than you can type. What if you could type with your voice? Meet Dictate, a Microsoft Garage project. Dictate is an Office add-in for Windows Outlook, Word, and PowerPoint that converts speech to text using the ultramodern speech recognition behind Cortana and Microsoft Translator. You can download Dictate from Microsoft’s Garage website: <a href="https://www.microsoft.com/en-us/garage/profiles/dictate" rel="noopener">https://www.microsoft.com/en-us/garage/profiles/dictate</a>. Once installed, you’ll find a new ribbon menu, <strong>Dictation</strong>.</Typography>
                  <Typography variant="h4" component="h2" gutterBottom>2. Keyboard Shortcuts</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                   <div>
                      <div>
                         <div>
                            <div></div>
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Word Hot Keys" width="288" height="363" role="presentation" src="https://miro.medium.com/max/288/1*v0IHSA0uR3ItPpekupQfew.png" sizes="288px" srcSet="https://miro.medium.com/max/276/1*v0IHSA0uR3ItPpekupQfew.png 276w, https://miro.medium.com/max/288/1*v0IHSA0uR3ItPpekupQfew.png 288w"/>
                         </div>
                      </div>
                   </div>
                   <figcaption>Source: </figcaption>
                  </figure>
                  <Typography variant="body1" gutterBottom>While not groundbreaking, keyboard shortcuts remain one of the unsurpassed ways to improve productivity. This table shows the most often used shortcuts in Microsoft Word. Visit <a href="https://support.office.com/en-us/article/keyboard-shortcuts-for-microsoft-word-on-windows-95ef89dd-7142-4b50-afb2-f762f663ceb2" rel="noopener">Microsoft Office Support</a> for a complete list.</Typography>
                  <Typography variant="h4" component="h2" gutterBottom>3. Synonyms Lookup</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                   <div>
                      <div>
                         <div>
                            <div></div>
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Word right click menu" width="275" height="323" role="presentation" src="https://miro.medium.com/max/275/1*FaxEm3rZAzI3513nSZG_UA.png" sizes="275px" srcSet=""/>
                         </div>
                      </div>
                   </div>
                   <figcaption>Source: </figcaption>
                  </figure>
                  <Typography variant="body1" gutterBottom>Microsoft has added the ability to look up synonyms to the right-click menu in Microsoft Word. Highlight a word and right click to open the drop-down menu. Select <strong>Synonyms</strong> and choose an innovative word.</Typography>
                  <Typography variant="h4" component="h2" gutterBottom>4. Enhanced Proofreading</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                   <div role="button" tabIndex="0">
                      <div>
                         <div>
                            <div>
                               <div></div>
                               <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Word Proofing Options" width="700" height="542" role="presentation" src="https://miro.medium.com/max/700/1*22p6T_V_p62fPOP_yojkIA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*22p6T_V_p62fPOP_yojkIA.png 276w, https://miro.medium.com/max/552/1*22p6T_V_p62fPOP_yojkIA.png 552w, https://miro.medium.com/max/640/1*22p6T_V_p62fPOP_yojkIA.png 640w, https://miro.medium.com/max/700/1*22p6T_V_p62fPOP_yojkIA.png 700w"/>
                            </div>
                         </div>
                      </div>
                   </div>
                   <figcaption>Source: </figcaption>
                  </figure>
                  <Typography variant="body1" gutterBottom>Word has found spelling and grammar mistakes for years but spelling and grammar are no longer enough to deliver high-quality content. Open the <strong>File</strong> menu and select <strong>Options</strong>. Click the <strong>Proofing</strong> tab and review the latest enhancements. Don’t miss the additional settings located under the <strong>Settings</strong> button.</Typography>
                  <Typography variant="h4" component="h2" gutterBottom>5. Research from Word</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                   <div>
                      <div>
                         <div>
                            <div></div>
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Word Research" width="368" height="304" role="presentation" src="https://miro.medium.com/max/368/1*BLnhx52DnyctfKsmN8fvOQ.png" sizes="368px" srcSet="https://miro.medium.com/max/276/1*BLnhx52DnyctfKsmN8fvOQ.png 276w, https://miro.medium.com/max/368/1*BLnhx52DnyctfKsmN8fvOQ.png 368w"/>
                         </div>
                      </div>
                   </div>
                   <figcaption>Source: </figcaption>
                  </figure>
                  <Typography variant="body1" gutterBottom>Microsoft has included a new <strong>Researcher </strong>toolset. If you’re like most of us, you perform Google searches to help you write. Not only is Researcher faster because it’s built right into Word, but it also filters for higher quality content. A quick search of Sun Tzu won’t bring up the best fictional movie about this legendary man, it will show credible sources with valuable information.</Typography>
                  <Typography variant="h4" component="h2" gutterBottom>6. Word Count</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                   <div>
                      <div>
                         <div>
                            <div></div>
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Word screenshot showing word count" width="407" height="246" role="presentation" src="https://miro.medium.com/max/407/1*-zjDOONQ3ceHVRBD7peMMw.png" sizes="407px" srcSet="https://miro.medium.com/max/276/1*-zjDOONQ3ceHVRBD7peMMw.png 276w, https://miro.medium.com/max/407/1*-zjDOONQ3ceHVRBD7peMMw.png 407w"/>
                         </div>
                      </div>
                   </div>
                   <figcaption>Source: </figcaption>
                  </figure>
                  <Typography variant="body1" gutterBottom>Word count is one of the most important pieces of information in delivering high-quality content. Bloomberg recommends 800–1000 words in reader-submitted content. Medium converts the word count to the ‘median time to read’ and recommends around 7 minutes. Too long, and no one will read it. Too short and you won’t provide value to your audience. Word count has been available in Microsoft Word for some time, but Microsoft has moved this critical piece of information to the bottom left corner.</Typography>
                  <Typography variant="h4" component="h2" gutterBottom>7. Review with Read Aloud</Typography>
                  <div>
                   <div>
                      <div>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Word Ribbon with Read Aloud circled" src="https://miro.medium.com/max/1000/1*Hf0pVPJrnFSkuPTDpcmk5g.png" width="1000" height="125" role="presentation"/></div>
                            </div>
                            <figcaption>Source: </figcaption>
                         </figure>
                      </div>
                   </div>
                  </div>
                  <div>
                   <div>
                      <Typography variant="body1" gutterBottom>It doesn’t matter how many times I re-read my articles, I always overlook mistakes. Microsoft has included a new feature called <strong>Read Aloud</strong>. As the name implies, you can use this new tool to hear the text read aloud. By using Read Aloud you can find more errors and create a more natural flowing article.</Typography>
                      <Typography variant="body1" gutterBottom>To start using this unique feature, click the Read Aloud button found under the <strong>Review</strong> ribbon. Once you start Read Aloud, a menu will open in the top right corner directly under the ribbon. From the Read Aloud menu you can change the voice selector to another reader. The default reader, Microsoft David, sounds computerized and choppy. Microsoft Zira has a more natural flow.</Typography>
                      <Typography variant="h4" component="h2" gutterBottom>8. Icons to Draw Attention</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Word Icons" src="https://miro.medium.com/max/700/1*RO2PiRKF_IkK1VzZVd1CwA.png" width="700" height="289" role="presentation"/></div>
                         </div>
                         <figcaption>Source: </figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>Let’s face it, the average person has a lot to read in a day. Many people are only looking at headings and images. Microsoft has been working hard to help users deliver more artistic value in their content. One of my favorite additions are the sleek new <strong>Icons</strong>. Clean and simple to add they can draw the readers attention to important pieces of information without adding clutter. Microsoft’s icons are professional and stylish.</Typography>
                      <Typography variant="body1" gutterBottom>Find the <strong>Icons</strong> button in the <strong>Insert</strong> ribbon.</Typography>
                      <Typography variant="h4" component="h2" gutterBottom>9. Plagiarism Checker</Typography>
                      <Typography variant="body1" gutterBottom>A few years back I was tasked with creating some branding content for a business. Standard mission statement, vision, and goals. I spent a week researching to understand how and why people create these critical pieces of content. In that time, I looked at other successful companies to see what type of material they were delivering. Finally, I composed our own unique brand, or so I thought. As a colleague pointed out, I copied Google’s mission statement. It was a complete accident, I’m sure I looked at Google, but I didn’t intentionally copy it. It must have resonated with me and without realizing, I re-wrote it. Now I use a plagiarism checker from Copyleaks.com.</Typography>
                      <Typography variant="body1" gutterBottom>Getting started is simple, from the <strong>Insert</strong> ribbon, select <strong>Store</strong>. After a quick search for <strong>CopyLeaks</strong>,<strong> </strong>you can add the add-in to Microsoft Word. Once installed, register for a free account.</Typography>
                      <Typography variant="h4" component="h2" gutterBottom>10. Linked Notes</Typography>
                   </div>
                  </div>
                  <div>
                   <div>
                      <div>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Word Notes" src="https://miro.medium.com/max/1000/1*-m1fvRmTDYZIS_TJlZhzVA.png" width="1000" height="228" role="presentation"/></div>
                            </div>
                            <figcaption>Source: </figcaption>
                         </figure>
                      </div>
                   </div>
                  </div>
                  <div>
                   <div>
                      <Typography variant="body1" gutterBottom>Motivation is pleasant, however, it’s very little fun facing a deadline when you can’t find inspiration to compose an article. Arrange your way around this issue by getting thoughts out of your head and keeping them in OneNote.</Typography>
                      <Typography variant="body1" gutterBottom>You can compose your thoughts, quotes, and sources in OneNote and keep your article spotless and sorted out. Microsoft has introduced another path to improve your experience with OneNote and Word, Linked Notes.</Typography>
                      <Typography variant="body1" gutterBottom>Linked Notes let you dock OneNote to the side of your PC screen, you can compose your article in Word, and take notes in OneNote concurrently. Linked Notes will help you stay focused and organized.</Typography>
                      <Typography variant="body1" gutterBottom>To link notes to your document, click the <strong>Linked Notes</strong> button under the <strong>Review</strong> ribbon. OneNote will open asking where to save the notes. Once you choose a notebook and section, OneNote will open on the right-hand side of your screen.</Typography>
                   </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </main>
      </Page>
    )
  }
}

export default BlogArticle
