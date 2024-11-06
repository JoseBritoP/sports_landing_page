"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { FaPlay } from "react-icons/fa";

export function Modal() {

  return (
    <div className="pt-5">
      <Dialog>
        <DialogTrigger asChild>
          <button className="w-[10rem] lg:ml-auto h-[10rem] rounded-full bg-red-600 hover:bg-black transition-all duration-200 cursor-pointer sm:flex flex-col items-center justify-center hidden">
            <FaPlay className="w-[3rem] h-[3rem] text-white" />
          </button>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle ></DialogTitle>
          </DialogHeader>
          <div className=" md:h-[300px] lg:w-[800px] lg:-[500px] traslate-y-[50%]">
            <iframe
              src="https://www.youtube.com/watch?v=Pir8IUxfVdU&t=2s"
              className="w-full h-full"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
