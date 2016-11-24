var env = process.env.NODE_ENV || 'development';

if (env === 'production' || env === 'development')
	url = process.env.MONGODB_URI;
else if (env ==='test')
	// UPDATE DB NAME HERE.
	url = 'mongodb://localhost:27017/dbname_test';

module.exports = url