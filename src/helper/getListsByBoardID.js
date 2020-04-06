export const getListsByBoardId = (boards, boardID) => {
  const board = boards[boardID];
  return board.lists;
};
