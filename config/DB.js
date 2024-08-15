const mongoose=require('mongoose')


mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL).then(()=>{
console.log('database connect successfully')}
).catch((err)=>{
console.log(err)
})