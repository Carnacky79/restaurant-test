module.exports = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'reservations'
    },
    migrations: {
        directory: __dirname + '/migrations'
    },
    seeds: {
        directory: __dirname + '/seeds'
    }
};