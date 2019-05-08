package quizServlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "QuizServlet")
public class quiz extends HttpServlet {
    private static String[] questions = {
            "3, 1, 4, 1, 4",
            "1 ,1 2, 3, 5",
            "1, 4, 9, 16, 25",
            "2, 3, 5, 7, 11",
            "1, 2, 4, 8, 16"
    };
    private static int[] answers = {
            9, 8, 36, 13, 32
    };
    private static int score = 0;
    private static int answer = 0;
    private static int count = 0;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession(false);
        PrintWriter out = response.getWriter();
        Integer answer = Integer.parseInt(request.getParameter("answer"));
        if (answer.equals(answers[count])) {
            score++;
        }
        if (count < 5) {
            count++;
        }
        createQuiz(out);
    }

    private void createQuiz(PrintWriter out) {
        out.print("<html><head><title>Test</title></head><body>");
        out.print("<h1>The Number Quiz </h1><br><br>");
        out.print("<br>Your current scoreis <br>" + score);
        out.print("<br>Guess the next number in the sequence<br>");
        out.print(questions[count]);
        out.print("<br>");
        out.print("<form action=\"\" method=\"post\"><br>" +
                "<input type=\"text\" name=\"answer\" size=\"3\"> <br>" +
                "<input type=\"submit\"><br>" +
                "</form>");
        out.print("</body></html>");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        HttpSession session = request.getSession(false);
        session.setAttribute("count", count);
        createQuiz(out);
    }
}
