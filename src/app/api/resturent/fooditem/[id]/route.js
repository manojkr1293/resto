import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request,content){
  let id = content.params.id;
  await mongoose.connect(connectionStr,{useNewUrlParser:true});
  let result = await foodSchema.find({resto_id:id});
  let success = false;
  if(result){
    success = true;
  }

  return NextResponse.json({result,success});

}

export async function DELETE(request,content){
  let id = content.params.id;
  let success = false;
  await mongoose.connect(connectionStr,{useNewUrlParser:true});
  let result = await foodSchema.deleteOne({_id:id});
  if(result.deletedCount > 0){
    success= true;
  }

  return NextResponse.json({result,success})

}