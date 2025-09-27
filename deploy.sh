#!/bin/bash

echo "🚀 Развертывание сайта на Firebase Hosting..."

# Сборка проекта
echo "📦 Сборка проекта..."
npm run build

# Проверка, что сборка прошла успешно
if [ $? -ne 0 ]; then
    echo "❌ Ошибка при сборке проекта"
    exit 1
fi

echo "✅ Проект успешно собран"

# Развертывание на Firebase
echo "🌐 Развертывание на Firebase..."
firebase deploy --only hosting

if [ $? -eq 0 ]; then
    echo "✅ Сайт успешно развернут на Firebase Hosting!"
    echo "🔗 Ваш сайт доступен по адресам:"
    echo "   - https://khakanadev.web.app"
    echo "   - https://khakanadev.firebaseapp.com"
    echo ""
    echo "🌐 Для настройки кастомного домена khakanadev.ru:"
    echo "   1. Перейдите в Firebase Console"
    echo "   2. Выберите проект 'khakanadev'"
    echo "   3. Перейдите в раздел 'Hosting'"
    echo "   4. Нажмите 'Add custom domain'"
    echo "   5. Введите 'khakanadev.ru'"
else
    echo "❌ Ошибка при развертывании"
    exit 1
fi
