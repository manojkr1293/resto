import { connectionStr } from "@/app/lib/db";
import { resturentSchema } from "@/app/lib/resturentsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  const data = await resturentSchema.find();
  console.log(data);
  return NextResponse.json({ result: data })
}

export async function POST(request){
  let payload = await request.json();
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  let result;
  let success = false;
  if(payload.isLogin){
      result = await resturentSchema.findOne({email:payload.email,password:payload.password});
      if(result){
        success = true;
      }
  }else{
    const resturentData = new resturentSchema(payload);
    result = await resturentData.save();
    if(result){
      success = true;
    }
  }
  
  return NextResponse.json({result,success});
}