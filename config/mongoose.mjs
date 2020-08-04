import mongoose from "mongoose";

class MongooseInstance {
  async connect  () {
    const mongoURL = "mongodb://mongo:27017";

    const mongooseInputConfig = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const instance = await mongoose.connect(mongoURL, mongooseInputConfig);
    instance.set('useFindAndModify', false)

  };
}

export default MongooseInstance;