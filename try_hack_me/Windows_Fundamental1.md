## Windows基礎1
### Windowsの歴史
Windowsは1985年から始まった。
現在はWindows11のHomeとProの2種類。
Proでは`BitLocker`の暗号化ができる。
Windows OSのサーバーのバージョンは`Windows Server 2019`である。

### ファイルシステム
最新のWindowsで使用されるファイルシステムは`NTFS(New Technology File System)`。
以前は`FAT(File Allocation Table)`や`HPFS(High Performance File System)`があった。
`FAT`は現在もUSBやMicroSDで使用されている。
`NTFS`は、障害が発生した際にログファイルに保存されている情報を使用してディスク上のフォルダーやファイルを自動的に修復するといった使い道がある。(FATでは無理)

**ADS(Alternate Data Streams)**
NTFS固有のファイル属性。
全てのファイルには最低1つのデータストリーム(`$DATA`)があるが、`ADS`は複数含めることができる。
悪い人(マルウェア作成者)は`ADS`を利用してデータを隠してきた。

### Windowsフォルダー
`C:¥Windows`はWindows OSが含まれるフォルダー。
必ずしもCドライブに存在必要はなく、他のドライブに入れることも一応できる。
Windowsディレクトリのシステム環境変数は`%windir%`。
環境変数にはOS環境に関する情報が保存される。この情報には、OSのパス、OSが使用するプロセッサの数、tmpフォルダーの場所などの詳細が含まれるらしい。

**System32**
Windowsフォルダ内にあるフォルダ。
OSにとって重要なファイルが保存されている。
このフォルダにはOSにとって重要なファイルが保存されており、うっかり削除してしまうとWindows OSが動作不能になる可能性がある。
