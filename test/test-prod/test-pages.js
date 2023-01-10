require('chromedriver')
const webdriver = require('selenium-webdriver')
const {By} = require('selenium-webdriver')
const errors = []

const sleep = ms => new Promise(r => setTimeout(r, ms))

const build = async (mobileEmulation) => {
  var chromeCapabilities = webdriver.Capabilities.chrome()
  const options = {'args': ['--disable-notifications']}
  if (mobileEmulation)
    options.mobileEmulation = {deviceName: mobileEmulation}
  chromeCapabilities.set('goog:chromeOptions', options)
  
  // if (mobileEmulation)
  //   chromeCapabilities.setMobileEmulation({deviceName: mobileEmulation})

  let browser = new webdriver.Builder().withCapabilities(chromeCapabilities).build()

  return browser
}

const getSitemap = async (browser) => {
  await browser.get('https://www.gitbit.org/sitemap/sitemap-index.xml')
  const els = await browser.findElements(By.css('loc'))
  const urls = []

  for (let i=0; i<els.length; i++) {
    const text = await els[i].getAttribute('innerHTML')
    urls.push(text)
  }

  return urls
}

const testPage = async (browser, currentUrl) => {
  const pageWidth = await browser.executeScript('return document.body.scrollWidth - window.innerWidth')
  if (pageWidth > 0) {
    const err = `${currentUrl} width is larger than the screen`
    errors.push(err)
  }
}

const start = async () => {
  const browser = await build()
  let urls = await getSitemap(browser)
  const appleBrowser = await build('iPhone 12 Pro')

  for (let i = 0; i < urls.length; i++) {
    await browser.get(urls[i])
    await appleBrowser.get(urls[i])
    await testPage(appleBrowser, urls[i])
    await sleep(4000)
  }

  await browser.quit()
  await appleBrowser.quit()
  console.log(errors)
}

start()
