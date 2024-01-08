/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";




const SideBar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="column"
    spacing={2}
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      scrollbarWidth: "thin", // for Firefox
      '&::-webkit-scrollbar': {
        width: "6px",
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: "#888",
      },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "8px 16px",
          borderRadius: "4px",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
