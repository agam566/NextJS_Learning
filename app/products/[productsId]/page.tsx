
export default async function product({params} : {params : Promise<{slug : string}>}) {
    const item = (await params).slug;
    return (<><h1>First : {item}</h1></>);
}