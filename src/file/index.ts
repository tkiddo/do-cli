import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import iconv from 'iconv-lite'
import chalk from 'chalk'

export const copyToClipboard = (content: string) => {
  return new Promise((resolve, reject) => {
    exec('clip').stdin.end(iconv.encode(content, 'gbk'), () => {
      console.log(chalk.green('copy success'))
      resolve(content)
    })
  })
}

export const copyContent = async (source: string) => {
  const buffer = fs.readFileSync(path.resolve(process.cwd(), source))
  const content = buffer.toString()
  return await copyToClipboard(content)
}

export const copyPath = async () => {
  const url = path.resolve(process.cwd())
  return await copyToClipboard(url)
}
