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
