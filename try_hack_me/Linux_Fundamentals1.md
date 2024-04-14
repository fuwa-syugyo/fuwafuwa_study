## Linux基礎1

### Linuxの背景
LinuxはUNIXをベースにした、複数のOSを総称したもの。
UbuntuとかDebianとか。

コマンドはお馴染みの`ls`、`cd`、`cat`、`pwd`とかがある。

### コマンドあれこれ
#### find
`find -name hoge.txt`
hoge.txtという名前のファイルを検索するときのコマンド

#### grep
ファイルの内容で特定の値を検索できる。

`wc -l xxxx.log`
xxxx.logの数をカウントしてくれる。

`grep "81.143.211.90" xxxx.log`
xxxx.logの中から、81.143.211.90が含まれているもののみを検索している。
