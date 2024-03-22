import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import category from './category'
import herosection from './herosection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,herosection],
}
