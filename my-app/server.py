# import json
# import uuid
# from flask import Flask, jsonify, request, Blueprint
# from flask_cors import CORS
# from firebase_admin import credentials, initialize_app, firestore

# cred = credentials.Certificate("db_key.json")
# default_app = initialize_app(cred)
# db = firestore.client()
# user_Ref = db.collection("user")

# app = Flask(__name__)
# app.config["SERCRET_KEY"] = "secretkey"
# CORS(app)

# @app.route('/user/add', methods=['POST'])
# def create_user():
#     try:
#         id = uuid.uuid4()
#         user_Ref.document(id.hex).set(request.json)
#         return jsonify({"success": True}), 200
#     except Exception as e:
#         return f"An Error Occurred: {e}"
    
# @app.route('/user/list', methods=['GET'])
# def read_user():
#     try:
#         all_users = [doc.to_dict() for doc in user_Ref.stream()]
#         return jsonify(all_users), 200
#     except Exception as e:
#         return f"An Error Occurred: {e}"
    
# if __name__ == '__main__':
#     app.run(port=5000)