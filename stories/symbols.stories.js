// *********** CSS ************ //
import '../src/assets/fonts/Marcellus/Marcellus-Regular.css'
import '../src/assets/fonts/Dosis/Dosis.css'
import '../src/components/index.css'

// *********** Packages ************ //
import React from 'react'
import { storiesOf } from '@storybook/react'
// import { withInfo } from '@storybook/addon-info'
import { group } from '../src/utils/helper'

import { ButtonCapital } from '../src/symbols/ButtonCapital'
import { Tip } from '../src/symbols/Tip'
import { TileInfo } from '../src/symbols/TileInfo'
import { TileCategory } from '../src/symbols/TileCategory'
// *********** Slightly modified components because they don't work with gatsby ************ //
import { MenuItem } from '../src/storiesComponents/MenuItem'

// *********** Category Page Imports ************ //
import { CategoryHero } from '../src/symbols/CategoryHero'
import { Article } from '../src/symbols/Article'
import { ArticleWithPrice } from '../src/symbols/ArticleWithPrice'
import { ArticleWithPagination } from '../src/symbols/ArticleWithPagination'
import { Dropdown } from '../src/symbols/Dropdown'

// *********** Article Page Imports ************ //
import { ArticlePagination } from '../src/symbols/ArticlePagination'
import { Price } from '../src/symbols/Price'
import { DomeAttribute } from '../src/symbols/DomeAttribute'
import { CheckoutButton } from '../src/symbols/CheckoutButton'

// *********** 🗂 Index Page Symbols ************ //
// *********** ButtonCapital ************ //
group('Symbols').add('Button--Capital', () => <ButtonCapital />)

// *********** TileInfo ************ //
group('Symbols').add('Tile--Info', () => (
  <TileInfo title="SERVICE CLIENT" content="0555 76 73 19" />
))

// *********** Tip ************ //
group('Symbols').add('Tip', () => (
  <Tip
    tipNum="01"
    title="TROUVEZ LES ARTICLES"
    bodyText="Consultez les différentes catégories pour trouver un article pour vous, votre conjoint ou votre enfant."
  />
))

// *********** TileCategory ************ //
group('Symbols').add('Tile--Category', () => (
  <TileCategory
    title="FEMMES"
    content="Acturellement des tailles de (Xs - 3X)"
    bottomText="Femmes >>"
    fluid={fluid}
  />
))

// *********** MenuItem ************ //
group('Symbols').add('MenuItem', () => <MenuItem text="Femmes" />)

const fluid = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEEBQP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB25qU42UCvIdQf//EABkQAQADAQEAAAAAAAAAAAAAAAIAARASA//aAAgBAQABBQLfV8kdW4hShFHP/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGRAAAgMBAAAAAAAAAAAAAAAAARAAAhIh/9oACAEBAAY/AmZU6fF//8QAGxABAAICAwAAAAAAAAAAAAAAAQAREGEhMVH/2gAIAQEAAT8hgjjjHZKrWy8EbjagF8lz/9oADAMBAAIAAwAAABB/4IL/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAVEQEBAAAAAAAAAAAAAAAAAAAgIf/aAAgBAgEBPxCj/8QAHBABAQACAwEBAAAAAAAAAAAAAREAIRAxQVFx/9oACAEBAAE/EDXeMQbOEjum78cMzZA8HQfb9wdGImRwud40QaPw84f/2Q==',
  aspectRatio: 0.9033816425120773,
  src:
    'http://localhost:8000/static/5cd4192f3b0ddb1296ec7d274120dca2/9d564/Women.jpg',
  srcSet:
    'http://localhost:8000/static/5cd4192f3b0ddb1296ec7d274120dca2/9a299/Women.jpg 200w,\nhttp://localhost:8000/static/5cd4192f3b0ddb1296ec7d274120dca2/9d564/Women.jpg 374w',
  sizes: '(max-width: 374px) 100vw, 374px',
}

// *********** 🐈 Category page symbols ************ //
// *********** CategoryHero ************ //

group('Symbols', module).add('CategoryHero', () => <CategoryHero />)

// *********** Article ************ //
group('Article', module).add('default', () => <Article />)
group('Article', module).add('withPrice', () => <ArticleWithPrice />)

// *********** Dropdown ************ //
group('Symbols', module).add('Dropdown', () => <Dropdown />)

// *********** 📰 Article Page Symbols ************ //
// *********** Article Pagination ************ //
group('Article', module).add('withPagination', () => <ArticleWithPagination />)
group('Symbols', module).add('Price', () => <Price />)
group('Symbols', module).add('DomeAttribute', () => <DomeAttribute />)
group('Symbols').add('AddToCart', () => <CheckoutButton />)

storiesOf('Symbols', module).add('Pagination', () => <ArticlePagination />)
