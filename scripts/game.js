
var gameRound = 0;
var gameText = $("#game-text");
var markers = ["O", "X"];
var marker = "X";
var gameOn = true;

// Start game
$(".start-btn").click(function() {

  if (gameRound === 0) {

    $(".btn").css("color", "#212121");
    $(".btn").text("Z");
    $(".btn").css("border-color", "#14FFEC");
    $(".start-btn").css("border-color", "#0D7377");
    $(".start-btn").css("color", "#0D7377");
    gameText.text(marker + "'s turn");
    gameText.css("font-size", "3rem");
    gameText.css("padding", "1.5%");
    gameRound++;

  };

});

// Space clicked by player
$(".btn").click(function() {

  if (gameOn) {

    var space = $(this);

    if (gameRound > 0 && checkSpaceFull(space.text())) {
      gameText.text("Space Full! Please try another space.");
    } else if (gameRound > 0) {
      space.text(marker);
      space.css("color", "#14FFEC");

      if (checkWinner(marker)) {
        gameText.text(marker + " wins! Refresh to play again");
        gameOn = false;
      } else {
        if (checkBoardFull()) {
          gameText.text("DRAW! Refresh to play again");
          gameOn = false;
        } else {
          gameRound++;
          marker = markers[gameRound % 2];
          gameText.text(marker + "'s turn");
        };
      };

    };

  }

});

// Check winner function
function checkWinner(marker) {

  var markerWins = false;

  var winningCombo = marker + marker + marker;

  if ($(".top-row").text() === winningCombo) {
    $(".top-row").css("background-color", "green");
    markerWins = true;
  } else if ($(".middle-row").text() === winningCombo) {
    $(".middle-row").css("background-color", "green");
    markerWins = true;
  } else if ($(".bottom-row").text() === winningCombo) {
    $(".bottom-row").css("background-color", "green");
    markerWins = true;
  } else if ($(".left-col").text() === winningCombo) {
    $(".left-col").css("background-color", "green");
    markerWins = true;
  } else if ($(".middle-col").text() === winningCombo) {
    $(".middle-col").css("background-color", "green");
    markerWins = true;
  } else if ($(".right-col").text() === winningCombo) {
    $(".right-col").css("background-color", "green");
    markerWins = true;
  } else if ($(".diag-1").text() === winningCombo) {
    $(".diag-1").css("background-color", "green");
    markerWins = true;
  } else if ($(".diag-2").text() === winningCombo) {
    $(".diag-2").css("background-color", "green");
    markerWins = true;
  };

  return markerWins;

};

// Check board full function
function checkBoardFull() {

  var boardFull = true;
  var boardString = $(".btn").text();

  for (var i = 0; i < 9; i++) {
    if (boardString[i] != "X" && boardString[i] != "O") {
      boardFull = false;
    };
  };

  return boardFull;

};

// Check space full function
function checkSpaceFull(spaceText) {

  var spaceFull = false;

  if (spaceText === "X" || spaceText === "O") {
    spaceFull = true;
  };

  return spaceFull;

};
