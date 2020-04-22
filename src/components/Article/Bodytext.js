import React from "react"
import PropTypes from "prop-types"
import rehypeReact from "rehype-react"
import Icons from "../../components/About/WebPresenceIcons"
import ReImg from "./ReImg"
import ReTracedSVGGallery from "./ReTracedSVGGallery"
import { Link } from "gatsby"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "re-icons": Icons, "re-img": ReImg, "re-link": Link, "re-tracedsvg-gallery": ReTracedSVGGallery }
}).Compiler

const Bodytext = props => {
  const { content, theme } = props
  const html = props.content.html

  return (
    <React.Fragment>

      {/* Render markdown with Custom Components */}
      <div className="bodytext">
        {renderAst(content.htmlAst)}
      </div>

      <style jsx>{`
        .bodytext {
          animation-name: bodytextEntry;
          animation-duration: 0;
          color: ${theme.color.neutral.gray.j};

          :global(blockquote) {
            border-left: 5px solid #bbbbbb;
            margin: 2.5em 0;
            padding: 0em 1.1em 0em 1.3em;
            position: relative;
            font-style: italic;
          }

          :global(h2),
          :global(h3) {
            margin: 1.5em 0 1em;
          }

          :global(h2) {
            line-height: ${theme.font.lineHeight.s};
            font-size: ${theme.font.size.l};
          }

          :global(h3) {
            font-size: ${theme.font.size.m};
            line-height: ${theme.font.lineHeight.m};
          }

          :global(p) {
            font-size: ${theme.font.size.s};
            line-height: ${theme.font.lineHeight.xxl};
            margin: 1.5em 0;
            :global(img) {
              width: 100%;
            }
          }
          
          :global(ul) {
            list-style: circle;
            margin: 0 0 1.5em;
            padding: 0 0 0 1.5em;
          }
          :global(li) {
            margin: 0.7em 0;
            line-height: 1.6;
            font-size: ${theme.font.size.s};
            list-style-type: disc;
          }
          :global(a) {
            font-weight: ${theme.font.weight.bold};
            color: ${theme.color.brand.primary};
            text-decoration: none;
            word-break: break-all;
          }
          @from-width desktop {
            :global(a:hover) {
              color: ${theme.color.brand.primaryDark};
            }
          }
          :global(a.gatsby-resp-image-link) {
            border: 0;
            display: block;
            margin: 2.5em 0;
            border-radius: ${theme.size.radius.default};
            overflow: hidden;
            border: 1px solid ${theme.line.color};
            pointer-events: none;
          }
          :global(pre) {
            margin: 0.5em 0 3em;
          }
          :global(code.language-dummy) {
            text-shadow: none;
            color: inherit;
            padding: 0.15em 0.35em 0.2em;
            border-radius: 0.2em;
            font-size: 0.9em;
            font-family: 'IBM Plex Mono', 'Noto Sans KR','sans-serif';
          }
          :global(code.language-text) {
            background: ${theme.color.neutral.gray.c};
            text-shadow: none;
            color: inherit;
            padding: 0.15em 0.35em 0.2em;
            border-radius: 0.2em;
            font-size: 0.8em;
            font-family: 'IBM Plex Mono', 'Noto Sans KR','sans-serif';
          }
        }
      `}</style>
    </React.Fragment>
  )
}

Bodytext.propTypes = {
  content: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default Bodytext
