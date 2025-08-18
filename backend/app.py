from flask import Flask, jsonify
from flask_cors import CORS
from sqlalchemy import create_engine, text

app = Flask(__name__)
CORS(app)  # Reactからのアクセス許可

# SQLite接続
engine = create_engine("sqlite:///database.db", echo=True)


@app.route("/")
def hello():
    return {"message": "Hello from Flask!"}


@app.route("/api/users")
def get_users():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM users")).fetchall()
        users = [{"id": row[0], "name": row[1]} for row in result]
        return jsonify(users)


if __name__ == "__main__":
    # 起動時に簡易テーブル作成
    with engine.begin() as conn:
        conn.execute(
            text("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)")
        )
        conn.execute(text("INSERT INTO users (name) VALUES ('Alice'), ('Bob')"))
    app.run(host="0.0.0.0", port=5000)
