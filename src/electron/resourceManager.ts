import osUtils from 'os-utils';

const POLLING_INTERVAL = 1000;

export function PollResources(){
    
    setInterval(()=>{
        getCpuUsage()
    },POLLING_INTERVAL);
    
}

function getCpuUsage(){
   osUtils.cpuUsage((percentage)=>console.log(percentage));
}
