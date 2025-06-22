import { auth } from "@clerk/nextjs/server";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }


        if(!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        const response = await axios.post(
            "https://api.together.xyz/v1/chat/completions",
            {
                model: "meta-llama/Llama-3-8b-chat-hf",
                messages: messages,
            },
            {
                headers: {
                "Authorization": `Bearer ${process.env.TOGETHER_API_KEY}`,
                "Content-Type": "application/json",
                },
            }
        );

        return NextResponse.json(response.data.choices[0].message);

    } catch (error) {
        console.log("[CONVERSATION_POST]", error);
        
    
        return new NextResponse("Internal Server Error", {status : 500})
    }
}