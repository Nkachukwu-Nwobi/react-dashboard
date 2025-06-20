import React from "react";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { IoSearch } from "react-icons/io5";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function TopBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <div
      className=" flex justify-between items-center py-2 px-6"
      style={{ backgroundColor: colors.primary[400] }}
    >
      <section className=" flex justify-start gap-2 items-center w-[40%]">
        <input type="text" placeholder="search" className="placeholder-gray-400 placeholder:text-sm"
        style={{ color: colors.primary[100], width: '40%', padding: '2px', borderBottom: `1px solid ${colors.primary[100]}` }} />

        <button>
          <IoSearch size={20} color={colors.grey[100]} />
        </button>
      </section>

      <section>
        <button
          onClick={colorMode.toggleColorMode}
          className=" px-4 py-2 rounded cursor-pointer"
        >
          {
            theme.palette.mode === "dark" ? (
              <MdOutlineDarkMode size={20} color={colors.primary[100]} />
            ) : (
              <MdOutlineLightMode size={20} color={colors.primary[100]} />
            )
          }
        </button>
      </section>
    </div>
  );
}

export default TopBar;
