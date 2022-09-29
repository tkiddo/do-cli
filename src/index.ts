import { Command } from 'commander'
import { version, name, description } from '../package.json'
import { copyToClipboard } from './file'

const program = new Command()

program.name(name).version(version).description(description)

program.command('welcome').action(() => {
  console.log('welcome to do-cli')
})

program
  .command('clip')
  .description('copy file to clipboard')
  .argument('<file>', 'file to copy')
  .action((file) => {
    copyToClipboard(file)
  })

program.parse()
