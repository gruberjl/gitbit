import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const BlogArticle = () => {
  const title = 'Top 11 Tips and Tricks for Using Microsoft OneDrive'
  const jsonLd = {
    headline: title,
    datePublished: '8-6-2021',
    keywords: [
      'Microsoft',
      'Microsoft OneDrive',
      'Microsoft 365',
      'Office 365',
      'Productivity'
    ],
    author: {
      '@type': 'Person',
      name: 'John Gruber',
      url: 'https://medium.com/@gruberjl'
    }
  }

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1920/1*sfDRk0sFrRgZ5ib7BOBQ_w.png'} canonical={'https://medium.com/gitbit/11-pro-tips-and-tricks-for-using-microsoft-onedrive-34a235deea2c'} title={title} description={'with OneDrive you can keep items on your local device and sync them to the cloud. That way your files are available while you don\'t have an internet connection but are still backed up to the cloud as soon as you connect!'}>
      <main>
        <div>
          <Container className="blog-article">
            <Grid container>
              <Grid item>
                <Typography variant="h3" component="h1" sx={{mt: 4, mb: 4}}>Top 11 Tips and Tricks for Using Microsoft OneDrive</Typography>
                <div>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                    <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive for Business Screenshot" src="https://miro.medium.com/max/1920/1*sfDRk0sFrRgZ5ib7BOBQ_w.png" width="1920" height="967" />
                    <figcaption>OneDrive in the browser</figcaption>
                  </figure>
                </div>
                <div>
                  <div>
                    <Typography variant="h4" component="h2" gutterBottom>What’s Microsoft OneDrive?</Typography>
                    <Typography variant="body1" gutterBottom>Although it wasn’t called ‘cloud storage’ the first concept of cloud storage was developed in 1983 by CompuServe. CompuServe offered a small amount of disk space to its customers so they could upload any files they chose. Since then big cloud services such as Microsoft’s OneDrive, Google Drive, and Dropbox have launched with more robust features.</Typography>
                    <Typography variant="body1" gutterBottom>For example, with OneDrive you can keep items on your local device and sync them to the cloud. That way your files are available while you don’t have an internet connection but are still backed up to the cloud as soon as you connect!</Typography>
                    <Typography variant="body1" gutterBottom>Microsoft has two separate but identical OneDrive systems that provide customers with cloud file storage. Everyone has a free edition of OneDrive, also called the “consumer” version that will provide you with 5GB of storage. The professional edition is “OneDrive for Business” which is included in a Microsoft 365 or Office 365 subscription which has a whopping 1 TB (1000 GB) of storage space. Both look almost the same but are handled somewhat differently. In this article, we’ll be discussing OneDrive for Business but the tips may still apply to the free version as well.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>Why Microsoft OneDrive?</Typography>
                    <Typography variant="body1" gutterBottom>Today, it’s about stability, flexibility, and availability across platforms. Microsoft OneDrive is an outstanding online backup tool that tracks all the above specifications and is accessible on all major platforms.</Typography>
                    <Typography variant="body1" gutterBottom>Once the files are synced to the cloud you can access them on every device from anywhere. Not only are your files synced to the cloud but once they are you can share the files with friends, family, and colleagues to collaborate in real-time.</Typography>
                    <Typography variant="body1" gutterBottom>The service is full of secret tricks, which make it simple for you to use. Let’s dig in.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>1. Sync your files from the cloud to your personal computer</Typography>
                    <Typography variant="body1" gutterBottom>OneDrive allows you to sync files from your personal computer to the cloud and vice versa. Syncing makes it easy to work offline when you don’t have an internet connection. Syncing also helps performance by keeping the file locally you don’t need to worry about internet speeds. You can work all night long on a local file and every time you save the file, they are automatically backed up to the Microsoft cloud!</Typography>
                    <Typography variant="body1" gutterBottom>1. Go to <a href="https://www.office.com/" rel="noopener">https://www.office.com/</a></Typography>
                    <Typography variant="body1" gutterBottom>2. Click the OneDrive icon in the left-hand pane.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Icon" width="49" height="46" src="https://miro.medium.com/max/49/1*SimC8HhtY1rqttm9CoguBA.png" sizes="49px" srcSet="" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive icon</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>3. Click the <strong>Sync</strong> button in the toolbar.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Sync button" width="81" height="38" src="https://miro.medium.com/max/81/1*SWMgq6gi6ieOg4k3TOvwiw.png" sizes="81px" srcSet="" />
                          </div>
                        </div>
                      </div>
                      <figcaption>sync button</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>4. When the OneDrive application opens click <strong>Sign In</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrie Setup Window" width="282" height="265" src="https://miro.medium.com/max/282/1*wiV2YC2DVyVQIDo2tP05FA.png" sizes="282px" srcSet="https://miro.medium.com/max/276/1*wiV2YC2DVyVQIDo2tP05FA.png 276w, https://miro.medium.com/max/282/1*wiV2YC2DVyVQIDo2tP05FA.png 282w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive — Sign In Window</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>5. Finish signing into Office 365 and finish the setup. You’ll then have the OneDrive link in your File Explorer.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive in Windows Explorer" width="232" height="614" src="https://miro.medium.com/max/232/1*BZAqunoKvbEKRGQlxfOuEg.png" sizes="232px" srcSet="" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive Library in File Explorer</figcaption>
                    </figure>
                    <Typography variant="h4" component="h2" gutterBottom>2. Backup your local computer files</Typography>
                    <Typography variant="body1" gutterBottom>So now you have the OneDrive app on your desktop. But how do you get your local documents to be backed up using OneDrive? It’s no problem, simply add the folders to your OneDrive.</Typography>
                    <Typography variant="body1" gutterBottom>1. Click the <strong>OneDrive icon</strong> in the bottom right corner of your desktop. Click <strong>Help &amp; Settings</strong> then click <strong>Settings</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Settings Button" width="297" height="561" src="https://miro.medium.com/max/297/1*jKhiUgGo6izsr9Ld-94b8g.png" sizes="297px" srcSet="https://miro.medium.com/max/276/1*jKhiUgGo6izsr9Ld-94b8g.png 276w, https://miro.medium.com/max/297/1*jKhiUgGo6izsr9Ld-94b8g.png 297w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive Settings menu</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>2. Go to the <strong>Backup</strong> tab. Click <strong>Manage backup</strong> &gt; <strong>Start backup</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Starting the Backup" width="624" height="343" src="https://miro.medium.com/max/624/1*2F60yB4Aq31ps73zHD2zrA.png" sizes="624px" srcSet="https://miro.medium.com/max/276/1*2F60yB4Aq31ps73zHD2zrA.png 276w, https://miro.medium.com/max/552/1*2F60yB4Aq31ps73zHD2zrA.png 552w, https://miro.medium.com/max/624/1*2F60yB4Aq31ps73zHD2zrA.png 624w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive — Backup Computer</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>3. Once the Desktop, Documents, and Pictures are completely synced you’ll see green checkboxes next to the folders.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive syncing Documents, Pictures, and Desktop" width="143" height="124" src="https://miro.medium.com/max/143/1*Iof8F1JyVGWj14HffcXg0w.png" sizes="143px" srcSet="" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive Folders syncing</figcaption>
                    </figure>
                    <Typography variant="h4" component="h2" gutterBottom>3. Share your files and collaborate in real-time</Typography>
                    <Typography variant="body1" gutterBottom>OneDrive’s possibilities don’t end with backup and syncing. In today’s day in age, teams need to collaborate in real-time, from anywhere. OneDrive can be used to keep projects organized, share files about clients with your team, share the highlights, and provide file storage.</Typography>
                    <Typography variant="body1" gutterBottom>You can invite people to see your files with an email message generated by OneDrive. Only people who are invited will be able to open your files.</Typography>
                    <Typography variant="body1" gutterBottom>1. Right-click the file you want to share and click <strong>Share</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Sharing a File button" width="337" height="517" src="https://miro.medium.com/max/337/1*LDol9j25h5IACGNUeWW9bA.png" sizes="337px" srcSet="https://miro.medium.com/max/276/1*LDol9j25h5IACGNUeWW9bA.png 276w, https://miro.medium.com/max/337/1*LDol9j25h5IACGNUeWW9bA.png 337w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive Share a document</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>2. Click the <strong>People in your organization with the link can edit</strong> button.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive File Sharing Window" width="323" height="445" src="https://miro.medium.com/max/323/1*rDoDr64jhveVvuGJ5f52Iw.png" sizes="323px" srcSet="https://miro.medium.com/max/276/1*rDoDr64jhveVvuGJ5f52Iw.png 276w, https://miro.medium.com/max/323/1*rDoDr64jhveVvuGJ5f52Iw.png 323w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive Sharing a document window</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>3. Click <strong>specific people</strong> then click <strong>Apply</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive File Sharing with Specific people" width="324" height="470" src="https://miro.medium.com/max/324/1*9OZ08wSaWqWZzT-YKOUfHg.png" sizes="324px" srcSet="https://miro.medium.com/max/276/1*9OZ08wSaWqWZzT-YKOUfHg.png 276w, https://miro.medium.com/max/324/1*9OZ08wSaWqWZzT-YKOUfHg.png 324w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive Sharing document with specific people</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>4. In the <strong>Enter a name or email address</strong> textbox type the email address of those that you want to share the file with then click <strong>Send</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive sharing a file with people." width="323" height="485" src="https://miro.medium.com/max/323/1*UbF4PpGJCzYqz_VNrkZ9PA.png" sizes="323px" srcSet="https://miro.medium.com/max/276/1*UbF4PpGJCzYqz_VNrkZ9PA.png 276w, https://miro.medium.com/max/323/1*UbF4PpGJCzYqz_VNrkZ9PA.png 323w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive sharing a document</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>The users you shared the file with will receive the following email. They can click the <strong>Open </strong>button to open the file you shared!</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive email received when someone shares a file with you" width="649" height="480" src="https://miro.medium.com/max/649/1*imoynRiAL57GJG1of5DXcQ.png" sizes="649px" srcSet="https://miro.medium.com/max/276/1*imoynRiAL57GJG1of5DXcQ.png 276w, https://miro.medium.com/max/552/1*imoynRiAL57GJG1of5DXcQ.png 552w, https://miro.medium.com/max/640/1*imoynRiAL57GJG1of5DXcQ.png 640w, https://miro.medium.com/max/649/1*imoynRiAL57GJG1of5DXcQ.png 649w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive email received when someone shares a file with you</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>Once the other users have access you can both edit the file at the same time!</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Excel showing multiple users accessing file" width="636" height="377" src="https://miro.medium.com/max/636/1*NEfbuL5LJkLGvAny0PTgXA.png" sizes="636px" srcSet="https://miro.medium.com/max/276/1*NEfbuL5LJkLGvAny0PTgXA.png 276w, https://miro.medium.com/max/552/1*NEfbuL5LJkLGvAny0PTgXA.png 552w, https://miro.medium.com/max/636/1*NEfbuL5LJkLGvAny0PTgXA.png 636w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>Multiple users editing Microsoft Excel using OneDrive storage</figcaption>
                    </figure>
                    <Typography variant="h4" component="h2" gutterBottom>4. Anonymous Sharing with Expiration</Typography>
                    <Typography variant="body1" gutterBottom>It really is super handy. Maybe you want to share with one or more people but only grant access for a limited amount of time. You can share a file with anyone that has a link, assign a password, and set an expiration time. Once the time expires the link would become useless.</Typography>
                    <Typography variant="body1" gutterBottom>1. Right-click the file you want to share and click <strong>Share</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Sharing a File button" width="337" height="517" src="https://miro.medium.com/max/337/1*LDol9j25h5IACGNUeWW9bA.png" sizes="337px" srcSet="https://miro.medium.com/max/276/1*LDol9j25h5IACGNUeWW9bA.png 276w, https://miro.medium.com/max/337/1*LDol9j25h5IACGNUeWW9bA.png 337w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>Sharing a file using right click menu</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>2. Click the <strong>People in Your Organization with the link can edit</strong> button.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive File Sharing Window" width="323" height="445" src="https://miro.medium.com/max/323/1*rDoDr64jhveVvuGJ5f52Iw.png" sizes="323px" srcSet="https://miro.medium.com/max/276/1*rDoDr64jhveVvuGJ5f52Iw.png 276w, https://miro.medium.com/max/323/1*rDoDr64jhveVvuGJ5f52Iw.png 323w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>Sharing a file Send link menu</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>3. Click <strong>Anyone with the link</strong> &gt; Set your <strong>expiration </strong>time &gt; <strong>Set a password</strong> for file access and click <strong>Apply</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive sharing a file with anyone with a link with expiration and password circled." width="323" height="551" src="https://miro.medium.com/max/323/1*SgL-RFGdCjGhKFabYlVZdA.png" sizes="323px" srcSet="https://miro.medium.com/max/276/1*SgL-RFGdCjGhKFabYlVZdA.png 276w, https://miro.medium.com/max/323/1*SgL-RFGdCjGhKFabYlVZdA.png 323w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive sharing a field link settings menu</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>4. Click <strong>Copy Link</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Copy Link" width="327" height="448" src="https://miro.medium.com/max/327/1*wJ7wNPHzWYVfmooB8UqVXg.png" sizes="327px" srcSet="https://miro.medium.com/max/276/1*wJ7wNPHzWYVfmooB8UqVXg.png 276w, https://miro.medium.com/max/327/1*wJ7wNPHzWYVfmooB8UqVXg.png 327w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive sharing a file copy link button</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>5. Then you can send the link to anyone using email, Teams, or another method and send them the password using a phone call, text, or another method. Badda-bing Badda-boom.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>5. Offline Access vs On-Demand Files</Typography>
                    <Typography variant="body1" gutterBottom>Files on Demand is an OneDrive signature feature. It gives you the ability to search through your entire set of OneDrive files using File Explorer even if the files are not synced to your PC. If you open a file, OneDrive can download it automatically (this is the “on-demand” part); You can see which files are synced to your computer by using the file icon.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div role="button" tabIndex="0">
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive icons with explanations" width="700" height="433" src="https://miro.medium.com/max/700/1*sEe67aFISQCPrQ7tBtlRBA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*sEe67aFISQCPrQ7tBtlRBA.png 276w, https://miro.medium.com/max/552/1*sEe67aFISQCPrQ7tBtlRBA.png 552w, https://miro.medium.com/max/640/1*sEe67aFISQCPrQ7tBtlRBA.png 640w, https://miro.medium.com/max/700/1*sEe67aFISQCPrQ7tBtlRBA.png 700w" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <figcaption>Source <a href="https://support.microsoft.com/en-us/office/save-disk-space-with-onedrive-files-on-demand-for-windows-10-0e6860d3-d9f3-4971-b321-7092438fb38e" rel="noopener">Microsoft.com</a></figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>While it is easy to connect to your products wirelessly, you are not always in an environment where you can do so. The OneDrive settings menu makes it easy to check which folders you want offline to use. This feature will save you when you need to work while on the train or at the coffee shop. How do you use this feature?</Typography>
                    <Typography variant="body1" gutterBottom>1. Right-click on the OneDrive icon in the system tray and pick settings.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive settings button" width="246" height="410" src="https://miro.medium.com/max/246/1*Bbko2tFpkxrszYyHgPR55A.png" sizes="246px" srcSet="" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive taskbar notification area button</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>2. Press Choose Folders to pick the folders you want to synchronize.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Choose Folders circled" width="422" height="525" src="https://miro.medium.com/max/422/1*S0yTbsDB0h4XmDe-m9GKVg.png" sizes="422px" srcSet="https://miro.medium.com/max/276/1*S0yTbsDB0h4XmDe-m9GKVg.png 276w, https://miro.medium.com/max/422/1*S0yTbsDB0h4XmDe-m9GKVg.png 422w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive choose folders to sync</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>3. You can either keep all files and directories in the sync option in the next screen, or you can pick and choose the folders from the list. Click <strong>OK</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Sync a folder to your computer" width="596" height="559" src="https://miro.medium.com/max/596/1*M4x6xFHjvHyVSXQYmMsvGQ.png" sizes="596px" srcSet="https://miro.medium.com/max/276/1*M4x6xFHjvHyVSXQYmMsvGQ.png 276w, https://miro.medium.com/max/552/1*M4x6xFHjvHyVSXQYmMsvGQ.png 552w, https://miro.medium.com/max/596/1*M4x6xFHjvHyVSXQYmMsvGQ.png 596w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive selecting folders to sync</figcaption>
                    </figure>
                    <Typography variant="h4" component="h2" gutterBottom>6. Restoring Older File Versions</Typography>
                    <Typography variant="body1" gutterBottom>Alright, now we’ve given people access to files. Uh-oh, Joe accidentally deleted a sheet from the spreadsheet he wasn’t supposed to. What do we do now?</Typography>
                    <Typography variant="body1" gutterBottom>As you download and save documents, the newest edition is the only one you have access to but OneDrive preserves each version of the file, allowing users to access and control each version of the file. This allows you to restore older versions of a file with ease.</Typography>
                    <Typography variant="body1" gutterBottom>1. Right-click your <strong>OneDrive</strong> in File Explorer and click <strong>View Online</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive View online circled" width="386" height="309" src="https://miro.medium.com/max/386/1*esKpCj4Eul7Zq2ob8sC0cw.png" sizes="386px" srcSet="https://miro.medium.com/max/276/1*esKpCj4Eul7Zq2ob8sC0cw.png 276w, https://miro.medium.com/max/386/1*esKpCj4Eul7Zq2ob8sC0cw.png 386w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive View online button</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>2. Right-click on the file in question and pick Version History from the drop-down menu</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive version history button" width="267" height="389" src="https://miro.medium.com/max/267/1*xBGDln7nQjOsGSwrVWjMkQ.png" sizes="267px" srcSet="" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive field version history</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>3. Click the <strong>ellipsis (…)</strong> next to the version you want to restore and click <strong>Restore</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Restore a file version" width="455" height="247" src="https://miro.medium.com/max/455/1*cRgz__xbTNy0UuaVL5P4qQ.png" sizes="455px" srcSet="https://miro.medium.com/max/276/1*cRgz__xbTNy0UuaVL5P4qQ.png 276w, https://miro.medium.com/max/455/1*cRgz__xbTNy0UuaVL5P4qQ.png 455w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive restore button</figcaption>
                    </figure>
                    <Typography variant="h4" component="h2" gutterBottom>7. Save Your Email Attachments to OneDrive</Typography>
                    <Typography variant="body1" gutterBottom>You’ve probably lost valuable attachments to the mess of emails. A great tip to prevent this is saving attachments from Outlook to OneDrive. With Microsoft 365 it’s easy to move your email attachments to OneDrive.</Typography>
                    <Typography variant="body1" gutterBottom>1. Click the <strong>dropdown arrow</strong> next to the attachment in Outlook.</Typography>
                    <Typography variant="body1" gutterBottom>2. Click <strong>Upload</strong>.</Typography>
                    <Typography variant="body1" gutterBottom>3. Click <strong>OneDrive</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Outlook Upload Attachement to OneDrive" width="541" height="431" src="https://miro.medium.com/max/541/1*vU7oPHcS5okcZYEYpJZ4Cg.png" sizes="541px" srcSet="https://miro.medium.com/max/276/1*vU7oPHcS5okcZYEYpJZ4Cg.png 276w, https://miro.medium.com/max/541/1*vU7oPHcS5okcZYEYpJZ4Cg.png 541w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>Upload File Attachments to OneDrive from Outlook</figcaption>
                    </figure>
                    <Typography variant="h4" component="h2" gutterBottom>8. Automatically save all attachments to OneDrive!</Typography>
                    <Typography variant="body1" gutterBottom>Now let’s say you love having your attachments in your OneDrive. But who wants to continue to click upload &gt; OneDrive on every attachment? Thanks to Power Automate you can easily move every new email attachment to your OneDrive.</Typography>
                    <Typography variant="body1" gutterBottom>1. Go to <a href="https://flow.microsoft.com/en-us/galleries/public/templates/65ceb79430ef4956a0855fbe09249cdf/save-office-365-email-attachments-to-onedrive-for-business/" rel="noopener">https://flow.microsoft.com/en-us/galleries/public/templates/65ceb79430ef4956a0855fbe09249cdf/save-office-365-email-attachments-to-onedrive-for-business/</a></Typography>
                    <Typography variant="body1" gutterBottom>2. Click <strong>Try it Now</strong> then click <strong>Sign in</strong>. Sign in if you aren’t already.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Power Automate Sign in circled" width="411" height="458" src="https://miro.medium.com/max/411/1*ptA7lcuADMQXkcLQPpSWNA.png" sizes="411px" srcSet="https://miro.medium.com/max/276/1*ptA7lcuADMQXkcLQPpSWNA.png 276w, https://miro.medium.com/max/411/1*ptA7lcuADMQXkcLQPpSWNA.png 411w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive Flow setup</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>3. Click <strong>Create Flow</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div role="button" tabIndex="0">
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Save Office 365 email attachments to OneDrive for Business Create Flow" width="700" height="755" src="https://miro.medium.com/max/700/1*J56a4mZ2uHt9E4T2rqaugA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*J56a4mZ2uHt9E4T2rqaugA.png 276w, https://miro.medium.com/max/552/1*J56a4mZ2uHt9E4T2rqaugA.png 552w, https://miro.medium.com/max/640/1*J56a4mZ2uHt9E4T2rqaugA.png 640w, https://miro.medium.com/max/700/1*J56a4mZ2uHt9E4T2rqaugA.png 700w" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <figcaption>Save Office 365 email attachments to OneDrive for Business</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>Try it now by sending yourself an email with an attachment! You’ll see the email attachments automatically land in a folder called <strong>Email attachments from Power Automate</strong>. There are about 100 more prewritten scripts you can use. Check them out at <a href="https://flow.microsoft.com/en-us/connectors/shared_onedrive/onedrive/" rel="noopener">https://flow.microsoft.com/en-us/connectors/shared_onedrive/onedrive/</a></Typography>
                    <Typography variant="h4" component="h2" gutterBottom>9. Create a Team OneDrive</Typography>
                    <Typography variant="body1" gutterBottom>Technically, it’s a SharePoint Team Site but it works the same as a team OneDrive. A team OneDrive is a great way to store, access, and share files that are accessed and owned by a complete team.</Typography>
                    <Typography variant="body1" gutterBottom>1. Open your OneDrive in the Browser by going to <a href="https://www.office.com/" rel="noopener">https://www.office.com/</a> and clicking the OneDrive icon in the left pane.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive button circled in Office 365 portal" width="61" height="419" src="https://miro.medium.com/max/61/1*0k2jL9V2kaEvCcr0XsMe9w.png" sizes="61px" srcSet="" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive button in office.com</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>2. Click <strong>Create shared library</strong> in the left pane.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive create shared folder circled" width="179" height="533" src="https://miro.medium.com/max/179/1*iiFsrxQM9cOel5OJxKkiFQ.png" sizes="179px" srcSet="" />
                          </div>
                        </div>
                      </div>
                      <figcaption>Create shared library button</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>3. Enter the name of the shared OneDrive, the members you want to invite, and then click <strong>Create</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Create a shared library and share with other members" width="654" height="420" src="https://miro.medium.com/max/654/1*A7JTT1Zz6m_xUytj0kHZDQ.png" sizes="654px" srcSet="https://miro.medium.com/max/276/1*A7JTT1Zz6m_xUytj0kHZDQ.png 276w, https://miro.medium.com/max/552/1*A7JTT1Zz6m_xUytj0kHZDQ.png 552w, https://miro.medium.com/max/640/1*A7JTT1Zz6m_xUytj0kHZDQ.png 640w, https://miro.medium.com/max/654/1*A7JTT1Zz6m_xUytj0kHZDQ.png 654w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive create a shared library menu</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>4. Then click Sync to sync your new shared library to OneDrive on your computer.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div role="button" tabIndex="0">
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive syncing a shared library" width="700" height="120" src="https://miro.medium.com/max/700/1*L5JGyLuDHgSMCAfL09x6Dg.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*L5JGyLuDHgSMCAfL09x6Dg.png 276w, https://miro.medium.com/max/552/1*L5JGyLuDHgSMCAfL09x6Dg.png 552w, https://miro.medium.com/max/640/1*L5JGyLuDHgSMCAfL09x6Dg.png 640w, https://miro.medium.com/max/700/1*L5JGyLuDHgSMCAfL09x6Dg.png 700w" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDive sync button</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>You’ll see the new OneDrive folder in File Explorer on your computer!</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Windows File Explorer showing the synced shared library" width="242" height="334" src="https://miro.medium.com/max/242/1*tbifQO1Ub-_wI0y-A1_ORw.png" sizes="242px" srcSet="" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive shares synced to computer in Windows Explorer</figcaption>
                    </figure>
                    <Typography variant="h4" component="h2" gutterBottom>10. Access your files on your Mobile Device</Typography>
                    <Typography variant="body1" gutterBottom>Of course, there is an app for your Android or Apple device! Accessing your files on the go has never been easier. For example, let’s say you’re working on a Word document but can’t quite get the opening right. You run to the coffee shop and then it hits you. The perfect opening. What do you do? Do you take a note and copy it to the document later? No way! Simply open the document and plug in your new opening.</Typography>
                    <Typography variant="body1" gutterBottom>1. Go to the App Store for <a href="https://play.google.com/store/apps/details?id=com.microsoft.skydrive&amp;hl=en_US&amp;gl=US" rel="noopener">Android</a> or <a href="https://apps.apple.com/us/app/microsoft-onedrive/id477537958" rel="noopener">iPhone</a> and download OneDrive.</Typography>
                    <Typography variant="body1" gutterBottom>2. Launch the app and click Sign In.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Android App Sign in page" width="360" height="760" src="https://miro.medium.com/max/360/1*01iLV6rjEP-zp0ahYngI8g.png" sizes="360px" srcSet="https://miro.medium.com/max/276/1*01iLV6rjEP-zp0ahYngI8g.png 276w, https://miro.medium.com/max/360/1*01iLV6rjEP-zp0ahYngI8g.png 360w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive mobile setup</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>3. Sign in to the app and you're in.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Mobile App" width="360" height="760" src="https://miro.medium.com/max/360/1*ivPz05Iclj0IrCXxOT1kGQ.png" sizes="360px" srcSet="https://miro.medium.com/max/276/1*ivPz05Iclj0IrCXxOT1kGQ.png 276w, https://miro.medium.com/max/360/1*ivPz05Iclj0IrCXxOT1kGQ.png 360w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive mobile menu</figcaption>
                    </figure>
                    <Typography variant="h4" component="h2" gutterBottom>11. Scan documents to OneDrive</Typography>
                    <Typography variant="body1" gutterBottom>Whether you’re filing taxes, managing your small business’ finances, or putting in expenses, it’s necessary to know where your money is being spent. But receipts from your purchases are likely to get lost in a sea of documents on top or inside your desk.</Typography>
                    <Typography variant="body1" gutterBottom>If you struggle to track your receipts, a document scanner in your pocket can come in handy. And thanks to the Microsoft cloud, this scanner includes automatic syncing so you can access your receipts from anywhere.</Typography>
                    <Typography variant="body1" gutterBottom>1. Open your OneDrive app on your mobile device and click the camera button in the bottom right.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Mobile App with Camera button circled" width="360" height="760" src="https://miro.medium.com/max/360/1*c_CeLk-27XKZbIxmk8IJOg.png" sizes="360px" srcSet="https://miro.medium.com/max/276/1*c_CeLk-27XKZbIxmk8IJOg.png 276w, https://miro.medium.com/max/360/1*c_CeLk-27XKZbIxmk8IJOg.png 360w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive scan button</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>2. Verify document is highlighted at the bottom. Then snap your picture</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive scan a document with mobile device" width="360" height="760" src="https://miro.medium.com/max/360/1*w2GUIvLk8xrdSc9kH5Xe8g.png" sizes="360px" srcSet="https://miro.medium.com/max/276/1*w2GUIvLk8xrdSc9kH5Xe8g.png 276w, https://miro.medium.com/max/360/1*w2GUIvLk8xrdSc9kH5Xe8g.png 360w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive scanning a file</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>3. Perform any markup you want on your image then click <strong>Done</strong>.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive edit document before saving" width="360" height="760" src="https://miro.medium.com/max/360/1*hNzMdkiifRbQCr2xR4wpdg.png" sizes="360px" srcSet="https://miro.medium.com/max/276/1*hNzMdkiifRbQCr2xR4wpdg.png 276w, https://miro.medium.com/max/360/1*hNzMdkiifRbQCr2xR4wpdg.png 360w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive editing a scanned file</figcaption>
                    </figure>
                    <Typography variant="body1" gutterBottom>4. Select where you want to save the file and set the file name and click the checkmark.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive Mobile App Save Scan" width="360" height="760" src="https://miro.medium.com/max/360/1*jUotQzzpmoqmuWMardCfZA.png" sizes="360px" srcSet="https://miro.medium.com/max/276/1*jUotQzzpmoqmuWMardCfZA.png 276w, https://miro.medium.com/max/360/1*jUotQzzpmoqmuWMardCfZA.png 360w" />
                          </div>
                        </div>
                      </div>
                      <figcaption>OneDrive saving a scanned file</figcaption>
                    </figure>
                  </div>
                </div>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="body1" gutterBottom>Thank you for taking the time to read my article. I hope you found it beneficial. If you have any questions or feedback, please don’t hesitate to reach out.</Typography>
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

export default BlogArticle
