from pydantic import BaseModel


class User(BaseModel):
    username: str
    hashed_password: str
    first_name: str
    last_name: str
    role: str
