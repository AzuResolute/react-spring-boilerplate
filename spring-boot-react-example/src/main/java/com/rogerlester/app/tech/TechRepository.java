package com.rogerlester.app.tech;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface TechRepository extends JpaRepository<Tech, Long> {

}
