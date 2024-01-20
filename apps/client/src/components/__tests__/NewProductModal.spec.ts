import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NewProductModal from '../NewProductModal.vue'
import { QueryClient } from '@tanstack/vue-query';
import { config } from '@vue/test-utils';
config.global.provide= {
  VUE_QUERY_CLIENT: new QueryClient()
};

describe('NewProductModal', () => {
  it('renders properly', () => {

  })
})
