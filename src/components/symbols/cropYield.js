import React from "react";
import { GridContainer, GridBlock } from "../../styled/grid";

const gridAreas = [
  "1 / 9 / 1 / 9",
  "1 / 11 / 1 / 11",
  "1 / 13 / 1 / 13",
  "2 / 10 / 2 / 10",
  "2 / 12 / 2 / 12",
  "3 / 11 / 3 / 11",
  "4 / 11 / 4 / 11",
  "5 / 10 / 5 / 10",
  "6 / 10 / 6 / 10",
  "5 / 12 / 5 / 12",
  "6 / 12 / 6 / 12",
  "7 / 9 / 7 / 9",
  "8 / 9 / 8 / 9",
  "7 / 13 / 7 / 13",
  "8 / 13 / 8 / 13",
  "11 / 11 / 11 / 11",
  "9 / 14 / 9 / 14",
  "10 / 14 / 10 / 14",
  "11 / 14 / 11 / 14",
  "9 / 8 / 9 / 8",
  "10 / 8 / 10 / 8",
  "11 / 8 / 11 / 8",
  "10 / 11 / 10 / 11",
  "9 / 11 / 9 / 11",
  "10 / 10 / 10 / 10",
  "10 / 12 / 10 / 12",
  "8 / 14 / 8 / 14",
  "8 / 8 / 8 / 8",
  "12 / 8 / 12 / 8",
  "12 / 9 / 12 / 9",
  "13 / 9 / 13 / 9",
  "12 / 14 / 12 / 14",
  "12 / 13 / 12 / 13",
  "13 / 13 / 13 / 13",
  "14 / 10 / 14 / 10",
  "15 / 10 / 15 / 10",
  "14 / 12 / 14 / 12",
  "15 / 12 / 15 / 12",
  "16 / 11 / 16 / 11",
  "17 / 11 / 17 / 11",
  "10 / 15 / 10 / 15",
  "10 / 7 / 10 / 7",
  "11 / 16 / 11 / 16",
  "12 / 17 / 12 / 17",
  "13 / 16 / 13 / 16",
  "11 / 6 / 11 / 6",
  "12 / 5 / 12 / 5",
  "13 / 6 / 13 / 6",
  "9 / 16 / 9 / 16",
  "8 / 17 / 8 / 17",
  "7 / 18 / 7 / 18",
  "6 / 19 / 6 / 19",
  "9 / 6 / 9 / 6",
  "8 / 5 / 8 / 5",
  "7 / 4 / 7 / 4",
  "6 / 3 / 6 / 3",
  "7 / 20 / 7 / 20",
  "8 / 20 / 8 / 20",
  "7 / 2 / 7 / 2",
  "8 / 2 / 8 / 2",
  "5 / 18 / 5 / 18",
  "5 / 4 / 5 / 4",
  "4 / 17 / 4 / 17",
  "4 / 5 / 4 / 5",
  "4 / 19 / 4 / 19",
  "3 / 20 / 3 / 20",
  "4 / 3 / 4 / 3",
  "3 / 2 / 3 / 2",
  "18 / 12 / 18 / 12",
  "19 / 12 / 19 / 12",
  "18 / 10 / 18 / 10",
  "19 / 10 / 19 / 10",
  "20 / 11 / 20 / 11",
  "21 / 11 / 21 / 11",
  "20 / 13 / 20 / 13",
  "21 / 13 / 21 / 13",
  "20 / 9 / 20 / 9",
  "21 / 9 / 21 / 9",
  "22 / 8 / 22 / 8",
  "23 / 8 / 23 / 8",
  "22 / 10 / 22 / 10",
  "23 / 10 / 23 / 10",
  "22 / 12 / 22 / 12",
  "23 / 12 / 23 / 12",
  "22 / 14 / 22 / 14",
  "23 / 14 / 23 / 14",
  "24 / 7 / 24 / 7",
  "25 / 7 / 25 / 7",
  "24 / 9 / 24 / 9",
  "25 / 9 / 25 / 9",
  "24 / 11 / 24 / 11",
  "25 / 11 / 25 / 11",
  "24 / 13 / 24 / 13",
  "25 / 13 / 25 / 13",
  "24 / 15 / 24 / 15",
  "25 / 15 / 25 / 15",
  "26 / 6 / 26 / 6",
  "27 / 6 / 27 / 6",
  "26 / 8 / 26 / 8",
  "27 / 8 / 27 / 8",
  "26 / 10 / 26 / 10",
  "27 / 10 / 27 / 10",
  "26 / 12 / 26 / 12",
  "27 / 12 / 27 / 12",
  "26 / 14 / 26 / 14",
  "27 / 14 / 27 / 14",
  "26 / 16 / 26 / 16",
  "27 / 16 / 27 / 16",
  "28 / 5 / 28 / 5",
  "29 / 5 / 29 / 5",
  "28 / 7 / 28 / 7",
  "29 / 7 / 29 / 7",
  "28 / 9 / 28 / 9",
  "29 / 9 / 29 / 9",
  "28 / 11 / 28 / 11",
  "29 / 11 / 29 / 11",
  "28 / 13 / 28 / 13",
  "29 / 13 / 29 / 13",
  "28 / 15 / 28 / 15",
  "29 / 15 / 29 / 15",
  "28 / 17 / 28 / 17",
  "29 / 17 / 29 / 17",
  "30 / 4 / 30 / 4",
  "31 / 4 / 31 / 4",
  "30 / 6 / 30 / 6",
  "31 / 6 / 31 / 6",
  "30 / 8 / 30 / 8",
  "31 / 8 / 31 / 8",
  "30 / 10 / 30 / 10",
  "31 / 10 / 31 / 10",
  "30 / 12 / 30 / 12",
  "31 / 12 / 31 / 12",
  "30 / 14 / 30 / 14",
  "31 / 14 / 31 / 14",
  "30 / 16 / 30 / 16",
  "31 / 16 / 31 / 16",
  "30 / 18 / 30 / 18",
  "31 / 18 / 31 / 18",
  "32 / 3 / 32 / 3",
  "33 / 3 / 33 / 3",
  "32 / 5 / 32 / 5",
  "33 / 5 / 33 / 5",
  "32 / 7 / 32 / 7",
  "32 / 9 / 32 / 9",
  "32 / 11 / 32 / 11",
  "32 / 13 / 32 / 13",
  "32 / 15 / 32 / 15",
  "32 / 17 / 32 / 17",
  "32 / 19 / 32 / 19",
  "33 / 19 / 33 / 19",
  "33 / 17 / 33 / 17",
  "33 / 15 / 33 / 15",
  "33 / 13 / 33 / 13",
  "33 / 11 / 33 / 11",
  "33 / 9 / 33 / 9",
  "33 / 7 / 33 / 7",
  "34 / 2 / 34 / 2",
  "34 / 4 / 34 / 4",
  "34 / 6 / 34 / 6",
  "35 / 2 / 35 / 2",
  "35 / 4 / 35 / 4",
  "35 / 6 / 35 / 6",
  "34 / 10 / 34 / 10",
  "34 / 12 / 34 / 12",
  "34 / 14 / 34 / 14",
  "35 / 10 / 35 / 10",
  "35 / 12 / 35 / 12",
  "35 / 14 / 35 / 14",
  "35 / 18 / 35 / 18",
  "34 / 18 / 34 / 18",
  "34 / 20 / 34 / 20",
  "35 / 20 / 35 / 20",
  "36 / 1 / 36 / 1",
  "36 / 3 / 36 / 3",
  "36 / 5 / 36 / 5",
  "37 / 1 / 37 / 1",
  "37 / 3 / 37 / 3",
  "37 / 5 / 37 / 5",
  "36 / 9 / 36 / 9",
  "36 / 11 / 36 / 11",
  "36 / 13 / 36 / 13",
  "37 / 9 / 37 / 9",
  "37 / 11 / 37 / 11",
  "37 / 13 / 37 / 13",
  "36 / 17 / 36 / 17",
  "37 / 17 / 37 / 17",
  "36 / 19 / 36 / 19",
  "37 / 19 / 37 / 19",
  "36 / 21 / 36 / 21",
  "37 / 21 / 37 / 21"
];

const SymbolOfCropYield = () => {
  return (
    <GridContainer
      rows="6px"
      columns="6px"
      rowsSm="8px"
      columnsSm="8px"
      rowsMd="12px"
      columnsMd="12px"
    >
      {gridAreas.map(area => {
        return <GridBlock key={area} gridArea={area} />;
      })}
    </GridContainer>
  );
};

export default SymbolOfCropYield;
