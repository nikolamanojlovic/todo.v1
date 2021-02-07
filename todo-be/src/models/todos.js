import {Schema} from "mongoose";

const todoSchema = new Schema({
    id: Number,
    description: String,
    completed: Boolean
})

const todosSchema = new Schema({
    id: Number,
    heading: String,
    date: Date,
    tasks: [todoSchema]
});

export default todosSchema;