export const getjwt = () => {
    
    let toreturn = false;


    if(sessionStorage.getItem('accessToken')!=='not authenticated')
        toreturn =  true;
    else
        toreturn =  false;

   return toreturn;     
}