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
        Game game1 = new Game("Take Off",5, "what are the 4 principles of OOP","Java", 1, "Space", "./takeoff/takeoff.html");
        gameRepo.save(game1);
        Game game2 = new Game("Space Invaders",3, "what is a rest based web service","C#", 4, "Arcade", "./space-invaders/index.html");
        gameRepo.save(game2);
        Game game3 = new Game("Word Problem",5, "why do we use MVC",".NET", 7, "Classic", "./wp/wp.html");
        gameRepo.save(game3);


        qA qALevel1_1 = new qA("What are the principles of OOP", "Abstraction,Encapsulation,Inheritance,Polymorphism", game1, "Java","1","TDD,Abstraction","None of the Above", "Are you down with OOP??");
        qARepo.save(qALevel1_1);
        qA qALevel2_1 = new qA("A protected member of the class is accessible in?", "Same class and derived class", game1, "Java", "1","Outside the class"," Only same class", "Witness Protection");
        qARepo.save(qALevel2_1);
        qA qALevel3_1 = new qA("What is the size of boolean variable?", "16 bit", game1, "Java", "1", "32 bit","8 bit", "Nintendo 64bit");
        qARepo.save(qALevel3_1);
        qA qALevel4_1 = new qA("Which of the following is true about String?", "String is immutable", game1, "Java","1"," String is a data type.","String is mutable","Java can use it to make a sweater");
        qARepo.save(qALevel4_1);
        qA qALevel5_1 = new qA("What are Wrapper classes?", "These are classes that allow primitive types to be accessed as objects", game1, "Java","1"," These are classes that wraps functionality of an existing class","classes that allow you to wrap objects","Cavemen");
        qARepo.save(qALevel5_1);
        qA qALevel6_1 = new qA("What is correct syntax for main method of a java class?", "public static void main(String[] args)", game1, "Java","1","public static int main(String[] args)","public int main(String[] args)", "method:");
        qARepo.save(qALevel6_1);
        qA qALevel7_1 = new qA("What is the size of float variable?", "32 bit", game1,"Java","1", "16 bit","8 bit", "1 sandwichByte");
        qARepo.save(qALevel7_1);
        qA qALevel8_1 = new qA("What is the default value of long variable?", "- 0L", game1,"Java","1", " 0.0","- 0", "42");
        qARepo.save(qALevel8_1);
        qA qALevel9_1 = new qA("What is an Interface?", " Interface is an concrete class.", game1, "Java","1"," Interface is an abstract class.","An interface is a collection of abstract methods.", "My street BB nickname");
        qARepo.save(qALevel9_1);
        qA qALevel10_1 = new qA("What is JIT compiler?", " JIT improves the runtime performance of computer programs based on bytecode.", game1, "Java","1","JIT is an application development framework.","JIT is an implementation of the Java Virtual Machine which executes Java programs.", "JIT is how your Southern Grandma says 'get' ");
        qARepo.save(qALevel10_1);



        qA qALevel12_1 = new qA(" Which of the following preprocessor directive marks the end of a #region block in C#?", "endregion", game2, "C#", "1","region","error", "blahblahblah");
        qARepo.save(qALevel12_1);
        qA qALevel13_1 = new qA("Which keyword is used to refer baseclass constructor to subclass constructor?", "Base", game2, "C#", "1","Static","Extend","GoGoGadget");
        qARepo.save(qALevel13_1);
        qA qALevel14_1 = new qA("  Which of the following variable types can be assigned a value directly in C#?", "Value types", game2, "C#", "1","Pointer types","Reference types", "Romantic types");
        qARepo.save(qALevel14_1);
        qA qALevel15_1 = new qA(" Which of the following converts a type to a string in C#?", "ToString", game2,"C#", "1", "ToChar"," ToSingle", "");
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
        qA qALevel21_1 = new qA("What is the process of defining a method in terms of itself, that is a method that calls itself?", " Recursion", game2,"C#", "1", "Polymorphism.","Abstraction", "Inheritance");
        qARepo.save(qALevel21_1);


        qA qALevel22_1 = new qA("CLR is the .NET equivalent of? ", "Java Virtual Machine", game3, ".Net","1", "Common Language Runtime","Common Type System");
        qARepo.save(qALevel22_1);
        qA qALevel23_1 = new qA("SOAP stands for?", "Simple Object Access Protocol", game3, ".Net","1", "Simple Object Application Protocol","Simple Object Account Protocol", "what you should wash your mouth out with");
        qARepo.save(qALevel23_1);
        qA qALevel24_1 = new qA("Which of the following is the root of the .NET type hierarchy?", "System.Object", game3, ".Net","1", "System.Base","System.Root", "System.ofADown");
        qARepo.save(qALevel24_1);
        qA qALevel25_1 = new qA(" How does assembly versioning in .NET prevent DLL Hell?", ".NET allows assemblies to specify the name AND the version of any assemblies they need to run.", game3, ".Net","1", "The compiler offers compile time checking for backward compatibility.","The runtime checks to see that only one version of an assembly is on the machine at any one time.");
        qARepo.save(qALevel25_1);
        qA qALevel26_1 = new qA("Which of the following .NET components can be used to remove unused references from the managed heap?", "Garbage Collector", game3, ".Net","1", "Class Loader","CTS", "Yo Momma");
        qARepo.save(qALevel26_1);
        qA qALevel27_1 = new qA("Which of the following object is not an ASP component?", "LinkCounter", game3, ".Net","1", "AdRotator","File Access");
        qARepo.save(qALevel27_1);
        qA qALevel28_1 = new qA("What class does the ASP.NET Web Form class inherit from by default?", "System.Web.UI.Page", game3,  ".Net","1","System.Web.UI.Form"," System.Web.GUI.Page", "8th grade, the most evil of classes");
        qARepo.save(qALevel28_1);
        qA qALevel29_1 = new qA("File extension used for ASP.NET files.", ".ASP", game3, ".Net","1", ".ASPX",".Web", ".Java");
        qARepo.save(qALevel29_1);
        qA qALevel30_1 = new qA("Default Session data is stored in ASP.Net.", "InProcess", game3,  ".Net","1","Session Object","StateServer", "OutProcess");
        qARepo.save(qALevel30_1);
        qA qALevel31_1 = new qA("Default scripting language in ASP.", " VBScript", game3,  ".Net","1",".Net", "1","JavaScript","EcmaScript", "German");
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
        qA qALevel37_1 = new qA("What symbol creates the 'boilerplate'?", "!", game1, "HTML", "1", ">(^_^)> do eiiit", "%(*o*)%",":");
        qARepo.save(qALevel37_1);
        qA qALevel38_1 = new qA("how are headings defined?", "<h1> through <h6>", game1, "HTML", "1", "String Heading", "<Head> </Head>","'heading'" );
        qARepo.save(qALevel38_1);
        qA qALevel39_1 = new qA("how are paragraphs defined?", "<p> </p>", game1, "HTML", "1", "<P>", "<paragraph>","<pp>" );
        qARepo.save(qALevel39_1);
        qA qALevel40_1 = new qA("how are HTML links defined", "<a> tags", game1, "HTML", "1", "<link>", "<href> </href>","<HTML>" );
        qARepo.save(qALevel40_1);
        qA qALevel41_1 = new qA("What does an href attribute do?", "assign link destination", game1, "HTML", "1", "label an element", "provide ID","None Ya Bizzness if you wanna keep your kneecaps!" );
        qARepo.save(qALevel41_1);
        //Stopped in w3 schools after links in Basic category.

        qA qALevel42_1 = new qA("Python works on code that is executed as written through what system?", "interpreter", game1, "Python", "1", "a small man inside your computer who can barely read", "Ironman's Jarvis AI","readLiteral" );
        qARepo.save(qALevel42_1);
        qA qALevel43_1 = new qA("What way doesn't Python work in?", "procrastination", game1, "Python", "1", "procedural", "object oriented","functional" );
        qARepo.save(qALevel43_1);
        qA qALevel44_1 = new qA("How do you complete a command/statement in Python?", "new line", game1, "Python", "1", ";", ":","." );
        qARepo.save(qALevel44_1);
        qA qALevel45_1 = new qA("How do you define scope in Python?", "indentation/white space", game1, "Python", "1", "{}", "()","Merriam Webster's Dictionary" );
        qARepo.save(qALevel45_1);
        qA qALevel46_1 = new qA("What happens if you skip indentation in Python?", "will result in error", game1, "Python", "1", "Grudge Girl crawls out of your monitor", "It will try to read code as best as possible","Nothing" );
        qARepo.save(qALevel46_1);
        qA qALevel47_1 = new qA("what is the command for declaring a variable in Python?", "there isn't one", game1, "Python", "1", "var", "variable","!" );
        qARepo.save(qALevel47_1);
        qA qALevel48_1 = new qA("which is an example of declaring a variable in Python?", "x = 1", game1, "Python", "1", "var = string", "int long = 5","'in a southern accent'+ I DO DECLARE!!" );
        qARepo.save(qALevel48_1);
        qA qALevel49_1 = new qA("How do you start a comment in Python?", "#", game1, "Python", "1", "//", "\\","/('>')/" );
        qARepo.save(qALevel49_1);
        qA qALevel50_1 = new qA("What is Python?", "computer coding language", game1, "Python", "1", "a small bird", "super duper complicated","Stop asking me questions!!!" );
        qARepo.save(qALevel50_1);
        qA qALevel51_1 = new qA("What is the Syntax for multi line comments in Python?", "There technically isn't one ", game1, "Python", "1", "/# #/", "#' '#","comment#()" );
        qARepo.save(qALevel51_1);
        //stopped at python comments in w3 schools.

        qA qaLevel52_1 = new qA("To add an element to the end of an array you use?", "push()", game1, "pop()", "add()");
        qARepo.save(qaLevel52_1);
        qA qaLevel53_1 = new qA("What is the intruder?", "mousein", game1, "mouseover", "mouseout");
        qARepo.save(qaLevel53_1);
        // qA qaLevel54_1 = new qA("Inside which HTML element do we put the JavaScript?", "<script>", game1, " <js>", "<javascript>");
        // qARepo.save(qaLevel54_1);
        qA qaLevel55_1 = new qA("When we don't assign a value to a variable it will be?", "undefined", game1, "null", "NaN");
        qARepo.save(qaLevel55_1);
        // qA qaLevel56_1 = new qA("What is the correct syntax for referring to an external script called xxx.js?", "<script src = 'xxx.js'>", game1, "<script name = 'xxx.js>'","<script href = 'xxx.js>'");
        // qARepo.save(qaLevel56_1);
        qA qaLevel57_1 = new qA("How do we use strict mode in javascript?", "use strict", game1, "use sloppy", "use relaxed");
        qARepo.save(qaLevel57_1);
        qA qaLevel58_1 = new qA("what does Json stand for?", "javascript object notation", game1, "javascript open number", "JSON Deruuuuloo");
        qARepo.save(qaLevel58_1);
        qA qaLevel59_1 = new qA("JavaScript has 3 types of scope?", "Global scope", game1, "function scope", "variable scope");
        qARepo.save(qaLevel59_1);
        qA qaLevel60_1 = new qA("Who created JavaScript language?", " Brendan Eich", game1, "Douglas Crockford", "James Gosling");
        qARepo.save(qaLevel60_1);
        qA qaLevel61_1 = new qA("How do you declare a JavaScript variable x?", "let x;", game1, "variable x;", "define x;");
        qARepo.save(qaLevel61_1);
        //w3schools Javascript as reference

        qA qALevel70_1 = new qA("What does CSS stand for", "Cascading Style Sheet ", game1, "CSS", "1", "Can't Stop won' Stop!", "Carefully scripted styles","crazy stylish sheetz" );
        qARepo.save(qALevel70_1);
        qA qALevel71_1 = new qA("What does CSS do?", "describes how HTML elements are displayed on screen ", game1, "CSS", "1", "changes elements in the HTML index", "Finally makes your parents proud of you","creates methods and functions" );
        qARepo.save(qALevel71_1);
        qA qALevel72_1 = new qA("how do you choose an element to interact with?", "a selector ", game1, "CSS", "1", "Creating it", "yodeling it off a mountaintop in Belgium","underlining" );
        qARepo.save(qALevel72_1);
        qA qALevel73_1 = new qA("Simple Selectors are", "based on name, id, class", game1, "CSS", "1", "based on placement", "surprisingly based on the religious text","used for backend" );
        qARepo.save(qALevel73_1);
        qA qALevel74_1 = new qA("Combination Selectors are for", "selecting elements based on specific relationship between them", game1, "CSS", "1", "creating Voltron", "creating GoTenks","involve using 2 or more stylesheets" );
        qARepo.save(qALevel74_1);
        qA qALevel75_1 = new qA("Psuedo-class selectors are used to ", "select element based on a certain state", game1, "CSS", "1", "declare something that is like an object but is really isn't ", "trick the user","Magic" );
        qARepo.save(qALevel75_1);
        qA qALevel76_1 = new qA("Psuedo- element selectors are used to ", "select and style a part of an element", game1, "CSS", "1", "change an entire element", " describe anything not covered in Avatar The Last AirBender","rip people off with fake diamonds" );
        qARepo.save(qALevel76_1);
        qA qALevel77_1 = new qA("Attribute selectors are used to ", "select elements based on an attribute or attribute value", game1, "CSS", "1", "create an element in HTML", "assign methods","pick that thing about you that embarrasses your spouse" );
        qARepo.save(qALevel77_1);
        qA qALevel78_1 = new qA("what symbol is used to select an ID", "#", game1, "CSS", "1", "@", "%","Cymbals?" );
        qARepo.save(qALevel78_1);
        qA qALevel79_1 = new qA("Can an ID start with a number?", "No", game1, "CSS", "1", "Yes", "Pretty please?","Why Da Hell You Askin' Me Dooode???! " );
        qARepo.save(qALevel79_1);
        // stopped after w3 CSS selectors





    }
}