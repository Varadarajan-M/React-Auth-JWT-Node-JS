import { connect, connection } from 'mongoose';

const connectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
};

const connectDb = () => {
	connect(process.env.MONGO_URI as string, connectionOptions);
	connection.on('connected', () => {
		console.log('connected to database');
	});
};

export default connectDb;
