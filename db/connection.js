

import mongoose from "mongoose";

function connection() {
    mongoose
      .connect("mongodb+srv://itisaraha:itisaraha@cluster0.9i4booq.mongodb.net/")
      .then(() => console.log("DB connected"))
      .catch((err) => console.log(`db error => ${err}`));

}

// ;



export default connection;