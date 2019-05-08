package calculator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "CalculatorServlet")
public class CalculatorServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.print("<html><head><title>Test</title></head><body>");
        Integer s1 = null;
        Integer s2 = null;
        Integer m1 = null;
        Integer m2 = null;
        Integer sum = null;
        Integer mum = null;
        try {
            s1 = Integer.parseInt(request.getParameter("s1"));
            s2 = Integer.parseInt(request.getParameter("s2"));
            m1 = Integer.parseInt(request.getParameter("m1"));
            m2 = Integer.parseInt(request.getParameter("m2"));
        } catch (NumberFormatException e) {
            out.println("You enter some invalid numbers");
        }
        if (s1 != null && s2 != null) {
            sum = s1 + s2;
        }
        if (m1 != null && m2 != null) {
            mum = m1 * m2;
        }
        out.print("<form action=\"\" method=\"post\">\n" +
                "    <input type=\"text\" name=s1 value=\"" + s1 + "\" >"
                + " + <input type=\"text\" name=s2 value=\"" + s2 + "\">\n"
                + " = <input type=\"text\" name=sum value=\"" + sum + "\">\n"
                + "  <br>\n" +
                "    <input type=\"text\" name=m1 value=\"" + m1 + "\" >"
                + " * <input type=\"text\" name=m2 value=\"" + m2 + "\">\n"
                + " = <input type=\"text\" name=mum value=\"" + mum + "\">\n"
                + " <br>   <input type=\"submit\">\n" +
                "</form>\n");
        out.print("</body></html>");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.print("<html><head><title>Test</title></head><body>");
        out.print("<form action=\"\" method=\"post\">\n" +
                "    <input type=\"text\" pattern='[0-9]*' name=s1> + <input type=\"text\" name=s2>\n" +
                "    <br>\n" +
                "    <input type=\"text\" pattern='[0-9]*' name=m1> * <input type=\"text\" name=m2>\n" +
                "    <br>\n" +
                "    <input type=\"submit\">\n" +
                "</form>\n");
        out.print("</body></html>");
    }
}
