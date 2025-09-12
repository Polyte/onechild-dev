/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

import java.util.Scanner;
/**
 *
 * @author hlanganani
 */
public class ConsoleTicTacToe {

    private char[][] board;
    private char currentPlayer;
    private boolean gameFinished;
    private int moveCount; // Added missing variable declaration
    
    public ConsoleTicTacToe() {
        board = new char[3][3];
        currentPlayer = 'x';
        gameFinished = false;
        moveCount = 0; // Initialize moveCount
        
        initializeBoard();
        
    }
    
    private void initializeBoard() {
      for (int i = 0; i < 3; i++) {
          for (int j = 0; j < 3; j++){
              board[i][j] = ' ';
          }
      }
    }
    
    // Print current of the board
    
    private void printBoard() {
        System.out.println("-----------------------------");
        for(int i = 0; i < 3; i++) {
            System.out.print("| ");
           for(int j = 0; j < 3; j++) {
               System.out.print(board[i][j] + " | ");
               
           }
           System.out.println();
           System.out.println("-----------------------------");
           
        }
    }
     
  // Check if any moves made are valid
    private boolean isValidMove(int row, int col) {
        return row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] == ' ';
    }
    
    // do the move
    private void makeMove(int row, int col) {
        if (isValidMove(row, col)) {
            board[row][col] = currentPlayer;
            moveCount++;
        }
        
    }
    
    // Check if the game has been won by player
    
    private boolean checkWin() {
        
        // Checks row for a win
       for(int i = 0; i < 3; i++) { 
           if (board[i][0] != ' ' && board[i][0] == board[i][1] && board[i][1] == board[i][2]) { // Fixed syntax error
               return true;
           }
       }
       
       // Check columns for a win
       
       for(int j = 0; j < 3; j++) { 
           if (board[0][j] != ' ' && board[0][j] == board[1][j] && board[1][j] == board[2][j]) { // Fixed column logic
               return true;
           }
       }
        
       // Check diagonal (top-left to bottom-right)
       if (board[0][0] != ' ' && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
           return true;
       }
       
       // Check diagonal (top-right to bottom-left)
        if (board[0][2] != ' ' && board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
           return true;
       }
        
       return false;
       
    }
    
    // Check if the game is a draw
    
    private boolean checkDraw() {
        return moveCount == 9 && !checkWin();
        
    }
    
    // Switch players of the game
    private void switchPlayer() {
        currentPlayer = (currentPlayer == 'x') ? 'O' : 'x';
        
    }
    
    // Play the game now
    
    public void play() {
        
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Welcome to TicTacToe!!!");
        System.out.println("Enter number of row & columns (0-2) separated by space");
        
        while(!gameFinished) {
            printBoard();
            System.out.println("Player " + currentPlayer + "'s turn.");
            
            int row,col;
            while(true) {
                System.out.print("Enter your move (row column): ");
                
                try {
                    row = scanner.nextInt();
                    col = scanner.nextInt();
                    
                    if (isValidMove(row, col)) {
                        break;
                    }
                    else {
                        System.out.println("Error, wrong move made, try again bro!!!");
                        
                    }
                }
                catch (Exception e) {
                    System.out.println("Please enter valid number between (0-2)!");
                    scanner.nextLine();
                    
                    
                }
            }
            
            makeMove(row, col);
            
            if (checkWin()) {
                
                printBoard();
                System.out.println("Player " + currentPlayer + " wins!");
                gameFinished = true;
                
                
            }
            else if (checkDraw()) {
                printBoard();
                System.out.println("It's a draw!");
                gameFinished = true;
                
            }
            else {
                switchPlayer();
            }
            
                
        }
        scanner.close(); // Added to close scanner resource
    }
}