### 算出プロパティ
- ex: `[e.target.name]: e.target.value`
- - 「要素の名前(`e.target.name`)をプロパティ名として、入力値(`e.target.value`)を渡しなさい」という意味

### 制御コンポーネント
- Stateで入力を管理する方式のコンポーネント
- 入力の都度再描画が発生する

### 非制御コンポーネント
- Stateで入力を管理しない方式のコンポーネント
- 入力値を取得するには`<input>`や`<select>`などの要素に直接アクセスする必要がある
- useRef関数
- - `useRef(null)`でRefオブジェクトを生成する
- - ref属性でRefオブジェクトに要素を紐づけることができる
- 規定値は要素の`defaultValue`属性として割り当てる必要がある
- - `value`属性じゃないよ！

リアルタイムの値がほしいときは制御コンポーネント、そうでもないときは非制御コンポーネントを使うのが良いのかも

### React Hook Form
- 入力値の検証をしてくれる。フックとの親和性が高いらしい
- useForm関数
- - フォームを初期化する
- - `useForm(opts)`
- register関数
- - 指定されたフィールドに対応するイベントハンドラーや参照などを登録するための関数
- - `register(name [, opts])`
- handleSubmit関数
- - submit時の処理をする。`onsubmit`が検証成功時、`onerror`が検証失敗時の処理
- - `handleSubmit(onsubmit [, onerror])`
