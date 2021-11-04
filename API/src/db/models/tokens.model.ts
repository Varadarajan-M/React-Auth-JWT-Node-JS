import mongoose, { Schema } from 'mongoose';
const tokenSchemaOptions = {
    token : { type : String , required : true}
};
const tokenSchema = new Schema(tokenSchemaOptions);
const Token = mongoose.model('Token', tokenSchema, 'BlackListed Tokens');

export default Token;
