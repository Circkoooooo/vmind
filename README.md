# <center> Vmind
## Introduction
It's a mind map web application, and it also provides some tools in child packages.

## If you want to run the app
> It is a web application.
```
# npm
npm install

npm run dev
```

## Use line tools
> It is a typescript package tool.
It provides some line tools, if you want to use it, see [@vmind/core](https://www.npmjs.com/package/@vmind/core)

Once you install it, you can use it in you project.
```
import {createLine} from '@mind/core'

createLine("nodeId-1","nodeId-2","straight")
```

You can provide createLine function with the id of  two HtmlElement,
and it will create a canvas between them, then stroke a line to connect them, but you couldn't modify the style of the line.

## Help me
1. If you met some bugs, please create a issue.

2. If the tool can't meet your needs, please create a issue.

3. Right now, the project is being written, give me some advice if you want.