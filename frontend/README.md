【起動手順】

## 準備（流れ）
ホスト側のnode_modulesをコンテナにコピーしないように、.dockerignoreファイルを作成
node_modules
.git
.DS_Store
.vscode
↓
npm i
でpackage.jsonに記載のモジュールをまとめてインストール
↓
package-lock.jsonをコンテナ側にコピー（記載済）
↓

## 手順
（モジュールを追加した場合）
cd frontend/
でfrontendに移動し、
npm i
でモジュールを追加

docker-compose build --no-cache
でビルド

docker-compose up -d
でコンテナ起動