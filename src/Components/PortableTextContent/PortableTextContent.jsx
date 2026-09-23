import React from 'react'
import { PortableText } from '@portabletext/react'
import { urlFor } from '../../lib/sanity'
import './PortableTextContent.css'

const PortableTextContent = ({ content, portableContent }) => {
  const contentToRender = portableContent || content

  if (!contentToRender) {
    return <p>Nội dung bài viết đang được cập nhật...</p>
  }

  const isPortableText = Array.isArray(contentToRender)

  if (!isPortableText) {
    return <div dangerouslySetInnerHTML={{ __html: contentToRender }} />
  }

  const components = {
    types: {
      image: ({ value }) => {
        if (!value || !value.asset) {
          return null
        }
        try {
          const imageUrl = urlFor(value.asset).url()
          return (
            <figure className="portable-text-image">
              <img
                src={imageUrl}
                alt={value.alt || 'Article image'}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              {value.caption && (
                <figcaption className="portable-text-caption">{value.caption}</figcaption>
              )}
            </figure>
          )
        } catch (error) {
          console.error('Error rendering image:', error)
          return null
        }
      },
    },
    block: {
      h2: ({ children }) => <h2 className="portable-text-h2">{children}</h2>,
      h3: ({ children }) => <h3 className="portable-text-h3">{children}</h3>,
      blockquote: ({ children }) => (
        <blockquote className="portable-text-blockquote">{children}</blockquote>
      ),
      normal: ({ children }) => <p className="portable-text-paragraph">{children}</p>,
    },
    list: {
      bullet: ({ children }) => <ul className="portable-text-bullet-list">{children}</ul>,
      number: ({ children }) => <ol className="portable-text-number-list">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
      number: ({ children }) => <li>{children}</li>,
    },
    marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      underline: ({ children }) => <u>{children}</u>,
      code: ({ children }) => <code className="portable-text-code">{children}</code>,
    },
  }

  return <PortableText value={contentToRender} components={components} />
}

export default PortableTextContent
