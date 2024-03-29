import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.*;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class HangulServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        int length = Integer.parseInt(request.getParameter("length_slider"));
        int difficulty = Integer.parseInt(request.getParameter("difficulty"));

        // Make a request to Flask app
        String flaskUrl = "http://localhost:4848/generate_word?length_word=" + length + "&difficulty=" + difficulty;
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest httpRequest = HttpRequest.newBuilder()
                .uri(URI.create(flaskUrl))
                .build();

        try {
            HttpResponse<String> httpResponse = client.send(httpRequest, HttpResponse.BodyHandlers.ofString());

            // Parse the JSON response from Flask
            String responseBody = httpResponse.body();
            String[] parts = responseBody.split("\"");
            String koreanWord = parts[3];
            String romanizedWord = parts[7];

            // Construct a JSON object
            String jsonResponse = "{\"koreanWord\": \"" + koreanWord + "\", \"romanizedWord\": \"" + romanizedWord + "\"}";

            // Set response headers
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");

            // Write JSON response to the output stream
            PrintWriter out = response.getWriter();
            out.print(jsonResponse);
            out.flush();

            // Log the generated word to the CSV file
            logToCSV(length, difficulty);

        } catch (Exception e) {
            e.printStackTrace();
            // Handle the exception by sending an error JSON response if needed
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            PrintWriter out = response.getWriter();
            out.print("{\"error\": \"" + e.getMessage() + "\"}");
            out.flush();
        }
    }

    private void logToCSV(int length, int difficulty) {
        try {
            // Get the current timestamp
            LocalDateTime now = LocalDateTime.now();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            String timestamp = now.format(formatter);

            // Append the log entry to the CSV file
            String logEntry = length + "," + difficulty + "," + timestamp + "\n";
            String csvFilePath = getServletContext().getRealPath("/") + "WEB-INF/classes/word_logs.csv";

            try (FileWriter fileWriter = new FileWriter(csvFilePath, true);
                 BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
                 PrintWriter writer = new PrintWriter(bufferedWriter)) {

                writer.write(logEntry);
            } catch (IOException e) {
                e.printStackTrace();
                // Handle the exception, you may want to log it or send an error response
            }

        } catch (Exception e) {
            e.printStackTrace();
            // Handle the exception, you may want to log it or send an error response
        }
    }
}