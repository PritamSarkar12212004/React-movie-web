import mongoose from 'mongoose'

async function main() {
  try {
    await mongoose.connect("mongodb+srv://pritam7796419792:Pritam%401234@movies.ttaqcv6.mongodb.net/movies?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DataBase is running");
  } catch (error) {
    console.error("DataBase crash by error:", error);
  }
}

export default main;
