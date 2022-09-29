import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import iconv from 'iconv-lite'
import chalk from 'chalk'

export const copyToClipboard = (source: string) => {
  const buffer = fs.readFileSync(path.resolve(process.cwd(), source))
  const content = buffer.toString()
  exec('clip').stdin.end(iconv.encode(content, 'gbk'))
  console.log(chalk.green('copy to clipboard success'))
  return content
}
