import ReactMarkdown from 'react-markdown';
import makeEmojisAccessible from '@fec/remark-a11y-emoji'
import parseGitHubEmojis from 'remark-gemoji';
import supportGFM from 'remark-gfm';
import addIdToHeadings from 'rehype-slug';
import sanitizeHTML from 'rehype-sanitize';
import parseHTML from 'rehype-raw';
import removeHeading from 'remark-first-heading';
import { visit } from 'unist-util-visit';
import '../styles/github-markdown-light.css';
function fixBrokenLinks() {
    // This code is from the documentation of rehype-sanitize: https://github.com/rehypejs/rehype-sanitize#example

    // Page load (you could wrap this in a DOM ready if the script is loaded early).
    hashchange()

    // When URL changes.
    window.addEventListener('hashchange', hashchange)

    // When on the URL already, perhaps after scrolling, and clicking again, which
    // doesn’t emit `hashchange`.
    document.addEventListener(
      'click',
      (event) => {
        if (
          event.target &&
          event.target instanceof HTMLAnchorElement &&
          event.target.href === window.location.href &&
          window.location.hash.length > 1
        ) {
          setTimeout(() => {
            if (!event.defaultPrevented) {
              hashchange()
            }
          })
        }
      },
      false
    )

    function hashchange() {
      /** @type {string|undefined} */
      let hash

      try {
        hash = decodeURIComponent(window.location.hash.slice(1)).toLowerCase()
      } catch {
        return
      }

      const name = 'user-content-' + hash
      const target =
        document.getElementById(name) || document.getElementsByName(name)[0]

      if (target) {
        setTimeout(() => {
          target.scrollIntoView()
        }, 0)
      }
    }
}
fixBrokenLinks();

function GitHubMarkdown({ children }) {
    // Remark plugins to transform emojis is passed into rehypePlugins array => ids need to be created before github emojis are parsed, otherwise toc will not work
    return <ReactMarkdown className="markdown-body" remarkPlugins={[supportGFM, makeEmojisAccessible, [removeHeading, {heading: ''}]]} rehypePlugins={[addIdToHeadings, parseGitHubEmojis, parseHTML, sanitizeHTML]}>{children}</ReactMarkdown>
}

export default GitHubMarkdown;