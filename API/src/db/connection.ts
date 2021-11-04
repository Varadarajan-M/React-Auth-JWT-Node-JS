import { connect, connection } from 'mongoose';

const connectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
};

const connectDb = () => {
	connect('mongodb://localhost:27017/jwtDb', connectionOptions);
	connection.on('connected', () => {
		console.log('connected to database');
	});
};

export default connectDb;
