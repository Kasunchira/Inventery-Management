package com.example.InventoryMgtSystem.services;

import com.example.InventoryMgtSystem.dtos.*;

public interface CategoryService {

    Response createCategory(CategoryDTO categoryDTO);

    Response getAllCategories();

    Response getCategoryById(Long id);

    Response updateCategory(Long id, CategoryDTO categoryDTO);

    Response deleteCategory(Long id);
}
