import {type NextRequest} from "next/server"
import { comments } from "./data";

// For searching for a query in NextJs and for Getting the Data
export async function GET(request:NextRequest){
    const search = request.nextUrl.searchParams;
    const query = search.get("query");
    const filtered = query?comments.filter(comment=>comment.text.includes(query)):comments
    return Response.json(filtered);
}

// For positing a query in NextJS
export async function POST(request:Request){
    const com = await request.json();
    const newc = {
        id : comments.length+1,
        text : com.text,
    }
    comments.push(newc);
    return Response.json(JSON.stringify(newc));
}