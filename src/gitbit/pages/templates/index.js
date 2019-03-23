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
      <div className="pure-g">
        <Nav />
        <main className="pure-u-4-5">
          <h1>Templates</h1>
          <ul className="pure-menu-list">
            {
              this.state.templates.map(template => (
                <li className="pure-menu-item" key={template._id}>
                  <Link to={`/edit-template?id=${template._id}`} className="pure-menu-link">{template.name}</Link>
                </li>
              ))
            }
          </ul>
        </main>
      </div>
    )
  }
}

module.exports = {Templates}
