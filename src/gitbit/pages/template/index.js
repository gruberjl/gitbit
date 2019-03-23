const React = require('react')
const clone = require('clone-deep')
const queryString = require('query-string')
const {Prompt} = require('react-router-dom')
const {toast} = require('react-toastify')
const {Nav} = require('../../components')
const {getTemplate, save, remove} = require('./lib')

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {id: queryString.parse(props.location.search).id, hasChanged: false}
    this.onUnload = this.onUnload.bind(this)
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onUnload)
    getTemplate(this.state.id)
      .then(template => this.setState({template}))
      .catch(err => toast.error(err.toString()))
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onUnload)
  }

  onUnload() {
    if (this.state.hasChanged) {
      const confirmationMessage = 'Quit without saving?'
      window.event.returnValue = confirmationMessage
      return confirmationMessage
    }

    return undefined
  }

  setName(event) {
    const name = event.target.value
    this.setState((state) => {
      const template = clone(state.template)
      template.name = name
      return {template, hasChanged: true}
    })
  }

  setContent(event) {
    const content = event.target.value
    this.setState((state) => {
      const template = clone(state.template)
      template.content = content
      return {template, hasChanged: true}
    })
  }

  save() {
    const self = this
    const template = clone(this.state.template)
    if (!template._id)
      template._id = template.name

    save(template).then((savedDoc) => {
      self.setState((state) => {
        const newTemplate = clone(state.template)
        newTemplate._rev = savedDoc.doc._rev
        toast('saved')
        return {template: newTemplate, hasChanged: false}
      })
    }).catch(err => toast.error(err.toString()))
  }

  remove() {
    remove(this.state.template).then(() => {
      this.props.history.push('/templates')
    })
  }

  render() {
    if (this.state && this.state.template) {
      const {template, hasChanged} = this.state
      return (
        <div className="pure-g">
          <Prompt when={hasChanged} message="Quit without saving?" />
          <Nav />
          <main className="pure-u-4-5">
            <article>
              <form className="pure-form pure-form-stacked">
                <h1><textarea placeholder="Template Name" value={template.name} onChange={this.setName.bind(this)} rows="1" /></h1>
                <textarea placeholder="HTML - content" value={template.content} onChange={this.setContent.bind(this)} rows="35" className="pure-input-1" />
                <div>
                  <button onClick={this.save.bind(this)} type="button" className="pure-button pure-button-primary margin12">Save</button>
                  <button onClick={this.remove.bind(this)} type="button" className="pure-button margin12">Delete Template</button>
                </div>
              </form>
            </article>
          </main>
        </div>
      )
    }

    return (<div>Loading</div>)
  }
}

module.exports = {Template}
