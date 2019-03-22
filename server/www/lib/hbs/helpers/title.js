function title() {
  if (this.page && this.page.title)
    return this.page.title

  if (this.tenant && this.tenant.title)
    return this.tenant.title

  return ''
}

module.exports = {title}
