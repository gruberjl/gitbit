const React = require('react')
const clone = require('clone-deep')
const queryString = require('query-string')
const {toast} = require('react-toastify')
const {Nav} = require('../../components')
const {getTemplate, save, remove} = require('./lib')

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {id: queryString.parse(props.location.search).id}
  }

  componentDidMount() {
    getTemplate(this.state.id)
      .then(template => this.setState({template}))
      .catch(err => toast.error(err.toString()))
  }

  setName(event) {
    const name = event.target.value
    this.setState((state) => {
      const template = clone(state.template)
      template.name = name
      return {template}
    })
  }

  setContent(event) {
    const content = event.target.value
    this.setState((state) => {
      const template = clone(state.template)
      template.content = content
      return {template}
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
        return {template: newTemplate}
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
      const {template} = this.state
      return (
        <div className="page">
          <Nav />
          <main className="editor">
            <article>
              <h1><textarea placeholder="Template Name" value={template.name} onChange={this.setName.bind(this)} rows="1" /></h1>
              <textarea placeholder="HTML - content" value={template.content} onChange={this.setContent.bind(this)} rows="35" cols="150" />
              <div>
                <button onClick={this.save.bind(this)} type="button">Save</button>
                <button onClick={this.remove.bind(this)} type="button">Delete Template</button>
              </div>
            </article>
          </main>
        </div>
      )
    }

    return (<div>Loading</div>)
  }
}

module.exports = {Template}
