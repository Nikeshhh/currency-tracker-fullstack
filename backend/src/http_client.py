from aiohttp import ClientSession
from async_lru import alru_cache
from src.config import settings


class CMCHttpClient:
    base_url: str = 'https://pro-api.coinmarketcap.com'
    api_key: str

    def __init__(self) -> None:
        self.api_key = settings.TRACKER_API_KEY
        self._session = ClientSession(
            base_url=self.base_url,
            headers={
                'X-CMC_PRO_API_KEY': self.api_key
            }
        )

    @alru_cache
    async def get_currencies_list(self):
        async with self._session.get('/v1/cryptocurrency/listings/latest') as response:
            response_data = await response.json()
            return response_data.get('data')

    @alru_cache
    async def get_currency(self, currency_id: int):
        async with self._session.get('/v2/cryptocurrency/quotes/latest',
                        params={'id': currency_id}) as response:
            response_data = await response.json()
            return response_data.get('data').get(str(currency_id))