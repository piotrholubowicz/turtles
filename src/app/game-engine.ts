import { Game, Color } from './game';

export class GameEngine {
    playCard(game: Game, card_id: number, color: Color) {
    let field = 0;
    let pos = 0;
    for (field=0; field<game.board.length; field++) {
      for (pos=0; pos<game.board[field].length; pos++) {
        if (game.board[field][pos] == color) {
          break;
        }
      }
    }
  }

}