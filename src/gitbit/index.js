const React = require('react')
const ReactDOM = require('react-dom')
const {BrowserRouter, Route} = require('react-router-dom')
const {ToastContainer} = require('react-toastify')
const {Home, Settings, Stories, Story, Templates, Template, Assets} = require('./pages')

const Index = (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Home} />

      <Route exact path="/settings" component={Settings} />

      <Route path="/stories" component={Stories} />
      <Route exact path="/edit-story/" component={Story} />

      <Route path="/templates" component={Templates} />
      <Route exact path="/edit-template/" component={Template} />

      <Route exact path="/edit-assets/" component={Assets} />
      <ToastContainer position="bottom-left" />
    </div>
  </BrowserRouter>
)

ReactDOM.render(Index, document.getElementById('app'))
