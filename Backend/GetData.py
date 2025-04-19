from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

@app.route('/python/getResults', methods=["POST"])
def getResults():
    data = request.get_json()
    print("User: " + str(data["userData"]))
    return jsonify({"success": True, "message": "GRAHHHH"})

if __name__ == '__main__':
    print("app is running")
    app.run(debug=True, port=5000)  # Runn1ng on port 5001