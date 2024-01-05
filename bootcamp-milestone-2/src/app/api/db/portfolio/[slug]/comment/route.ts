import connectDB from "@/helpers/db";
import { NextRequest, NextResponse } from 'next/server'
import projectSchema from "@/database/projectSchema";

export type IParams = {
    params: {
        slug: string;
    };
};

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB();

    const comment = await req.json();

    // input validation
    if (!comment) {
        return NextResponse.json("No Body in JSON Req", {status: 400});
    }
    const ProjSlug = {slug: params.slug};

    // post comment body
    try {
        const proj = await projectSchema.findOneAndUpdate(ProjSlug, {
            $push: {
                comments: {
                    user: comment.user,
                    comment: comment.comment,
                    time: new Date(),
                }
            },
        });
        return NextResponse.json(proj);
    } catch (err) {
        return NextResponse.json("Project not found.", { status: 404 });
    }
}