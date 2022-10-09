import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import iconv from 'iconv-lite'
import chalk from 'chalk'
import { cwd } from '../utils/common'

export const copyToClipboard = (content: string) => {
  return new Promise((resolve) => {
    exec('clip').stdin.end(iconv.encode(content, 'gbk'), () => {
      console.log(chalk.green('copy success'))
      resolve(content)
    })
  })
}

export const readFile = (source: string, log = false) => {
  const buffer = fs.readFileSync(path.resolve(cwd(), source))
  const content = buffer.toString()
  if (log) {
    console.log(chalk.green('read file success'))
    console.log(`content: ${content}`)
  }
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

export const copyFile = async (source: string, target: string) => {
  const content = readFile(source)
  fs.writeFileSync(path.resolve(cwd(), target), content)
  console.log(chalk.green('copy file success'))
}
