import React from "react";
import { GridContainer, GridBlock } from "../../styled/grid";
import { changeAreas } from "../../helpers/areas";

let gridAreas = [
  "1 / 18 / 1 / 18",
  "1 / 19 / 1 / 19",
  "1 / 20 / 1 / 20",
  "2 / 17 / 2 / 17",
  "2 / 21 / 2 / 21",
  "3 / 16 / 3 / 16",
  "3 / 17 / 3 / 17",
  "3 / 18 / 3 / 18",
  "3 / 19 / 3 / 19",
  "3 / 20 / 3 / 20",
  "3 / 21 / 3 / 21",
  "3 / 22 / 3 / 22",
  "4 / 15 / 4 / 15",
  "4 / 23 / 4 / 23",
  "5 / 14 / 5 / 14",
  "5 / 15 / 5 / 15",
  "5 / 16 / 5 / 16",
  "5 / 17 / 5 / 17",
  "5 / 19 / 5 / 19",
  "5 / 18 / 5 / 18",
  "5 / 20 / 5 / 20",
  "5 / 21 / 5 / 21",
  "5 / 22 / 5 / 22",
  "5 / 23 / 5 / 23",
  "5 / 24 / 5 / 24",
  "6 / 13 / 6 / 13",
  "6 / 25 / 6 / 25",
  "7 / 12 / 7 / 12",
  "7 / 13 / 7 / 13",
  "7 / 14 / 7 / 14",
  "7 / 15 / 7 / 15",
  "7 / 16 / 7 / 16",
  "7 / 17 / 7 / 17",
  "7 / 18 / 7 / 18",
  "7 / 19 / 7 / 19",
  "7 / 20 / 7 / 20",
  "7 / 21 / 7 / 21",
  "7 / 22 / 7 / 22",
  "7 / 23 / 7 / 23",
  "7 / 24 / 7 / 24",
  "7 / 25 / 7 / 25",
  "7 / 26 / 7 / 26",
  "8 / 11 / 8 / 11",
  "8 / 27 / 8 / 27",
  "9 / 10 / 9 / 10",
  "9 / 11 / 9 / 11",
  "9 / 12 / 9 / 12",
  "9 / 13 / 9 / 13",
  "9 / 14 / 9 / 14",
  "9 / 15 / 9 / 15",
  "9 / 16 / 9 / 16",
  "9 / 17 / 9 / 17",
  "9 / 18 / 9 / 18",
  "9 / 19 / 9 / 19",
  "9 / 20 / 9 / 20",
  "9 / 21 / 9 / 21",
  "9 / 22 / 9 / 22",
  "9 / 23 / 9 / 23",
  "9 / 24 / 9 / 24",
  "9 / 25 / 9 / 25",
  "9 / 26 / 9 / 26",
  "9 / 27 / 9 / 27",
  "9 / 28 / 9 / 28",
  "10 / 9 / 10 / 9",
  "10 / 29 / 10 / 29",
  "11 / 10 / 11 / 10",
  "11 / 11 / 11 / 11",
  "11 / 12 / 11 / 12",
  "11 / 13 / 11 / 13",
  "11 / 14 / 11 / 14",
  "11 / 16 / 11 / 16",
  "11 / 15 / 11 / 15",
  "11 / 17 / 11 / 17",
  "11 / 18 / 11 / 18",
  "11 / 19 / 11 / 19",
  "11 / 20 / 11 / 20",
  "11 / 21 / 11 / 21",
  "11 / 22 / 11 / 22",
  "11 / 23 / 11 / 23",
  "11 / 24 / 11 / 24",
  "11 / 25 / 11 / 25",
  "11 / 26 / 11 / 26",
  "11 / 27 / 11 / 27",
  "11 / 28 / 11 / 28",
  "12 / 11 / 12 / 11",
  "12 / 27 / 12 / 27",
  "13 / 12 / 13 / 12",
  "13 / 13 / 13 / 13",
  "13 / 14 / 13 / 14",
  "13 / 15 / 13 / 15",
  "13 / 16 / 13 / 16",
  "13 / 17 / 13 / 17",
  "13 / 18 / 13 / 18",
  "13 / 19 / 13 / 19",
  "13 / 20 / 13 / 20",
  "13 / 21 / 13 / 21",
  "13 / 22 / 13 / 22",
  "13 / 23 / 13 / 23",
  "13 / 24 / 13 / 24",
  "13 / 25 / 13 / 25",
  "13 / 26 / 13 / 26",
  "14 / 13 / 14 / 13",
  "14 / 25 / 14 / 25",
  "15 / 14 / 15 / 14",
  "15 / 15 / 15 / 15",
  "15 / 16 / 15 / 16",
  "15 / 17 / 15 / 17",
  "15 / 18 / 15 / 18",
  "15 / 19 / 15 / 19",
  "15 / 20 / 15 / 20",
  "15 / 21 / 15 / 21",
  "15 / 22 / 15 / 22",
  "15 / 23 / 15 / 23",
  "15 / 24 / 15 / 24",
  "16 / 15 / 16 / 15",
  "16 / 23 / 16 / 23",
  "17 / 16 / 17 / 16",
  "17 / 17 / 17 / 17",
  "17 / 18 / 17 / 18",
  "17 / 19 / 17 / 19",
  "17 / 20 / 17 / 20",
  "17 / 21 / 17 / 21",
  "17 / 22 / 17 / 22",
  "18 / 17 / 18 / 17",
  "18 / 21 / 18 / 21",
  "19 / 18 / 19 / 18",
  "19 / 19 / 19 / 19",
  "19 / 20 / 19 / 20",
  "20 / 19 / 20 / 19",
  "20 / 20 / 20 / 20",
  "20 / 21 / 20 / 21",
  "20 / 22 / 20 / 22",
  "20 / 23 / 20 / 23",
  "20 / 24 / 20 / 24",
  "20 / 25 / 20 / 25",
  "20 / 26 / 20 / 26",
  "20 / 27 / 20 / 27",
  "20 / 28 / 20 / 28",
  "20 / 29 / 20 / 29",
  "19 / 30 / 19 / 30",
  "18 / 31 / 18 / 31",
  "17 / 32 / 17 / 32",
  "16 / 33 / 16 / 33",
  "15 / 34 / 15 / 34",
  "14 / 35 / 14 / 35",
  "13 / 36 / 13 / 36",
  "20 / 30 / 20 / 30",
  "20 / 31 / 20 / 31",
  "20 / 32 / 20 / 32",
  "20 / 33 / 20 / 33",
  "20 / 34 / 20 / 34",
  "20 / 35 / 20 / 35",
  "20 / 36 / 20 / 36",
  "21 / 36 / 21 / 36",
  "22 / 36 / 22 / 36",
  "22 / 35 / 22 / 35",
  "22 / 34 / 22 / 34",
  "22 / 33 / 22 / 33",
  "22 / 32 / 22 / 32",
  "22 / 31 / 22 / 31",
  "22 / 30 / 22 / 30",
  "22 / 29 / 22 / 29",
  "22 / 28 / 22 / 28",
  "22 / 27 / 22 / 27",
  "20 / 18 / 20 / 18",
  "20 / 17 / 20 / 17",
  "20 / 16 / 20 / 16",
  "20 / 15 / 20 / 15",
  "20 / 14 / 20 / 14",
  "20 / 13 / 20 / 13",
  "20 / 12 / 20 / 12",
  "20 / 11 / 20 / 11",
  "20 / 10 / 20 / 10",
  "20 / 9 / 20 / 9",
  "20 / 8 / 20 / 8",
  "19 / 7 / 19 / 7",
  "18 / 6 / 18 / 6",
  "17 / 5 / 17 / 5",
  "16 / 4 / 16 / 4",
  "15 / 3 / 15 / 3",
  "14 / 2 / 14 / 2",
  "13 / 1 / 13 / 1",
  "20 / 7 / 20 / 7",
  "20 / 6 / 20 / 6",
  "20 / 5 / 20 / 5",
  "20 / 4 / 20 / 4",
  "20 / 2 / 20 / 2",
  "20 / 3 / 20 / 3",
  "20 / 1 / 20 / 1",
  "21 / 1 / 21 / 1",
  "22 / 1 / 22 / 1",
  "22 / 2 / 22 / 2",
  "22 / 3 / 22 / 3",
  "22 / 4 / 22 / 4",
  "22 / 5 / 22 / 5",
  "22 / 6 / 22 / 6",
  "22 / 7 / 22 / 7",
  "22 / 8 / 22 / 8",
  "22 / 9 / 22 / 9",
  "22 / 10 / 22 / 10",
  "22 / 11 / 22 / 11",
  "22 / 12 / 22 / 12",
  "22 / 13 / 22 / 13",
  "22 / 14 / 22 / 14",
  "22 / 15 / 22 / 15",
  "22 / 16 / 22 / 16",
  "22 / 17 / 22 / 17",
  "22 / 18 / 22 / 18",
  "22 / 19 / 22 / 19",
  "22 / 20 / 22 / 20",
  "22 / 21 / 22 / 21",
  "22 / 22 / 22 / 22",
  "22 / 23 / 22 / 23",
  "22 / 24 / 22 / 24",
  "22 / 25 / 22 / 25",
  "22 / 26 / 22 / 26",
  "23 / 18 / 23 / 18",
  "23 / 19 / 23 / 19",
  "23 / 20 / 23 / 20",
  "24 / 17 / 24 / 17",
  "24 / 21 / 24 / 21",
  "25 / 16 / 25 / 16",
  "25 / 17 / 25 / 17",
  "25 / 18 / 25 / 18",
  "25 / 19 / 25 / 19",
  "25 / 20 / 25 / 20",
  "25 / 21 / 25 / 21",
  "25 / 22 / 25 / 22",
  "26 / 15 / 26 / 15",
  "26 / 23 / 26 / 23",
  "27 / 14 / 27 / 14",
  "27 / 15 / 27 / 15",
  "27 / 16 / 27 / 16",
  "27 / 17 / 27 / 17",
  "27 / 18 / 27 / 18",
  "27 / 19 / 27 / 19",
  "27 / 21 / 27 / 21",
  "27 / 22 / 27 / 22",
  "27 / 20 / 27 / 20",
  "27 / 23 / 27 / 23",
  "27 / 24 / 27 / 24",
  "28 / 13 / 28 / 13",
  "28 / 25 / 28 / 25",
  "29 / 12 / 29 / 12",
  "29 / 13 / 29 / 13",
  "29 / 14 / 29 / 14",
  "29 / 15 / 29 / 15",
  "29 / 16 / 29 / 16",
  "29 / 17 / 29 / 17",
  "29 / 18 / 29 / 18",
  "29 / 19 / 29 / 19",
  "29 / 20 / 29 / 20",
  "29 / 21 / 29 / 21",
  "29 / 22 / 29 / 22",
  "29 / 23 / 29 / 23",
  "29 / 24 / 29 / 24",
  "29 / 25 / 29 / 25",
  "29 / 26 / 29 / 26",
  "30 / 11 / 30 / 11",
  "30 / 27 / 30 / 27",
  "31 / 10 / 31 / 10",
  "31 / 11 / 31 / 11",
  "31 / 12 / 31 / 12",
  "31 / 13 / 31 / 13",
  "31 / 14 / 31 / 14",
  "31 / 15 / 31 / 15",
  "31 / 16 / 31 / 16",
  "31 / 17 / 31 / 17",
  "31 / 19 / 31 / 19",
  "31 / 18 / 31 / 18",
  "31 / 21 / 31 / 21",
  "31 / 20 / 31 / 20",
  "31 / 22 / 31 / 22",
  "31 / 25 / 31 / 25",
  "31 / 24 / 31 / 24",
  "31 / 23 / 31 / 23",
  "31 / 26 / 31 / 26",
  "31 / 27 / 31 / 27",
  "31 / 28 / 31 / 28",
  "32 / 9 / 32 / 9",
  "32 / 29 / 32 / 29",
  "33 / 10 / 33 / 10",
  "33 / 11 / 33 / 11",
  "33 / 12 / 33 / 12",
  "33 / 13 / 33 / 13",
  "33 / 14 / 33 / 14",
  "33 / 15 / 33 / 15",
  "33 / 16 / 33 / 16",
  "33 / 17 / 33 / 17",
  "33 / 18 / 33 / 18",
  "33 / 19 / 33 / 19",
  "33 / 20 / 33 / 20",
  "33 / 21 / 33 / 21",
  "33 / 22 / 33 / 22",
  "33 / 23 / 33 / 23",
  "33 / 24 / 33 / 24",
  "33 / 25 / 33 / 25",
  "33 / 26 / 33 / 26",
  "33 / 27 / 33 / 27",
  "33 / 28 / 33 / 28",
  "34 / 11 / 34 / 11",
  "34 / 27 / 34 / 27",
  "35 / 12 / 35 / 12",
  "35 / 13 / 35 / 13",
  "35 / 14 / 35 / 14",
  "35 / 16 / 35 / 16",
  "35 / 15 / 35 / 15",
  "35 / 17 / 35 / 17",
  "35 / 18 / 35 / 18",
  "35 / 19 / 35 / 19",
  "35 / 20 / 35 / 20",
  "35 / 21 / 35 / 21",
  "35 / 22 / 35 / 22",
  "35 / 23 / 35 / 23",
  "35 / 24 / 35 / 24",
  "35 / 25 / 35 / 25",
  "35 / 26 / 35 / 26",
  "36 / 13 / 36 / 13",
  "36 / 25 / 36 / 25",
  "37 / 14 / 37 / 14",
  "37 / 15 / 37 / 15",
  "37 / 16 / 37 / 16",
  "37 / 17 / 37 / 17",
  "37 / 18 / 37 / 18",
  "37 / 19 / 37 / 19",
  "37 / 20 / 37 / 20",
  "37 / 21 / 37 / 21",
  "37 / 22 / 37 / 22",
  "37 / 23 / 37 / 23",
  "37 / 24 / 37 / 24",
  "38 / 15 / 38 / 15",
  "38 / 23 / 38 / 23",
  "39 / 16 / 39 / 16",
  "39 / 17 / 39 / 17",
  "39 / 18 / 39 / 18",
  "39 / 19 / 39 / 19",
  "39 / 20 / 39 / 20",
  "39 / 21 / 39 / 21",
  "39 / 22 / 39 / 22",
  "40 / 17 / 40 / 17",
  "40 / 21 / 40 / 21",
  "41 / 18 / 41 / 18",
  "41 / 19 / 41 / 19",
  "41 / 20 / 41 / 20",
  "23 / 7 / 23 / 7",
  "24 / 6 / 24 / 6",
  "25 / 5 / 25 / 5",
  "26 / 4 / 26 / 4",
  "27 / 3 / 27 / 3",
  "28 / 2 / 28 / 2",
  "23 / 30 / 23 / 30",
  "24 / 31 / 24 / 31",
  "25 / 32 / 25 / 32",
  "26 / 33 / 26 / 33",
  "27 / 34 / 27 / 34",
  "28 / 35 / 28 / 35",
  "29 / 36 / 29 / 36",
  "29 / 1 / 29 / 1"
];

const SymbolOfSun = () => {
  return (
    <GridContainer
      rows="6px"
      columns="6px"
      rowsSm="10px"
      columnsSm="10px"
      rowsMd="12px"
      columnsMd="12px"
    >
      {gridAreas.map(area => {
        return <GridBlock key={area} gridArea={area} />;
      })}
    </GridContainer>
  );
};

export default SymbolOfSun;