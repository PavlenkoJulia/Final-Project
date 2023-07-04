import React from "react";

    export const CardsData = [
        {
            id: 1,
            selected: true,
            header: 'Beginner',
            description: 'Для небольшого исследования',
            newPrice: '799 ₽',
            oldPrice: '1 200 ₽',
            priceInfo: 'или 150 ₽/мес. при рассрочке на 24 мес.',
            options: [
                'Безлимитная история запросов',
                'Безопасная сделка',
                'Поддержка 24/7'
            ]
        },

        {
            id: 2,
            selected: false,
            header: 'Pro',
            description: 'Для HR и фрилансеров',
            newPrice: '1 299 ₽',
            oldPrice: '2 600 ₽',
            priceInfo: 'или 279 ₽/мес. при рассрочке на 24 мес.',
            options: [
                'Все пункты тарифа Beginner',
                'Экспорт истории',
                'Рекомендации по приоритетам'
            ]
        },

        {
            id: 3,
            selected: false,
            header: 'Business',
            description: 'Для корпоративных клиентов',
            newPrice: '2 379 ₽',
            oldPrice: '3 700 ₽',
            options: [
                'Все пункты тарифа Pro',
                'Безлимитное количество запросов',
                'Приоритетная поддержка'
            ]
        }
    ]