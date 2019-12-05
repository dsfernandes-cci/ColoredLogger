const csv=require('csvtojson')


convert=(csv_path)=>{
    csv()
    .fromFile(csv_path)
    .then((jsonObj)=>{
        console.log(jsonObj);
    })
}

module.exports={
    convert,
}