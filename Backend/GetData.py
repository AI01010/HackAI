import base64
import io
from catboost import CatBoostRegressor
from flask import Flask, request, jsonify
import matplotlib
import matplotlib.pyplot as plt
from flask_cors import CORS
import pandas as pd
matplotlib.use('Agg')

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

catBoostModel = CatBoostRegressor()
catBoostModel.load_model('MlAlgos/catboost_model.cbm')


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

@app.route("/python/GetTopFoods", methods=["POST"])
def GetFoods():
    data = request.get_json()
    year = data["year"]
    maxFoods = data["topTaken"]
    foodArr = list()
    foodData = pd.read_csv("FinalData/IndividualFoodData.csv")
    foodData = foodData.iloc[:, 0]
    foodData = foodData[1:].drop_duplicates().to_list()
    for food in foodData:
        estCost = catBoostModel.predict([[food, year]])
        estCost = estCost[0]
        foodArr.append([food, estCost])
    
    sorted_foods = sorted(foodArr, key=lambda x: x[1], reverse=True)

    foods, revenue = zip(*sorted_foods)

    plt.bar(foods[:maxFoods], revenue[:maxFoods])
    plt.ylim(revenue[maxFoods - 1] - 50, revenue[0] + 50)
    plt.xlabel("Food")
    plt.xticks(fontsize=6)
    plt.ylabel("Revenue")
    plt.title("Top Revenue-Generating Foods")
    
    imgBuffer = io.BytesIO()
    plt.savefig(imgBuffer, format="png")
    plt.close()
    imgBuffer.seek(0)
    finalStr = base64.b64encode(imgBuffer.read()).decode("utf-8")

    return jsonify({"success": True, "message": "GRAHHHH", "image": finalStr})
    

    

if __name__ == '__main__':
    print("app is running")
    app.run(debug=True, port=5000)  # Runn1ng on port 5001