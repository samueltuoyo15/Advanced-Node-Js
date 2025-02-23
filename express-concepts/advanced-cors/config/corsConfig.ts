import cors from "cors"

const corsConfig = () => {
  return cors({
    origin: (origin, callback) => {
      const allowedOrigins = ["http://localhost:3000"]
      
      if(!origin || allowedOrigins.indexOf(origin) !== -1){
        callback(null, true)
      } else{
        callback(new Error("Sorry your origin is whitelisted from using our api"))
      }
    },
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"],
    exposedHeaders: ["X-Total-Count", "Content-Range"],
    credentials: true,
    preflightContinue: false,
    maxAge: 600,
    optionSuccessStatus: 204
  })
}

