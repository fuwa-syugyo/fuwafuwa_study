## OSIモデル(Open Systems Interconnection Model)
ネットワークで提供される絶対的な基本モデル。
ネットワークに接続された全てのデバイスがデータを送信、受信、解釈する方法を決定するフレームワークを提供する。

### 7層: アプリケーション層
メールクライアント、ブラウザー、GUIなどを提供するお馴染みの層。
WebサイトのアドレスをIPアドレスに変換する方式であるDNS(Domain Net System)がプロトコルに含まれる。

### 6層: プレゼンテーション層
アプリケーション層との間のデータのトランスレーターとして機能する。データの表現形式を定める層？
データ暗号化(HTTPS)などのセキュリティ機能が実行される層でもある。

### 5層: セッション層
プレゼンテーション層からのデータを他のコンピュータに送るために接続の作成を行う。
接続が確立されると、セッションが作成される。

続いてデータをチャンクに分割し、パケットとして1つずつ送信する。
セッションは固有なので、データは異なるセッション間でやりとりすることはできない。

#### セッション
通信の開始から終了までを管理する１つの単位のこと

### 4層: トランスポート層
通信の品質をコントロールする層。以下の2つのプロトコルに従う。

#### TCP(Transmission Control Protocol:伝送制御プロトコル)
2つのデバイス間の常時接続を予約するプロトコル。セッション層から送信されたチャンクに対してデータに抜け落ちがないかエラーチェックを行う。
ファイル共有、インターネット閲覧、電子メールの送信など、データが正確かつ安全であることが必要なものに対して使用される。

#### UDP(User Datagram Protocol: ユーザーデータグラムプロトコル)
エラーチェックを行わないかわりに非常に高速である。2つのデバイス間の同期や保証などない！
パケットの送信速度を制御できるようにするか、アプリケーション層に委ねることができる。
ビデオストリーミングなどの大きなファイルに対して使うのが一例。

### 3層: ネットワーク層
データのチャンクが送信される最適なパスを決定する(ルーティング)。
`OSPF(Open Shortest Path First)`と`RIP(Routing Information Protocol)`を含んでいる。
最適なパスは以下の要素で決まる。
* 最短: パケットが通過する必要があるデバイスの数が最小限
* 最も信頼できる: 以前、そのパスでパケットが失われたことがあるか？
* 物理接続が最速: パスに銅、もしくはファイバーが使われているのか？

IPアドレスを使用してパケットを配信できるルーターなどのデバイスはこのレイヤーに属する。
### 2層: データリンク層
物理アドレス指定を行う層。
ネットワーク層からパケットを受信し、受信エンドポイントの物理MACアドレスを追加する。
送信に適した形式でデータを掲示するのもこの層のお仕事。

### 1層: 物理層
イーサネットケーブル的なやつ。
電気信号を使用して、2進数で相互にデータを転送する。
