import mongoose, { Schema } from 'mongoose';
const userSchemaOptions = {
	email: String,
	password: String,
};
const UserSchema = new Schema(userSchemaOptions);
const User = mongoose.model('User', UserSchema, 'Users');

export default User;
