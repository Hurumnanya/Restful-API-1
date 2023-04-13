const app = require('expressjs');

const NodejsTutorialApp = express();
const port = 4000;

NodejsTutorialApp.get('/', (req, res)=> {
    return res.send("Hello Backend Stundents");
});

NodejsTutorialApp.get("/user",(req, res)=>{
    res.json({
        "name": "Chihurumnanya",
        "age": 22,
        "sex": "Female"
    })
})

NodejsTutorialApp.listen(4000, function(){
    console.log("The server is listening on port 3000");
})

