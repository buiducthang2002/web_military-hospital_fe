import React from 'react'
import { PortableText } from '@portabletext/react'
import { getImageUrl } from '../../lib/sanity'

const PortableTextContent = ({ content }) => {
  if (!content) {
    return <p>Nội dung bài viết đang được cập nhật...</p>
  }

  const isPortableText = Array.isArray(content)

  if (!isPortableText) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />
  }

  const components = {
    types: {
      image: ({ value }) => {
        const imageUrl = getImageUrl(value.asset._ref).url()
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

  return <PortableText value={content} components={components} />
}

export default PortableTextContent
