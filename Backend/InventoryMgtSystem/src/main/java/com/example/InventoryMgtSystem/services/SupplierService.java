package com.example.InventoryMgtSystem.services;

import com.example.InventoryMgtSystem.dtos.*;

public interface SupplierService {

    Response addSupplier(SupplierDTO supplierDTO);

    Response updateSupplier(Long id, SupplierDTO supplierDTO);

    Response getAllSupplier();

    Response getSupplierById(Long id);

    Response deleteSupplier(Long id);

}