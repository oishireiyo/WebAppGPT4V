# WebAppGPT4V
このrepositoryはGPT-4 with visionを利用したWebアプリケーションに関するものです。フロントエンド側では、Reactを利用しUIを作成しています。一方バックエンド側ではFlaskを用い、エンドポイントを設定しています。実際の処理は、[OpenAI submodule](https://github.com/oishireiyo/OpenAI)と[DeepLAPI submodule](https://github.com/oishireiyo/DeepLAPI)が担当しています。

## はじめに
このrepositoryを利用するには、OpenAI API keyとDeepL API keyの取得が必要です。取得したAPI keyは環境変数として設定してください。
```shell:.bashrc
# OpenAI API key
export OPENAI_API_KEY="hogehoge"
# DeepL API key
export DEEPL_API_KEY="piyopiyo"
```
Git submoduleを利用しているため、再帰的にcloneしてください。
```shell
git clone --recursive -b main git@github.com:oishireiyo/WebAppGPT4V.git 
```

## ローカルで走らせたい場合
frontendとbackendの設定が必要です。

### frontend
nodejsとnpmのインストールを行います。
```bash
apt-get update && apt-get upgrade
apt-get install nodejs npm
npm -g install n
n stable
apt-get purge nodejs npm
```
その後、必要なパッケージをインストールします。完了後開発サーバーを立てます。
```bash
cd path/to/frontend
npm ci
npm run dev
```

### backend
pythonの設定を行います。その後、開発サーバーを立てます。
```bash
cd path/to/backend
python3 -m pip install -r requirements.txt
python3 api/server.py
```

以上のステップが完了したら、`http://127.0.0.1:3000`からアプリケーションを利用できます。デフォルトの設定では、ポート番号3000がfrontend、5000がbackendをリッスンします。

## Dockerで実現するエフォートレスな利用
`docker-compose.yml`を利用し、`backend/Dockerfile`と`frontend/Dockerfile`からイメージ、コンテナを作成・ネットワークの利用を行うことができます。
```bash
cd path/to/root/
docker-compose up --build
```
その後、`http://127.0.0.1:3000`からアプリケーションを利用できます。

また、`backend`と`frontend`それぞれの個別に利用したい場合は`Dockerfile`からイメージ、コンテナを作成してください。その際、コンテナで使用しているポート番号を確認してください。
```bash
docker build -t イメージの名前 path/to/Dockerfile
docker run -it -p 自分のポート:コンテナのポート(3000 or 5000) イメージの名前
```

## 特記事項
- WSGIサーバーとして、`gunicorn`を使用しているが`optparse`との相性が悪いのか実行すると以下のエラーが発生する。
```bash
$ gunicorn -b 127.0.0.1:8000 server:app
[2023-12-13 02:03:27 +0900] [78862] [INFO] Starting gunicorn 21.1.0
[2023-12-13 02:03:27 +0900] [78862] [INFO] Listening at: http://127.0.0.1:8000 (78862)
[2023-12-13 02:03:27 +0900] [78862] [INFO] Using worker: sync
[2023-12-13 02:03:27 +0900] [78863] [INFO] Booting worker with pid: 78863
Usage: gunicorn [options]

gunicorn: error: no such option: -b
```
何故か原因は不明だが、コンテナ内で環境変数を設定してポート番号を渡すことで、`optparse`の利用を回避した。