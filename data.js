const classes =[
    {
        sub:'Image Processing',
        subcode:'IT307',
        link:'https://teams.microsoft.com/l/team/19%3aZbrW_gZmDp1BstQfPBIa_DRnWHHiEBLfgmEcL2nmyVc1%40thread.tacv2/conversations?groupId=27568898-3de0-40b3-8302-25d8e9487885&tenantId=12b4fbf9-dea8-4490-bede-9cc40309ad61'
    },
    {
        sub:'Image Processing Lab',
        subcode:'IT309',
        link:'https://teams.microsoft.com/l/team/19%3aQbLlQUk3hPf3XcFrjpGrYjW3f0XJrwrmED8TH60kFKQ1%40thread.tacv2/conversations?groupId=1473e889-cce4-4329-a5d0-b850d70c9f7c&tenantId=12b4fbf9-dea8-4490-bede-9cc40309ad61'
    },
    {
        sub:'Machine Learning',
        subcode:'IT340',
        link:'https://teams.microsoft.com/l/team/19%3a1iG08RQTAiiCHDjXye5c7ruSv91WSYKp9AUr2dY7yQU1%40thread.tacv2/conversations?groupId=597bb2cc-0cce-494d-aec9-d4fcaf7fa77e&tenantId=12b4fbf9-dea8-4490-bede-9cc40309ad61'
    },
    {
        sub:'Machine Learning Lab',
        subcode:'IT341',
        link:'https://teams.microsoft.com/l/team/19%3aZjvkAhdTKX8DUNKtgfsDJYxAzp7WsnSiQqdP4Y_ly3I1%40thread.tacv2/conversations?groupId=00335999-f6c4-460e-ad01-8d3ace412742&tenantId=12b4fbf9-dea8-4490-bede-9cc40309ad61'
    },
    {
        sub:'Software Engineering',
        subcode:'IT305',
        link:'https://teams.microsoft.com/l/team/19%3a4JQ9q8yQj_7fbouYSayOitTWdZOBR0MlET7q6fTUoxg1%40thread.tacv2/conversations?groupId=2bb7dcf0-5a10-47b6-bb1b-644740fb274f&tenantId=12b4fbf9-dea8-4490-bede-9cc40309ad61'
    },
    {
        sub:'Software Engineering Lab',
        subcode:'IT306',
        link:'https://teams.microsoft.com/l/team/19%3aMXAScxeE5E_tjMQKM5HseYiZe7d9tekHfRLVlY1zeYE1%40thread.tacv2/conversations?groupId=3da18eb4-4291-4501-ae2d-742c57fe18cb&tenantId=12b4fbf9-dea8-4490-bede-9cc40309ad61'
    },
    {
        sub:'Mobile Interfacing Lab',
        subcode:'CS308',
        link:'https://teams.microsoft.com/l/team/19%3aLFpvEDSTmve9knePuwGGPVVT_5kbeBaMQ-JsXiX7SaI1%40thread.tacv2/conversations?groupId=e48a764f-8c01-4299-9284-e4e7fecb00cf&tenantId=12b4fbf9-dea8-4490-bede-9cc40309ad61'
    },
    {
        sub:'German',
        subcode:'MT418',
        link:'https://teams.microsoft.com/l/team/19%3a7aDbV1tS7OezMaULR3AGA1Yw3wsZpZ2fXWI_nwOmZBM1%40thread.tacv2/conversations?groupId=7ba99d64-1548-46a2-a4b6-0ebd93ca17c5&tenantId=12b4fbf9-dea8-4490-bede-9cc40309ad61'
    },
    {
        sub:'Business Communication',
        subcode:'MT123',
        link:'https://teams.microsoft.com/l/team/19%3ajL8DxTpsXaE6D_wc32Tg3DHlYFTm3nw_1QB_vUOsKDY1%40thread.tacv2/conversations?groupId=07cf9fc2-6f58-4c60-b89c-4043347424c4&tenantId=12b4fbf9-dea8-4490-bede-9cc40309ad61'
    },
    {
        sub:'Constitution of India',
        subcode:'MT204',
        link:'https://teams.microsoft.com/l/team/19%3aXUgybX5Cu-R5GoUggxsOv0vQL_tCjZw9iVkrJshuroo1%40thread.tacv2/conversations?groupId=ded285ea-c93c-419c-8814-e2660e209f8a&tenantId=12b4fbf9-dea8-4490-bede-9cc40309ad61'
    },
    {
        sub:'dummy',
        subcode:'dummy',
        link:'dummy'
    }
]

const timeTable = {
    '1':{
        'IT309':'09:00',
        'MT204':'11:00',
        'IT309':'12:00',
        'IT305':'13:30'
    },
    '2':{
        'MT418':'09:00',
        'IT307':'10:00',
        'MT123':'12:00',
        'IT340':'13:30',
        'IT305':'14:30'
    },
    '3':{
        'MT418':'09:00',
        'MT204':'10:00',
        'IT340':'11:00',
        'IT307':'12:00',
        'CS308':'13:30',
    },
    '4':{
        'IT340':'12:00',
        'MT123':'13:30',
        'IT305':'14:30'
    },
    '5':{
        'MT418':'09:00',
        'IT306':'10:00',
        'IT341':'13:30',
        'dummy':'23:40'
    }
}

module.exports = {classes,timeTable}