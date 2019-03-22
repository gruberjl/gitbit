const React = require('react')
const {Link} = require('react-router-dom')

const Nav = () => (
  <nav className="sidebar">
    <ul className="no-bullets">
      <li><Link to="/edit-story">New Story</Link></li>
      <li><Link to="/stories">Stories</Link></li>
    </ul>
    <h3>Settings</h3>
    <ul className="no-bullets">
      <li><Link to="/settings">General</Link></li>
      <li><Link to="/edit-template">New Template</Link></li>
      <li><Link to="/templates">Templates</Link></li>
      <li><Link to="/edit-assets">Assets</Link></li>
    </ul>
  </nav>
)

module.exports = {Nav}
