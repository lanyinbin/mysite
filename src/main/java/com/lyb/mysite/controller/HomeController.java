package com.lyb.mysite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author yinbin.lan
 * @date 17/12/4
 * @desc 主站类
 */
@Controller
@RequestMapping(value = "/")
public class HomeController {
    @RequestMapping(value = "index")
    public ModelAndView home(){
        ModelAndView mv=new ModelAndView();
        mv.setViewName("index");
        return mv;
    }
    @RequestMapping(value = "openSourcePage")
    public ModelAndView blogHome(){
        ModelAndView mv=new ModelAndView();
        mv.setViewName("main-activity");
        return mv;
    }
}
