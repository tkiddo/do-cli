import { copyContent, copyCurrentPath } from '../index'
import path from 'path'

describe('file operation', () => {
  test('copy file content', async () => {
    const content = await copyContent('./src/file/__test__/file.txt')
    expect(content).toEqual('哈哈')
  })
  test('copy current path', async () => {
    const currentPath = await copyCurrentPath()
    const expectPath = path.resolve(process.cwd())
    expect(currentPath).toEqual(expectPath)
  })
})
