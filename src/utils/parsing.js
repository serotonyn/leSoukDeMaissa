export const parseProduct = product => {
  //   console.log(product)
  const { content, title } = product

  const parsedTitle = title
    .replace(/^\d+__/g, '')
    .replace(/_/g, ' ')
    .replace(/\b(\w)/g, c => c.toUpperCase())

  const price = Number(content.match(/(?<=<p>).*?(?=<\/p>)/g)[2])

  const size = content.match(/(?<=<p>).*?(?=<\/p>)/g)[0]

  const color = content.match(/(?<=<p>).*?(?=<\/p>)/g)[1]

  const brand = content.match(/(?<=<p>).*?(?=<\/p>)/g)[3]

  // console.log(featured_media)
  // let fluid = {}
  // if (featured_media.localFile !== null) {
  //   fluid = featured_media.localFile.childImageSharp.fluid
  // } else {
  //   fluid = {}
  // }

  return {
    id: product.id,
    title: parsedTitle,
    price,
    // fluid,
    size,
    brand,
    color,
  }
}

export const calculatePrice = lineItems => {
  return lineItems.reduce((total, item) => total + item.price, 0)
}
