const { css } = require('emotion')
const { html } = require('../utils')
const { theme, horizontalPadding } = require('../styles')
const Nav = require('./Nav')
const SkipLink = require('./SkipLink')

const linkStyles = color => css`
  a:focus {
    outline: 3px solid ${color ? theme.color[color].focus : theme.color.focus};
    outline-offset: 5px;
  }

  details summary:focus,
  details summary:hover {
    > span {
      border-bottom: 3px solid ${color ? theme.color[color].focus : theme.color.focus};

      @media (${theme.mq.md}) {
        border-bottom: 5px solid ${color ? theme.color[color].focus : theme.color.focus};
      }
    }
  }
`
const header = css`
  ${horizontalPadding};
  padding-top: calc(${theme.space.xs} + 3px);
  padding-bottom: ${theme.space.xs};

  @media (${theme.mq.md}) {
    padding-top: ${theme.space.sm};
    padding-bottom: ${theme.space.sm};
  }
`
const main = css`
  section {
    position: relative;
    padding-bottom: ${theme.space.md};

    @media (${theme.mq.md}) {
      padding-bottom: ${theme.space.xl};
    }
  }
`

const Layout = ({ color, route, children }) =>
  html`
    <div class=${linkStyles(color)}>
      <${SkipLink} />
      <header class=${header}>
        <${Nav} color=${color} route=${route} //>
      </header>
      <main id="content" class=${main}>
        ${children}
      </main>
    </div>
  `

module.exports = Layout
