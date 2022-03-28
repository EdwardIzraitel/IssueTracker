from .mongo_client import userCollection


def create_user(user: dict):
    if get_user(user['username']):
        return False
    result = userCollection.insert_one(
        {"username": user['username'].lower(),
         "hashed_password": user['hashed_password'],
         "first_name": user['first_name'],
         "last_name": user['last_name'],
         "role": user['role']})
    return True


# gets user from DB
def get_user(username: str):
    # 2nd parameter is projects which omits _id
    result = userCollection.find_one(
        {"username": username.lower()}, {"_id": 0})
    return result
