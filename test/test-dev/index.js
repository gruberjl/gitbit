const fs = require('fs')
const glob = require('glob')
const path = require('path')
const SeoAnalyzer = require('seo-analyzer')

const files = glob.sync('./docs/**/*.html')
  .filter(file => file !== './docs/404.html')

const seoTest = async () => {
  const errors = await new SeoAnalyzer()
    .inputFiles(files)
    .addRule('titleLengthRule', { min: 10, max: 50 })
    .addRule(aTagWithTrailingSlash)
    .addRule(imgTagWithAltAttritubeRule)
    .addRule('metaBaseRule', { list: ['description', 'viewport'] })
    .addRule('metaSocialRule', {
      properties: [
        'og:url',
        'og:type',
        'og:site_name',
        'og:title',
        'og:description',
        'og:image',
        'og:image:width',
        'og:image:height',
        'twitter:card',
        'twitter:site',
        'twitter:title',
        'twitter:description',
        'twitter:image'
      ],
    })
    .addRule(canonicalLinkRule)
    .outputConsole()
    // How to get errors from object
    // .outputObject(obj => {
    //   console.log(obj)
    //   if (obj.length > 0)
    //     console.log('Error in SEO in dev environment')
    // })
    testFileSize()
    await testFilesExist()
}

function canonicalLinkRule(dom) {
  return new Promise(resolve => {
    const element = dom.window.document.querySelector(
      'head > link[rel="canonical"]'
    );
    if (!element) {
      resolve('This HTML without <link rel="canonical" href="..."> link');
    }
    if (element && !element.href) {
      resolve('The canonical link without href attribute');
    }

    if (element && element.href.substr(-1) === '/' && element.href !== 'https://www.gitbit.org/') {
      resolve(
        'The canonical link has a slash at the end of the link.'
      );
    }
    resolve(null);
  });
}

function imgTagWithAltAttritubeRule(dom) {
  return new Promise(resolve => {
    let count = 0;
    const elements = dom.window.document.querySelectorAll('img');
    elements.forEach(element => {
      if (!element.alt &&element.style._values.display !== "none" ) {
        count++;
      }
    });
    if (count > 0) {
      resolve(`There are ${count} <img> tag without alt attribute`);
    }
    resolve(null);
  });
}

function aTagWithTrailingSlash(dom) {
  return new Promise(resolve => {
    let count = 0;
    const elements = dom.window.document.querySelectorAll('a')
    const badEls = []
    elements.forEach(element => {
      if (element.href !== 'https://gitbit.org/' && element.href !=='/' && element.href.endsWith('/') && (element.href.startsWith('https://www.gitbit.org') || element.href.startsWith('/'))) {
        badEls.push(element)
        count++;
      }
    });
    if (count > 0) {
      resolve(`There are ${count} <a> tags that end with a trailing slash: \n${badEls.map(el => el.outerHTML + '\n')}`);
    }
    resolve(null);
  });
}

const testFileSize = () => {
  files.forEach(file => {
    const stats = fs.statSync(file)
    if (stats.isFile()) {
      if (stats.size / 1000 > 125)
        console.log(`File ${file} is too large. It's ${stats.size / 1000}KB but it should be less than 125KB`)
    }
  })
}

const testFilesExist = async () => {
  const srcPages = glob.sync('./src/pages/**/*')
  for (let i = 0; i < srcPages.length; i++) {
    const srcPage = srcPages[i]
    const destPageHtml = srcPage.replace('src/pages', 'docs')
  }
}

seoTest()
