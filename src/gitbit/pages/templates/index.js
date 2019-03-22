const React = require('react')
const {Link} = require('react-router-dom')
const {toast} = require('react-toastify')
const {Nav} = require('../../components')
const {getTemplates} = require('./lib')

class Templates extends React.Component {
  constructor() {
    super()
    this.state = {templates: []}
  }

  componentDidMount() {
    getTemplates()
      .then(res => this.setState({templates: res.docs}))
      .catch(err => toast.error(err.toString()))
  }

  render() {
    return (
      <div className="page">
        <Nav />
        <main>
          <h1>Templates</h1>
          <div>
            {
            this.state.templates.map(template => (
              <div key={template._id}><Link to={`/edit-template?id=${template._id}`}>{template.name}</Link></div>
            ))
          }
          </div>
        </main>
      </div>
    )
  }
}

module.exports = {Templates}
