//Depsitarea tipului de device pe care rulează aplicți
//Check the device
function getFullCheck(){
    const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    //return "tablet";
    console.log("tablet");
  }else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    //return "mobile";
    console.log("mobile");
    }else{
        console.log("desktop");
    }
    //return "desktop";
}