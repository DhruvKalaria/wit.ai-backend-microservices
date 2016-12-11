# wit.ai-backend-microservices

A project based on micro services architecture using Node.js, Express Framework, Wit.ai NLP platform, Google places API
and Open weather api.

## Features Includes:
1. No hardwired IP:PORT tuple for the services to register to main application<br />
2. Resilient services updates with auto service register every 15 seconds<br />
3. No failure when service is not reachable graceful message shown to user<br />
4. Services can fail but the application will still run<br />
5. Services can be developed in any technology/language<br />
6. Service Registry Class in the main application to dynamically add or remove any serivce at any time <br />
7. Extensible loosely coupled architecture to add any new service without any code changes <br />
