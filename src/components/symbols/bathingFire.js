import React from "react";
import { GridContainer, GridBlock } from "../../styled/grid";

const gridAreas = [
  "1 / 30 / 1 / 30",
  "2 / 29 / 2 / 29",
  "2 / 31 / 2 / 31",
  "3 / 29 / 3 / 29",
  "3 / 30 / 3 / 30",
  "3 / 31 / 3 / 31",
  "4 / 30 / 4 / 30",
  "4 / 32 / 4 / 32",
  "4 / 28 / 4 / 28",
  "5 / 29 / 5 / 29",
  "5 / 31 / 5 / 31",
  "5 / 28 / 5 / 28",
  "6 / 28 / 6 / 28",
  "5 / 32 / 5 / 32",
  "6 / 32 / 6 / 32",
  "5 / 33 / 5 / 33",
  "5 / 27 / 5 / 27",
  "4 / 33 / 4 / 33",
  "3 / 33 / 3 / 33",
  "4 / 34 / 4 / 34",
  "3 / 35 / 3 / 35",
  "2 / 34 / 2 / 34",
  "4 / 27 / 4 / 27",
  "4 / 26 / 4 / 26",
  "3 / 27 / 3 / 27",
  "2 / 26 / 2 / 26",
  "3 / 25 / 3 / 25",
  "7 / 27 / 7 / 27",
  "6 / 26 / 6 / 26",
  "6 / 25 / 6 / 25",
  "8 / 26 / 8 / 26",
  "8 / 25 / 8 / 25",
  "7 / 24 / 7 / 24",
  "7 / 26 / 7 / 26",
  "7 / 33 / 7 / 33",
  "6 / 34 / 6 / 34",
  "6 / 35 / 6 / 35",
  "8 / 34 / 8 / 34",
  "8 / 35 / 8 / 35",
  "7 / 36 / 7 / 36",
  "7 / 34 / 7 / 34",
  "8 / 28 / 8 / 28",
  "9 / 29 / 9 / 29",
  "9 / 28 / 9 / 28",
  "9 / 27 / 9 / 27",
  "10 / 28 / 10 / 28",
  "10 / 27 / 10 / 27",
  "10 / 26 / 10 / 26",
  "11 / 27 / 11 / 27",
  "11 / 25 / 11 / 25",
  "12 / 26 / 12 / 26",
  "8 / 32 / 8 / 32",
  "9 / 31 / 9 / 31",
  "9 / 32 / 9 / 32",
  "9 / 33 / 9 / 33",
  "10 / 32 / 10 / 32",
  "10 / 33 / 10 / 33",
  "10 / 34 / 10 / 34",
  "11 / 33 / 11 / 33",
  "12 / 34 / 12 / 34",
  "11 / 35 / 11 / 35",
  "10 / 30 / 10 / 30",
  "11 / 31 / 11 / 31",
  "12 / 31 / 12 / 31",
  "11 / 29 / 11 / 29",
  "12 / 29 / 12 / 29",
  "11 / 30 / 11 / 30",
  "13 / 30 / 13 / 30",
  "15 / 30 / 15 / 30",
  "16 / 30 / 16 / 30",
  "17 / 30 / 17 / 30",
  "18 / 30 / 18 / 30",
  "19 / 30 / 19 / 30",
  "20 / 30 / 20 / 30",
  "21 / 31 / 21 / 31",
  "21 / 29 / 21 / 29",
  "20 / 32 / 20 / 32",
  "19 / 33 / 19 / 33",
  "18 / 34 / 18 / 34",
  "17 / 35 / 17 / 35",
  "16 / 36 / 16 / 36",
  "17 / 36 / 17 / 36",
  "18 / 36 / 18 / 36",
  "22 / 31 / 22 / 31",
  "23 / 31 / 23 / 31",
  "23 / 32 / 23 / 32",
  "22 / 33 / 22 / 33",
  "21 / 34 / 21 / 34",
  "20 / 35 / 20 / 35",
  "19 / 36 / 19 / 36",
  "20 / 36 / 20 / 36",
  "21 / 36 / 21 / 36",
  "24 / 31 / 24 / 31",
  "25 / 31 / 25 / 31",
  "26 / 31 / 26 / 31",
  "26 / 32 / 26 / 32",
  "25 / 33 / 25 / 33",
  "24 / 34 / 24 / 34",
  "23 / 35 / 23 / 35",
  "22 / 36 / 22 / 36",
  "19 / 27 / 19 / 27",
  "20 / 28 / 20 / 28",
  "18 / 26 / 18 / 26",
  "17 / 25 / 17 / 25",
  "16 / 24 / 16 / 24",
  "18 / 24 / 18 / 24",
  "17 / 24 / 17 / 24",
  "19 / 24 / 19 / 24",
  "20 / 24 / 20 / 24",
  "21 / 24 / 21 / 24",
  "26 / 29 / 26 / 29",
  "25 / 29 / 25 / 29",
  "24 / 29 / 24 / 29",
  "23 / 29 / 23 / 29",
  "22 / 29 / 22 / 29",
  "26 / 28 / 26 / 28",
  "25 / 27 / 25 / 27",
  "24 / 26 / 24 / 26",
  "23 / 25 / 23 / 25",
  "22 / 24 / 22 / 24",
  "23 / 28 / 23 / 28",
  "22 / 27 / 22 / 27",
  "21 / 26 / 21 / 26",
  "20 / 25 / 20 / 25",
  "27 / 30 / 27 / 30",
  "28 / 30 / 28 / 30",
  "30 / 29 / 30 / 29",
  "31 / 29 / 31 / 29",
  "31 / 31 / 31 / 31",
  "30 / 31 / 30 / 31",
  "30 / 30 / 30 / 30",
  "29 / 30 / 29 / 30",
  "32 / 29 / 32 / 29",
  "32 / 30 / 32 / 30",
  "32 / 31 / 32 / 31",
  "29 / 32 / 29 / 32",
  "28 / 33 / 28 / 33",
  "27 / 34 / 27 / 34",
  "26 / 35 / 26 / 35",
  "25 / 36 / 25 / 36",
  "24 / 37 / 24 / 37",
  "23 / 38 / 23 / 38",
  "22 / 39 / 22 / 39",
  "21 / 40 / 21 / 40",
  "20 / 41 / 20 / 41",
  "21 / 42 / 21 / 42",
  "21 / 43 / 21 / 43",
  "21 / 44 / 21 / 44",
  "21 / 45 / 21 / 45",
  "19 / 42 / 19 / 42",
  "18 / 43 / 18 / 43",
  "17 / 44 / 17 / 44",
  "19 / 40 / 19 / 40",
  "18 / 40 / 18 / 40",
  "17 / 40 / 17 / 40",
  "16 / 40 / 16 / 40",
  "16 / 45 / 16 / 45",
  "15 / 46 / 15 / 46",
  "17 / 46 / 17 / 46",
  "17 / 47 / 17 / 47",
  "17 / 48 / 17 / 48",
  "17 / 49 / 17 / 49",
  "15 / 44 / 15 / 44",
  "14 / 44 / 14 / 44",
  "13 / 44 / 13 / 44",
  "12 / 44 / 12 / 44",
  "14 / 47 / 14 / 47",
  "29 / 28 / 29 / 28",
  "28 / 27 / 28 / 27",
  "27 / 26 / 27 / 26",
  "26 / 25 / 26 / 25",
  "25 / 24 / 25 / 24",
  "24 / 23 / 24 / 23",
  "23 / 22 / 23 / 22",
  "22 / 21 / 22 / 21",
  "21 / 20 / 21 / 20",
  "20 / 19 / 20 / 19",
  "19 / 18 / 19 / 18",
  "18 / 17 / 18 / 17",
  "21 / 18 / 21 / 18",
  "21 / 17 / 21 / 17",
  "21 / 16 / 21 / 16",
  "21 / 15 / 21 / 15",
  "19 / 20 / 19 / 20",
  "18 / 20 / 18 / 20",
  "17 / 20 / 17 / 20",
  "16 / 20 / 16 / 20",
  "17 / 16 / 17 / 16",
  "16 / 15 / 16 / 15",
  "15 / 16 / 15 / 16",
  "14 / 16 / 14 / 16",
  "13 / 16 / 13 / 16",
  "12 / 16 / 12 / 16",
  "17 / 14 / 17 / 14",
  "17 / 13 / 17 / 13",
  "17 / 12 / 17 / 12",
  "17 / 11 / 17 / 11",
  "15 / 14 / 15 / 14",
  "14 / 13 / 14 / 13",
  "13 / 12 / 13 / 12",
  "31 / 32 / 31 / 32",
  "31 / 33 / 31 / 33",
  "31 / 34 / 31 / 34",
  "30 / 35 / 30 / 35",
  "32 / 35 / 32 / 35",
  "29 / 35 / 29 / 35",
  "33 / 35 / 33 / 35",
  "30 / 36 / 30 / 36",
  "30 / 37 / 30 / 37",
  "30 / 38 / 30 / 38",
  "30 / 39 / 30 / 39",
  "30 / 40 / 30 / 40",
  "32 / 36 / 32 / 36",
  "32 / 37 / 32 / 37",
  "32 / 38 / 32 / 38",
  "32 / 39 / 32 / 39",
  "32 / 40 / 32 / 40",
  "31 / 41 / 31 / 41",
  "31 / 42 / 31 / 42",
  "31 / 43 / 31 / 43",
  "31 / 44 / 31 / 44",
  "31 / 45 / 31 / 45",
  "31 / 47 / 31 / 47",
  "30 / 48 / 30 / 48",
  "30 / 49 / 30 / 49",
  "32 / 48 / 32 / 48",
  "32 / 49 / 32 / 49",
  "31 / 50 / 31 / 50",
  "31 / 49 / 31 / 49",
  "28 / 36 / 28 / 36",
  "27 / 37 / 27 / 37",
  "26 / 38 / 26 / 38",
  "25 / 39 / 25 / 39",
  "25 / 40 / 25 / 40",
  "25 / 41 / 25 / 41",
  "25 / 42 / 25 / 42",
  "25 / 43 / 25 / 43",
  "25 / 44 / 25 / 44",
  "25 / 45 / 25 / 45",
  "26 / 41 / 26 / 41",
  "26 / 44 / 26 / 44",
  "29 / 41 / 29 / 41",
  "28 / 42 / 28 / 42",
  "27 / 43 / 27 / 43",
  "27 / 40 / 27 / 40",
  "28 / 39 / 28 / 39",
  "29 / 38 / 29 / 38",
  "34 / 36 / 34 / 36",
  "35 / 37 / 35 / 37",
  "36 / 38 / 36 / 38",
  "36 / 44 / 36 / 44",
  "35 / 40 / 35 / 40",
  "35 / 43 / 35 / 43",
  "33 / 41 / 33 / 41",
  "34 / 42 / 34 / 42",
  "33 / 38 / 33 / 38",
  "34 / 39 / 34 / 39",
  "29 / 50 / 29 / 50",
  "30 / 51 / 30 / 51",
  "29 / 52 / 29 / 52",
  "29 / 51 / 29 / 51",
  "28 / 51 / 28 / 51",
  "28 / 50 / 28 / 50",
  "27 / 50 / 27 / 50",
  "28 / 49 / 28 / 49",
  "26 / 49 / 26 / 49",
  "27 / 48 / 27 / 48",
  "28 / 53 / 28 / 53",
  "27 / 53 / 27 / 53",
  "27 / 52 / 27 / 52",
  "26 / 52 / 26 / 52",
  "27 / 54 / 27 / 54",
  "26 / 54 / 26 / 54",
  "25 / 53 / 25 / 53",
  "29 / 54 / 29 / 54",
  "30 / 55 / 30 / 55",
  "29 / 55 / 29 / 55",
  "28 / 55 / 28 / 55",
  "29 / 56 / 29 / 56",
  "28 / 56 / 28 / 56",
  "27 / 56 / 27 / 56",
  "28 / 57 / 28 / 57",
  "27 / 58 / 27 / 58",
  "26 / 57 / 26 / 57",
  "31 / 56 / 31 / 56",
  "30 / 57 / 30 / 57",
  "30 / 58 / 30 / 58",
  "31 / 57 / 31 / 57",
  "32 / 57 / 32 / 57",
  "32 / 58 / 32 / 58",
  "31 / 59 / 31 / 59",
  "32 / 55 / 32 / 55",
  "33 / 54 / 33 / 54",
  "33 / 55 / 33 / 55",
  "34 / 55 / 34 / 55",
  "33 / 56 / 33 / 56",
  "34 / 56 / 34 / 56",
  "35 / 56 / 35 / 56",
  "34 / 57 / 34 / 57",
  "36 / 57 / 36 / 57",
  "35 / 58 / 35 / 58",
  "34 / 53 / 34 / 53",
  "35 / 54 / 35 / 54",
  "36 / 54 / 36 / 54",
  "35 / 52 / 35 / 52",
  "36 / 52 / 36 / 52",
  "35 / 53 / 35 / 53",
  "37 / 53 / 37 / 53",
  "32 / 51 / 32 / 51",
  "33 / 52 / 33 / 52",
  "34 / 51 / 34 / 51",
  "33 / 51 / 33 / 51",
  "33 / 50 / 33 / 50",
  "34 / 50 / 34 / 50",
  "35 / 50 / 35 / 50",
  "34 / 49 / 34 / 49",
  "36 / 49 / 36 / 49",
  "35 / 48 / 35 / 48",
  "31 / 28 / 31 / 28",
  "31 / 27 / 31 / 27",
  "31 / 26 / 31 / 26",
  "30 / 25 / 30 / 25",
  "29 / 25 / 29 / 25",
  "32 / 25 / 32 / 25",
  "33 / 25 / 33 / 25",
  "32 / 24 / 32 / 24",
  "32 / 23 / 32 / 23",
  "32 / 22 / 32 / 22",
  "30 / 24 / 30 / 24",
  "30 / 23 / 30 / 23",
  "30 / 22 / 30 / 22",
  "29 / 22 / 29 / 22",
  "30 / 21 / 30 / 21",
  "30 / 20 / 30 / 20",
  "32 / 21 / 32 / 21",
  "32 / 20 / 32 / 20",
  "33 / 22 / 33 / 22",
  "31 / 19 / 31 / 19",
  "31 / 18 / 31 / 18",
  "31 / 17 / 31 / 17",
  "31 / 16 / 31 / 16",
  "31 / 15 / 31 / 15",
  "31 / 13 / 31 / 13",
  "32 / 12 / 32 / 12",
  "32 / 11 / 32 / 11",
  "30 / 12 / 30 / 12",
  "30 / 11 / 30 / 11",
  "31 / 11 / 31 / 11",
  "31 / 10 / 31 / 10",
  "28 / 24 / 28 / 24",
  "27 / 23 / 27 / 23",
  "26 / 22 / 26 / 22",
  "25 / 21 / 25 / 21",
  "25 / 19 / 25 / 19",
  "25 / 20 / 25 / 20",
  "25 / 18 / 25 / 18",
  "26 / 19 / 26 / 19",
  "25 / 17 / 25 / 17",
  "25 / 16 / 25 / 16",
  "26 / 16 / 26 / 16",
  "25 / 15 / 25 / 15",
  "29 / 19 / 29 / 19",
  "28 / 18 / 28 / 18",
  "27 / 17 / 27 / 17",
  "27 / 20 / 27 / 20",
  "28 / 21 / 28 / 21",
  "33 / 30 / 33 / 30",
  "34 / 30 / 34 / 30",
  "35 / 30 / 35 / 30",
  "36 / 29 / 36 / 29",
  "36 / 28 / 36 / 28",
  "36 / 31 / 36 / 31",
  "36 / 32 / 36 / 32",
  "37 / 31 / 37 / 31",
  "38 / 31 / 38 / 31",
  "39 / 31 / 39 / 31",
  "39 / 32 / 39 / 32",
  "37 / 29 / 37 / 29",
  "38 / 29 / 38 / 29",
  "39 / 29 / 39 / 29",
  "39 / 28 / 39 / 28",
  "40 / 29 / 40 / 29",
  "41 / 29 / 41 / 29",
  "40 / 31 / 40 / 31",
  "41 / 31 / 41 / 31",
  "33 / 32 / 33 / 32",
  "34 / 33 / 34 / 33",
  "35 / 34 / 35 / 34",
  "36 / 35 / 36 / 35",
  "37 / 36 / 37 / 36",
  "38 / 37 / 38 / 37",
  "39 / 38 / 39 / 38",
  "40 / 39 / 40 / 39",
  "41 / 40 / 41 / 40",
  "42 / 41 / 42 / 41",
  "43 / 42 / 43 / 42",
  "44 / 43 / 44 / 43",
  "45 / 44 / 45 / 44",
  "46 / 45 / 46 / 45",
  "33 / 28 / 33 / 28",
  "34 / 27 / 34 / 27",
  "35 / 26 / 35 / 26",
  "36 / 25 / 36 / 25",
  "37 / 24 / 37 / 24",
  "38 / 23 / 38 / 23",
  "39 / 22 / 39 / 22",
  "40 / 21 / 40 / 21",
  "41 / 20 / 41 / 20",
  "42 / 19 / 42 / 19",
  "43 / 18 / 43 / 18",
  "44 / 17 / 44 / 17",
  "45 / 16 / 45 / 16",
  "47 / 46 / 47 / 46",
  "42 / 30 / 42 / 30",
  "43 / 30 / 43 / 30",
  "45 / 30 / 45 / 30",
  "44 / 30 / 44 / 30",
  "46 / 30 / 46 / 30",
  "48 / 30 / 48 / 30",
  "49 / 31 / 49 / 31",
  "50 / 31 / 50 / 31",
  "49 / 29 / 49 / 29",
  "50 / 29 / 50 / 29",
  "51 / 30 / 51 / 30",
  "50 / 30 / 50 / 30",
  "37 / 33 / 37 / 33",
  "38 / 34 / 38 / 34",
  "34 / 24 / 34 / 24",
  "35 / 23 / 35 / 23",
  "36 / 22 / 36 / 22",
  "37 / 21 / 37 / 21",
  "37 / 19 / 37 / 19",
  "37 / 20 / 37 / 20",
  "37 / 18 / 37 / 18",
  "37 / 17 / 37 / 17",
  "37 / 16 / 37 / 16",
  "34 / 21 / 34 / 21",
  "35 / 20 / 35 / 20",
  "36 / 19 / 36 / 19",
  "33 / 19 / 33 / 19",
  "34 / 18 / 34 / 18",
  "35 / 17 / 35 / 17",
  "36 / 16 / 36 / 16",
  "37 / 15 / 37 / 15",
  "30 / 9 / 30 / 9",
  "29 / 10 / 29 / 10",
  "29 / 8 / 29 / 8",
  "29 / 9 / 29 / 9",
  "28 / 9 / 28 / 9",
  "28 / 10 / 28 / 10",
  "28 / 11 / 28 / 11",
  "27 / 10 / 27 / 10",
  "27 / 12 / 27 / 12",
  "26 / 11 / 26 / 11",
  "28 / 7 / 28 / 7",
  "27 / 8 / 27 / 8",
  "27 / 6 / 27 / 6",
  "26 / 6 / 26 / 6",
  "26 / 8 / 26 / 8",
  "27 / 7 / 27 / 7",
  "25 / 7 / 25 / 7",
  "29 / 6 / 29 / 6",
  "30 / 5 / 30 / 5",
  "29 / 5 / 29 / 5",
  "28 / 5 / 28 / 5",
  "29 / 4 / 29 / 4",
  "28 / 4 / 28 / 4",
  "27 / 4 / 27 / 4",
  "28 / 3 / 28 / 3",
  "26 / 3 / 26 / 3",
  "27 / 2 / 27 / 2",
  "31 / 4 / 31 / 4",
  "30 / 3 / 30 / 3",
  "32 / 3 / 32 / 3",
  "31 / 3 / 31 / 3",
  "30 / 2 / 30 / 2",
  "32 / 2 / 32 / 2",
  "31 / 1 / 31 / 1",
  "32 / 5 / 32 / 5",
  "33 / 6 / 33 / 6",
  "33 / 5 / 33 / 5",
  "34 / 4 / 34 / 4",
  "34 / 5 / 34 / 5",
  "33 / 4 / 33 / 4",
  "35 / 4 / 35 / 4",
  "34 / 3 / 34 / 3",
  "36 / 3 / 36 / 3",
  "35 / 2 / 35 / 2",
  "34 / 7 / 34 / 7",
  "35 / 7 / 35 / 7",
  "35 / 8 / 35 / 8",
  "36 / 8 / 36 / 8",
  "35 / 6 / 35 / 6",
  "36 / 6 / 36 / 6",
  "37 / 7 / 37 / 7",
  "33 / 8 / 33 / 8",
  "32 / 9 / 32 / 9",
  "33 / 9 / 33 / 9",
  "34 / 9 / 34 / 9",
  "33 / 10 / 33 / 10",
  "34 / 10 / 34 / 10",
  "34 / 11 / 34 / 11",
  "35 / 10 / 35 / 10",
  "36 / 11 / 36 / 11",
  "35 / 12 / 35 / 12",
  "48 / 47 / 48 / 47",
  "41 / 17 / 41 / 17",
  "41 / 18 / 41 / 18",
  "41 / 16 / 41 / 16",
  "41 / 15 / 41 / 15",
  "43 / 20 / 43 / 20",
  "45 / 20 / 45 / 20",
  "44 / 20 / 44 / 20",
  "46 / 20 / 46 / 20",
  "37 / 27 / 37 / 27",
  "38 / 26 / 38 / 26",
  "39 / 25 / 39 / 25",
  "40 / 24 / 40 / 24",
  "41 / 24 / 41 / 24",
  "42 / 24 / 42 / 24",
  "39 / 35 / 39 / 35",
  "40 / 36 / 40 / 36",
  "41 / 36 / 41 / 36",
  "42 / 36 / 42 / 36",
  "42 / 35 / 42 / 35",
  "43 / 36 / 43 / 36",
  "44 / 36 / 44 / 36",
  "45 / 35 / 45 / 35",
  "45 / 36 / 45 / 36",
  "43 / 24 / 43 / 24",
  "42 / 25 / 42 / 25",
  "44 / 24 / 44 / 24",
  "45 / 24 / 45 / 24",
  "45 / 25 / 45 / 25",
  "46 / 24 / 46 / 24",
  "46 / 36 / 46 / 36",
  "40 / 27 / 40 / 27",
  "41 / 26 / 41 / 26",
  "40 / 33 / 40 / 33",
  "41 / 34 / 41 / 34",
  "44 / 26 / 44 / 26",
  "43 / 27 / 43 / 27",
  "42 / 28 / 42 / 28",
  "42 / 32 / 42 / 32",
  "43 / 33 / 43 / 33",
  "44 / 34 / 44 / 34",
  "43 / 40 / 43 / 40",
  "44 / 40 / 44 / 40",
  "45 / 40 / 45 / 40",
  "37 / 44 / 37 / 44",
  "37 / 39 / 37 / 39",
  "37 / 40 / 37 / 40",
  "37 / 41 / 37 / 41",
  "37 / 42 / 37 / 42",
  "37 / 43 / 37 / 43",
  "37 / 45 / 37 / 45",
  "36 / 41 / 36 / 41",
  "41 / 42 / 41 / 42",
  "41 / 43 / 41 / 43",
  "41 / 44 / 41 / 44",
  "41 / 45 / 41 / 45",
  "46 / 40 / 46 / 40",
  "45 / 46 / 45 / 46",
  "45 / 47 / 45 / 47",
  "45 / 48 / 45 / 48",
  "45 / 49 / 45 / 49",
  "47 / 44 / 47 / 44",
  "48 / 44 / 48 / 44",
  "49 / 44 / 49 / 44",
  "50 / 44 / 50 / 44",
  "49 / 48 / 49 / 48",
  "46 / 15 / 46 / 15",
  "47 / 14 / 47 / 14",
  "47 / 16 / 47 / 16",
  "48 / 16 / 48 / 16",
  "49 / 16 / 49 / 16",
  "50 / 16 / 50 / 16",
  "45 / 14 / 45 / 14",
  "45 / 13 / 45 / 13",
  "45 / 12 / 45 / 12",
  "45 / 11 / 45 / 11",
  "48 / 13 / 48 / 13",
  "49 / 12 / 49 / 12",
  "52 / 31 / 52 / 31",
  "51 / 32 / 51 / 32",
  "53 / 32 / 53 / 32",
  "52 / 32 / 52 / 32",
  "52 / 33 / 52 / 33",
  "51 / 33 / 51 / 33",
  "50 / 33 / 50 / 33",
  "51 / 34 / 51 / 34",
  "49 / 34 / 49 / 34",
  "50 / 35 / 50 / 35",
  "54 / 33 / 54 / 33",
  "54 / 34 / 54 / 34",
  "53 / 34 / 53 / 34",
  "53 / 35 / 53 / 35",
  "55 / 34 / 55 / 34",
  "55 / 35 / 55 / 35",
  "54 / 36 / 54 / 36",
  "55 / 32 / 55 / 32",
  "56 / 31 / 56 / 31",
  "56 / 32 / 56 / 32",
  "56 / 33 / 56 / 33",
  "57 / 32 / 57 / 32",
  "57 / 33 / 57 / 33",
  "57 / 34 / 57 / 34",
  "58 / 33 / 58 / 33",
  "59 / 34 / 59 / 34",
  "58 / 35 / 58 / 35",
  "57 / 30 / 57 / 30",
  "58 / 31 / 58 / 31",
  "59 / 31 / 59 / 31",
  "58 / 29 / 58 / 29",
  "59 / 29 / 59 / 29",
  "58 / 30 / 58 / 30",
  "56 / 29 / 56 / 29",
  "55 / 28 / 55 / 28",
  "56 / 28 / 56 / 28",
  "56 / 27 / 56 / 27",
  "57 / 28 / 57 / 28",
  "57 / 27 / 57 / 27",
  "57 / 26 / 57 / 26",
  "58 / 27 / 58 / 27",
  "59 / 26 / 59 / 26",
  "58 / 25 / 58 / 25",
  "52 / 29 / 52 / 29",
  "53 / 28 / 53 / 28",
  "52 / 28 / 52 / 28",
  "51 / 28 / 51 / 28",
  "52 / 27 / 52 / 27",
  "51 / 27 / 51 / 27",
  "50 / 27 / 50 / 27",
  "51 / 26 / 51 / 26",
  "50 / 25 / 50 / 25",
  "49 / 26 / 49 / 26",
  "54 / 27 / 54 / 27",
  "55 / 26 / 55 / 26",
  "55 / 25 / 55 / 25",
  "53 / 26 / 53 / 26",
  "53 / 25 / 53 / 25",
  "54 / 26 / 54 / 26",
  "54 / 24 / 54 / 24"
];

const SymbolOfBathingFire = () => {
  return (
    <GridContainer
      rows="8px"
      columns="8px"
      rowsSm="12px"
      columnsSm="12px"
      rowsMd="16px"
      columnsMd="16px"
    >
      {gridAreas.map(area => {
        return <GridBlock key={area} gridArea={area} />;
      })}
    </GridContainer>
  );
};

export default SymbolOfBathingFire;