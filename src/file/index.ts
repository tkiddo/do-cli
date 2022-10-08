import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import iconv from 'iconv-lite'
import chalk from 'chalk'
import { cwd } from '../utils/common'

export const copyToClipboard = (content: string) => {
  return new Promise((resolve, reject) => {
    exec('clip').stdin.end(iconv.encode(content, 'gbk'), () => {
      console.log(chalk.green('copy success'))
      resolve(content)
    })
  })
}

export const readFile = (source: string) => {
  const buffer = fs.readFileSync(path.resolve(cwd(), source))
  const content = buffer.toString()
  console.log(chalk.green('read file success'))
  console.log(`content: ${content}`)
  return content
}

export const readAndCopy = async (source: string) => {
  const content = readFile(source)
  return await copyToClipboard(content)
}

export const copyCurrentPath = async () => {
  const url = path.resolve(process.cwd())
  return await copyToClipboard(url)
}
