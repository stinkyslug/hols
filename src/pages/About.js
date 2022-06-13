const { html } = require('../utils')
const Layout = require('../components/Layout.js')
const Content = require('../components/Content.js')
const { getCurrentHolidayYear } = require('../dates')

const About = ({ data: { nextHoliday } }) =>
  html`
    <${Layout} route="/about">
      <${Content}>
        <h1>About</h1>
        <p>
          ${' '}<a href="/">${nextHoliday.nameEn}</a> is what we have to look forward to.
        </p>


        <h2>“My name is Wei Teck”</h2>
        <p>I've hosted this webapp on Google Cloud Run and pointed my custom domain at it. Enjoy!</p>

        
      <//>
    <//>
  `

module.exports = About
