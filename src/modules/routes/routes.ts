import { Router } from "express";
import { ensureAuthenticateClient } from "../../middlewares/ensureAuthenticateClient";
import { AuthenticateClientController } from "../account/controller/AuthenticateClientController";
import { AuthenticateDeliveryManController } from "../account/controller/AuthenticateDeliveryManController";
import { CreateClientController } from "../clients/controllers/CreateClientController";
import { CreateDeliveriesController } from "../deliveries/controllers/CreateDeliveriesController";
import { FindAllAvalibleController } from "../deliveries/controllers/FindAllAvalible";
import { CreateDeliveryManController } from "../deliveryman/controllers/CreateDeliveryManController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliveryManController = new CreateDeliveryManController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController();
const createDeliveriesController = new CreateDeliveriesController();
const findAllAvailibleController = new FindAllAvalibleController();

routes.post("/client/authenticate", authenticateClientController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliveryManController.handle)
routes.post("/client", createClientController.handle)
routes.post("/deliveryman", createDeliveryManController.handle)
routes.post("/deliveries", ensureAuthenticateClient ,createDeliveriesController.handle)

routes.get("deliveries/availble", findAllAvailibleController.handle)

export { routes };
