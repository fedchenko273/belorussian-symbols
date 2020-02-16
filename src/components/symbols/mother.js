import React from "react";
import { GridContainer, GridBlock } from "../../styled/grid";

const gridAreas = [
  "1 / 21 / 1 / 22",
  "1 / 23 / 1 / 24",
  "2 / 20 / 2 / 22",
  "2 / 23 / 2 / 25",
  "3 / 19 / 3 / 22",
  "3 / 23 / 3 / 26",
  "4 / 8 / 4 / 9",
  "4 / 10 / 4 / 11",
  "4 / 12 / 4 / 13",
  "4 / 14 / 4 / 15",
  "4 / 21 / 4 / 22",
  "4 / 23 / 4 / 24",
  "4 / 30 / 4 / 31",
  "4 / 32 / 4 / 33",
  "4 / 34 / 4 / 35",
  "4 / 36 / 4 / 37",
  "5 / 8 / 5 / 9",
  "5 / 10 / 5 / 11",
  "5 / 12 / 5 / 13",
  "5 / 14 / 5 / 15",
  "5 / 19 / 5 / 22",
  "5 / 23 / 5 / 26",
  "5 / 30 / 5 / 31",
  "5 / 32 / 5 / 33",
  "5 / 34 / 5 / 35",
  "5 / 36 / 5 / 37",
  "6 / 8 / 6 / 11",
  "6 / 12 / 6 / 15",
  "6 / 20 / 6 / 22",
  "6 / 23 / 6 / 25",
  "6 / 30 / 6 / 33",
  "6 / 34 / 6 / 37",
  "7 / 9 / 7 / 11",
  "7 / 12 / 7 / 14",
  "7 / 21 / 7 / 22",
  "7 / 23 / 7 / 24",
  "7 / 31 / 7 / 33",
  "7 / 34 / 7 / 36",
  "8 / 4 / 8 / 7",
  "8 / 10 / 8 / 11",
  "8 / 12 / 8 / 13",
  "8 / 19 / 8 / 21",
  "8 / 22 / 8 / 23",
  "8 / 24 / 8 / 26",
  "8 / 32 / 8 / 33",
  "8 / 34 / 8 / 35",
  "8 / 38 / 8 / 41",
  "9 / 6 / 9 / 8",
  "9 / 10 / 9 / 11",
  "9 / 12 / 9 / 13",
  "9 / 19 / 9 / 21",
  "9 / 22 / 9 / 23",
  "9 / 24 / 9 / 26",
  "9 / 32 / 9 / 33",
  "9 / 34 / 9 / 35",
  "9 / 37 / 9 / 39",
  "10 / 4 / 10 / 13",
  "10 / 20 / 10 / 22",
  "10 / 23 / 10 / 25",
  "10 / 32 / 10 / 41",
  "11 / 10 / 11 / 11",
  "11 / 12 / 11 / 13",
  "11 / 17 / 11 / 18",
  "11 / 20 / 11 / 22",
  "11 / 23 / 11 / 25",
  "11 / 27 / 11 / 28",
  "11 / 32 / 11 / 33",
  "11 / 34 / 11 / 35",
  "12 / 4 / 12 / 13",
  "12 / 17 / 12 / 19",
  "12 / 21 / 12 / 22",
  "12 / 23 / 12 / 24",
  "12 / 26 / 12 / 28",
  "12 / 32 / 12 / 41",
  "13 / 6 / 13 / 8",
  "13 / 13 / 13 / 16",
  "13 / 17 / 13 / 20",
  "13 / 22 / 13 / 23",
  "13 / 25 / 13 / 28",
  "13 / 29 / 13 / 32",
  "13 / 37 / 13 / 39",
  "14 / 4 / 14 / 7",
  "14 / 13 / 14 / 14",
  "14 / 15 / 14 / 16",
  "14 / 17 / 14 / 21",
  "14 / 22 / 14 / 23",
  "14 / 24 / 14 / 28",
  "14 / 29 / 14 / 30",
  "14 / 31 / 14 / 32",
  "14 / 38 / 14 / 41",
  "15 / 13 / 15 / 16",
  "15 / 17 / 15 / 22",
  "15 / 23 / 15 / 28",
  "15 / 29 / 15 / 32",
  "16 / 16 / 16 / 22",
  "16 / 23 / 16 / 29",
  "17 / 11 / 17 / 17",
  "17 / 18 / 17 / 22",
  "17 / 23 / 17 / 27",
  "17 / 28 / 17 / 34",
  "18 / 12 / 18 / 18",
  "18 / 19 / 18 / 22",
  "18 / 23 / 18 / 26",
  "18 / 27 / 18 / 33",
  "19 / 3 / 19 / 4",
  "19 / 5 / 19 / 6",
  "19 / 8 / 19 / 10",
  "19 / 13 / 19 / 19",
  "19 / 20 / 19 / 22",
  "19 / 23 / 19 / 25",
  "19 / 26 / 19 / 32",
  "19 / 35 / 19 / 37",
  "19 / 39 / 19 / 40",
  "19 / 41 / 19 / 42",
  "20 / 2 / 20 / 4",
  "20 / 5 / 20 / 7",
  "20 / 8 / 20 / 12",
  "20 / 14 / 20 / 20",
  "20 / 21 / 20 / 22",
  "20 / 23 / 20 / 24",
  "20 / 25 / 20 / 31",
  "20 / 33 / 20 / 37",
  "20 / 38 / 20 / 40",
  "20 / 41 / 20 / 43",
  "21 / 1 / 21 / 4",
  "21 / 5 / 21 / 8",
  "21 / 10 / 21 / 13",
  "21 / 15 / 21 / 21",
  "21 / 24 / 21 / 30",
  "21 / 32 / 21 / 35",
  "21 / 37 / 21 / 40",
  "21 / 41 / 21 / 44",
  "22 / 4 / 22 / 5",
  "22 / 8 / 22 / 10",
  "22 / 13 / 22 / 15",
  "22 / 30 / 22 / 32",
  "22 / 35 / 22 / 37",
  "22 / 40 / 22 / 41",
  "23 / 1 / 23 / 4",
  "23 / 5 / 23 / 8",
  "23 / 10 / 23 / 13",
  "23 / 15 / 23 / 21",
  "23 / 24 / 23 / 30",
  "23 / 32 / 23 / 35",
  "23 / 37 / 23 / 40",
  "23 / 41 / 23 / 44",
  "24 / 2 / 24 / 4",
  "24 / 5 / 24 / 7",
  "24 / 8 / 24 / 12",
  "24 / 14 / 24 / 20",
  "24 / 21 / 24 / 22",
  "24 / 23 / 24 / 24",
  "24 / 25 / 24 / 31",
  "24 / 33 / 24 / 37",
  "24 / 38 / 24 / 40",
  "24 / 41 / 24 / 43",
  "25 / 3 / 25 / 4",
  "25 / 5 / 25 / 6",
  "25 / 8 / 25 / 10",
  "25 / 13 / 25 / 19",
  "25 / 20 / 25 / 22",
  "25 / 23 / 25 / 25",
  "25 / 26 / 25 / 32",
  "25 / 35 / 25 / 37",
  "25 / 39 / 25 / 40",
  "25 / 41 / 25 / 42",
  "26 / 12 / 26 / 18",
  "26 / 19 / 26 / 22",
  "26 / 23 / 26 / 26",
  "26 / 27 / 26 / 33",
  "27 / 11 / 27 / 17",
  "27 / 18 / 27 / 22",
  "27 / 23 / 27 / 27",
  "27 / 28 / 27 / 34",
  "28 / 16 / 28 / 22",
  "28 / 23 / 28 / 29",
  "29 / 13 / 29 / 16",
  "29 / 17 / 29 / 22",
  "29 / 23 / 29 / 28",
  "29 / 29 / 29 / 32",
  "30 / 4 / 30 / 7",
  "30 / 13 / 30 / 14",
  "30 / 15 / 30 / 16",
  "30 / 17 / 30 / 21",
  "30 / 22 / 30 / 23",
  "30 / 24 / 30 / 28",
  "30 / 29 / 30 / 30",
  "30 / 31 / 30 / 32",
  "30 / 38 / 30 / 41",
  "31 / 6 / 31 / 8",
  "31 / 13 / 31 / 16",
  "31 / 17 / 31 / 20",
  "31 / 22 / 31 / 23",
  "31 / 25 / 31 / 28",
  "31 / 29 / 31 / 32",
  "31 / 37 / 31 / 39",
  "32 / 4 / 32 / 13",
  "32 / 17 / 32 / 19",
  "32 / 21 / 32 / 22",
  "32 / 23 / 32 / 24",
  "32 / 26 / 32 / 28",
  "32 / 32 / 32 / 41",
  "33 / 10 / 33 / 11",
  "33 / 12 / 33 / 13",
  "33 / 17 / 33 / 18",
  "33 / 20 / 33 / 22",
  "33 / 23 / 33 / 25",
  "33 / 27 / 33 / 28",
  "33 / 32 / 33 / 33",
  "33 / 34 / 33 / 35",
  "34 / 4 / 34 / 13",
  "34 / 20 / 34 / 22",
  "34 / 23 / 34 / 25",
  "34 / 32 / 34 / 41",
  "35 / 6 / 35 / 8",
  "35 / 10 / 35 / 11",
  "35 / 12 / 35 / 13",
  "35 / 19 / 35 / 21",
  "35 / 22 / 35 / 23",
  "35 / 24 / 35 / 26",
  "35 / 32 / 35 / 33",
  "35 / 34 / 35 / 35",
  "35 / 37 / 35 / 39",
  "36 / 4 / 36 / 7",
  "36 / 10 / 36 / 11",
  "36 / 12 / 36 / 13",
  "36 / 19 / 36 / 21",
  "36 / 22 / 36 / 23",
  "36 / 24 / 36 / 26",
  "36 / 32 / 36 / 33",
  "36 / 34 / 36 / 35",
  "36 / 38 / 36 / 41",
  "37 / 9 / 37 / 11",
  "37 / 12 / 37 / 14",
  "37 / 21 / 37 / 22",
  "37 / 23 / 37 / 24",
  "37 / 31 / 37 / 33",
  "37 / 34 / 37 / 36",
  "38 / 8 / 38 / 11",
  "38 / 12 / 38 / 15",
  "38 / 20 / 38 / 22",
  "38 / 23 / 38 / 25",
  "38 / 30 / 38 / 33",
  "38 / 34 / 38 / 37",
  "39 / 8 / 39 / 9",
  "39 / 10 / 39 / 11",
  "39 / 12 / 39 / 13",
  "39 / 14 / 39 / 15",
  "39 / 19 / 39 / 22",
  "39 / 23 / 39 / 26",
  "39 / 30 / 39 / 31",
  "39 / 32 / 39 / 33",
  "39 / 34 / 39 / 35",
  "39 / 36 / 39 / 37",
  "40 / 8 / 40 / 9",
  "40 / 10 / 40 / 11",
  "40 / 12 / 40 / 13",
  "40 / 14 / 40 / 15",
  "40 / 21 / 40 / 22",
  "40 / 23 / 40 / 24",
  "40 / 30 / 40 / 31",
  "40 / 32 / 40 / 33",
  "40 / 34 / 40 / 35",
  "40 / 36 / 40 / 37",
  "41 / 19 / 41 / 22",
  "41 / 23 / 41 / 26",
  "42 / 20 / 42 / 22",
  "42 / 23 / 42 / 25",
  "43 / 21 / 43 / 22",
  "43 / 23 / 43 / 24"
];

const SymbolOfMother = () => {
  return (
    <GridContainer
      rows="6px"
      columns="6px"
      rowsSm="8px"
      columnsSm="8px"
      rowsMd="10px"
      columnsMd="10px"
    >
      {gridAreas.map(area => {
        return <GridBlock key={area} gridArea={area} />;
      })}
    </GridContainer>
  );
};

export default SymbolOfMother;
