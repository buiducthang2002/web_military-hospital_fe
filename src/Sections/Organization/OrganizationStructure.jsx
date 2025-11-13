import React from 'react'
import './OrganizationStructure.css'

const OrganizationStructure = () => {


  const renderNode = (node, level = 0) => {
    return (
      <div key={node.name} className={`org-node org-level-${level}`}>
        <div className="org-node-content">
          <div className="org-node-title">{node.name}</div>
        </div>
        {node.children && node.children.length > 0 && (
          <div className="org-children">
            {node.children.map((child, index) => (
              <React.Fragment key={index}>
                {renderNode(child, level + 1)}
                {index < node.children.length - 1 && <div className="org-connector"></div>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    )
  }

}

export default OrganizationStructure

