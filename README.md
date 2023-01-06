# Deep-in-TypeScript

# 项目环境搭建

## tsc 编译

```shell
# 安装
npm install nodemon ts-node -D

tsc ./src/index.ts
```

## nodemon 配合 ts-node

```
"script": {
  "dev": "nodemon --watch src/ -e ts --exec ts-node ./src/index.ts"
}
```

nodemon --watch src/ 表示检测目录是 package.json 同级目录 src -e ts 表示 nodemon 命令准备将要监听的是 ts 后缀的文件 --exec ts-node ./src/index.ts 表示检测 src 目录下有任何变化都要重新执行 index.ts 文件

## 使用 parcel

```shell
# 安装parcel打包工具（无需配置 即可编译运行）
npm install parcel-bundler -D

# 指定编译文件 直接在index.html中引入我们用到的ts文件即可
"script": {
  "dev": "parcel ./index.html"
}
```

启动项目：yarn dev

# 装饰器章节下的修改

## concurrently

concurrently 用来同时执行多条 npm 命令 `npm install concurrently -S`

## tsconfig 修改

```txt
  # 编译输入输出目录
  "outDir": "./tsc-dist",
  "rootDir": "./src"

  # 消除装饰器警告
  "experimentalDecorators": true, # 装饰器
  "emitDecoratorMetadata": true # 元数据
```

## package.json 修改

```json5
{
  scripts: {
    service: 'parcel ./index.html',
    'dev:build': 'tsc -w',
    'dev:start': 'nodemon --watch dist/teaching js --exec node ./dist/teaching/lClassDecorator.js',
    'start:dev': 'nodemon --watch src/ -e ts --exec ts-node ./src/index.ts',
    start: 'concurrently npm:dev:*',
    // 解决typescript编译装饰器时出现的bug
    tsc: 'tsc src/teaching/lClassDecorator.ts --target ES5 -w --experimentalDecorators'
  }
}
```

## 装饰器章节需要安装元数据插件

`npm install reflect-metadata -S`
