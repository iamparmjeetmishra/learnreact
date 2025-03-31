import { cn } from "@/lib/utils"
import {IconBrandFramerMotion,IconX, Icon360View, IconHours24, IconMessage, Icon3dCubeSphere, IconPlus} from "@tabler/icons-react"

export const Card= () => {
  return (
    <div
      className={cn(
        "w-72 min-h-[26rem] h-[30rem] bg-white rounded-xl",
        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.4)]",
        "p-4 flex flex-col"
     )}
    >
      <h2 className="font-bold text-base">Motion UI Components</h2>
      <p className="text-neutral-600 mt-2 text-xs">A motion library, {"let's"} get on with it.</p>
      <div className="flex items-center justify-center">
        <button className="flex items-center gap-1 text-xs mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.4)] rounded-md px-2 py-1">
          <IconBrandFramerMotion className="s-5" />
          Motion UIs 
          <IconX className="h-4 w-4 text-neutral-400" />
        </button>
      </div>
      <div className="bg-gray-100 mt-4 rounded-lg border border-dashed border-neutral-200 flex-1 relative">
        <div className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200">
          <div className="flex gap-2 p-4">
            <div className="w-7 h-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.4)] bg-white rounded-md flex items-center justify-center">
            <IconMessage className="h-4 w-4 text-neutral-600"  />
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-bold text-neutral-600">Motion UI Components</p>
              <p className="text-[10px] text-neutral-400 mt-1">A collection of UI Components</p>
            </div>
          </div>

          <div className="flex gap-2 p-4">
            <div className="w-7 h-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.4)] bg-white rounded-md flex items-center justify-center">
            <Icon360View className="h-4 w-4 text-neutral-600"  />
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-bold text-neutral-600">360 days all around</p>
              <p className="text-[10px] text-neutral-400 mt-1">We are here help you.</p>
            </div>
          </div>

          <div className="flex gap-2 p-4">
            <div className="w-7 h-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.4)] bg-white rounded-md flex items-center justify-center">
            <IconHours24 className="h-4 w-4 text-neutral-600"  />
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-bold text-neutral-600">24 Hours turnaround</p>
              <p className="text-[10px] text-neutral-400 mt-1">Super fast deliveery at warp speed</p>
            </div>
          </div>

          <div className="flex gap-2 p-4">
            <div className="w-7 h-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.4)] bg-white rounded-md flex items-center justify-center">
            <Icon3dCubeSphere className="h-4 w-4 text-neutral-600"  />
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-bold text-neutral-600">24 Hours turnaround</p>
              <p className="text-[10px] text-neutral-400 mt-1">Super fast deliveery at warp speed</p>
            </div>
          </div>

          <div className="flex gap-2 p-4 items-center justify-center">
            <div className="w-4 h-4 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.4)] bg-white rounded-md flex items-center justify-center">
            <IconPlus className="h-3 w-3 text-neutral-600"  />
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] text-neutral-400 mt-1">Create Project</p>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  )
}

