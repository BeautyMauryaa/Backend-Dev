# Topic 6. Monolithic vs Microservices Architecture

This is an important backend architecture interview topic.

## 1. Monolithic Architecture

A monolithic application is built and deployed as one unified application.

For example, an e-commerce backend may contain:

- User Management
- Authentication
- Product Management
- Order Management
- Payment Management

All these modules are part of one application.

[Monolithic vs Microservices Architecture: Key Differences](https://images.openai.com/static-rsc-4/oxIot17tdCdZR7oqOWLC931uQ3suMymlDdN6_E5hEGbwb9t7l_ntnHoQI4Q6O2NK1ol2dlgzfITYxcJkjrRZiEAJPDXWaMDP4nm5h6fh_QeDxT-zzwMH8OKpU8cMZAI-xNFNgHMHaE9LOGdvWFLu1X5p5CjiNX5OjTO6qSK_ki4?purpose=inline)

[bluelight.co](https://bluelight.co/blog/monolithic-vs-microservices-architecture?utm_source=chatgpt.com)

Advantages

- Simple to develop initially.
- Easier deployment.
- Straightforward debugging.
- Less infrastructure complexity.

Disadvantages

- Large codebase becomes harder to maintain.
- A failure in one component can affect the whole application.
- Scaling individual modules independently is difficult.
- Deployment of a small change may require deploying the entire application.

## 2. Microservices Architecture

Microservices architecture divides an application into smaller, independently deployable services.

For example:

[Microservices 101: A Beginner-Friendly Guide to Microservices Architecture | by Sachin Lakshan | Medium](https://images.openai.com/static-rsc-4/8BQ6Zmk793twhMbT-S1w-VyJZj5V5l76R5UpE2sdIcFhpLA3hSARLekVnoUq9xsjLJj5oPyKNqV3prqeSBAROa8bYsQV1PkEj72uYOPgao9dyOvB54gVZQCzOVEKY5pwZ7D7IUPpMnXBZw9bISo6xPB-4xcLd6aZvKkyeHuq-Bg?purpose=inline)

[medium.com](https://medium.com/%40gpslakshan/microservices-101-a-beginner-friendly-guide-to-microservices-architecture-afe8834b5f22?utm_source=chatgpt.com)

An e-commerce application could have:

- User Service
- Product Service
- Order Service
- Payment Service
- Notification Service

Each service handles a specific business responsibility and communicates with other services through APIs or messaging systems.

Advantages

- Independent deployment.
- Independent scaling.
- Better separation of responsibilities.
- Teams can work on different services.

Disadvantages

- More infrastructure complexity.
- Network communication failures.
- Distributed data consistency challenges.
- Monitoring and debugging become harder.
- Requires service communication and security management.

## 3. Monolithic vs Microservices

| Feature         | Monolithic                       | Microservices                                |
| --------------- | -------------------------------- | -------------------------------------------- |
| Architecture    | Single application               | Multiple services                            |
| Deployment      | Together                         | Independently                                |
| Scaling         | Usually entire application       | Individual services                          |
| Complexity      | Lower initially                  | Higher                                       |
| Communication   | Internal function calls          | Often network calls                          |
| Maintenance     | Can become difficult as it grows | Better isolation, but distributed complexity |
| Best suited for | Small/medium applications        | Large, complex systems when justified        |

## 4. Real-World Scenario

Imagine an e-commerce application receives:

- 10,000 product requests per minute.
- 500 payment requests per minute.
- 2,000 user requests per minute.

Question: Would microservices be useful?

Potentially, yes. Product, payment and user services could be scaled independently based on their workloads.

But microservices are not automatically better. A well-structured monolith may be the better choice for a small application.

## 5. Interview Questions

1. What is monolithic architecture?
2. What are microservices?
3. What are the advantages and disadvantages of microservices?
4. Can microservices have separate databases?
5. How do microservices communicate?
6. What happens if one microservice goes down?
7. Why shouldn't every application start with microservices?
8. What is the difference between horizontal scaling and vertical scaling?