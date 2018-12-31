// *********** CSS ************ //
import '../src/assets/fonts/Marcellus/Marcellus-Regular.css'
import '../src/assets/fonts/Dosis/Dosis.css'
import '../src/components/index.css'

// *********** Packages ************ //
import React from 'react'
import { storiesOf } from '@storybook/react'

import { group } from '../src/utils/helper'

// *********** Ta3 Gatsby ************ //
import { Capital } from '../src/components/indexPageComponents/Capital'
import { Tips } from '../src/components/indexPageComponents/Tips'
import { TileInfos } from '../src/components/indexPageComponents/TileInfos'

// *********** Slightly modified components because they don't work with gatsby ************ //
import { Collage } from '../src/storiesComponents/Collage'
import { Menu } from '../src/storiesComponents/Menu'
import { TileCategories } from '../src/storiesComponents/TileCategories'

// *********** Category page imports ************ //
import { Articles } from '../src/components/categoryPageComps/Articles'
import { Dropdowns } from '../src/components/categoryPageComps/Dropdowns'

// *********** 📰 Article page imports ************ //
import { ArticlePage } from '../src/components/ArticlePageComps/ArticlePage'
import CartItems from '../src/components/CartPageComps/CartItems'
import Cart from '../src/components/pages/CartPage'

// *********** Capital ************ //
storiesOf('Capital', module).add('default', () => <Capital />, {
  notes: 'Used symbols: Button--Capital',
})

// *********** TileCategories ************ //
storiesOf('Tile categories', module).add('default', () => <TileCategories />, {
  notes: 'Used symbols: TileCategory',
})

// *********** Tips ************ //
storiesOf('Tips', module).add('default', () => <Tips />)

// *********** TileInfos ************ //
storiesOf('Tiles Info', module).add('default', () => <TileInfos />, {
  notes: 'Used symbols: Tip',
})

// *********** Collage ************ //
storiesOf('Collage', module).add('default', () => <Collage />)

// *********** Menu ************ //
storiesOf('Menu', module).add('default', () => <Menu />)

// *********** Category page symbols ************ //
// *********** Category page symbols ************ //
// *********** Category page symbols ************ //

storiesOf('Articles', module).add('default', () => <Articles />, {
  notes: "Articles is exception for trimmed components's rule.",
})

group('Dropdowns', module).add('default', () => <Dropdowns />)

// *********** Article page comps ************ //
storiesOf('Article Page', module).add('default', () => <ArticlePage />)

// *********** Cart page comps ************ //
storiesOf('CartItems').add('default', () => <CartItems />)

storiesOf('Cart Page').add('default', () => <Cart />)
