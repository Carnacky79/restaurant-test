exports.seed = (knex) => {
    // Deletes ALL existing entries
    return knex('table').del()
        .then(() => {
            // Inserts seed entries
            return knex('table').insert([
                { number: 1, capacity: 4 },
                { number: 2, capacity: 4 },
                { number: 3, capacity: 4 },
                { number: 4, capacity: 4 },
                { number: 5, capacity: 4 },
            ]);
        });
};