from pymongo import MongoClient

MONGO_URI = "mongodb+srv://pushpanjalshukla_db_user:EkJAIdNB0OXSNd5m@cluster0.vvhqf2s.mongodb.net/?appName=Cluster0"

client = MongoClient(MONGO_URI)

db = client["skillsetu"]

users_collection = db["users"]
jobs_collection = db["jobs"]