from flask import Flask, request, jsonify
from flask_cors import CORS
from db import users_collection

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({"message": "Skill-Setu backend with DB running"})

# TEST: Add user
@app.route("/add-user", methods=["POST"])
def add_user():
    data = request.json
    users_collection.insert_one(data)
    return jsonify({"status": "User added successfully"})

# TEST: Get users
@app.route("/users", methods=["GET"])
def get_users():
    users = list(users_collection.find({}, {"_id": 0}))
    return jsonify(users)

if __name__ == "__main__":
    app.run(port=5001, debug=True)