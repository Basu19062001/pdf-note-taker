import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

function UploadPdfDialog({children}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Pdf File</DialogTitle>
          <DialogDescription asChild>
            <div>
                    <h2 className="mt-5">Select a file to upload</h2>
                <div className="border p-1 gap-2 rounded-md">
                    <input type="file" accept="application/pdf"/>
                </div>

                <div className="mt-3">
                    <label>File Name *</label>
                    <Input placeholder="File Name"/>
                </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
            <Button>Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UploadPdfDialog;
