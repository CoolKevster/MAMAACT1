from flask import Flask, render_template, request


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/login.html")
def login():
    return render_template("login.html")  # Make sure this file exists in your 'templates' folder

@app.route("/womens.html")
def women():
    return render_template("female.html")

@app.route("/mens.html")
def men():
    return render_template("mens.html")

@app.route("/index.html")
def home_page():
    return render_template("index.html")

@app.route("/cart.html")
def shopping_cart():
    return render_template("cart.html")



if __name__ == "__main__":
    app.run(debug=True)

