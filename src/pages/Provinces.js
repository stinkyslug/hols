const { css } = require('emotion')
const { html } = require('../utils')
const { theme } = require('../styles')
const Layout = require('../components/Layout.js')

const provinces = css`
  > section {
    display: block !important;
  }

  h1 {
    margin: ${theme.space.xs} 0 ${theme.space.xl} 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: ${theme.space.xs};

      @media (${theme.mq.lg}) {
        width: 48%;
        display: inline-block;
        margin-right: ${theme.space.xs};
      }
    }
  }
`

const Provinces = ({ data }) =>
  html`
    <${Layout}>
      <div class=${provinces}>
        <section>
          <h1>All regions in Canada</h1>

          <p><a href="/">All Canadian holidays</a></p>
          <!-- p>Federally-regulated industy</p -->
          <ul>
            ${data.provinces.map(
              province => html`
                <li><a href=${`/province/${province.id}`}>${province.nameEn}</a></li>
              `,
            )}
          </ul>
        </section>
      </div>
    <//>
  `

module.exports = Provinces
