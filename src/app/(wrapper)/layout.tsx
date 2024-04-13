"use client";
import { Collapse } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

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
        router.push("/messages");
      },
      indicator: false,
    },
  ];

  const [search, setSearch] = useState("");

  const dashboardMenu = [
    {
      iconSrc: "/icons/Stats.svg",
      label: "Dashboard",
      children: [
        {
          label: "Analytics",
          path: "/analytics",
        },
        {
          label: "Finance",
          path: "/finance",
        },
        {
          label: "Job Board",
          path: "/jobBoard",
        },
      ],
    },
    {
      iconSrc: "/icons/email.svg",
      label: "Messages",
      children: [
        {
          label: "Messages",
          path: "/messages",
        },
      ],
    },
    {
      iconSrc: "/icons/user.svg",
      label: "Friends",
      children: [
        {
          label: "Friends",
          path: "/friends",
        },
      ],
    },
    {
      iconSrc: "/icons/layout-grid.svg",
      label: "Apps",
      children: [
        {
          label: "Apps",
          path: "/apps",
        },
      ],
    },
  ];

  const pagesMenu = [
    {
      iconSrc: "/icons/Support.svg",
      label: "Help Center",
      children: [
        {
          label: "Help Center",
          path: "/helpCenter",
        },
      ],
    },
    {
      iconSrc: "/icons/Folder.svg",
      label: "File Manager",
      children: [
        {
          label: "File Manager",
          path: "/fileManager",
        },
      ],
    },
  ];

  type IconButtonType = {
    src: string;
    onClick: () => void;
    indicator: boolean;
  };

  return (
    <div className="bg-[#F2F4F7] w-screen h-screen flex flex-row">
      <div className="h-full bg-[white] w-[232px] shrink-0 flex flex-col overflow-y-auto">
        <div className="px-5 pt-[23.26px] mb-[54px] select-none pointer-events-none">
          <img src="/logo/Branding.svg" />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="select-none text-[12px] px-5 font-semibold text-[#9D9FA1]">
                D A S H B O A R D
              </div>

              <Collapse
                accordion
                items={dashboardMenu.map((item, index) => {
                  let hasActiveChild = false;

                  // Check if any child path matches the current pathname
                  item.children.forEach((child) => {
                    if (pathname.endsWith(child.path)) {
                      hasActiveChild = true;
                    }
                  });

                  return {
                    key: index + 1,
                    label: (
                      <div className="flex flex-row gap-2">
                        <img className="w-[20px] h-[20px]" src={item.iconSrc} />
                        <div
                          className={`${
                            hasActiveChild ? "select-none text-[#282828]" : "text-[#5F6980]"
                          } text-[14px] font-semibold ${{}}`}
                        >
                          {item.label}
                        </div>
                      </div>
                    ),
                    children: (
                      <div className="flex flex-col w-full items-start gap-2">
                        {item.children.map((child, index) => {
                          return (
                            <button
                              className={`select-none ${
                                pathname.endsWith(child.path)
                                  ? "text-[#282828]"
                                  : "text-[#5F6980]"
                              }  pl-[28px] rounded text-[14px] font-semibold w-full hover:bg-[#F2F4F7] text-left py-[2px]`}
                              key={index}
                              onClick={() => router.push(child.path)}
                            >
                              {child.label}
                            </button>
                          );
                        })}
                      </div>
                    ),
                  };
                })}
                bordered={false}
                defaultActiveKey={[1]}
                expandIconPosition="end"
                expandIcon={({ isActive }) => (
                  <div className={`${isActive ? "rotate-180" : "rotate-0"}`}>
                    <img src="/icons/chevron-down.svg" />
                  </div>
                )}
                ghost
                style={{
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: 0,
                }}
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="select-none text-[12px] px-5 font-semibold text-[#9D9FA1]">
                P A G E S
              </div>

              <Collapse
                accordion
                items={pagesMenu.map((item, index) => {
                  return {
                    key: index + 1,

                    label: (
                      <div className="flex flex-row gap-2">
                        <img className="w-[20px] h-[20px]" src={item.iconSrc} />
                        <div
                          className={`select-none text-[#5F6980] text-[14px] font-semibold ${{}}`}
                        >
                          {item.label}
                        </div>
                      </div>
                    ),
                    children: (
                      <div className="flex flex-col w-full items-start gap-2">
                        {item.children.map((child, index) => {
                          return (
                            <button
                              className={`select-none ${
                                pathname.endsWith(child.path)
                                  ? "text-[#282828]"
                                  : "text-[#5F6980]"
                              }  pl-[28px] rounded text-[14px] font-semibold w-full hover:bg-[#F2F4F7] text-left py-[2px]`}
                              key={index}
                              onClick={() => router.push(child.path)}
                            >
                              {child.label}
                            </button>
                          );
                        })}
                      </div>
                    ),
                  };
                })}
                bordered={false}
                defaultActiveKey={[1]}
                expandIconPosition="end"
                expandIcon={({ isActive }) => (
                  <div className={`${isActive ? "rotate-180" : "rotate-0"}`}>
                    <img src="/icons/chevron-down.svg" />
                  </div>
                )}
                ghost
                style={{
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: 0,
                }}
              />
            </div>
          </div>

          <div className="w-full px-5 py-3 flex flex-row justify-between">
            <button className="hover:bg-[#F2F4F7]">
              <img src="/icons/Settings.svg" />
            </button>
            <button className="hover:bg-[#F2F4F7]">
              <img src="/icons/logout.svg" />
            </button>
            <button className="hover:bg-[#F2F4F7]">
              <img src="/icons/globe.svg" />
            </button>
          </div>
        </div>
      </div>
      <div className="h-full flex-grow flex flex-col justify-start">
        <div className="h-[66px] shrink-0 flex flex-row items-center px-8 gap-8 justify-end bg-[white]">
          <div className="flex-grow border vorder box-border border-[#EAECF0] flex flex-row items-center pl-[19px] focus-within:border-[#333333] rounded-md">
            <img src="/icons/search.svg" className="w-[20px] h-[20px]" />
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
          <button onClick={() => router.push("/profile")}>
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
        <div className="select-none pointer-events-none absolute w-[6.8px] h-[6.8px] bg-[#FF0000] rounded-full right-0 top-0"></div>
      )}
    </button>
  );
};
