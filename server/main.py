from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import user_auth
import uvicorn

app = FastAPI(docs_url="/api/docs", openapi_url="/api")
origins = ["http://localhost",
           "http://localhost:3000",
           "*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_auth.router)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", reload=True, port=8008)
