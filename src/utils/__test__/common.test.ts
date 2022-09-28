import { pwd } from '../common'

describe('common functions', () => {
  test('pwd', () => {
    const result = pwd()
    expect(result).toBe(process.cwd())
  })
})
