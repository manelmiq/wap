package com.jsptagsdemo.web;

import com.jsptagsdemo.model.Student;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "TableServlet")
public class TableServlet extends HttpServlet {
    static final long serialVersionUID = 0;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        RequestDispatcher dispatcher =
                request.getRequestDispatcher("table.jsp");
        dispatcher.forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Student[] students = new Student[]
                {
                        new Student("john", 28),
                        new Student("mary", 27),
                        new Student("molly", 26),
                        new Student("holly", 25),
                        new Student("ana", 18)
                };
        request.setAttribute("students", students);
        RequestDispatcher dispatcher = request.getRequestDispatcher("table.jsp");
        dispatcher.forward(request, response);
    }
}
