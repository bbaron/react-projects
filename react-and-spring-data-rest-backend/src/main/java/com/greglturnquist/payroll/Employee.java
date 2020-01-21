package com.greglturnquist.payroll;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class Employee {
    @Id
    @GeneratedValue
    private Long id;
    private String firstName, lastName, description;

    public Employee(String firstName, String lastName, String description) {
        this.description = description;
        this.firstName = firstName;
        this.lastName = lastName;
    }

}
