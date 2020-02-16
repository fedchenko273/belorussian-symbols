import React from "react";
import { GridContainer, GridBlock } from "../../styled/grid";

const gridAreas = [
  "1 / 18 / 1 / 18",
  "2 / 17 / 2 / 17",
  "2 / 18 / 2 / 18",
  "2 / 19 / 2 / 19",
  "3 / 17 / 3 / 17",
  "3 / 16 / 3 / 16",
  "3 / 19 / 3 / 19",
  "3 / 20 / 3 / 20",
  "4 / 16 / 4 / 16",
  "4 / 15 / 4 / 15",
  "4 / 20 / 4 / 20",
  "4 / 21 / 4 / 21",
  "5 / 17 / 5 / 17",
  "5 / 19 / 5 / 19",
  "6 / 18 / 6 / 18",
  "7 / 17 / 7 / 17",
  "7 / 19 / 7 / 19",
  "5 / 21 / 5 / 21",
  "5 / 22 / 5 / 22",
  "5 / 15 / 5 / 15",
  "5 / 14 / 5 / 14",
  "6 / 14 / 6 / 14",
  "6 / 13 / 6 / 13",
  "6 / 22 / 6 / 22",
  "6 / 23 / 6 / 23",
  "7 / 13 / 7 / 13",
  "7 / 12 / 7 / 12",
  "8 / 12 / 8 / 12",
  "8 / 11 / 8 / 11",
  "9 / 11 / 9 / 11",
  "9 / 10 / 9 / 10",
  "10 / 10 / 10 / 10",
  "10 / 9 / 10 / 9",
  "11 / 9 / 11 / 9",
  "11 / 8 / 11 / 8",
  "12 / 8 / 12 / 8",
  "12 / 7 / 12 / 7",
  "13 / 7 / 13 / 7",
  "13 / 6 / 13 / 6",
  "14 / 6 / 14 / 6",
  "14 / 5 / 14 / 5",
  "15 / 5 / 15 / 5",
  "15 / 4 / 15 / 4",
  "16 / 4 / 16 / 4",
  "16 / 3 / 16 / 3",
  "17 / 3 / 17 / 3",
  "17 / 2 / 17 / 2",
  "18 / 1 / 18 / 1",
  "18 / 2 / 18 / 2",
  "7 / 15 / 7 / 15",
  "8 / 16 / 8 / 16",
  "9 / 15 / 9 / 15",
  "10 / 14 / 10 / 14",
  "11 / 13 / 11 / 13",
  "12 / 12 / 12 / 12",
  "13 / 11 / 13 / 11",
  "14 / 10 / 14 / 10",
  "15 / 9 / 15 / 9",
  "16 / 8 / 16 / 8",
  "17 / 7 / 17 / 7",
  "7 / 23 / 7 / 23",
  "8 / 24 / 8 / 24",
  "9 / 25 / 9 / 25",
  "10 / 26 / 10 / 26",
  "11 / 27 / 11 / 27",
  "12 / 28 / 12 / 28",
  "13 / 29 / 13 / 29",
  "14 / 31 / 14 / 31",
  "14 / 30 / 14 / 30",
  "15 / 31 / 15 / 31",
  "16 / 32 / 16 / 32",
  "17 / 33 / 17 / 33",
  "7 / 24 / 7 / 24",
  "8 / 25 / 8 / 25",
  "9 / 26 / 9 / 26",
  "10 / 27 / 10 / 27",
  "11 / 28 / 11 / 28",
  "12 / 29 / 12 / 29",
  "13 / 30 / 13 / 30",
  "15 / 32 / 15 / 32",
  "16 / 33 / 16 / 33",
  "17 / 34 / 17 / 34",
  "8 / 20 / 8 / 20",
  "9 / 21 / 9 / 21",
  "10 / 22 / 10 / 22",
  "11 / 23 / 11 / 23",
  "12 / 24 / 12 / 24",
  "13 / 25 / 13 / 25",
  "14 / 26 / 14 / 26",
  "15 / 27 / 15 / 27",
  "16 / 28 / 16 / 28",
  "17 / 29 / 17 / 29",
  "11 / 17 / 11 / 17",
  "13 / 15 / 13 / 15",
  "14 / 14 / 14 / 14",
  "15 / 13 / 15 / 13",
  "16 / 12 / 16 / 12",
  "17 / 11 / 17 / 11",
  "18 / 10 / 18 / 10",
  "18 / 6 / 18 / 6",
  "19 / 2 / 19 / 2",
  "20 / 3 / 20 / 3",
  "21 / 4 / 21 / 4",
  "22 / 5 / 22 / 5",
  "19 / 3 / 19 / 3",
  "20 / 4 / 20 / 4",
  "21 / 5 / 21 / 5",
  "19 / 5 / 19 / 5",
  "17 / 5 / 17 / 5",
  "22 / 6 / 22 / 6",
  "23 / 7 / 23 / 7",
  "24 / 8 / 24 / 8",
  "25 / 9 / 25 / 9",
  "26 / 10 / 26 / 10",
  "27 / 11 / 27 / 11",
  "28 / 12 / 28 / 12",
  "29 / 13 / 29 / 13",
  "30 / 14 / 30 / 14",
  "23 / 6 / 23 / 6",
  "24 / 7 / 24 / 7",
  "25 / 8 / 25 / 8",
  "26 / 9 / 26 / 9",
  "27 / 10 / 27 / 10",
  "28 / 11 / 28 / 11",
  "29 / 12 / 29 / 12",
  "30 / 13 / 30 / 13",
  "18 / 34 / 18 / 34",
  "18 / 35 / 18 / 35",
  "18 / 30 / 18 / 30",
  "19 / 34 / 19 / 34",
  "20 / 33 / 20 / 33",
  "19 / 33 / 19 / 33",
  "19 / 31 / 19 / 31",
  "20 / 32 / 20 / 32",
  "21 / 32 / 21 / 32",
  "17 / 31 / 17 / 31",
  "22 / 31 / 22 / 31",
  "22 / 30 / 22 / 30",
  "23 / 30 / 23 / 30",
  "23 / 29 / 23 / 29",
  "24 / 29 / 24 / 29",
  "24 / 28 / 24 / 28",
  "25 / 28 / 25 / 28",
  "25 / 27 / 25 / 27",
  "26 / 27 / 26 / 27",
  "26 / 26 / 26 / 26",
  "27 / 26 / 27 / 26",
  "27 / 25 / 27 / 25",
  "28 / 25 / 28 / 25",
  "28 / 24 / 28 / 24",
  "29 / 24 / 29 / 24",
  "29 / 23 / 29 / 23",
  "30 / 23 / 30 / 23",
  "21 / 31 / 21 / 31",
  "31 / 14 / 31 / 14",
  "31 / 15 / 31 / 15",
  "30 / 22 / 30 / 22",
  "31 / 22 / 31 / 22",
  "31 / 21 / 31 / 21",
  "32 / 15 / 32 / 15",
  "32 / 16 / 32 / 16",
  "32 / 20 / 32 / 20",
  "32 / 21 / 32 / 21",
  "33 / 20 / 33 / 20",
  "33 / 19 / 33 / 19",
  "33 / 16 / 33 / 16",
  "33 / 17 / 33 / 17",
  "34 / 17 / 34 / 17",
  "34 / 18 / 34 / 18",
  "34 / 19 / 34 / 19",
  "35 / 18 / 35 / 18",
  "9 / 13 / 9 / 13",
  "11 / 11 / 11 / 11",
  "13 / 9 / 13 / 9",
  "15 / 7 / 15 / 7",
  "7 / 21 / 7 / 21",
  "9 / 23 / 9 / 23",
  "11 / 25 / 11 / 25",
  "13 / 27 / 13 / 27",
  "15 / 29 / 15 / 29",
  "19 / 7 / 19 / 7",
  "20 / 8 / 20 / 8",
  "21 / 9 / 21 / 9",
  "22 / 10 / 22 / 10",
  "23 / 11 / 23 / 11",
  "24 / 12 / 24 / 12",
  "25 / 13 / 25 / 13",
  "26 / 14 / 26 / 14",
  "27 / 15 / 27 / 15",
  "28 / 16 / 28 / 16",
  "30 / 18 / 30 / 18",
  "29 / 19 / 29 / 19",
  "28 / 20 / 28 / 20",
  "27 / 21 / 27 / 21",
  "26 / 22 / 26 / 22",
  "25 / 23 / 25 / 23",
  "24 / 24 / 24 / 24",
  "23 / 25 / 23 / 25",
  "22 / 26 / 22 / 26",
  "21 / 27 / 21 / 27",
  "20 / 28 / 20 / 28",
  "19 / 29 / 19 / 29",
  "21 / 29 / 21 / 29",
  "23 / 27 / 23 / 27",
  "25 / 25 / 25 / 25",
  "27 / 23 / 27 / 23",
  "29 / 21 / 29 / 21",
  "31 / 19 / 31 / 19",
  "31 / 17 / 31 / 17",
  "29 / 15 / 29 / 15",
  "27 / 13 / 27 / 13",
  "25 / 11 / 25 / 11",
  "23 / 9 / 23 / 9",
  "21 / 7 / 21 / 7",
  "9 / 18 / 9 / 18",
  "10 / 17 / 10 / 17",
  "10 / 18 / 10 / 18",
  "10 / 19 / 10 / 19",
  "11 / 16 / 11 / 16",
  "11 / 19 / 11 / 19",
  "11 / 20 / 11 / 20",
  "12 / 20 / 12 / 20",
  "13 / 21 / 13 / 21",
  "27 / 18 / 27 / 18",
  "26 / 17 / 26 / 17",
  "26 / 18 / 26 / 18",
  "29 / 17 / 29 / 17",
  "26 / 19 / 26 / 19",
  "18 / 27 / 18 / 27",
  "17 / 26 / 17 / 26",
  "18 / 26 / 18 / 26",
  "19 / 26 / 19 / 26",
  "18 / 9 / 18 / 9",
  "17 / 10 / 17 / 10",
  "19 / 10 / 19 / 10",
  "19 / 11 / 19 / 11",
  "17 / 25 / 17 / 25",
  "19 / 25 / 19 / 25",
  "25 / 19 / 25 / 19",
  "25 / 17 / 25 / 17",
  "24 / 20 / 24 / 20",
  "23 / 21 / 23 / 21",
  "22 / 22 / 22 / 22",
  "21 / 23 / 21 / 23",
  "20 / 24 / 20 / 24",
  "14 / 22 / 14 / 22",
  "15 / 23 / 15 / 23",
  "16 / 24 / 16 / 24",
  "20 / 12 / 20 / 12",
  "21 / 13 / 21 / 13",
  "22 / 14 / 22 / 14",
  "23 / 15 / 23 / 15",
  "24 / 16 / 24 / 16",
  "12 / 16 / 12 / 16",
  "12 / 15 / 12 / 15",
  "13 / 14 / 13 / 14",
  "14 / 13 / 14 / 13",
  "15 / 12 / 15 / 12",
  "16 / 11 / 16 / 11",
  "12 / 21 / 12 / 21",
  "13 / 22 / 13 / 22",
  "14 / 23 / 14 / 23",
  "15 / 24 / 15 / 24",
  "16 / 25 / 16 / 25",
  "20 / 25 / 20 / 25",
  "21 / 24 / 21 / 24",
  "22 / 23 / 22 / 23",
  "23 / 22 / 23 / 22",
  "24 / 21 / 24 / 21",
  "25 / 20 / 25 / 20",
  "20 / 11 / 20 / 11",
  "21 / 12 / 21 / 12",
  "22 / 13 / 22 / 13",
  "23 / 14 / 23 / 14",
  "24 / 15 / 24 / 15",
  "25 / 16 / 25 / 16",
  "13 / 17 / 13 / 17",
  "13 / 19 / 13 / 19",
  "14 / 18 / 14 / 18",
  "23 / 19 / 23 / 19",
  "23 / 17 / 23 / 17",
  "17 / 23 / 17 / 23",
  "19 / 23 / 19 / 23",
  "19 / 13 / 19 / 13",
  "17 / 13 / 17 / 13",
  "18 / 14 / 18 / 14",
  "22 / 18 / 22 / 18",
  "18 / 22 / 18 / 22",
  "15 / 17 / 15 / 17",
  "15 / 15 / 15 / 15",
  "17 / 15 / 17 / 15",
  "17 / 21 / 17 / 21",
  "15 / 21 / 15 / 21",
  "15 / 19 / 15 / 19",
  "16 / 20 / 16 / 20",
  "16 / 16 / 16 / 16",
  "19 / 15 / 19 / 15",
  "20 / 16 / 20 / 16",
  "21 / 17 / 21 / 17",
  "21 / 19 / 21 / 19",
  "20 / 20 / 20 / 20",
  "19 / 21 / 19 / 21",
  "21 / 21 / 21 / 21",
  "21 / 15 / 21 / 15",
  "17 / 18 / 17 / 18",
  "18 / 17 / 18 / 17",
  "18 / 19 / 18 / 19",
  "19 / 18 / 19 / 18"
];

const SymbolOfEarth = () => {
  return (
    <GridContainer
      rows="8px"
      columns="8px"
      rowsSm="12px"
      columnsSm="12px"
      rowsMd="14px"
      columnsMd="14px"
    >
      {gridAreas.map(area => {
        return <GridBlock key={area} gridArea={area} />;
      })}
    </GridContainer>
  );
};

export default SymbolOfEarth;
