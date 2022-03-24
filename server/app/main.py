from fastapi import FastAPI
from .routers import users


app = FastAPI(docs_url="/api/docs", openapi_url="/api")


app.include_router(users.router)
