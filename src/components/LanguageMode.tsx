import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import i18n from "../i18n/i18";

const langList = ["EN", "PL", "RU"];

export default function LanguageMode() {
  const [lang, setLang] = useState<string>(
    window.localStorage.getItem("lang") || "EN"
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  const handleClose = (prop: string | any) => {
    setAnchorEl(null);
    if (typeof prop === "string") {
      setLang(prop);
      i18n.changeLanguage(prop.toLowerCase())
    }
  };

  return (
    <>
      <Button onClick={handleClick} color="inherit">
        {lang && lang}
      </Button>
      <Menu
        id="menu-appbar"
        aria-labelledby="menu-appbar"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {langList.map((item) => {
          return (
            <MenuItem onClick={() => handleClose(item)} key={item}>
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
