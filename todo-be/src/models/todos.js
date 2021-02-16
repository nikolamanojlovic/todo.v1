import {Schema} from "mongoose";

const todoSchema = new Schema({
    id: Number,
    description: String,
    completed: Boolean
})

const todosSchema = new Schema({
    id: Number,
    headline: String,
    date: Date,
    tasks: [todoSchema]
});

export default todosSchema;