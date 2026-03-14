from flask import Flask, request, jsonify
import json
import uuid
from flask import Flask, request, jsonify
import json
import uuid
import google.genai as genai

app = Flask(__name__)

DATA_FILE = "workers.json"

# Configure Gemini with your API key
client = genai.Client(api_key="blue_collar")

# Load Gemini model (2.5 version)
# model = client.generative_model("gemini-2.5-flash")


# Utility functions
def load_data():
    try:
        with open(DATA_FILE, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return []


def save_data(data):
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=4)


@app.route("/")
def home():
    return "AI Career Guidance Backend Running"


# Add worker
@app.route("/add_worker", methods=["POST"])
def add_worker():
    data = load_data()

    if not request.json.get("name") or not request.json.get("profession"):
        return jsonify({"error": "Name and profession are required"}), 400

    worker = {
        "id": str(uuid.uuid4()),
        "name": request.json.get("name"),
        "profession": request.json.get("profession"),
        "experience": request.json.get("experience"),
        "location": request.json.get("location")
    }

    data.append(worker)
    save_data(data)

    return jsonify({"message": "Worker added successfully", "worker": worker})


# Get all workers (with optional filters)
@app.route("/workers", methods=["GET"])
def get_workers():
    data = load_data()
    profession = request.args.get("profession")
    location = request.args.get("location")

    if profession:
        data = [w for w in data if w["profession"].lower() == profession.lower()]
    if location:
        data = [w for w in data if w["location"].lower() == location.lower()]

    return jsonify(data)


# Update worker
@app.route("/update_worker/<worker_id>", methods=["PUT"])
def update_worker(worker_id):
    data = load_data()
    worker = next((w for w in data if w["id"] == worker_id), None)

    if not worker:
        return jsonify({"error": "Worker not found"}), 404

    worker["name"] = request.json.get("name", worker["name"])
    worker["profession"] = request.json.get("profession", worker["profession"])
    worker["experience"] = request.json.get("experience", worker["experience"])
    worker["location"] = request.json.get("location", worker["location"])

    save_data(data)
    return jsonify({"message": "Worker updated successfully", "worker": worker})


# Delete worker
@app.route("/delete_worker/<worker_id>", methods=["DELETE"])
def delete_worker(worker_id):
    data = load_data()
    worker = next((w for w in data if w["id"] == worker_id), None)

    if not worker:
        return jsonify({"error": "Worker not found"}), 404

    data.remove(worker)
    save_data(data)
    return jsonify({"message": "Worker deleted successfully"})


# AI-powered career guidance using Gemini
@app.route("/career_guidance", methods=["POST"])
def career_guidance():
    profession = request.json.get("profession")
    experience = request.json.get("experience", 0)
    location = request.json.get("location", "")

    # Build a dynamic prompt for Gemini
    prompt = (
        f"Suggest career paths, business opportunities, digital tools, "
        f"and training programs for a {experience}-year experienced {profession} "
        f"in {location}. Provide practical and modern recommendations."
    )

    # Generate AI response
    response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Suggest career paths for an electrician with 5 years of experience in Delhi."
)

    return jsonify({
        "profession": profession,
        "experience": experience,
        "location": location,
        "guidance": response.text
    })


if __name__ == "__main__":
    app.run(debug=True)


app = Flask(__name__)

DATA_FILE = "workers.json"

# Configure Gemini with your API key
genai.configure(api_key="AIzaSyDk3-bPVrlj0zC1gqHO1m0Vq0DU9S6X9tY")

# Load Gemini model (2.5 version)
model = genai.GenerativeModel("gemini-2.5-flash")


# Utility functions
def load_data():
    try:
        with open(DATA_FILE, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return []


def save_data(data):
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=4)


@app.route("/")
def home():
    return "AI Career Guidance Backend Running"


# Add worker
@app.route("/add_worker", methods=["POST"])
def add_worker():
    data = load_data()

    if not request.json.get("name") or not request.json.get("profession"):
        return jsonify({"error": "Name and profession are required"}), 400

    worker = {
        "id": str(uuid.uuid4()),
        "name": request.json.get("name"),
        "profession": request.json.get("profession"),
        "experience": request.json.get("experience"),
        "location": request.json.get("location")
    }

    data.append(worker)
    save_data(data)

    return jsonify({"message": "Worker added successfully", "worker": worker})


# Get all workers (with optional filters)
@app.route("/workers", methods=["GET"])
def get_workers():
    data = load_data()
    profession = request.args.get("profession")
    location = request.args.get("location")

    if profession:
        data = [w for w in data if w["profession"].lower() == profession.lower()]
    if location:
        data = [w for w in data if w["location"].lower() == location.lower()]

    return jsonify(data)


# Update worker
@app.route("/update_worker/<worker_id>", methods=["PUT"])
def update_worker(worker_id):
    data = load_data()
    worker = next((w for w in data if w["id"] == worker_id), None)

    if not worker:
        return jsonify({"error": "Worker not found"}), 404

    worker["name"] = request.json.get("name", worker["name"])
    worker["profession"] = request.json.get("profession", worker["profession"])
    worker["experience"] = request.json.get("experience", worker["experience"])
    worker["location"] = request.json.get("location", worker["location"])

    save_data(data)
    return jsonify({"message": "Worker updated successfully", "worker": worker})


# Delete worker
@app.route("/delete_worker/<worker_id>", methods=["DELETE"])
def delete_worker(worker_id):
    data = load_data()
    worker = next((w for w in data if w["id"] == worker_id), None)

    if not worker:
        return jsonify({"error": "Worker not found"}), 404

    data.remove(worker)
    save_data(data)
    return jsonify({"message": "Worker deleted successfully"})


# AI-powered career guidance using Gemini
@app.route("/career_guidance", methods=["POST"])
def career_guidance():
    profession = request.json.get("profession")
    experience = request.json.get("experience", 0)
    location = request.json.get("location", "")

    # Build a dynamic prompt for Gemini
    prompt = (
        f"Suggest career paths, business opportunities, digital tools, "
        f"and training programs for a {experience}-year experienced {profession} "
        f"in {location}. Provide practical and modern recommendations."
    )

    # Generate AI response
    response = model.generate_content(prompt)

    return jsonify({
        "profession": profession,
        "experience": experience,
        "location": location,
        "guidance": response.text
    })


if __name__ == "__main__":
    app.run(debug=True)