import { cn } from "@/lib/utils";
import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { FaRegPlusSquare } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowBack, IoIosHeartEmpty } from "react-icons/io";
import { IoMusicalNotes } from "react-icons/io5";
import { MdLibraryMusic, MdVideoLibrary } from "react-icons/md";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";
// import Vid1 from "@/assets/vid-1.mp4";

export default function Home() {
  return (
    <div className="min-h-svh w-full flex justify-center items-center overflow-hidden bg-slate-100 font-poppins">
      <main className="relative bg-slate-400 aspect-[9/16] flex flex-col h-svh">
        {/* <main className="relative flex flex-col bg-slate-400 w-full h-svh max-h-[896px] max-w-[414px]"> */}
        {/* <main className="relative flex flex-col bg-slate-400 w-full h-svh max-h-[599px] max-w-[285px]"> */}
        <div className="flex z-10 justify-between p-4 items-center w-full absolute top-0 text-center">
          <IoIosArrowBack className="size-6" />
          <p className="font-medium">Reels</p>
          <FiCamera className="size-6" />
        </div>
        <div className="flex-1 h-[calc(100svh-72px)]">
          <div className="h-full w-full box-border">
            <div className="mx-auto relative overflow-y-scroll no-scrollbar scroll-snap-y p-0 h-full">
              {/* {[...Array(5)].map((_, i) => ( */}
              {/* key={i.toString()} */}
              <div className="relative flex scroll-snap-align-start flex-col h-full">
                <video
                  loop
                  autoPlay
                  // muted
                  playsInline
                  preload="none"
                  className="w-full relative object-fill h-full"
                  src="https://cloud.appwrite.io/v1/storage/buckets/655188de6cf0c74e18cf/files/pz5qlcz8ofp/view?project=65518312cabec3b116e6"
                />
                <div className="bottom-0 z-10 left-0 absolute pb-3 ml-4 flex flex-col gap-1">
                  <div className="flex gap-3 items-center">
                    <div className="rounded-full bg-white size-6"></div>
                    <p>oke</p>
                  </div>
                  <p className="text-sm">#edukasi #fyp #finansial</p>
                  <div className="bg-slate-500/60 flex items-center gap-2 text-xs rounded-3xl px-2 py-0.5">
                    <IoMusicalNotes className="size-3" />
                    <p>awesome - Original audio</p>
                  </div>
                </div>
                <div className="bottom-0 z-10 right-0 absolute pb-3 mr-3 flex flex-col gap-4">
                  {/* <p>L</p> */}
                  <div className="flex flex-col gap-1 items-center">
                    <AiOutlineHeart className="size-7" />
                    <p className="text-xs">0</p>
                  </div>
                  {/* <p>C</p> */}
                  <div className="flex flex-col gap-1 items-center">
                    <AiOutlineComment className="size-7" />
                    <p className="text-xs">0</p>
                  </div>
                  {/* <p>S</p> */}
                  <div className="flex flex-col gap-1 items-center">
                    <PiPaperPlaneTiltLight className="size-7" />
                    <p className="text-xs">0</p>
                  </div>
                  {/* <p>E</p> */}
                  <div className="flex flex-col gap-1 items-center">
                    <HiOutlineDotsHorizontal className="size-5" />
                  </div>
                  {/* <p>M</p> */}
                  <div className="flex flex-col gap-1 items-center">
                    <MdLibraryMusic className="size-7" />
                  </div>
                </div>
              </div>
              <div className="relative flex scroll-snap-align-start flex-col h-full">
                <video
                  loop
                  autoPlay={true}
                  muted
                  playsInline
                  preload="none"
                  className="w-full relative object-fill h-full"
                  src="/vid-1.mp4"
                />
                <div className="bottom-0 z-10 left-0 absolute pb-3 ml-4 flex flex-col gap-1">
                  <div className="flex gap-3 items-center">
                    <div className="rounded-full bg-white size-6"></div>
                    <p>oke</p>
                  </div>
                  <p className="text-sm">#edukasi #fyp #finansial</p>
                  <div className="bg-slate-500/60 flex items-center gap-2 text-xs rounded-3xl px-2 py-0.5">
                    <IoMusicalNotes className="size-3" />
                    <p>awesome - Original audio</p>
                  </div>
                </div>
                <div className="bottom-0 z-10 right-0 absolute pb-3 mr-3 flex flex-col gap-4">
                  {/* <p>L</p> */}
                  <div className="flex flex-col gap-1 items-center">
                    <AiOutlineHeart className="size-7" />
                    <p className="text-xs">0</p>
                  </div>
                  {/* <p>C</p> */}
                  <div className="flex flex-col gap-1 items-center">
                    <AiOutlineComment className="size-7" />
                    <p className="text-xs">0</p>
                  </div>
                  {/* <p>S</p> */}
                  <div className="flex flex-col gap-1 items-center">
                    <PiPaperPlaneTiltLight className="size-7" />
                    <p className="text-xs">0</p>
                  </div>
                  {/* <p>E</p> */}
                  <div className="flex flex-col gap-1 items-center">
                    <HiOutlineDotsHorizontal className="size-5" />
                  </div>
                  {/* <p>M</p> */}
                  <div className="flex flex-col gap-1 items-center">
                    <MdLibraryMusic className="size-7" />
                  </div>
                </div>
              </div>
              <div className="relative flex scroll-snap-align-start flex-col h-full">
                <video
                  loop
                  autoPlay={true}
                  muted
                  playsInline
                  preload="none"
                  className="w-full relative object-fill h-full"
                  src="/vid-1.mp4"
                />
                <div className="bottom-0 z-10 left-0 absolute pb-3 ml-4 flex flex-col gap-1">
                  <div className="flex gap-3 items-center">
                    <div className="rounded-full bg-white size-6"></div>
                    <p>oke</p>
                  </div>
                  <p className="text-sm">#edukasi #fyp #finansial</p>
                  <div className="bg-slate-500/60 flex items-center gap-2 text-xs rounded-3xl px-2 py-0.5">
                    <IoMusicalNotes className="size-3" />
                    <p>awesome - Original audio</p>
                  </div>
                </div>
                <div className="bottom-0 z-10 right-0 absolute pb-3 mr-3 flex flex-col gap-4">
                  {/* <p>L</p> */}
                  <div className="flex flex-col gap-1 items-center">
                    <AiOutlineHeart className="size-7" />
                    <p className="text-xs">0</p>
                  </div>
                  {/* <p>C</p> */}
                  <div className="flex flex-col gap-1 items-center">
                    <AiOutlineComment className="size-7" />
                    <p className="text-xs">0</p>
                  </div>
                  {/* <p>S</p> */}
                  <div className="flex flex-col gap-1 items-center">
                    <PiPaperPlaneTiltLight className="size-7" />
                    <p className="text-xs">0</p>
                  </div>
                  {/* <p>E</p> */}
                  <div className="flex flex-col gap-1 items-center">
                    <HiOutlineDotsHorizontal className="size-5" />
                  </div>
                  {/* <p>M</p> */}
                  <div className="flex flex-col gap-1 items-center">
                    <MdLibraryMusic className="size-7" />
                  </div>
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
        <div
          className={cn(
            "grid grid-cols-5 bg-black justify-center z-20 pb-5 pt-3 items-center"
            // , "rounded-b-xl"
          )}
        >
          <button type="button" className={cn("text-white w-full")}>
            <GoHome className="size-5 m-auto" />
            {/* Home */}
          </button>
          <button type="button" className={cn("text-white w-full")}>
            <RiSearchLine className="size-5 m-auto" />
            {/* Search */}
          </button>
          <button type="button" className={cn("text-white w-full")}>
            <FaRegPlusSquare className="size-5 m-auto" />
            {/* Add */}
          </button>
          <button type="button" className={cn("text-white w-full")}>
            <MdVideoLibrary className="size-5 m-auto" />
            {/* Reels */}
          </button>
          <button type="button" className={cn("text-white w-full")}>
            <div className="rounded-full m-auto bg-white size-5"></div>
            {/* Profile */}
          </button>
        </div>
      </main>
    </div>
  );
}
