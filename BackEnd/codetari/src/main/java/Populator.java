import com.codetari.Model.Game;
import com.codetari.Model.qA;
import com.codetari.Repository.GameRepository;
import com.codetari.Repository.qARepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    private GameRepository gameRepo;
    private qARepository qARepo;



    public Populator(GameRepository gameRepo, qARepository qARepo) {
        this.gameRepo = gameRepo;
        this.qARepo = qARepo;
    }

    @Override
    public void run(String... args) throws Exception {
        Game game1 = new Game("Clicker",5, "what are the OOP","Java", 2);
        qA qALevel2_1 = new qA("What are the 5 principles of OOP", "Answer", "wrong","wrong");

    }
}
