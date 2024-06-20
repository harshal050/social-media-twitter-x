import mongoose from "mongoose";

const connectMongoDB = async () => {
	try {
		
		// const conn = await mongoose.connect("mongodb+srv://ankitsvnit:Ankit%40123@cluster0.bwayup3.mongodb.net/?retryWrites=true");
		const conn = await mongoose.connect('mongodb+srv://harshal_050:Harshal%402772@cluster0.hchtgxj.mongodb.net/x?retryWrites=true&w=majority');
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};

export default connectMongoDB;
