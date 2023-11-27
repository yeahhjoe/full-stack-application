package com.bike.app.fullstackbackend.controller;

import com.bike.app.fullstackbackend.errors.saleNotFoundException;
import com.bike.app.fullstackbackend.model.Product;
import com.bike.app.fullstackbackend.model.Salesperson;
import com.bike.app.fullstackbackend.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {
    @Autowired
    private ProductRepo productRepo;

    // TODO: Post a product to the database
    @PostMapping("/product")
    Product newProduct(@RequestBody Product newProduct){
        return productRepo.save(newProduct);
    }

    //TODO: Return a list of all the products

    @GetMapping("/products")
    List<Product> getAllProducts(){
        return productRepo.findAll();
    }


    // TODO: Update a product

    @PutMapping("/product/{id}")
    Product updateProduct(@RequestBody Product newProduct, @PathVariable Long id){
        return productRepo.findById(id)
                .map(product -> {
                    product.setName(newProduct.getName());
                    product.setManufacturer(newProduct.getManufacturer());
                    product.setCommissionPercentage(newProduct.getCommissionPercentage());
                    product.setStyle(newProduct.getStyle());
                    product.setQtyOnHand(newProduct.getQtyOnHand());
                    product.setSalePrice(newProduct.getSalePrice());
                    product.setPurchasePrice(newProduct.getPurchasePrice());
                    return productRepo.save(product);
                }).orElseThrow(() -> new saleNotFoundException(id));
    }


    @DeleteMapping("/product/{id}")
    String deleteProduct(@PathVariable Long id){
        if(!productRepo.existsById(id)){
            throw new saleNotFoundException(id);
        }
        productRepo.deleteById(id);
        return "Product as been deleted";
    }
}
