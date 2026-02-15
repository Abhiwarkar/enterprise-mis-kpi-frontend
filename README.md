# 🚀 Enterprise MIS & KPI Monitoring System (Backend)

A production-ready Enterprise MIS (Management Information System) and KPI Monitoring backend built using Spring Boot 3.

This system enables organizations to manage departments, track monthly targets and actuals, calculate KPI performance, and generate structured performance reports.

---

## 🏗 Architecture Overview

Layered Architecture:

Controller → Service → Repository → Database

- REST APIs for department and KPI management
- Business logic for KPI calculations
- JPA-based database interaction
- MySQL relational database
- JWT-based authentication
- Swagger API documentation

---

## 🛠 Tech Stack

- Java 17
- Spring Boot 3.2
- Spring Data JPA (Hibernate)
- Spring Security (JWT)
- MySQL 8
- Maven
- Swagger (OpenAPI)
- HikariCP (Connection Pool)

---

## 📊 Core Features

### ✅ Department Management
- Create departments
- Activate/Deactivate departments
- Unique department code enforcement

### ✅ Monthly Target & Actual Tracking
- Store monthly target values
- Store monthly actual performance data

### ✅ KPI Calculation Engine
- Calculates:
  - Variance
  - Variance %
  - Status (Excellent / Good / Average / Poor)

### ✅ Reporting API
- Fetch KPI reports
- Department-wise performance tracking
- Monthly performance visibility

### ✅ Security
- JWT Authentication
- Secured API endpoints
- Role-based access ready

---

## 🗄 Database Schema

Main Tables:

- departments
- monthly_targets
- monthly_actuals
- kpi_results

Relationship:

kpi_results.department_id → departments.id

---

## ⚙ Configuration

### application.yml (Development)

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mis_kpi_db
    username: mis_user
    password: mis_pass

  jpa:
    hibernate:
      ddl-auto: update
