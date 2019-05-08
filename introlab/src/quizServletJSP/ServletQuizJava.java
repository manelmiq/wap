package quizServletJSP;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ServletQuizJava")
public class ServletQuizJava extends HttpServlet {
    private static String[] questions = {
            "3, 1, 4, 1, 4",
            "1 ,1 ,2, 3, 5",
            "1, 4, 9, 16, 25",
            "2, 3, 5, 7, 11",
            "1, 2, 4, 8, 16"
    };
    private static int[] answers = {
            9, 8, 36, 13, 32
    };
    private int score = 0;
    private int count = 0;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int count = 0;
        int answer = 0;
        String error_message = null;
        try {
            count = Integer.parseInt(request.getParameter("count"));
            answer = Integer.parseInt(request.getParameter("answer"));
        } catch (NumberFormatException e) {
            error_message = "You enter some invalid numbers";
        }
        if (answer == answers[count]) {
            score++;
        }
        if (count < 4) {
            count++;
        } else {
            RequestDispatcher requestDispatcherFinal = request.getRequestDispatcher("quiz/final.jsp");
            request.setAttribute("score", score);
            requestDispatcherFinal.forward(request, response);
            return;
        }
        request.setAttribute("questions", questions);
        request.setAttribute("count", count);
        request.setAttribute("error_message", error_message);
        request.setAttribute("score", score);
        RequestDispatcher requestDispatcher = request.getRequestDispatcher("quiz/index.jsp");
        requestDispatcher.forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("count", count);
        request.setAttribute("score", score);
        request.setAttribute("questions", questions);
        RequestDispatcher requestDispatcher = request.getRequestDispatcher("quiz/index.jsp");
        requestDispatcher.forward(request, response);
    }
}
