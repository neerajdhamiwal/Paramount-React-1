export const apiUrl = 'http://paramount.opensenselabs.com';
export const UserName = 'sahil.s';
export const Pass = 'System123#';
export const jsonMiddleware = (json)=> {
    let customJson = {};
    json.forEach((obj)=> {
        if(customJson.hasOwnProperty(obj.paragraph_id)){
            customJson[obj.paragraph_id].push(obj);
        }else{
            customJson[obj.paragraph_id] = [];
            customJson[obj.paragraph_id].push(obj);
        }
    })
}

