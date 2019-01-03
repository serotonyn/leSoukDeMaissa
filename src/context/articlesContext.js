import React from 'react'

export const defaultArticlesContext = {
  selectedBrands: [],
  filterBrands: () => {},
}

const ArticlesContext = React.createContext(defaultArticlesContext)

export default ArticlesContext
