import { cwd } from '../common'

describe('common functions', () => {
  test('pwd', () => {
    const result = cwd()
    expect(result).toBe(process.cwd())
  })
})
