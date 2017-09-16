import axios from 'axios'
const model = {

    getProgram(startDate, endDate, systemName, apkVersion) {
     
       
        return axios.get('http://172.29.2.58:8000/vr/bianalysis/videoProgram?startDate='+ startDate +'&endDate=' + endDate +'&systemName=' +systemName +  '&apkVersion='+ apkVersion);
    } ,
    getBroadcast (){
        //  return axios.get('http://172.29.2.58:8000/vr/bianalysis/videoProgram?startDate='+ startDate +'&endDate=' + endDate +'&systemName=' +systemName +  '&apkVersion='+ apkVersion);
    },
    getTopic (){
        // return axios.get('http://172.29.2.58:8000/vr/bianalysis/videoProgram?startDate='+ startDate +'&endDate=' + endDate +'&systemName=' +systemName +  '&apkVersion='+ apkVersion);
    },
    getBage(){
        return axios.get();
    }

}



// getAuth () {
//     var time = Date.now()
//     var sign1='device_id=Commentary_device&model=Commentary_model&timestamp='+ time; //     var sign2=sign1+'SHOW_SNAILVR_AUTHENTICATION';5
//     var sign3=md5(sign2);
//     return axios.get("http://showapi.snailvr.com/user/guest_auth?device_id=Commentary_device&model=Commentary_model" +  "&sign=" + sign3 + "&timestamp=" + time+ '&domain')
// }
export default model  