# express-auth
Авторизация с использованием Express, PostgreSQL, JWT

команды:
- npm run start - режим просмотра

Пример .env
```
DB_USER="postgres"(ваш Логин для бд)
DB_PASSWORD="qwerty123"(ваш пароль для бд)
DB_HOST="localhost"(дефолтное значение)
DB_PORT=5432(дефолтное значение для постгрес бд)
DB_NAME="наименование бд"
PORT=8000(порт для запуска api)
SECRET="SECRET_KEY_RANDOM"(КОДОВОЕ СЛОВО ДЛЯ КОДИРОВКИ ПАРОЛЯ
TIME_TOKEN="24h"(ВРЕМЯ ДЕЙСТВИТЕЛЬНОСТИ СГЕНЕРИРОВАНОГО ТОКЕНА)
```
