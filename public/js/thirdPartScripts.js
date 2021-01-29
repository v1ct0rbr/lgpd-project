(()=>{

    const allowedScripts =  JSON.parse(localStorage.acceptedLocalData);
    if(allowedScripts.functionality == 'accepted'){
        console.log("executando scripts de funcionalidade")
        //Your code here
    }
    if(allowedScripts.publicity == 'accepted'){
        console.log("executando scripts de publicidade")
        //Your code here
    }
    if(allowedScripts.performance == 'accepted'){
        console.log("executando scripts de desempenho")
        //Your code here
    }
    if(allowedScripts.social == 'accepted'){
        console.log("executando scripts de redes sociais")
        //Your code here
    }
})()