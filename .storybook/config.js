import { configure, addDecorator } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'
import { configureViewport } from '@storybook/addon-viewport'
const newViewports = {
  '420': {
    name: '420',
    styles: {
      width: '420px',
      height: '963px',
    },
  },
  '650': {
    name: '650',
    styles: {
      width: '650px',
      height: '801px',
    },
  },
  '768': {
    name: '768',
    styles: {
      width: '768px',
      height: '801px',
    },
  },
  '992': {
    name: '992',
    styles: {
      width: '992px',
      height: '801px',
    },
  },
  '1024': {
    name: '1024px',
    styles: {
      width: '1024px',
      height: '801px',
    },
  },
  Responsive: {
    name: 'Responsive',
    styles: {
      width: '100%',
      height: '100%',
    },
  },
}

configureViewport({
  defaultViewport: '992',
  viewports: {
    ...newViewports,
  },
})

addDecorator(withNotes)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
// const req = require.context('../src/components', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
