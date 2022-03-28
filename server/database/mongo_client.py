from pymongo import MongoClient
from env.variables import MONGOSERVER
client = MongoClient(MONGOSERVER)
db = client.prod
userCollection = db["users"]
