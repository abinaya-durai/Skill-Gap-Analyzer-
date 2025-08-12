<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Skill Gap Analyzer</title>
</head>
<body>
  <h1>Skill Gap Analyzer</h1>
  
  <label>Your Skills (comma separated):</label><br>
  <input id="userSkills" type="text" placeholder="Java, HTML, Python"><br><br>
  
  <label>Required Skills (comma separated):</label><br>
  <input id="requiredSkills" type="text" placeholder="Java, JavaScript, SQL"><br><br>
  
  <button onclick="analyzeGap()">Analyze</button>
  
  <h2>Result:</h2>
  <div id="result"></div>

  <script>
    function analyzeGap() {
      let userInput = document.getElementById("userSkills").value;
      let requiredInput = document.getElementById("requiredSkills").value;
      
      let userSkills = userInput.split(",").map(s => s.trim().toLowerCase()).filter(s => s);
      let requiredSkills = requiredInput.split(",").map(s => s.trim().toLowerCase()).filter(s => s);
      
      let missing = requiredSkills.filter(skill => !userSkills.includes(skill));
      
      let resultDiv = document.getElementById("result");
      if (missing.length === 0) {
        resultDiv.innerHTML = "<p style='color:green;'>You meet all required skills!</p>";
      } else {
        resultDiv.innerHTML = "<p style='color:red;'>You are missing these skills: <b>" + missing.join(", ") + "</b></p>";
      }
    }
  </script>
</body>
</html>
