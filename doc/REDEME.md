# Mongodb 数据库操作

```
$ mkdir -p data/db (-p参数可以同时创建父子文件夹)
```

```
$ mongod --dbpath=./datadb
```
### 启动操作界面

1.用户图形接口GUI

2.命令行接口CLI，对于mongodb我们使用mongo shell命令行来操作启动。

### 开启 Mongo Shell

```
$ mongo
```
#### 创建一个数据库

```
$ use dataname
```
数据库名字一般跟项目名字相同

#### 创建一个集合
数据库是 mongodb 中的顶级存储单位，之下一级就是 **集合** 。

```
$ use createCollection('collectionname')
```

#### 插入数据记录

```
$ db.posts.insert({title: 'myTitle', content: 'myContent'})
```
#### 查看集合中的所有记录

```
$ db.posts.find()
```
##### hello Ada

![](https://github.com/happypeter/digicity-express-api/blob/master/doc/img/001-ada.png?raw=true)

### 修改了一条记录

```
$ db.posts.update({_id: ObjectId('xxx')}, {$set: {title: 'mongodb'}})
```

### 删除一条记录

```
$ db.posts.remove({_id: ObjectId('xxx')})
```
### 删除 posts 集合中的所有记录

```
$ db.posts.remove({})
```

### 删除数数据库
假设我们的数据库叫做 digicity-express-api

```
$ use digicity-express-api
db.dropDatabase()
```
### 为什么要记录电子版笔记？

1.使用 markdown 格式美观

2.便于更新

3.有 git/github 控制 永远不会丢失

4.便于搜索 ctrl+shift+f

# 用JS操作mongodb
我们主要基于一个JS库的幫助，Mongoose ，它可以 作为一个npm的包来安裝。

解释一下，一個 **JS库** 就是一組 **JS接口** 的集合。库，英文对应library 。

![](https://github.com/happypeter/digicity-express-api/blob/master/doc/img/002-mongoose.png?raw=true)
