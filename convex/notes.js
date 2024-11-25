import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const AddNotes=mutation({
    args:{
        fileId:v.string(),
        notes:v.string(),
        createdBy:v.string(),
    },
    handler:async(ctx,args)=>{
        const recoredId = await ctx.db.query('notes')
        .filter((q)=>q.eq(q.field('fileId'), args.fileId)).collect();

        if(recoredId?.length==0){
            await ctx.db.insert('notes',{
                fileId:args.fileId,
                notes:args.notes,
                createBy:args.createdBy,
            })
        }else{
            await ctx.db.patch(recoredId[0]._id,{notes:args.notes})
        }
    }
})

export const GetNotes=query({
    args:{
        fileId:v.string(),
    },
    handler:async(ctx,args)=>{
        const result = await ctx.db.query('notes')
        .filter((q)=>q.eq(q.field('fileId'),args.fileId)).collect();

        return result[0]?.notes;
    }
})