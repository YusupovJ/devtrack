# Прогресс разработки DevTrack

## Описание продукта и дизайн

DevTrack — таск-трекер для команд и разработчиков (в стиле Linear / Todoist). Макеты лежат в `docs/design/` (`landing.pdf`, `dashboard.pdf`, `auth.pdf`).

- **Ключевые фичи по дизайну:**
  - Виды: Список (с группировкой Просрочено / Сегодня / Выполнено), Доска (Канбан), Календарь, Таймлайн.
  - Карточка задачи: код (`CA-42`), приоритеты (`!!! Срочно`, `!! Важно`, `! Обычно`, без отметки), статусы (`Очередь`, `В работе`, `На проверке`, `Готово`), дедлайн, проект, теги, подзадачи, связи (`блокирует`), вложения и комментарии.
  - Быстрый ввод с парсингом строки (`Созвон завтра !! #сайт @аня`), палитра команд (`Cmd+K`), массовые действия, офлайн-очередь и разрешение конфликтов версий.
  - Auth & Workspace: JWT + OAuth (Google/GitHub/Apple), 2FA (QR TOTP + резервные коды), Passkeys, активные сессии, роли (Владелец, Админ, Участник, Гость), API-ключи, вебхуки и аудит-лог.

## Что уже сделано

- **Backend (`api/`):** Поднят PostgreSQL в Docker, настроен `TypeOrmConfigService`, создан `UserModule` и сущность `User`.
- **Frontend (`frontend/`):** Инициализирован Vite + React 19 + TS + oxlint. Заложена база FSD:
  - `app/App.tsx` -> `pages/MainPage.tsx` -> `widgets/task-list` -> `entities/task` (`ITask`, `TaskStateEnum`, `TaskItem`).

## Текущая задача (Этап 1: Ядро списка задач — в работе)

1. Определиться со стилизацией в `frontend/` (Tailwind CSS или CSS Modules).
2. Расширить `ITask` и `TaskStateEnum` в `entities/task/model/types.ts` под новый дизайн (статусы: `TODO`, `IN_PROGRESS`, `IN_REVIEW`, `COMPLETED`; добавить `priority` и `code`).
3. Перенести массив `tasksData` в `useState<ITask[]>(tasksData)` внутри `widgets/task-list/ui/TaskList.tsx`.
4. Реализовать иммутабельные функции `handleToggle(id: number)` и `handleDelete(id: number)` в `TaskList` и прокинуть их через пропсы в `TaskItem`.

## Дорожная карта (Следующие этапы)

- **Этап 2 (UI Дашборда и FSD):** Сайдбар навигации (`widgets/sidebar`), правая панель деталей задачи (`widgets/task-details`), быстрый ввод задачи (`features/create-task`), фильтрация и группировка.
- **Этап 3 (Связка с Backend):** `TaskModule` в NestJS, CRUD эндпоинты, подключение фронта через `TanStack Query`.
- **Этап 4 (Auth & Безопасность):** Регистрация/логин, JWT (Access/Refresh), 2FA, сессии, защита роутов.
- **Этап 5 (Продвинутые фичи):** Канбан-доска, палитра команд `Cmd+K`, роли и пространства, вебхуки, WebSockets и конфликты версий.
