## デバッグを開始したい場合

- ディレクトリを移動させる

```bash
cd apps/web
```

- パッケージをインストール

```bash
$ yarn
```

- 環境変数のコピー

```bash
$ cp .env.sample .env
```

- Webホストを起動

```bash
$ yarn dev
```

### 共通して

- コンポーネントは`export default`をせず、`export const`で表現する
  - Exportする関数名とファイル名は同一であること
  - 例) Setting.tsx→`export const Setting = ()=> ()`

### ディレクトリ構成

#### app

ページが表示される。ルーティングページのため、page.tsxあるいはlayout.tsxが入る。

### components

パーツが入ってくる。一番ファイル数は多くなる。

- commons 共通パーツを格納 Header, FooterとかFormパーツとか
- domains ページに挿入される中くらいのコンポーネントを格納 基本appディレクトリと同じフォルダを作成し、そこにパーツを大量に格納していく。多少命名が適当でも分かればOK（ただしファイル、関数名は短すぎないように）
- pages 基本App側ではこのページの中のコンポーネントが呼び出される。ファイル・関数名は必ず---Pageとなるようにする
