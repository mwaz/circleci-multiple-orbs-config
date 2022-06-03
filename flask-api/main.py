from flask import Flask, jsonify, request
import config

# Flask app config
app = Flask(__name__)
app.config.from_object(config.DevelopmentConfig)

# Seeding to create default users

users = {}


# Create a new user
@app.route("/user", methods=["POST"])
def create_user():
    return jsonify({"message": "user created"}), 201

# Fetch all users


@app.route("/users", methods=["GET"])
def get_users():

    return jsonify({"message": "all users"}), 200

# Login user


@app.route("/users/login", methods=["POST"])
def login_user():
    return jsonify({"message": "login sucessful"}), 200


if __name__ == "__main__":
    app.run(debug=True)
