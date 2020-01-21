package com.greglturnquist.payroll;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3002")
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> {
}
