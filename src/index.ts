import { Command } from 'commander'
import { version, name, description } from '../package.json'
import { readFile, readAndCopy, copyCurrentPath } from './file'

const program = new Command()

program.name(name).version(version).description(description)

program.command('welcome').action(() => {
  console.log('welcome to do-cli')
})

// 读取文件内容
program
  .command('read')
  .description('read file content')
  .argument('<source>', 'source file')
  .action((source) => {
    readFile(source)
  })

// 复制文件内容
program
  .command('rc')
  .description('read and clip file content to clipboard')
  .argument('<source>', 'source file')
  .action((source) => {
    readAndCopy(source)
  })

// 复制当前路径
program
  .command('clip-path')
  .description('copy current path to clipboard')
  .action(() => {
    copyCurrentPath()
  })

program.parse()
