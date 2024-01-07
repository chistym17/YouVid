/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="column" // Updated direction to column
    spacing={2} // Added spacing between Stack items
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
          display: "flex", // Added display flex for icon and name alignment
          alignItems: "center", // Center items vertically
          padding: "8px 16px", // Added padding for better spacing
          borderRadius: "4px", // Added border radius for a rounded look
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
