import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {

  const [turn, setTurn] = React.useState("x");
  const [cells, setCells] = React.useState(Array(9).fill(" "));
  const [winner, setWinner] = React.useState('No one')
  const [draw, setDraw] = React.useState("")

  const checkWinner = (arr) => {



    const chances = [[0, 1, 2], [0, 3, 6], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]]

    for (let chance in chances) {

      if ((arr[chances[chance][0]] === arr[chances[chance][1]]) && (arr[chances[chance][0]] === arr[chances[chance][2]]) && (arr[chances[chance][0]] !== " ")) {

        if (arr[chances[chance][0]] === "x") {
          setWinner("x")
          alert(`X won the game. do you want to play again?`)
          setCells(Array(9).fill(" "))
        }

        if (arr[chances[chance][0]] === "o") {
          setWinner("o")
          alert(`O won the game. do you want to play again?`)
          setCells(Array(9).fill(" "))
        }





      }

    }

    if (!arr.includes(" ")) {
      setWinner("Draw")
      alert(`Draw . do you want to play again?`)
      setCells(Array(9).fill(" "))
    }




  }


  const handleClick = (num) => {

    if (cells[num] !== " ") {
      alert("already clicked")
      return;
    }
    let squares = [...cells]

    if (turn === "x") {
      squares[num] = "x";
      setTurn("o");
    }

    else {
      squares[num] = "o";
      setTurn("x");
    }

    setCells(squares)
    checkWinner(squares)

  }

  const Box = ({ num }) => {
    return (
      <div style={{ height: "100px", width: "100px", border: "2px solid black", fontSize: "30px", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => handleClick(num)}>{cells[num]}</div>
    )
  }

  return (
    <>
      <center><span style={{ fontSize: "30px" }}>turn:{turn}</span></center>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", width: "400px", margin: "auto auto", marginTop: "4em" }}>
        <Box num={0} />
        <Box num={1} />
        <Box num={2} />
        <Box num={3} />
        <Box num={4} />
        <Box num={5} />
        <Box num={6} />
        <Box num={7} />
        <Box num={8} />
      </div>

      <center><h2>Previous Winner : {winner}</h2></center>
    </>
  );
}

export default App;
