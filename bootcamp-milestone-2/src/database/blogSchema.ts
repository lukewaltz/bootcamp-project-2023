import mongoose, { ObjectId } from "mongoose";
import { Schema } from "mongoose";

export type IComment = {
    user: string;
    comment: string;
    time: Date;
}

// typescript type (can also be an interface)
export interface BlogData {
    name: string;
    slug: string; 
    date: Date;
    image: string;
    description: string; // for preview
    text: string; // for individual blog page
    comments: IComment[]; // array for comments
};


// mongoose schema 
const blogSchema = new Schema<BlogData>({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    image: { type: String, required: true },
    description: { type: String, required: true },
    text: { type: String, required: true },
    comments: {
      user: {type: String, required: true},
      comment: {type: String, required: true},
      time: {type: Date, required: false, default: new Date()}
    }
}
)

// defining the collection and model
const BlogModel = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default BlogModel;