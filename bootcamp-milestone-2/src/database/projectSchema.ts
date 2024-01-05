import mongoose from "mongoose";
import { Schema } from "mongoose";
import { IComment } from "./blogSchema";

// typescript type (can also be an interface)
export interface ProjectData {
    name: string;
    slug: string; 
    date: string;
    image: string;
    content: string;
    comments: IComment[];
  }


// mongoose schema 
const projectSchema = new Schema<ProjectData>({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: String, required: true},
    image: { type: String, required: true },
    content: { type: String, required: true },
    comments: {
      user: {type: String, required: true},
      comment: {type: String, required: true},
      time: {type: Date, required: false, default: new Date()}
        }
    }
)

// defining the collection and model
const ProjectModel = mongoose.models['projects'] ||
    mongoose.model('projects', projectSchema);

export default ProjectModel;