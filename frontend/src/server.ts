import { createServer, Model } from 'miragejs'

export function makeServer({ environment = 'test' } = {}) {}

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' })
}
