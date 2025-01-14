import {comments} from "../data";

export async function GET(_request:Request,{params}:{params:{id:string}}){
    const com = comments.find((com)=>com.id===parseInt(params.id));
    return Response.json(com);
}

export async function PATCH(request:Request,{params}:{params:{id:string}}){
    const body = await request.json();
    const{text} = body;
    const com = comments.findIndex((com)=>com.id===parseInt(params.id));
    comments[com].text = text;
    return Response.json(com);
}