import { Command } from 'commander'
import { version, name, description } from '../package.json'
import { copyContent, copyPath } from './file'

const program = new Command()

program.name(name).version(version).description(description)

program.command('welcome').action(() => {
  console.log('welcome to do-cli')
})

// 复制文件内容
program
  .command('clip-content')
  .description('copy file content to clipboard')
  .argument('<file>', 'file to copy')
  .action((file) => {
    copyContent(file)
  })

// 复制文件路径
program
  .command('clip-path')
  .description('copy file path to clipboard')
  .action(() => {
    copyPath()
  })

program.parse()
