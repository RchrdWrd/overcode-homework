import { describe, it, expect } from 'vitest'
import { mount, config } from '@vue/test-utils'
import ProductTable from '../ProductTable.vue'
import { QueryClient } from '@tanstack/vue-query';
config.global.provide= {
  VUE_QUERY_CLIENT: new QueryClient()
};

describe('ProductTable', () => {
  it('renders properly', () => {

  })
})
