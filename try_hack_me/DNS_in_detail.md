## DNS in detail

### DNS(Domain Name System)
IPアドレス(104.26.10.229のような数字)ではなく、文字でアクセスできるってしくみ。

### ドメイン階層
#### TLD(Top Level Domain)
ドメイン名の一番右。「tryhackme.com」なら「com」です。
以下の2種類がある。

##### gTLD(Generic Top Level Domain)
ドメインの目的を伝える。
`.com`: 商業目的
`.org`: 組織
`.edu`: 教育
`.gov`: 政府
などなど

##### ccTLD(Country Code Top Level Domain)
地理的な目的を伝える。
`.jp`: 日本
`.ca`: カナダ
などなど

#### セカンドレベルドメイン
「tryhackme.com」なら「tryhackme」の部分。
ドメイン名は、「63文字以内のセカンドレベルドメイン+TLD」かつ英小文字数字ハイフンのみというルール。

#### サブドメイン
セカンドレベルドメインのピリオドを挟んで左側にある。
「admin.tryhackme.com」なら「admin」。
ルールはセカンドレベルドメインと同じだが、複数のサブドメインをピリオドで区切って長い名前を作成できる。(ただし253文字以下)
ドメイン名に対して作成できるサブドメインの数に制限はない。
