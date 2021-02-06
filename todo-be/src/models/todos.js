import {Schema} from "mongoose";

const todoSchema = new Schema({
    id: Number,
    description: String
})

const todosSchema = new Schema({
    heading: String,
    date: Date,
    tasks: [todoSchema]
});

export default todosSchema;