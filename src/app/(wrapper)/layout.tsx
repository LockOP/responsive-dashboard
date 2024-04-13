"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const iconbuttons = [
    {
      src: "/icons/Notification.svg",
      onClick: () => {
        router.push("/notifications");
      },
      indicator: true,
    },
    {
      src: "/icons/calendar.svg",
      onClick: () => {
        router.push("/calendar");
      },
      indicator: false,
    },
    {
      src: "/icons/email.svg",
      onClick: () => {
        router.push("/analytics");
      },
      indicator: false,
    },
  ];

  const [search, setSearch] = useState("");

  type IconButtonType = {
    src: string;
    onClick: () => void;
    indicator: boolean;
  };

  return (
    <div className="bg-[#F2F4F7] w-screen h-screen flex flex-row">
      <div className="h-full bg-[red] w-[232px]">sd</div>
      <div className="h-full flex-grow flex flex-col justify-start">
        <div className="h-[66px] shrink-0 flex flex-row items-center px-8 gap-8 justify-end bg-[white]">
          <div className="flex-grow border vorder box-border border-[#EAECF0] flex flex-row items-center pl-[19px] focus-within:border-[#333333] rounded-md">
            <img src="/icons/search.svg" className="w-[20px] h-[20px]"/>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-grow bg-transparent h-[46px] pl-[11px] pr-[19px] placeholder:text-[#9D9FA1] text-[14px] outline-none "
              placeholder="Search"
            />
          </div>
          {iconbuttons.map((iconbutton: IconButtonType) => (
            <IconButton
              key={iconbutton.src}
              src={iconbutton.src}
              onClick={iconbutton.onClick}
              indicator={iconbutton.indicator}
            />
          ))}
          <button>
            <img
              src="/profile.png"
              className="select-none pointer-events-none rounded-full w-[40px] h-[40px]"
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

const IconButton = ({
  src,
  onClick,
  indicator,
}: {
  src: string;
  onClick: () => void;
  indicator: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-[32px] h-[32px] hover:bg-[#F2F4F7] flex justify-center items-center rounded-md relative"
    >
      <img
        src={src}
        className="select-none pointer-events-none rounded-md-full w-[24px] h-[24px]"
      />
      {indicator && (
        <div className="select-none pointer-events-none absolute w-[6.8px] h-[6.8px] bg-[#FF0000] rounded-md-full right-0 top-0"></div>
      )}
    </button>
  );
};
