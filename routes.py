from flask import Blueprint, render_template

# Create a blueprint
home_blueprint = Blueprint('home', __name__)

# Define the route within the blueprint
@home_blueprint.route("/")
def home():
    return render_template("index.html")
