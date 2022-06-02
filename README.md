# <center> Vmind
## Introduction
It's a mind map web application, and it also provides some tools in child packages.

## Demo
> It is a web application.

if no pnpm
```
cd packages/app

npm run dev
```


if you could use pnpm 
```
npm install

npm run dev
```


## Use this line tools
> It is a typescript package tool.
It provides you some line tools, if you want to use it, see [@vmind/core](https://www.npmjs.com/package/@vmind/core)

```
import {createLine} from '@mind/core'

createLine("nodeId-1","nodeId-2","straight")

```
> select a container to build canvas. If you not give it a id, the canvas node will be append to body tag.
```
createLine("nodeId-1","nodeId-2","straight")
createLine("nodeId-1","nodeId-2","straight","containerId")
```








## Help me
1. If you met some bugs, please create a issue.

2. If the tool can't meet your needs, please create a issue.

3. Right now, the project is being written, give me some advice if you want.

