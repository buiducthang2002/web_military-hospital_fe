import {useEffect, useState} from 'react'
import {getFeaturedArticles, getAnnouncements} from './homepage'

export const useFeaturedArticles = (limit = 4) => {
  const [featured, setFeatured] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    getFeaturedArticles(limit)
      .then((data) => {
        if (!cancelled) setFeatured(data)
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [limit])

  return {featured, loading}
}

export const useAnnouncements = (limit = 10) => {
  const [announcements, setAnnouncements] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    getAnnouncements(limit)
      .then((data) => {
        if (!cancelled) setAnnouncements(data)
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [limit])

  return {announcements, loading}
}
