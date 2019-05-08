<%--
  Created by IntelliJ IDEA.
  User: emmanuell
  Date: 5/7/19
  Time: 8:56 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>JSP Test</title>
</head>
<body>
<H1>JSP Test</H1>
<form action="" method="post">
    Your current score is ${score}
    <br>
    Guess the next number in the sequence
    <br>
    ${questions[count]}
    <br>
    <input type="hidden" name="count" value="${count}">
    <input type="text" name="answer"><br>
    <input type="submit">
    <br>
    <h5>Question ${ 1 + count} / 5 </h5>
</form>
</body>
</html>
