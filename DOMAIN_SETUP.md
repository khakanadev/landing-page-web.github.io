# Настройка кастомного домена khakanadev.ru

## Шаги для настройки домена:

### 1. Добавление домена в Firebase Console
1. Перейдите в [Firebase Console](https://console.firebase.google.com/)
2. Выберите ваш проект `khakanadev-landing`
3. В левом меню выберите "Hosting"
4. Нажмите "Add custom domain"
5. Введите `khakanadev.ru`
6. Нажмите "Continue"

### 2. Настройка DNS записей
Firebase предоставит вам DNS записи, которые нужно добавить в настройках вашего домена.

Обычно это:
- **A записи** для корневого домена
- **CNAME запись** для www поддомена

### 3. Проверка настройки
После добавления DNS записей:
1. Подождите 5-10 минут для распространения DNS
2. Проверьте статус в Firebase Console
3. Домен должен показать статус "Connected"

### 4. SSL сертификат
Firebase автоматически выдаст SSL сертификат для вашего домена через несколько минут после успешной настройки DNS.

## Полезные команды:

```bash
# Проверка статуса развертывания
firebase hosting:channel:list

# Просмотр логов
firebase hosting:channel:open

# Принудительное обновление кэша
firebase deploy --only hosting --force
```

## После настройки домена:
Ваш сайт будет доступен по адресам:
- https://khakanadev.ru
- https://www.khakanadev.ru
- https://khakanadev-landing.web.app (резервный адрес)
