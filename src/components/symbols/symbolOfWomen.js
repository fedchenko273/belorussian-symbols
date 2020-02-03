import React from "react";
import { GridContainer, GridBlock } from "../../styled/grid";

const gridAreas = [
  "2 / 14 / 2 / 15",
  "3 / 13 / 3 / 16",
  "4 / 12 / 4 / 17",
  "5 / 11 / 5 / 14",
  "5 / 15 / 5 / 18",
  "6 / 10 / 6 / 13",
  "6 / 16 / 6 / 19",
  "7 / 11 / 7 / 14",
  "7 / 15 / 7 / 18",
  "8 / 8 / 8 / 9",
  "8 / 12 / 8 / 17",
  "8 / 20 / 8 / 21",
  "9 / 7 / 9 / 10",
  "9 / 13 / 9 / 16",
  "9 / 19 / 9 / 22",
  "10 / 6 / 10 / 11",
  "10 / 12 / 10 / 17",
  "10 / 18 / 10 / 23",
  "11 / 5 / 11 / 8",
  "11 / 9 / 11 / 14",
  "11 / 15 / 11 / 20",
  "11 / 21 / 11 / 24",
  "12 / 4 / 12 / 7",
  "12 / 10 / 12 / 13",
  "12 / 16 / 12 / 19",
  "12 / 22 / 12 / 25",
  "13 / 5 / 13 / 8",
  "13 / 11 / 13 / 14",
  "13 / 15 / 13 / 18",
  "13 / 21 / 13 / 24",
  "14 / 6 / 14 / 9",
  "14 / 12 / 14 / 17",
  "14 / 20 / 14 / 23",
  "15 / 7 / 15 / 10",
  "15 / 13 / 15 / 16",
  "15 / 19 / 15 / 22",
  "16 / 8 / 16 / 9",
  "16 / 12 / 16 / 17",
  "16 / 20 / 16 / 21",
  "17 / 11 / 17 / 14",
  "17 / 15 / 17 / 18",
  "18 / 10 / 18 / 13",
  "18 / 16 / 18 / 19",
  "19 / 9 / 19 / 14",
  "19 / 15 / 19 / 20",
  "20 / 8 / 20 / 11",
  "20 / 8 / 20 / 11",
  "20 / 12 / 20 / 17",
  "20 / 18 / 20 / 21",
  "21 / 7 / 21 / 10",
  "21 / 13 / 21 / 16",
  "21 / 19 / 21 / 22",
  "22 / 6 / 22 / 11",
  "22 / 12 / 22 / 17",
  "22 / 18 / 22 / 23",
  "23 / 5 / 23 / 8",
  "23 / 9 / 23 / 14",
  "23 / 15 / 23 / 20",
  "23 / 21 / 23 / 24",
  "24 / 4 / 24 / 7",
  "24 / 10 / 24 / 13",
  "24 / 16 / 24 / 19",
  "24 / 22 / 24 / 25",
  "25 / 3 / 25 / 8",
  "25 / 9 / 25 / 12",
  "25 / 14 / 25 / 15",
  "25 / 17 / 25 / 20",
  "25 / 21 / 25 / 26",
  "26 / 2 / 26 / 5",
  "26 / 6 / 26 / 11",
  "26 / 13 / 26 / 16",
  "26 / 18 / 26 / 23",
  "26 / 24 / 26 / 27",
  "27 / 1 / 27 / 4",
  "27 / 7 / 27 / 10",
  "27 / 12 / 27 / 17",
  "27 / 19 / 27 / 22",
  "27 / 25 / 27 / 28",
  "28 / 2 / 28 / 3",
  "28 / 8 / 28 / 9",
  "28 / 13 / 28 / 14",
  "28 / 15 / 28 / 16",
  "28 / 20 / 28 / 21",
  "28 / 26 / 28 / 27"
];

const SymbolOfWomen = () => {
  return (
    <GridContainer rowsSm="15px" columnsSm="15px" rows="11px" columns="11px">
      {gridAreas.map(area => {
        return <GridBlock key={area} gridArea={area} />;
      })}
    </GridContainer>
  );
};

export default SymbolOfWomen;
