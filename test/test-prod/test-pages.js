require('chromedriver')
const webdriver = require('selenium-webdriver')
const {By} = require('selenium-webdriver')

const build = async () => {
  var chromeCapabilities = webdriver.Capabilities.chrome()
  chromeCapabilities.set('goog:chromeOptions', {'args': ['--disable-notifications']})

  const browser = new webdriver.Builder().withCapabilities(chromeCapabilities).build()
  await browser.get('https://www.gitbit.org')

  return browser
}

const getSitemap = async (browser) => {
  await browser.get('https://www.gitbit.org/sitemap/sitemap-index.xml')
  const els = await browser.findElements(By.css('loc'))
  const urls = new Set()

  for (let i=0; i<els.length; i++) {
    const text = await els[i].getAttribute('innerHTML')
    urls.add(text)
  }

  return urls
}

const getSite = async (browser, urls, url) => {
  await browser.get(url)
  const linkEls = await browser.findElements(By.css('a'))

  for (let i=0; i<linkEls.length; i++) {
    const text = await linkEls[i].getAttribute('href')
    urls.add(text)
  }

  return urls
}

const start = async () => {
  const browser = await build()
  let urls = await getSitemap(browser)

  for (const item of urls) {
    if (item.toLowerCase().startsWith('https://www.gitbit.org'))
      urls = await getSite(browser, urls, item)
  }

  await browser.close()
}

start()
