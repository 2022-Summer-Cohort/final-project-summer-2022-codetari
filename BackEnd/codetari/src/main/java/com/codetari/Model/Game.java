package com.codetari.Model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;

@Entity
public class Game {
    @Id
    @GeneratedValue
    private long id;

    private String title;
    private int score;
    private String qA;
    private String language;
    private int level;


//    @OneToMany(mappedBy = "Game");
//    private Collection<Game> games;


    //TODO:create an is alive/game over function.


    public Game(String title, int score, String qA, String language, int level, Collection<Game> games) {
        this.title = title;
        this.score = score;
        this.qA = qA;
        this.language = language;
        this.level = level;
        this.games = games;
    }

    public Game() {
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public int getScore() {
        return score;
    }

    public String getqA() {
        return qA;
    }

    public String getLanguage() {
        return language;
    }

    public int getLevel() {
        return level;
    }

    public Collection<Game> getGames() {
        return games;
    }
}
