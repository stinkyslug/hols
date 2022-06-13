const { html } = require('../utils')
const Layout = require('../components/Layout.js')
const Content = require('../components/Content.js')
const Abbr = require('../components/Abbr.js')

const Feedback = () =>
  html`
    <${Layout} route="/feedback">
      <${Content}>
        <h1>Feedback</h1>
        <p>
          If you'd like to provide me with any feedback on my assessment, please drop me an email at weiteck.ong.2016@smu.edu.sg!
        </p>
      <//>
    <//>
  `

module.exports = Feedback
