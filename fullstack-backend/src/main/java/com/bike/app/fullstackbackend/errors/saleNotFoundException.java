package com.bike.app.fullstackbackend.errors;

public class saleNotFoundException extends RuntimeException{
    public saleNotFoundException(Long id){
        super("Could not find id");
    }
}
