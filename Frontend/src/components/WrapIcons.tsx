import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import * as Tooltip from "@radix-ui/react-tooltip";

type PropType = {
  children: ReactNode;
  link: string;
  tooltip: string;
};

const WrapIcons = ({ children, link, tooltip }: PropType) => {
  return (
    <Tooltip.Provider delayDuration={0} skipDelayDuration={0}>
      <Tooltip.Root>
        <NavLink
          to={link}
          className={({ isActive }) =>
            `h-[35px] w-[35px] flex items-center justify-center transition-all duration-300 ease-in-out rounded-lg transition-colors duration-300 ease-in-out ${
              isActive
                ? "bg-[rgb(145,75,241)] hover:text-white"
                : "bg-[rgb(39,40,41)] hover:text-[rgb(145,75,241)]"
            }`
          }
        >
          <Tooltip.Trigger asChild>
            <span className="flex items-center justify-center w-full h-full">
              {children}
            </span>
          </Tooltip.Trigger>
        </NavLink>

        <Tooltip.Content
          side="top"
          align="center"
          sideOffset={11}
          className="rounded-md bg-gray-800 px-2 py-1 text-white text-sm select-none shadow-lg"
        >
          {tooltip}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default WrapIcons;
