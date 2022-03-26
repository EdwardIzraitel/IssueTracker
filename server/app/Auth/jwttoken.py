from fastapi import status
from jose import jwt
from database.database import get_user
from exceptions.errors import Error

SECRET_KEY = "xFw2mZV3/FjdZX9NgrniHOdMaCzsFu9UcSFimGDNvw0"
ALGORITHM = "HS256"


def create_access_token(user: dict):
    return jwt.encode(user, SECRET_KEY, algorithm=ALGORITHM)


def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=ALGORITHM)
        user = get_user(payload.get('email'))
        return user
    except:
        Error.throw_error("Could not validate credentials",
                          status.HTTP_401_UNAUTHORIZED)
