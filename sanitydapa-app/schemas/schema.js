import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import product from './product'
import banner from './banner'
import landing from './landing'
import footer from './footer'
import logo from './logo'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ product, banner, landing, footer, logo
  ]),
})
