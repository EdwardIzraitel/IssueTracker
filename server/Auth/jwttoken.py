from fastapi import status
from jose import jwt
from database.users import get_user
from env.variables import SECRET_KEY, ALGORITHM
from exceptions.errors import Error


def create_access_token(user: dict):
    return jwt.encode(user, SECRET_KEY, algorithm=ALGORITHM)


def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=ALGORITHM)
        user = get_user(payload.get('username'))
        user.pop('hashed_password')
        return True
    except:
        return False
        # return Error.throw_error("Auth failed",
        #                          status.HTTP_404_NOT_FOUND)
