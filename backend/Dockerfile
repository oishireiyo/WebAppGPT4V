FROM ubuntu:latest

# Docker build時に使用する変数
ARG EXPOSED_PORT=5432 \
  OPENAI_API_KEY \
  DEEPL_API_KEY

# Docker container内での環境変数を設定
ENV TZ=Asia/Tokyo \
  EXPOSED_PORT=${EXPOSED_PORT} \
  OPENAI_API_KEY=${OPENAI_API_KEY} \
  DEEPL_API_KEY=${DEEPL_API_KEY}

# work dirとdownload dirを用意
RUN mkdir -p /backend/ /download/

# 現在のdirecotryにあるファイル全てをコピー
COPY . /backend/

# 必要なモジュールのインストール
RUN apt-get update && apt-get upgrade -y \
  && apt-get install -y --no-install-recommends \
    wget build-essential libbz2-dev libdb-dev libreadline-dev libffi-dev libgdbm-dev \
    liblzma-dev libncursesw5-dev libsqlite3-dev libssl-dev zlib1g-dev uuid-dev libgl1-mesa-dev libglib2.0-0

# Python 3.9.6のインストール
WORKDIR /download/
RUN wget --no-check-certificate https://www.python.org/ftp/python/3.9.6/Python-3.9.6.tgz \
  && tar -xf Python-3.9.6.tgz \
  && cd Python-3.9.6 \
  && ./configure --enable-optimizations \
  && make \
  && make install

# いらない物を消す
RUN apt-get autoremove -y

# working dirに移動し、必要なモジュールのインストール
WORKDIR /backend/
RUN python3 -m pip install -r requirements.txt

# Docker Continer内で使用するポート番号
EXPOSE ${EXPOSED_PORT}

# コンテナ作成後に実行するコマンド
# 全てのネットワークからのアクセスを受け入れるため、HOSTを0.0.0.0に設定する。
# ポート番号はEXPOSEしたものと同一にする。
CMD gunicorn --config api/gunicorn/setting.py