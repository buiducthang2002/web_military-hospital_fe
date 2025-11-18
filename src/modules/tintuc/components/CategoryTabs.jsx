import React from 'react'
import { getAllCategories } from '../categories'
import './CategoryTabs.css'

/**
 * Component hiển thị tabs category
 * @param {string} activeCategoryId - ID của category đang active
 * @param {Function} onCategoryChange - Callback khi đổi category
 */
const CategoryTabs = ({ activeCategoryId, onCategoryChange }) => {
  const categories = getAllCategories()

  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-tab ${activeCategoryId === category.id ? 'active' : ''}`}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.icon && <span className="category-icon">{category.icon}</span>}
          <span className="category-name">{category.displayName}</span>
        </button>
      ))}
    </div>
  )
}

export default CategoryTabs

