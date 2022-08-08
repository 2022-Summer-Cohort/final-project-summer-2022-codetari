package com.codetari;

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
        Game game1 = new Game("Clicker",5, "what are the 4 principles of OOP","Java", 1);
        gameRepo.save(game1);
        Game game2 = new Game("REST",3, "what is a rest based web service","C#", 4);
        gameRepo.save(game2);
        Game game3 = new Game("Word Problem",5, "why do we use MVC",".NET", 7);
        gameRepo.save(game3);


        qA qALevel1_1 = new qA("What are the principles of OOP", "Abstraction,Encapsulation,Inheritance,Polymorphism", game1, "Java","1","TDD,Abstraction","None of the Above");
        qARepo.save(qALevel1_1);
        qA qALevel2_1 = new qA("A protected member of the class is accessible in?", "Same class and derived class", game1, "Java", "1","Outside the class"," Only same class");
        qARepo.save(qALevel2_1);
        qA qALevel3_1 = new qA("What is the size of boolean variable?", "16 bit", game1, "Java", "1", "32 bit","8 bit");
        qARepo.save(qALevel3_1);
        qA qALevel4_1 = new qA("Which of the following is true about String?", "String is immutable", game1, "Java","1"," String is a data type.","String is mutable");
        qARepo.save(qALevel4_1);
        qA qALevel5_1 = new qA("What are Wrapper classes?", "These are classes that allow primitive types to be accessed as objects", game1, "Java","1"," These are classes that wraps functionality of an existing class","classes that allow you to wrap objects");
        qARepo.save(qALevel5_1);
        qA qALevel6_1 = new qA("What is correct syntax for main method of a java class?", "public static void main(String[] args)", game1, "Java","1","public static int main(String[] args)","public int main(String[] args)");
        qARepo.save(qALevel6_1);
        qA qALevel7_1 = new qA("What is the size of float variable?", "32 bit", game1,"Java","1", "16 bit","8 bit");
        qARepo.save(qALevel7_1);
        qA qALevel8_1 = new qA("What is the default value of long variable?", "- 0L", game1,"Java","1", " 0.0","- 0");
        qARepo.save(qALevel8_1);
        qA qALevel9_1 = new qA("What is an Interface?", " Interface is an concrete class.", game1, "Java","1"," Interface is an abstract class.","An interface is a collection of abstract methods.");
        qARepo.save(qALevel9_1);
        qA qALevel10_1 = new qA("What is JIT compiler?", " JIT improves the runtime performance of computer programs based on bytecode.", game1, "Java","1","JIT is an application development framework.","JIT is an implementation of the Java Virtual Machine which executes Java programs.");
        qARepo.save(qALevel10_1);



        qA qALevel12_1 = new qA(" Which of the following preprocessor directive marks the end of a #region block in C#?", "endregion", game2, "C#", "1","region","error");
        qARepo.save(qALevel12_1);
        qA qALevel13_1 = new qA("Which keyword is used to refer baseclass constructor to subclass constructor?", "Base", game2, "C#", "1","Static","Extend");
        qARepo.save(qALevel13_1);
        qA qALevel14_1 = new qA("  Which of the following variable types can be assigned a value directly in C#?", "Value types", game2, "C#", "1","Pointer types","Reference types");
        qARepo.save(qALevel14_1);
        qA qALevel15_1 = new qA(" Which of the following converts a type to a string in C#?", "ToString", game2,"C#", "1", "ToChar"," ToSingle");
        qARepo.save(qALevel15_1);
        qA qALevel16_1 = new qA(" Which of the following operator returns the size of a data type in C#?", "sizeof", game2,"C#", "1", "typeof"," ToSingle");
        qARepo.save(qALevel16_1);
        qA qALevel17_1 = new qA("Which of the following preprocessor directive lets you modify the compiler's line number and (optionally) the file name output for errors and warnings in C#?", " line", game2,"C#", "1", "endif","elif");
        qARepo.save(qALevel17_1);
        qA qALevel18_1 = new qA("Which of the following defines boxing correctly??", " When a value type is converted to object type, it is called boxing.", game2,"C#", "1", "When an object type is converted to a value type, it is called boxing."," None of the above.");
        qARepo.save(qALevel18_1);
        qA qALevel19_1 = new qA("The process of defining two or more methods within the same class that have same name but different parameters list?", "Method overloading", game2,"C#", "1", "Method overriding"," Encapsulation");
        qARepo.save(qALevel19_1);
        qA qALevel20_1 = new qA("Which of these can be overloaded?", "Both Constructors & Methods", game2, "C#", "1","Methods."," Constructors");
        qARepo.save(qALevel20_1);
        qA qALevel21_1 = new qA("What is the process of defining a method in terms of itself, that is a method that calls itself?", " Recursion", game2,"C#", "1", "Polymorphism.","Abstraction");
        qARepo.save(qALevel21_1);


        qA qALevel22_1 = new qA("CLR is the .NET equivalent of? ", "Java Virtual Machine", game3, ".Net","1", "Common Language Runtime","Common Type System");
        qARepo.save(qALevel22_1);
        qA qALevel23_1 = new qA("SOAP stands for?", "Simple Object Access Protocol", game3, ".Net","1", "Simple Object Application Protocol","Simple Object Account Protocol");
        qARepo.save(qALevel23_1);
        qA qALevel24_1 = new qA("Which of the following is the root of the .NET type hierarchy?", "System.Object", game3, ".Net","1", "System.Base","System.Root");
        qARepo.save(qALevel24_1);
        qA qALevel25_1 = new qA(" How does assembly versioning in .NET prevent DLL Hell?", ".NET allows assemblies to specify the name AND the version of any assemblies they need to run.", game3, ".Net","1", "The compiler offers compile time checking for backward compatibility.","The runtime checks to see that only one version of an assembly is on the machine at any one time.");
        qARepo.save(qALevel25_1);
        qA qALevel26_1 = new qA("Which of the following .NET components can be used to remove unused references from the managed heap?", "Garbage Collector", game3, ".Net","1", "Class Loader","CTS");
        qARepo.save(qALevel26_1);
        qA qALevel27_1 = new qA("Which of the following object is not an ASP component?", "LinkCounter", game3, ".Net","1", "AdRotator","File Access");
        qARepo.save(qALevel27_1);
        qA qALevel28_1 = new qA("What class does the ASP.NET Web Form class inherit from by default?", "System.Web.UI.Page", game3,  ".Net","1","System.Web.UI.Form"," System.Web.GUI.Page");
        qARepo.save(qALevel28_1);
        qA qALevel29_1 = new qA("File extension used for ASP.NET files.", ".ASP", game3, ".Net","1", ".ASPX",".Web");
        qARepo.save(qALevel29_1);
        qA qALevel30_1 = new qA("Default Session data is stored in ASP.Net.", "InProcess", game3,  ".Net","1","Session Object","StateServer");
        qARepo.save(qALevel30_1);
        qA qALevel31_1 = new qA("Default scripting language in ASP.", " VBScript", game3,  ".Net","1",".Net", "1","JavaScript","EcmaScript");
        qARepo.save(qALevel31_1);

        qA qALevel32_1 = new qA("What does HTML stand for?", "Hyper Text Markup Language", game1, "HTML", "1", "HybeBeast To Make Langauge", "Hyper Tonic Master Liquid","HamSammich Tower Mastery Lady" );
        qARepo.save(qALevel32_1);
        qA qALevel33_1 = new qA("What does HTML do?", "create Web Pages", game1, "HTML", "1", "get you ladies", "serve as a template for backend","Makes websites look pretty" );
        qARepo.save(qALevel33_1);
        qA qALevel34_1 = new qA("What is an HTML Element?", "everything from start tag to end tag", game1, "HTML", "1", "Earth,Wind,and Fi-yah!", "the designators between <> ie <p> = p =element","you can only master one, unless you're the Avatar" );
        qARepo.save(qALevel34_1);
        qA qALevel35_1 = new qA("Content inside the body will...", "be displayed in the browser", game1, "HTML", "1", "not be shamed, it's the 2020's bro", "be more popular if curvacious and bodacious","run in the backend to create functions" );
        qARepo.save(qALevel35_1);
        qA qALevel36_1 = new qA("What does HTML stand for?", "Hyper Text Markup Language", game1, "HTML", "1", "HybeBeast To Make Langauge", "Hyper Tonic Master Liquid","HamSammich Tower Mastery Lady" );
        qARepo.save(qALevel36_1);
        qA qALevel37_1 = new qA("What symbol creates the 'boilerplate'?", "!", game1, "HTML", "1", ">(^_^)> do eiiit", "","HamSammich Tower Mastery Lady" );
        qARepo.save(qALevel37_1);
    }
}