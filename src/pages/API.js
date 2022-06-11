const { html } = require('../utils')
const { css } = require('@emotion/css')
const { theme } = require('../styles')
const Layout = require('../components/Layout.js')
const Content = require('../components/Content.js')
const Details = require('../components/Details.js')

const linkStyle = css`
  text-decoration: none;
`

const detailsStyle = css`
  font-size: 1em !important;
  margin-bottom: ${theme.space.md};

  ul {
    padding-left: 25px !important;

    @media (${theme.mq.md}) {
      padding-left: 35px !important;
    }
  }
`

const API = () =>
  html`
    <${Layout} route="/api">
      <${Content}>
        <h1>Canada Holidays API</h1>
        <p>
          The ${' '}<a href="https://canada-holidays.ca/api/v1/" target="_blank"
            >Canada Holidays API</a
          >${' '}lists all 30 public holidays for all 13 provinces and territories in Canada,
          including federal holidays.
        </p>
        <p>
          <span aria-hidden="true">👉</span>${' '}
          <strong
            ><a class=${linkStyle} href="https://canada-holidays.ca/api/v1/" target="_blank"
              >https://canada-holidays.ca/api/v1/</a
            ></strong
          >
          ${' '}
        </p>
        <h2>Features</h2>
        <ul>
          <li>Get all holidays with associated regions</li>
          <li>Get all regions with associated holidays</li>
          <li>Get federal holidays</li>
          <li>Get national holidays</li>
          <li>Get upcoming (“next”) holiday for each region</li>
          <li>
            Get holidays for multiple years: <code>2017</code>, <code>2018</code>,${' '}⋯${' '}
            <code>2025</code>, <code>2026</code>.
          </li>
        </ul>
         
        <//>

        <h2>Citations</h2>
        <p>
          References to${' '}<a href="/sources">all the sources</a>${' '} this webapp uses
          for each region in Canada, so data returned from the API should be accurate.
        </p>

        <br />
        <br />
        <span class="bottom-link"><a href="#html" class="up-arrow">Back to top</a></span>
      <//>
    <//>
  `

module.exports = API
