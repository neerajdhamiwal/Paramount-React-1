export const apiUrl = 'http://paramount.opensenselabs.com';
export const UserName = 'sahil.s';
export const Pass = 'System123#';
export const jsonMiddleware = (json, ids)=> {
    let customJson = {};
    let uniqueArray = [];
    let customJsonJson = {};
    let notEmpty = true;
    ids.forEach((idType) => {
        json.forEach((obj)=> {
            if(obj[idType] !==''){
                notEmpty = true;
                if(customJson.hasOwnProperty(obj[idType])){

                }else{
                    customJson[obj[idType]] ={};
                    customJson[obj[idType]] = obj;
                    uniqueArray.push(obj);
                }
            }
            else{
                notEmpty = false;
            }
        })
        if(notEmpty){
            customJsonJson[idType] = []
            customJsonJson[idType].push(uniqueArray)
            customJson = {};
            uniqueArray=[];
        }
    })
    console.log('customJsonJson', customJsonJson)
    return customJsonJson;
}
export const decodeUri = (uri)=> {
    return decodeURIComponent(uri).replace(' ','');
}
export const  customDivideData = (data, part) =>{
    let headingData = [];
    let subarr = [];
    let dLen = data.length;
    data.forEach((obj, index) => {
        index = index+1;
        if(index%part === 0 ){
            subarr.push(obj);
            headingData.push(subarr)
            subarr = [];
        }
        else{
            subarr.push(obj);
            if( dLen == index){
                headingData.push(subarr)
            }
        }
    })
    return headingData;
}

