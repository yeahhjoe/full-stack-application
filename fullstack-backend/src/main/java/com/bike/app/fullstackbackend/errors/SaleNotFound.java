package com.bike.app.fullstackbackend.errors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class SaleNotFound {

    @ResponseBody
    @ExceptionHandler(saleNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> exceptionHandler(saleNotFoundException e){
        Map<String, String> err = new HashMap<>();
        err.put("error", e.getMessage());

        return err;
    }
}
