# Инструкции по развертыванию на Firebase Hosting

## ✅ Проект "khakanadev" уже создан в Firebase Console!

## Шаги для развертывания:

### 1. Войдите в Firebase CLI
Выполните в терминале:
```bash
firebase login
```
- Откроется браузер для авторизации
- Войдите в свой Google аккаунт
- Разрешите доступ Firebase CLI

### 2. Инициализируйте Hosting
```bash
firebase init hosting
```
**Важные настройки:**
- ✅ Выберите проект: `khakanadev` (уже создан)
- ✅ Выберите `dist` как публичную директорию
- ✅ Настройте как SPA (Single Page Application) - выберите "Yes"
- ✅ Не перезаписывайте index.html - выберите "No"

### 3. Разверните сайт
```bash
firebase deploy --only hosting
```

После развертывания ваш сайт будет доступен по адресу:
- `https://khakanadev.web.app`
- `https://khakanadev.firebaseapp.com`

### 4. Настройте кастомный домен khakanadev.ru
1. Перейдите в [Firebase Console](https://console.firebase.google.com/)
2. Выберите проект "khakanadev"
3. В левом меню выберите "Hosting"
4. Нажмите "Add custom domain"
5. Введите `khakanadev.ru`
6. Следуйте инструкциям для настройки DNS

### 5. Настройка DNS для домена khakanadev.ru
Firebase предоставит вам точные DNS записи после добавления домена. Обычно это:

1. **A записи** для корневого домена
2. **CNAME запись** для www поддомена

После настройки DNS подождите 5-10 минут для распространения изменений.

## 🚀 Быстрое развертывание:
```bash
# 1. Войти в Firebase
firebase login

# 2. Инициализировать (только один раз)
firebase init hosting

# 3. Развернуть
firebase deploy --only hosting
```

## Готовые файлы конфигурации:
- ✅ `firebase.json` - конфигурация Firebase Hosting
- ✅ `.firebaserc` - настроен на проект "khakanadev"
- ✅ `dist/` - собранные файлы для развертывания
- ✅ `deploy.sh` - скрипт автоматического развертывания
