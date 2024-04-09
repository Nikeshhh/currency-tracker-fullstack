from fastapi import FastAPI
from src.router import router as currency_router

app = FastAPI()

app.include_router(currency_router)