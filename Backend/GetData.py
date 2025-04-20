import base64
import io
from flask import Flask, request, jsonify
import matplotlib
import matplotlib.pyplot as plt
from flask_cors import CORS
import pandas as pd
import tensorflow as tf
import numpy as np
from sklearn.preprocessing import LabelEncoder, StandardScaler
matplotlib.use('Agg')

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Load the trained neural network model
foodModel = tf.keras.models.load_model('MlAlgos/food_neural_network_model.keras')
monthModel = tf.keras.models.load_model('MlAlgos/monthlySales_neural_network_model.keras')

@app.route('/python/getResults', methods=["POST"])
def getResults():
    data = request.get_json()
    print("User: " + str(data["userData"]))
    plt.scatter([], [])
    plt.title("lmao gottem")

    # Create a buffer in memory to save the image
    imgBuffer = io.BytesIO()

    # Save the image to the buffer
    plt.savefig(imgBuffer, format="png")
    plt.close()

    # Reset the buffer to the start after writing to it
    imgBuffer.seek(0)

    # Convert the image to a base64 string
    finalStr = base64.b64encode(imgBuffer.read()).decode("utf-8")

    return jsonify({"success": True, "message": "GRAHHHH", "image": finalStr})

@app.route("/python/GetTopFoods", methods=["POST"])
def GetFoods():
    data = request.get_json()
    year = data["year"]
    min = data["leftRange"]
    max = data["rightRange"]

    foodArr = list()
    foodData = pd.read_csv("FinalData/IndividualFoodData.csv")

    # Fit LabelEncoder on unique foods
    foodData_foods = foodData["Food"].drop_duplicates().to_list()
    label_encoder = LabelEncoder()
    label_encoder.fit(foodData_foods)

    # Fit StandardScaler on the 'Date' column
    scaler = StandardScaler()
    scaler.fit(foodData[["Date"]])  # Use 'Date' column for scaling

    # Predict revenue for each food item
    for food in foodData_foods:
        # Create the sample input DataFrame for the neural network
        sample_input = pd.DataFrame({
            "Food": [food],
            "Date": [year]  # Replace `year` with the actual year value for prediction
        })

        # Preprocess the input data (encode 'Food' and scale 'Date')
        sample_input['Food'] = label_encoder.transform(sample_input['Food'])  # Encode 'Food'
        sample_input[['Date']] = scaler.transform(sample_input[['Date']])  # Scale 'Date'

        # Make a prediction with the neural network
        estCost = foodModel.predict(sample_input)

        # Extract the predicted revenue (assuming it's a scalar output)
        estCost = estCost[0][0]  # Extract the scalar value from the 2D array
        foodArr.append([food, estCost])

    # Sort foods by predicted revenue
    sorted_foods = sorted(foodArr, key=lambda x: x[1], reverse=True)

    foods, revenue = zip(*sorted_foods)

    # Create a bar chart of the top foods by revenue
    plt.bar(foods[min:max], revenue[min:max])
    plt.ylim(revenue[max - 1] - 25, revenue[0] + 25)
    plt.xlabel("Food")
    plt.xticks(fontsize=6)
    plt.ylabel("Revenue")
    plt.title("Top Revenue-Generating Foods")

    # Save the plot to a buffer
    imgBuffer = io.BytesIO()
    plt.savefig(imgBuffer, format="png")
    plt.close()

    imgBuffer.seek(0)

    # Convert the image to a base64 string
    finalStr = base64.b64encode(imgBuffer.read()).decode("utf-8")

    return jsonify({"success": True, "message": "GRAHHHH", "image": finalStr, "numFoods": len(foodArr)})

@app.route("/python/GetMonthlySales", methods=["POST"])
def GetMonthlySales():
    data = request.get_json()
    year = data["year"]
    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September"]
    monthSales = list()
    monthData = pd.read_csv("FinalData/SalesPerMonth.csv")

    scaler = StandardScaler()

    # for each of the 9 months
    for i in range(9):
        sample_input = pd.DataFrame({
            "Month": [i + 1],
            "Year": [year]  # Replace `year` with the actual year value for prediction
        })

        # Preprocess the input data (encode 'Food' and scale 'Date')
        scaler.fit(monthData[["Month"]]) 
        sample_input['Month'] = scaler.transform(sample_input[['Month']])  # Scale 'Date'
        scaler.fit(monthData[["Year"]])  
        sample_input[['Year']] = scaler.transform(sample_input[['Year']])  # Scale 'Date'

        # Make a prediction with the neural network
        estCost = monthModel.predict(sample_input)

        # Extract the predicted revenue (assuming it's a scalar output)
        estCost = estCost[0][0]  # Extract the scalar value from the 2D array
        monthSales.append(estCost)
    
    plt.bar(monthNames, monthSales)
    plt.xlabel("Month")
    plt.xticks(fontsize=6)
    plt.ylabel("Sales")
    plt.ylim(np.min(monthSales) - 20, np.max(monthSales) + 20)
    plt.title("Revenue in Months For Year")

    # Save the plot to a buffer
    imgBuffer = io.BytesIO()
    plt.savefig(imgBuffer, format="png")
    plt.close()

    imgBuffer.seek(0)

    # Convert the image to a base64 string
    finalStr = base64.b64encode(imgBuffer.read()).decode("utf-8")

    return jsonify({"success": True, "message": "GRAHHHH", "image": finalStr})

if __name__ == '__main__':
    print("app is running")
    app.run(debug=True, port=5000)  # Running on port 5000
