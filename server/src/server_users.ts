import express, { request, response } from 'express';

// npm install @types/express -D
// npm install ts-node -D
// npm install typescript -D
//Cria o tsconfig.json:
// npx tsc --init
//Inicia o servidor:
// npx ts-node src/server.ts
// npm install ts-node-dev -D
// npx ts-node-dev src/server.ts
//Passar para o package.json e usar npm start

// KNEX.JS SQL unificado para todos os tipos de banco SQL.
//SELECT * FROM users WHERE name = 'Diego'
//knex('users').where('name', 'Diego').select('*');

const app = express();

app.use(express.json());

const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
];

app.get('/users', (request, response)  => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

app.listen(3333);