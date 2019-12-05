const result=require('./my_modules/logger')
const csvJson=require('./my_modules/csvtojson')


// setTimeout(()=>{
//     result.info('Ha! Just Kidding.. Everything is running fine...') ;

//     setTimeout(()=>{
//         result.warning("But be carefully how you go about");
//     },1000);

//     setTimeout(()=>{
//         result.success("running your processes..");
//     },1500);

// },1500);


function printMessages(cb){
    result.welcome();
    result.danger("Oops! Something went wrong....");

    setTimeout(()=>{
        result.info('Ha! Just Kidding.. Everything is running fine...') 
        cb();
    },2000)
}

printMessages(()=>{

    result.warning("But be carefully how you go about");

    result.success("Converting csv file to Json...");

    csvJson.convert("./students.csv")
});    