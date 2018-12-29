// *********** CSS ************ //
import '../src/assets/fonts/Marcellus/Marcellus-Regular.css'
import '../src/assets/fonts/Dosis/Dosis.css'
import '../src/components/index.css'

// *********** Packages ************ //
import React from 'react'
import { storiesOf } from '@storybook/react'

// *********** Ta3 Gatsby ************ //
import { Capital } from '../src/components/indexPageComponents/Capital'
import { Tips } from '../src/components/indexPageComponents/Tips'
import { TileInfos } from '../src/components/indexPageComponents/TileInfos'

// *********** Slightly modified components because they don't work with gatsby ************ //
import { Collage } from '../src/storiesComponents/Collage'
import { Menu } from '../src/storiesComponents/Menu'
import { TileCategories } from '../src/storiesComponents/TileCategories'

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