const { db } = require('./.env')

module.exports = {
	client: 'mysql',
	connection: db,
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'migrations'
	}
};
