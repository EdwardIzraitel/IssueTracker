from pymongo import MongoClient
client = MongoClient(
    "mongodb+srv://edward:3OmZ4nsAYXeUFeN4@cluster0.rh30y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.prod
userCollection = db["users"]


def create_user(user: dict):
    if get_user(user['email']):
        return False
    result = userCollection.insert_one(
        {"email": user['email'].lower(),
         "hashed_password": user['hashed_password'],
         "first_name": user['first_name'],
         "last_name": user['last_name'],
         "role": user['role']})
    return True


# gets user from DB
def get_user(email: str):
    # 2nd parameter is projects which omits _id
    result = userCollection.find_one({"email": email.lower()}, {"_id": 0})
    return result
