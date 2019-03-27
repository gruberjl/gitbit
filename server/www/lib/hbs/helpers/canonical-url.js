function canonicalUrl() {
  return `https://${this.tenant.primaryHostname}${this.page.slug}`
}

module.exports = {canonicalUrl}
