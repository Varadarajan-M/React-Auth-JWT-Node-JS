import mongoose, { Schema } from 'mongoose';

const dataSchemaOptions = {
	secret: { required: true, type: String },
	userId: {
		type: String,
	},
};

const DataSchema = new Schema(dataSchemaOptions);
const Data = mongoose.model('Data', DataSchema, 'Data');

export default Data;
