import { copyContent, copyPath } from '../index'

describe('file operation', () => {
  test('copy file content', async () => {
    const content = await copyContent('./src/file/__test__/file.txt')
    expect(content).toEqual('哈哈')
  })
  test('copy file path', async () => {
    const path = await copyPath()
    expect(path).toEqual('D:\\tangkaiqiang\\do-cli')
  })
})
