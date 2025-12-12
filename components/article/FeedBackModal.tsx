"use client";

import { ThumbsDown, X } from "lucide-react";
import Image from "next/image";

const FeedBackModal = ({ closeModal }: { closeModal: VoidFunction }) => {
  return (
    <div className="absolute bottom-8 right-8 bg-white rounded-xl shadow-2xl border border-neutral-200 p-4 w-90 animate-in slide-in-from-bottom-4 z-30">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-bold text-sm text-title-dark">Add feedback</h4>
        <button
          onClick={closeModal}
          className="text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="relative max-h-12 mb-2">
        <textarea
          placeholder="Notes..."
          className="w-full text-sm resize-none mb-4 outline-none text-neutral-700 placeholder:text-neutral-400 bg-white px-2 py-1 rounded-lg border border-transparent focus:border-blue-100 focus:bg-blue-50/30 transition-all"
          rows={2}
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="flex-1 flex items-center justify-center gap-1.5 text-sm font-medium text-danger/80 hover:text-red-600 hover:bg-red-50 py-1.5 rounded-lg transition-colors border border-transparent hover:border-red-100 cursor-pointer">
          <Image
            src="/icons/dislike.svg"
            alt="Luna logo"
            width={16}
            height={16}
            className="flex items-center p-0 m-0 "
          />
          Dislike
        </button>
        <div className=" h-7 w-px bg-neutral-300"></div>
        <button className="flex-1 flex items-center justify-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 py-1.5 rounded-lg transition-colors border border-transparent hover:border-neutral-200 cursor-pointer">
          <ThumbsDown className="w-4 h-4 rotate-90" />
          Not sure
        </button>
        <div className=" h-7 w-px bg-neutral-300"></div>
        <button className="flex-1 flex items-center justify-center gap-1.5 text-sm font-medium text-success/80 hover:text-green-600 hover:bg-green-50 py-1.5 rounded-lg transition-colors border border-transparent hover:border-green-100 cursor-pointer">
          <Image
            src="/icons/like.svg"
            alt="Luna logo"
            width={16}
            height={16}
            className="flex items-center p-0 m-0 "
          />
          Like
        </button>
      </div>
    </div>
  );
};

export default FeedBackModal;
