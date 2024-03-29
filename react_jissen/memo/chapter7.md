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

## `useRef`関数
- 戻り値はRefオブジェクト。コンポーネントが破壊されるまで維持される
- Refオブジェクト
- - コンポーネントが生成されたから破棄されるまで維持される、変更可能なオブジェクト
- - クラスのインスタンス変数的な。
- 濫用しないこと！ほとんどの動作はPropsやStateで代替できるはず
- Ref値が変更されたとき、再描画されない。Stateとは違うので注意

## `forwardRef`関数
- `forwardRef((props, ref)=> {statements})`
- - `props`: Propsを受け取るための引数
- - `ref`: ref属性を受け取るための引数
- - `statements`: コンポーネント本体
- ref属性に渡されたRefオブジェクトを配下に引き渡すための関数

## `useImperativeHandle`関数
- `useImperativeHandle(ref, handle [, deps])`
- - `ref`: ref属性経由で受け取ったRefオブジェクト
- - `handle`: ref経由で公開するオブジェクトを生成する関数
- - `deps`: 依存する値(配列)
- 関数コンポーネント配下で定義したメソッドを親コンポーネントに対して公開する
- `ref`を受け取るため、`forwardRef`関数の併用が前提
- `deps`が変更されたタイミングで`handle`を再実行する
