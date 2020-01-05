const mysql = require('mysql')

const connectDB = async () => {
	try{
		await mysql.createConnection ({
    		host: 'localhost',
    		user: 'root',
    		password: '',
    		database: 'documate_battleship'
    	})
    	console.log('DB Connected...')
    }catch (err){
    	console.error(err.message)
    	process.exit(1)
    }
};

module.exports = connectDB