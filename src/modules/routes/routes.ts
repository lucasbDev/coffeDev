import { Router } from "express";
import { AuthenticateClientController } from "../account/controller/AuthenticateClientController";
import { AuthenticateDeliveryManController } from "../account/controller/AuthenticateDeliveryManController";
import { CreateClientController } from "../clients/controllers/CreateClientController";
import { CreateDeliveryManController } from "../deliveryman/controllers/CreateDeliveryManController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliveryManRepository = new CreateDeliveryManController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController();

routes.post("client/authenticate/", authenticateClientController.handle)
routes.post("deliveryman/authenticate/", authenticateDeliveryManController.handle)
routes.post("/client/", createClientController.handle)
routes.post("/deliveryman", createDeliveryManRepository.handle)


export { routes };
