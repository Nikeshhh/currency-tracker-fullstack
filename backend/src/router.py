from fastapi import APIRouter
from src.setup import cmc_client

router = APIRouter(
    prefix='/currencies'
)

@router.get('')
async def get_currencies_list():
    return await cmc_client.get_currencies_list()

@router.get('{currency_id}')
async def get_currency(currency_id: int):
    return await cmc_client.get_currency(currency_id)
