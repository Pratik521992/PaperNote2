export const getjwt = () => {
    
    let toreturn = false;


    if(sessionStorage.getItem('accessToken'))
        toreturn =  true;
    else
        toreturn =  false;

   return toreturn;     
}