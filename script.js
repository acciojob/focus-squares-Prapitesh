const squares = document.querySelectorAll(".square");

squares.forEach(square => {
  square.addEventListener("mouseover", () => {
    squares.forEach(sq => {
      sq.style.backgroundColor = "#6F4E37"; // Coffee
    });

    square.style.backgroundColor = "#E6E6FA"; // Lavender
  });
});
