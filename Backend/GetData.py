import base64
import io
from flask import Flask, request, jsonify
import matplotlib.pyplot as plt
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

@app.route('/python/getResults', methods=["POST"])
def getResults():
    data = request.get_json()
    print("User: " + str(data["userData"]))
    plt.scatter([], [])
    plt.title("lmao gottem")

    # turns out this creates a buffer in ram
    imgBuffer = io.BytesIO()

    # now save our image into the buffer
    plt.savefig(imgBuffer, format = "png")

    # don't need it no more
    plt.close()

    # points buffer back to start, after we wrote the file it pointed to the end of the file, so had to reset it
    imgBuffer.seek(0)

    #right now imgBuffer is raw bites, we convert it first to 64 bit string then decode to regular python string
    finalStr = base64.b64encode(imgBuffer.read()).decode("utf-8")


    # should return the graph in base65 
    return jsonify({"success": True, "message": "GRAHHHH", "image": finalStr})

if __name__ == '__main__':
    print("app is running")
    app.run(debug=True, port=5000)  # Runn1ng on port 5001