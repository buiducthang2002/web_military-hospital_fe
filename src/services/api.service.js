/**
 * API Service
 * Centralized API communication service for the application
 */

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api'

/**
 * Generic API request handler
 * @param {string} endpoint - API endpoint (e.g., '/evaluations')
 * @param {object} options - Fetch options (method, body, headers, etc.)
 * @returns {Promise<object>} Response data
 */
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  // Add JWT token if exists (for authenticated requests)
  const token = localStorage.getItem('access_token')
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    })

    // Parse response
    const data = await response.json()

    // Handle HTTP errors
    if (!response.ok) {
      throw new Error(data.message || `HTTP ${response.status}`)
    }

    return {
      success: true,
      data: data.data || data,
      message: data.message,
    }
  } catch (error) {
    console.error('API Error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * API Service methods
 */
export const apiService = {
  /**
   * GET request
   * @param {string} endpoint - API endpoint
   * @returns {Promise<object>}
   */
  get: (endpoint) => {
    return apiRequest(endpoint, { method: 'GET' })
  },

  /**
   * POST request
   * @param {string} endpoint - API endpoint
   * @param {object} body - Request body
   * @returns {Promise<object>}
   */
  post: (endpoint, body) => {
    return apiRequest(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    })
  },

  /**
   * PUT request
   * @param {string} endpoint - API endpoint
   * @param {object} body - Request body
   * @returns {Promise<object>}
   */
  put: (endpoint, body) => {
    return apiRequest(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
    })
  },

  /**
   * DELETE request
   * @param {string} endpoint - API endpoint
   * @returns {Promise<object>}
   */
  delete: (endpoint) => {
    return apiRequest(endpoint, { method: 'DELETE' })
  },
}

export default apiService











