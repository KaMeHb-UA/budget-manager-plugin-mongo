export default () => ({
    name: 'mongo',
    hooks: [
        'db_get',
        'db_add',
        'db_update',
    ],
})
