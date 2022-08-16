# README
- To rebuild node_modules
    - `npm install`

- To run app:
    - `npm run dev`

## Endpoints:
- To get users:
    - GET: /api/users

- To get one user:
    - GET: /api/users/:id

- To insert a user:
    - POST: /api/users/
    - Body(json): 
    ~~~
    {
        "name": "Sergio Andrés",
        "email": "email@email.com" 
    }
    ~~~

- To update a user:
    - PUT: /api/users/:id
    - Body(json): 
    ~~~
    {
        "name": "Sergio Andrés",
        "email": "email@email.com" 
    }
    ~~~
- To delete a user:
    - DELETE: /api/users/:id

## Database:
~~~
CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `index_unique_users_email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;
~~~