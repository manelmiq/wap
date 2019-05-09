package example.web;

import example.model.*;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class BeerSelect extends HttpServlet {
	
	public void doPost(HttpServletRequest request,
					HttpServletResponse response)
					throws IOException, ServletException {
						
		String c = request.getParameter("color");
		BeerExpert be = new BeerExpert();
		List result = be.getBrands(c);
		
	//	response.setContentType("text/html");
	//	PrintWriter out = response.getWriter();
	//	out.println("Beer Selection Advice<br>");
	
//		ServletContext context = getServletContext();
//		String adminEmail = context.getInitParameter("adminEmail");
		
		request.setAttribute("styles", result);
//		request.setAttribute("adminEmail", adminEmail);
		
		RequestDispatcher view = request.getRequestDispatcher("result.jsp");
		view.forward(request,response);
		
	}		
}
