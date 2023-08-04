import { expect, test } from 'vitest';
import { join2Query } from './string';

test('拼接params为请求字符串', () => {
  const params = {
    id: 1,
    name: 'lcc'
  }
  expect(join2Query(params)).toBe('?id=1&name=lcc')
})