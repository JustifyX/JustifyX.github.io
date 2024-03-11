from flask import Flask
from routes import home_blueprint

app = Flask(__name__)

# Register the blueprint
app.register_blueprint(home_blueprint)

if __name__ == "__main__":
    app.run(debug=True)
