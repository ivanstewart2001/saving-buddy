#This is where we hopefully will be able to communicate with Firebase

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
#hi
@app.route('/backend_to_frontend', methods=['GET'])
def backend_to_frontend():
   return {
       'id':123,
       'name':'Geoffrey',
       'grade':'Sophmore'
   }

@app.route('/frontend_to_backend', methods=['POST'])
def frontend_to_backend():
    data_from_frontend = request.get_json()
    print(data_from_frontend)
    return data_from_frontend

if __name__ == '__main__':
   app.run()
