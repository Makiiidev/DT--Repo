
    function createCounter() {
      let count = 0; 

      return {
        add: function() {
          count++;
          return count;
        },
        subtract: function() {
          count--;
          return count;
        },
        reset: function() {
          count = 0;
          return count;
        }
      };
    }

    const counter = createCounter();

    function updateDisplay(value) {
      document.getElementById("count").textContent = value;
    }

    function add() {
      updateDisplay(counter.add());
    }

    function subtract() {
      updateDisplay(counter.subtract());
    }

    function resetCounter() {
      updateDisplay(counter.reset());
    }

    hoistedExample();
    function hoistedExample() {
      console.log("This function is hoisted!");
    }

    {
      let x = 10;
      console.log("Inside block scope x =", x);
    }
 