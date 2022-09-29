import { copyToClipboard } from '../index'

describe.only('file operation', () => {
  test('copy file content', () => {
    const content = copyToClipboard('./src/file/__test__/file.txt')
    expect(content).toEqual('哈哈')
  })
})
