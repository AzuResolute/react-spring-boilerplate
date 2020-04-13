package com.rogerlester.app.tech;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface TechRepository extends CrudRepository<Tech, Long> {

}
