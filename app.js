const axios = require('axios')
const {classes,timeTable}=require('./data')
const http = require('http')

if(process.env.BASEURL==undefined || process.env.CHATID==undefined)
{
    console.log(`environment variables missing!! closing application!`)
    process.exit(-1)
}

// const server = http.createServer((req,res)=>{
//     console.log('response sent to server')
//     res.end('working');
// })

const baseUrl=process.env.BASEURL
const chatId=process.env.CHATID
// const port = process.env.PORT || 5000

console.log("app started")

let message="app has started!!"
let sendText='text='+message
let fullMessage=baseUrl+'/sendMessage?'+chatId+'&'+sendText;

try{
    axios.get(fullMessage)
    .then( (res) => {
    console.log('sent to telegram')
})
}
catch(err)
{
    console.log(err);
}

let dt=new Date()
let repeat = 15000

setInterval(()=>{
    dt=new Date()
    console.log(dt.getUTCDay(),dt.getUTCHours(),dt.getUTCMinutes(),dt.getUTCDate())
    // console.log(dt.getDay(),dt.getHours(),dt.getMinutes(),dt.getDate())
    for(let day in timeTable)
    {
        // console.log(day);
        if(dt.getDay()==Number(day))
        {
            for(let clas in timeTable[day])
            {
                // console.log(clas);

                let curMin=dt.getUTCHours()*60+dt.getUTCMinutes();
                let claMin=Number(timeTable[day][clas].split(':')[0])*60+Number(timeTable[day][clas].split(':')[1])
                curMin=(curMin+330)%1440; // 5:30 adding to UTC to convert 
                // console.log(curMin,claMin)
                if(curMin==claMin)
                // if(dt.getHours()==Number(timeTable[day][clas].split(':')[0]) && dt.getMinutes()==Number(timeTable[day][clas].split(':')[1]))
                {
                    // console.log(dt.getHours(),dt.getMinutes())
                    for(let sub in classes)
                    {
                        // console.log(sub);
                        if(classes[sub]['subcode']==clas)
                        {
                            message=classes[sub]['sub']+' at '+classes[sub]['link']
                            sendText='text='+message
                            fullMessage=baseUrl+'/sendMessage?'+chatId+'&'+sendText;
                            // console.log(fullMessage)
                            try{
                                axios.get(fullMessage)
                                .then( (res) => {
                                console.log('sent to telegram')
                            })
                            }
                            catch(err)
                            {
                                console.log(err);
                            }
                        }
                    }
                }
            }
            
        }
    }
},repeat)

// server.listen(port);