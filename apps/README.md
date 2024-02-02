## 起動方法

### ビルドと生成・起動（Docker 上のコンテナ、apps で終了可能）

```bash
docker-compose up --build -d
```

### API、DB 設定のマイグレート

```bash
docker-compose exec api python routifyapiproject/manage.py migrate
```

## ファイル構成

#### api/

Rails の環境が入ります

#### web/

Next.js の環境が入ります
