import React from 'react';
import { View, StyleSheet } from 'react-native';

interface GridProps {
  rows: number;
  cols: number;
  filledCells: number;
}

const Grid: React.FC<GridProps> = ({ rows, cols, filledCells }) => {
  const getRandomIndices = (count: number, max: number) => {
    const indices = new Set<number>();
    while (indices.size < count) {
      const randomIndex = Math.floor(Math.random() * max);
      indices.add(randomIndex);
    }
    return indices;
  };

  const createGrid = () => {
    const totalCells = rows * cols;
    const filledIndices = getRandomIndices(filledCells, totalCells);
    let grid = [];
    let cellIndex = 0;

    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        const isFilled = filledIndices.has(cellIndex);
        row.push(
          <View
            key={`${i}-${j}`}
            style={[styles.cell, isFilled && styles.filledCell]}
          ></View>
        );
        cellIndex++;
      }
      grid.push(
        <View key={i} style={styles.row}>
          {row}
        </View>
      );
    }
    return grid;
  };

  return <View style={styles.grid}>{createGrid()}</View>;
};

const styles = StyleSheet.create({
  grid: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 15,
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'blue',
  },
  filledCell: {
    backgroundColor: 'green',
  },
});

export default Grid;
