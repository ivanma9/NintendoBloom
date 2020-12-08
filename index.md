<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Nintendo Bloom</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
    <nav>
        <ul>
          <li><a href="./index.html">Navigation</a></li>
          <li><a href="./user_profile.html">Profile</a></li>
          <li><a href="#">Links</a></li>
        </ul>
      </nav>
    <div class="subsection">
        <div>
            Click the button below to do nothing!
        </div>

    </div>


    <div class="subsection">
        <div>
             <b>Pokedex Search:</b> Input a pokemon name below.
        </div>
        <input id="input-number" placeholder="Enter pokemon name">
        <button class="btn" id="poke-btn">Click to find pokemon</button>
        <div class="fact" id="poke-fact"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
