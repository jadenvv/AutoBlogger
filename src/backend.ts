import { express } from express;
const app = express();
const port = 4040;
app.post("/push", (req: Request, res: Response) => {
  console.log("i am alive haha")


})


export default app; 
