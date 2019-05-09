<%@ page import="java.util.*" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<body>
<h1 align="center">Beer Recomendations JSP </h1>


<%
	List styles = (List)request.getAttribute("styles");
	%>

<hr>
<c:forEach var="style" items="${styles}">
	<p>${style}</p>
</c:forEach>
<p>

<hr>


<%
//	String adminEmail = request.getAttribute("adminEmail").toString();
	Iterator it = styles.iterator();
	while(it.hasNext()) {
		out.print("<br>try: " + it.next());
	}
//	out.print("<br>" + "email " + adminEmail);
	%>
	
</body>
</html>
