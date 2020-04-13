package com.rogerlester.app.tech;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class TechCommandLineRunner implements CommandLineRunner {

    private final TechRepository repo;

    public TechCommandLineRunner(TechRepository repo) {
        this.repo = repo;
    }

    @Override
    public void run(String... args) throws Exception {
        repo.save(new Tech("React", "A JavaScript Library for rendering applications", "Front_End", "JavaScript"));
        repo.save(new Tech("Redux", "A JavaScript State Management Library", "Back_End", "JavaScript"));
        repo.save(new Tech("Spring", "An application framework and inversion of control container for the Java platform", "Back_End", "Java"));
    }
}
