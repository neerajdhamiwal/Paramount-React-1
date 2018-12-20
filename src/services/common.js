import requestService from './request';


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
        if(notEmpty && json.length>0){
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
export const urlString={
    "/about-paramount": 35,
    "/about-paramount/community": 46,
    "/about-paramount/awards-and-certifications": 33,
    "/services/paramount-edge": 24,
    "/services/paramount-tech-exec": 39,
    "/services/paramounttechadvisory/cms-and-app-development": 47,
    "/services/paramounttechadvisory/application-maintenance-development-integration": 48,
    "/services/paramounttechadvisory/infrastructuremanagement-and-monitoring": 49,
    "/expertise": 38,
    "/expertise/technologies": 45,
    "/expertise/government-solutions": 52,
    "/contact": 51
}
export const Auth = {
    username : 'sahil.s',
    password : 'password System123#'
}
export const imgPath = (data)=> {
    if(data){
        if (data.includes('img')) {
            const expression = /src="/g;
            let match;
            if(match = expression.exec(data)) {
                data = data.slice(0, match.index) + 'src="http://paramount.opensenselabs.com' + data.slice(match.index + 5);
                return data;
            }

        }
        else{
            return data;
        }
    }
}
export const getMeta = (nid, cb)=> {
    requestService.getService(`/json-data/${nid}`)
        .then((response) => {
            let meta =   {
                title: response.data.value.title,
                description: response.data.value.description,
                canonical: response.data.value.canonical_url,
                meta: {
                    name: {
                        keywords: response.data.value.keywords
                    }
                }
            };
            cb(meta);
        })
        .catch((err) => {
            console.log(err);
        })
}


