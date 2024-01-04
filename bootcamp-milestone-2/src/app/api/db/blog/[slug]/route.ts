
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import blogSchema from '@/database/blogSchema'

export type IParams = {
		params: {
			slug: string;
		};
    };


export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB();
    const { slug } = params;

    try {  
        console.log("slug: " + slug);
        const blog = await blogSchema.findOne({ slug }).orFail();
        return NextResponse.json(blog);
    } catch (err) {
        return NextResponse.json({ error: 'Blog not found.' }, { status: 404 });
    }
}

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB();

    const comment = await req.json();

    // input validation
    if (!comment) {
        return NextResponse.json("No Body in JSON Req", {status: 400});
    }
    const BlogSlug = {slug: params.slug};

    // post comment body
    try {
        const blog = await blogSchema.findOneAndUpdate(BlogSlug, {
            $push: {
                comments: comment,
            },
        });
        return NextResponse.json(blog);
    } catch (err) {
        return NextResponse.json("Blog not found.", { status: 404 });
    }
}
	  
