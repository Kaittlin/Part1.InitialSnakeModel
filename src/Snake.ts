import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
   private currentPosition: number;
   private currentDirection: number;
   private color:string;
    constructor(snakeColor: string) {
      this.currentPosition = 0;
      this.currentDirection = 1;
      this.color = snakeColor;
    }
    public move(numOfSquares: number) {
      if (this.currentDirection = 1){
        this.currentPosition + numOfSquares;
      } else {
        if (this.currentDirection = -1){
          this.currentPosition - numOfSquares;
        }
      }
    }
    public turn(changeDirection:number){
      if (changeDirection = 1){
        this.currentDirection = 1;
      } else {
        if(changeDirection = -1){
          this.currentDirection = -1;
        }
      }
    }
      public get position(){
        return this.currentPosition;
      }
}   
export default Snake;
