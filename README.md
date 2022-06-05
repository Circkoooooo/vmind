# <center> Vmind
## Introduction
It's a mind map web application, and it also has some tools in child packages.

## Demo
> It is a web application.

if pnpm
```
cd packages/app

npm run dev
```


if pnpm 
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
//or
createLine("nodeId-1","nodeId-2","straight","containerId")
//the canvas will be build in a container which id is 'containerId'

```
