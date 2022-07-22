import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'What’s OneDrive for Business. Enterprise File Sync and Share'
  const jsonLd = {
    headline: title,
    datePublished: '10-12-2018',
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
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*JZH5y9EsQeEhRxaolsLipw.png'} canonical={'https://medium.com/gitbit/whats-onedrive-for-business-7965bed454b0'} title={title} description={'The world is changing. Data is growing at a rapid pace. By 2020 the world will have accumulated 44 zettabytes or 44,000,000,000,000 GB of data.'}>
      <main>
        <div>
          <Container className="blog-article">
            <Grid container>
              <Grid item>
                <Typography variant="h3" component="h1" sx={{mt: 4, mb: 4}}>What’s OneDrive for Business</Typography>
                <Typography variant="body1" gutterBottom>The world is changing. Data is growing at a rapid pace. By 2020 the world will have accumulated 44 zettabytes or 44,000,000,000,000 GB of data. The rapid expansion of data has become a challenge for people and organization a like.</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div>
                      <div>
                        <div>
                          <div />
                          <img style={{maxWidth: '100%', height: 'auto'}} alt="Data storage supply demand worldwide chart" width="700" height="488" role="presentation" src="https://miro.medium.com/max/700/1*JZH5y9EsQeEhRxaolsLipw.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*JZH5y9EsQeEhRxaolsLipw.png 276w, https://miro.medium.com/max/552/1*JZH5y9EsQeEhRxaolsLipw.png 552w, https://miro.medium.com/max/640/1*JZH5y9EsQeEhRxaolsLipw.png 640w, https://miro.medium.com/max/700/1*JZH5y9EsQeEhRxaolsLipw.png 700w" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <figcaption>source: <a href="https://www.statista.com/statistics/751749/worldwide-data-storage-capacity-and-demand/" rel="noopener">Statista</a></figcaption>
                </figure>
                <Typography variant="body1" gutterBottom>Meanwhile, the amount of smart devices per person is growing significantly. By 2020 each person will own an average of 7 connected devices. Work computers, home laptops, smart phones, and tablets. The data we use must be accessible any time, any where, and on every device. The challenges of data accessibility don’t stop there. The data has to be available on Microsoft, Apple, and Android devices.</Typography>
                <Typography variant="body1" gutterBottom>The traditional methods of data storage on personal devices and servers are falling short. Lost and stolen devices, server outages, and the inability to access data while on the road have all caused a loss of productivity, missed deadlines, and decrease the customer experience.</Typography>
                <Typography variant="body1" gutterBottom>Employees expect fast, easy access to their files from the device of their choice. The sales team can review the quote in their car before the big meeting. Teams working and updating spreadsheets at the same time. Leadership accessing and reviewing orders without a hassle.</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div>
                    <div><iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F0x3iA746WBE%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0x3iA746WBE&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F0x3iA746WBE%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="The new Office" scrolling="auto" /></div>
                  </div>
                </figure>
                <Typography variant="body1" gutterBottom>Need a solution that lets you store all your files in one place, share and collaborate with others, and get to your photos and files from anywhere OneDrive can help. OneDrive supports more than 270 file types. Create a file on your PC or Mac and edit the same file on your laptop, tablet, or phone. No need to email it to yourself or save a copy to a thumb drive. Easily share files with others, work together, and see comments and changes as they happen. Stay connected wherever you are with the OneDrive mobile app on your Android or iOS. With all your files in OneDrive, securely store, share, and get to your files from anywhere at work, at home or on the go.</Typography>
                <Typography variant="body1" gutterBottom>OneDrive for Business stores your files in the secure Microsoft cloud. Every employee has their own personal OneDrive where they can store, manage, and share documents at any time.</Typography>
                <Typography variant="body1" gutterBottom>With the OneDrive apps for Windows, Mac, Android, and iPhone you can access and sync your data so you’re never waiting for the document to download or wasting time with VPNs.</Typography>
                <blockquote>
                  <Typography variant="body1" gutterBottom>Save your files and photos to OneDrive and get them from any device, anywhere</Typography>
                </blockquote>
                <Typography variant="body1" gutterBottom>The simple sharing feature empowers people to share a document while maintaining it in Microsoft’s cloud. You won’t have to worry about emailing copies and keeping track of the revisions.</Typography>
                <Typography variant="body1" gutterBottom>Co-authoring allows the team to work in the same document at the same time. Seeing changes, chatting, and collaborating in real time.</Typography>
                <Typography variant="body1" gutterBottom>The simplicity and rich features of OneDrive is why 85% of Fortune 500 companies use it today.</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div>
                      <div>
                        <div>
                          <div />
                          <img style={{maxWidth: '100%', height: 'auto'}} alt="OneDrive for business customers" width="700" height="394" role="presentation" src="https://miro.medium.com/max/700/1*DV47UMGh6IhZmvolijUmcQ.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*DV47UMGh6IhZmvolijUmcQ.png 276w, https://miro.medium.com/max/552/1*DV47UMGh6IhZmvolijUmcQ.png 552w, https://miro.medium.com/max/640/1*DV47UMGh6IhZmvolijUmcQ.png 640w, https://miro.medium.com/max/700/1*DV47UMGh6IhZmvolijUmcQ.png 700w" />
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
                <Typography variant="h4" component="h2" gutterBottom>Features</Typography>
                <blockquote>
                  <Typography variant="body1" gutterBottom>“Only solution that enables you to edit and co-author Office documents across browser, mobile, and desktop apps.”</Typography>
                </blockquote>
                <ul>
                  <li><strong>Cross Platform File Access</strong>: OneDrive gives you the ability to access files from any device at any time. Real-time sync will upload documents from local devices to the cloud keeping all of your devices up-to-date.</li>
                  <li><strong>Offline Access</strong>: Sync capabilities allow files to be stored in the OneDrive cloud and synced to a device for fast file access even while offline.</li>
                  <li><strong>Collaboration</strong>: Share files with anyone. Collaborate in real-time across the world with colleagues in and out of your organization.</li>
                  <li><strong>Secure</strong>: Securly sync, share, and access your OneDrive files with colleagues in and out of your organization. Control the access with read only or read/write permissions.</li>
                  <li><strong>Co-Author</strong>: When Word, Excel, and PowerPoint files are saved in OneDrive multiple people can access and edit the document at the same time. Everyone accessing the document can see the changes in real time.</li>
                </ul>
                <Typography variant="h4" component="h2" gutterBottom>Licensing</Typography>
                <Typography variant="body1" gutterBottom>OneDrive for Business is part of Microsoft Office 365’s package. Microsoft does offer OneDrive for free for personal use as well. OneDrive for Business is available with the following Office 365 packages:</Typography>
                <Typography variant="body1" gutterBottom>Office 365 Business / Business Premium / Business Essentials<br />Office 365 ProPlus<br />Office 365 Enterprise E1 / E3 / E3<br />Office 365 A1 / A3 / A5<br />Office 365 F1<br />Office 365 G1 / G3 /G5<br />Office 365 Nonprofit Business Premium / Business Essentials</Typography>
                <Typography variant="h4" component="h2" gutterBottom>Competition</Typography>
                <blockquote>
                  <Typography variant="body1" gutterBottom>Forrester recognized OneDrive as a leader in the Enterprise File Sync and Share (EFSS) Platforms category.</Typography>
                </blockquote>
                <Typography variant="body1" gutterBottom>Microsoft isn’t the only business offering cloud storage. Google, DropBox, and Box each have their own offering. They’re all fantastic apps and certainly making it difficult to chose the right one for your business.</Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </Page>
  )
}

export default BlogArticle
