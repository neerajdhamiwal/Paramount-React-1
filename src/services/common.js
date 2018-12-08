export const apiUrl = 'http://paramount.opensenselabs.com';
export const UserName = 'sahil.s';
export const Pass = 'System123#';
export const jsonMiddleware = (json, ids)=> {
    let customJson = {};
    let uniqueArray = [];
    let customJsonJson = {};
    ids.forEach((idType) => {
        json.forEach((obj)=> {
            if(customJson.hasOwnProperty(obj[idType])){

            }else{
                customJson[obj[idType]] ={};
                customJson[obj[idType]] = obj;
                uniqueArray.push(obj);
            }
        })
        customJsonJson[idType] = []
        customJsonJson[idType].push(uniqueArray)
        customJson = {};
        uniqueArray=[];
    })
    console.log('customJsonJson', customJsonJson)
    return customJsonJson;
}
export const decodeUri = (uri)=> {
    return decodeURIComponent(uri).replace(' ','');
}

