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

    @OneToMany(mappedBy = "game")
    private Collection<qA> qAs;

    //TODO:create an is alive/game over function.

    public Game(String title, int score, String qA, String language, int level) {
        this.title = title;
        this.score = score;
        this.qA = qA;
        this.language = language;
        this.level = level;
    }
    public Game() {
    }

    public Collection<qA> getqAs() {
        return qAs;
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
}