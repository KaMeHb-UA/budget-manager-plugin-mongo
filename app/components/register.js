export default () => ({
    name: 'inmemory-db',
    hooks: [
        'db_get',
        'db_add',
        'db_update',
    ],
})
