import { h, Component } from "preact"
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

 
class BlogArticle extends Component {
  render() {
    const title = "Mac ❤’s OneDrive for Business"
    const jsonLd = {
      headline: title,
      datePublished: '10-18-2018',
      keywords: [
        "Microsoft",
        "Microsoft OneDrive",
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
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1000/1*gmbdfxFBGhLBnLbXjfLuLQ.png'} canonical={'https://medium.com/gitbit/mac-s-onedrive-for-business-f83be226a79b'} title={"Mac ❤’s OneDrive for Business. Microsoft vs Apple is one of the…"} description={"Everything you need to know to start using OneDrive on Mac"}>
        <main>
          <div>
            <Container className="blog-article">
              <Grid container>
                <Grid item>
                  <Typography variant="h3" component="h1" sx={{mt:4, mb:4}}>Mac ❤’s OneDrive for Business</Typography>
                  <div>
                   <div>
                      <div>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Mac vs PC" src="https://miro.medium.com/max/1000/1*gmbdfxFBGhLBnLbXjfLuLQ.png" width="1000" height="625" role="presentation"/></div>
                            </div>
                            <figcaption>Source: <a href="https://9to5mac.com/2016/06/02/opinion-ios-vs-android-is-the-new-mac-vs-pc/" rel="noopener">9to5mac.com</a></figcaption>
                         </figure>
                      </div>
                   </div>
                  </div>
                  <div>
                   <div>
                      <Typography variant="body1" gutterBottom>Microsoft vs Apple is one of the greatest rivalries in IT history. Something that reads like a Shakespeare play. Filled with ambition, idealism, jealousy, and plot twists.</Typography>
                      <Typography variant="body1" gutterBottom>The smooth-talking Jobs vs awkward dancing nerd Gates. Their fierce competition started in the 70’s when personal PCs were just starting off.</Typography>
                      <Typography variant="body1" gutterBottom>By the 90’s both companies had taken off and were known around the globe but the turbulence was ahead. Microsoft was being investigated by the FTC for abusing their monopoly while Apple had a fantastic computer that was performing poorly on the market due to lack of applications available.</Typography>
                      <Typography variant="body1" gutterBottom>In a sudden plot twist, the two companies entered into a historic partnership where Microsoft purchased $150 million dollars of stock and promised to make the Microsoft Office suite available on Macs.</Typography>
                      <Typography variant="body1" gutterBottom>Things soured in the 2000’s when the rivalry sparked back up with Job’s chastising Microsoft for “copying Google and Apple”.</Typography>
                      <Typography variant="body1" gutterBottom>Today, times have changed. Both companies have steered in different directions. Apple focused on their device lines including the iPad and iPhone while Microsoft has transformed into a cloud computing company with Office 365 and Azure. Since the bitter rivalry has ended Microsoft has developed dozens of apps for the Mac and iPhone including OneDrive for Business.</Typography>
                      <Typography variant="h4" component="h2" gutterBottom>What’s OneDrive for Business?</Typography>
                      <Typography variant="body1" gutterBottom>Mac and Apple fans, I’d like to introduce you to Microsoft’s OneDrive. I know some of you may still not like Microsoft but times have changed and so has Microsoft. They’re no longer the suit wearing capitalist corporation they once were. As a matter of fact, Apple has outpaced Microsoft to become the largest technology company!</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div>
                            <div><iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FkIWubjDdd94%3Fstart%3D13%26feature%3Doembed%26start%3D13&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkIWubjDdd94&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FkIWubjDdd94%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="Introducing Office 365 Business!" scrolling="auto"></iframe></div>
                         </div>
                      </figure>
                      <Typography variant="body1" gutterBottom>Anyway, OneDrive for Business is part of Microsoft’s Office 365 cloud suite. Designed to be the next generation in file storage, sharing, and collaboration technology. Similar to the iCloud, OneDrive will sync your files, pictures, and documents directly to the cloud. Geared towards the enterprise, OneDrive has sync, share, and real-time collaboration built into Microsoft’s secure cloud.</Typography>
                      <Typography variant="h4" component="h2" gutterBottom>Why OneDrive on your Mac?</Typography>
                      <ul>
                         <li><strong>Anywhere Access</strong>: Use a browser to access your files from any device or sync your OneDrive for file access even while offline.</li>
                         <li><strong>Seamless Collaboration</strong>: Work faster and smarter with anyone inside or outside your organization. Open and edit Office documents at the same time!</li>
                         <li><strong>Native desktop application</strong>: OneDrive has a native application for Windows, Mac OS, Android, and iOS.</li>
                         <li><strong>Security</strong>: Designed for enterprise, government, healthcare, and virtually every vertical, OneDrive has relentless security, compliance, and administration built it.</li>
                         <li><strong>File Sharing</strong>: Share files with others for a faster feedback and approval loop.</li>
                         <li><strong>Backups</strong>: All files are backed up on Microsoft secure cloud. Files have a revision history to go back in time on any document.</li>
                      </ul>
                      <Typography variant="h4" component="h2" gutterBottom>How to Access OneDrive for Business from Safari</Typography>
                      <Typography variant="body1" gutterBottom>First things first. OneDrive can be accessed directly from any browser. You don’t need to install any software on your Mac to start using OneDrive. The browser access is also great when you want to open a file on someone else’s device.</Typography>
                      <ol>
                         <li>Go to <a href="http://portal.office.com/" rel="noopener">http://portal.office.com/</a>.</li>
                         <li>Sign in with your Office 365 credentials.</li>
                         <li>Click the OneDrive button located under the Apps sections.</li>
                      </ol>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive icon" width="700" height="218" role="presentation" src="https://miro.medium.com/max/700/1*OCEgc6Y3SuXLcLdj6Tqr6g.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*OCEgc6Y3SuXLcLdj6Tqr6g.png 276w, https://miro.medium.com/max/552/1*OCEgc6Y3SuXLcLdj6Tqr6g.png 552w, https://miro.medium.com/max/640/1*OCEgc6Y3SuXLcLdj6Tqr6g.png 640w, https://miro.medium.com/max/700/1*OCEgc6Y3SuXLcLdj6Tqr6g.png 700w"/>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </figure>
                      <Typography variant="h4" component="h2" gutterBottom>How to Sync OneDrive for Business to Mac</Typography>
                      <Typography variant="body1" gutterBottom>Microsoft has developed a OneDrive app for every device including the Mac! After installing the OneDrive app a copy of your OneDrive files are synced to your Mac and put in the OneDrive folder. OneDrive will continue to keep this folder in sync with OneDrive. If you edit or delete a file or folder on the OneDrive website, the changes will sync updating your local copy and vice versa. Every device with OneDrive installed will automatically be updated too.</Typography>
                      <Typography variant="body1" gutterBottom>The OneDrive folder works like any other folder. To upload files to OneDrive simply move the files to your OneDrive folder using the Finder. Editing and saving a file located in your OneDrive folder will automatically sync to the cloud.</Typography>
                      <ol>
                         <li><a href="https://go.microsoft.com/fwlink/?linkid=823060" rel="noopener">Download &amp; Install OneDrive for Mac</a>.</li>
                         <li>Start OneDrive by pressing <strong>cmd+Space</strong> to launch a Spotlight query and type <strong>OneDrive</strong>.</li>
                         <li>Enter your work email address and click <strong>Sign In</strong>.</li>
                         <li>On the <em>This is your OneDrive folder</em> page, click <strong>Choose OneDrive Folder Location</strong>. Select a location where you would like to save your OneDrive files and click <strong>Choose this location</strong>.</li>
                         <li>Once back on the T<em>his is your OneDrive folder</em> page, click <strong>Next</strong>.</li>
                         <li>On the <em>Sync Files from Your OneDrive</em> page, click <strong>Next</strong>.</li>
                         <li>On the <em>Your OneDrive Is Ready for You</em> page, click <strong>Open at login so my files sync automatically</strong> check box. Click <strong>Open my OneDrive</strong>.</li>
                      </ol>
                   </div>
                  </div>
                  <div>
                   <div>
                      <div>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div><img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive setup wizard" src="https://miro.medium.com/max/1000/1*W7n9FKf1wtcrfiX980iSUg.png" width="1000" height="1165" role="presentation"/></div>
                            </div>
                         </figure>
                      </div>
                   </div>
                  </div>
                  <div>
                   <div>
                      <Typography variant="h4" component="h2" gutterBottom>Share Files from OneDrive + Mac</Typography>
                      <Typography variant="body1" gutterBottom>How often does this happen? You want to collaborate on a document and you end up emailing the document back and forth filling up your mailbox and making it hard to keep track of revisions. If you’re unlucky, the file can’t be shared due to security constraints or size limits. Fortunately, OneDrive offers an alternative, you can share the file directly from OneDrive!</Typography>
                      <Typography variant="body1" gutterBottom><strong>OneDrive for Business’s sharing capability provides the following enhancements:</strong></Typography>
                      <ul>
                         <li>While an Office document is stored in OneDrive you and colleagues can read, edit, and <strong>collaborate on the document at the same time</strong>! (More info below)</li>
                         <li><strong>Easier to track revisions</strong> because you and the collaborators can work on the document directly from OneDrive. OneDrive will track changes so you can always undo what someone has done!</li>
                         <li><strong>Enhanced security</strong> with different permissions. Maintain control by granting someone <strong>view only</strong> or <strong>edit </strong>permissions. With view only permissions the person you share the document with cannot make any edits.</li>
                         <li><strong>Smaller mailbox</strong> size. By keeping the document in OneDrive and emailing a link, your mailbox will stay small so you won’t have to worry about maintaining your mailbox size.</li>
                      </ul>
                      <Typography variant="h5" component="h3" gutterBottom>How to Share Files from your Mac</Typography>
                      <ol>
                         <li>Open your OneDrive folder.</li>
                         <li>Right-click the file or folder you want to share.</li>
                         <li>Select <strong>Share a OneDrive link</strong> or <strong>More OneDrive sharing options</strong>.</li>
                      </ol>
                   </div>
                  </div>
                  <div>
                   <div>
                      <div>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Mac Share a OneDrive link" src="https://miro.medium.com/max/1000/1*qNSSqSTaWPuyWpsUbghDbA.png" width="1000" height="848" role="presentation"/></div>
                            </div>
                            <figcaption>source: <a href="https://news.softpedia.com/news/microsoft-releases-major-onedrive-update-for-apple-macos-516630.shtml#sgal_0" rel="noopener">Softpedia</a></figcaption>
                         </figure>
                      </div>
                   </div>
                  </div>
                  <div>
                   <div>
                      <Typography variant="body1" gutterBottom>With OneDrive you can share a file with a link or password protect your document.</Typography>
                      <Typography variant="body1" gutterBottom>If you chose to share a document with a link, anyone that has the link will be able to view the document. While the link isn’t easily found on the internet, the link may be shared with someone that shouldn’t have access.</Typography>
                      <Typography variant="body1" gutterBottom>Password protecting a document will require individuals that access the document to sign-in. Microsoft won’t require your colleagues to have an account in Office 365, they can sign in for free!</Typography>
                      <Typography variant="h4" component="h2" gutterBottom>Auto-Saving Office Documents to OneDrive on the Mac</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Excel AutoSave" src="https://miro.medium.com/max/369/0*-nv_CgRkejqYg1S1.png" width="369" height="200" role="presentation"/></div>
                         <figcaption>source: <a href="https://support.office.com/en-us/article/what-is-autosave-6d6bd723-ebfd-4e40-b5f6-ae6e8088f7a5" rel="noopener">office.com</a></figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>If you’re using the Office ProPlus on your Mac you may have noticed the AutoSave switch in the top left corner of Word, Excel, and PowerPoint. AutoSave is automatically enabled when a file is stored on OneDrive for Business and will save changes to your OneDrive folder and sync to the cloud as you work.</Typography>
                      <Typography variant="body1" gutterBottom><em>I’ve been using the AutoSave for quite a while and I still click </em><strong><em>Command + S</em></strong><em> to save my document 5 times a minute. Don’t worry, in a couple of years that muscle memory will wear off!</em></Typography>
                      <Typography variant="h4" component="h2" gutterBottom>Real-Time Collaboration with Office Documents + OneDrive + Mac</Typography>
                      <Typography variant="body1" gutterBottom>SHARE! AUTOSAVE! By your powers combined... I AM CO-AUTHORING!</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Captain Planet" width="700" height="394" role="presentation" src="https://miro.medium.com/max/700/0*UHk88CUwtsGbee8h.jpg" sizes="700px" srcSet="https://miro.medium.com/max/276/0*UHk88CUwtsGbee8h.jpg 276w, https://miro.medium.com/max/552/0*UHk88CUwtsGbee8h.jpg 552w, https://miro.medium.com/max/640/0*UHk88CUwtsGbee8h.jpg 640w, https://miro.medium.com/max/700/0*UHk88CUwtsGbee8h.jpg 700w"/>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <figcaption>source: <a href="https://nerdist.com/what-skin-condition-did-captain-planet-have/" rel="noopener">nerdist</a></figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>How often do you still run into the “This file is locked for editing; Locked By: George”. Gone are the days where you need to track down George (who knows which one) because he accidentally left the Excel spreadsheet open that you need to update. Or worse, you’re the one who accidentally left the document open and someone else is looking for you!</Typography>
                      <Typography variant="body1" gutterBottom><em>Thanks to Co-Authoring, and the boom in power for personal computers, I rarely close anything anymore.</em></Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div>
                            <div>
                               <div>
                                  <div></div>
                                  <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Multiple users editing a file" width="345" height="160" role="presentation" src="https://miro.medium.com/max/345/1*P3R-6j47n5k96EGcNHEGpw.png" sizes="345px" srcSet="https://miro.medium.com/max/276/1*P3R-6j47n5k96EGcNHEGpw.png 276w, https://miro.medium.com/max/345/1*P3R-6j47n5k96EGcNHEGpw.png 345w"/>
                               </div>
                            </div>
                         </div>
                         <figcaption>source: <a href="https://support.office.com/en-us/article/collaborate-on-word-documents-with-real-time-co-authoring-7dd3040c-3f30-4fdd-bab0-8586492a1f1d" rel="noopener">office.com</a></figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>Co-authoring is on by default. Simply <strong>share </strong>the document, verify <strong>AutoSave </strong>is on and multiple people can open the document at the same time. If you’re still receiving the pesky “This file is locked” error that means the person that has locked the file doesn’t have AutoSave or the right version of the Office suite.</Typography>
                   </div>
                  </div>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="body1" gutterBottom>That’s everything you need to know to get started with OneDrive on your Mac. If you have any questions don’t hesitate to reach out below or find me on <a href="https://twitter.com/gruberjl" rel="noopener">Twitter @gruberjl</a> and <a href="https://www.linkedin.com/in/gruberjl/" rel="noopener">LinkedIn</a>.</Typography>
                      </div>
                   </div>
                  </section>
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
