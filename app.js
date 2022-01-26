const axios = require('axios')
const {classes,timeTable}=require('./data')

if(process.env.BASEURL==undefined || process.env.CHATID==undefined)
{
    console.log(`environment variables missing!! closing application!`)
    process.exit(-1)
}

const baseUrl=process.env.BASEURL
const chatId=process.env.CHATID

let dt=new Date()

let repeat = 20000

setInterval(()=>{
    dt=new Date()
    // console.log(dt.getDay(),dt.getHours(),dt.getMinutes(),dt.getDate())
    for(let day in timeTable)
    {
        if(dt.getDay()==Number(day))
        {
            for(let clas in timeTable[day])
            {
                if(dt.getHours()==Number(timeTable[day][clas].split(':')[0]) && dt.getMinutes()==Number(timeTable[day][clas].split(':')[1]))
                {
                    // console.log(dt.getHours(),dt.getMinutes())
                    for(let sub in classes)
                    {
                        if(classes[sub]['subcode']==clas)
                        {
                            message=classes[sub]['sub']+' at '+classes[sub]['link']
                            sendText='text='+message
                            axios.get(baseUrl+'/sendMessage?'+chatId+'&'+sendText)
                            .then( (res) => {
                            // console.log('sent')
                            })
                        }
                    }
                }
            }
            
        }
    }
},repeat)