package com.rogerlester.app.tech;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
public class TechController {
    private TechRepository repo;

    public TechController(TechRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/api/techstack")
//    @CrossOrigin(origins = "http://localhost:7777")
    public Collection<Tech> getAll() {
            return
                    StreamSupport
                            .stream(
                                repo.findAll().spliterator(), false)
                            .collect(Collectors.toList());
    }

    @GetMapping("/api/techstack/java")
//    @CrossOrigin(origins = "http://localhost:7777")
    public Collection<Tech> getJava() {
        return
                StreamSupport
                        .stream(
                                repo.findAll().spliterator(), false)
                        .filter(t -> t.getLanguage() == "Java")
                        .collect(Collectors.toList());
    }
}
