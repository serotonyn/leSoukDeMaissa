import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

export const group = baseName =>
  storiesOf(baseName, module)
    .addDecorator(withInfo)
    .addParameters({
      info: {
        inline: true,
        header: false,
        source: false,
      },
    })
