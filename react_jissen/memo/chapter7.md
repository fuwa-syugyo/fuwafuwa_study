## フック
- 関数コンポーネントにいろんな機能を付与できるしくみ
- - 関数コンポーネントにもStateのしくみを付与できる
- `useXxxx`はだいたいフック

## `useEffect`関数
- `useEffect(()=> {statement}, deps)`
- - `statement`: 描画時に実行すべき処理
- - `deps`:  依存する変数(配列)
- - `deps`が変更されたときだけ処理を実行する
- 基本は`useLayoutEffect`関数ではなくこっちを使うべしらしい

## `useLayoutEffect`関数
- `useEffect`関数とそっくりだが、ページが描画される前に同期的に実行される
- 同期的に実行されるため、実行後の描写を止めてしまう
