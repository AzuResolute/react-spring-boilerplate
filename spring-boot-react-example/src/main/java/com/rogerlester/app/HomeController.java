package com.rogerlester.app;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

    @RequestMapping(value = "{^((?!api).)*$}")
    public String redirectIfNotApi() {
        return "forward:/";
    }

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
}
