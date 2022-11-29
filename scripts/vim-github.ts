// Name: Vim/Github

import "@johnlindquist/kit"
let content = await paste()
content = content.trim()
if (content.startsWith('https://github.com/')) {
  content = content.replace('https://github.com/', '')
  copy(`{ "${content}" },`)
} else {
  const processedContent = content.replace(/['";,]+/g, '')
  focusTab(`http://github.com/${processedContent}`, 'Brave')
}
