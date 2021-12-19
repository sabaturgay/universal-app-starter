import React from 'react'
import ReactMarkdown from 'react-markdown'
import { NormalComponents, SpecialComponents } from 'react-markdown/src/ast-to-react'
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

export type MarkdownProps = {
  children: string;
}

export const Markdown = ({ children }: MarkdownProps) => (
  <ReactMarkdown
    components={components}
  >
    {children}
  </ReactMarkdown>
)

const components: Partial<NormalComponents & SpecialComponents> = {
  code({
    node, inline, className, children, ...props
  }) {
    const match = /language-(\w+)/.exec(className || '')

    return (!inline && match) ? (
      <SyntaxHighlighter
        style={materialLight}
        PreTag="div"
        language={match[1]}
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code
        className={className || ''}
        {...props}
      >
        {children}
      </code>
    )
  },
}
