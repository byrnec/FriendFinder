### File

* *None*

### Instructions

* Create a website (from scratch) that asks users if they eat steak.

* If they respond with "yes", write the following to the page: "Here’s a Steak Sandwich!"

* If they respond with "no", write the following to the page: "Here’s a Tofu Stir-Fry!"

* **BONUS:** Ask what the user’s birth year is. If they are under 21, alert the following: "No Sake for you!"

* **HINT:** You will need to use `document.write()` from a few slides back.
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8">
    <title>Conditional Demo</title>
  </head>
  <body>

    <script type="text/javascript">

      // Here we create our prompt and confirm variables which will store user input.
      var confirmSushi = confirm("Do you like sushi?");
      var confirmGingerTea = confirm("Do you like Ginger Tea?");
      var sushiType = prompt("What kind of sushi do you like?");

      // If the user likes sushi (confirmSushi === true), we run the following block of code.
      if (confirmSushi) {
        alert("You like " + sushiType + "!");
      }
      // If the user likes ginger tea (confirmGingerTea === true), we run the following block of code.
      else if (confirmGingerTea) {
        alert("You like ginger tea!!");
      }
      // If neither of the previous condition were true, we run the following block of code.
      else {
        document.write("You don't like sushi or ginger tea.");
      }

    </script>

  </body>
</html>
