## Linux基礎2
### SSH(Secure Shell)
リモートLinuxマシンのコマンドラインに接続して対話する一般的な方法。
暗号化形式のデバイス間のプロトコル。
人間が読める形式で送信される入力はすべて暗号化され、リモートマシンに到達すると暗号化は解除される。

### Linuxマシンのディレクトリ
#### /etc
OSで使用されるシステムファイルを保存する一般的な場所。

#### /var
varは変数データの略称。
システム上で実行されているサービスやアプリケーションによって頻繁にアクセスor書き込みされるデータが保存される。

#### /root
"root"ユーザーのホームディレクトリ。/homeディレクトリとは似て非なるもの。

#### /tmp
1,2回のみアクセスする必要があるデータを保存するディレクトリ。
コンピュータを再起動するとこのフォルダの内容は消去される。

ペネトレーションテストでは、デフォでどのユーザーもこのフォルダーに書き込めるようにする。ここにスクリプトを保存してあれこれするのかな？
